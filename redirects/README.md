# iceboxdoc.catchingnow.com 旧链接跳转

旧文档站 iceboxdoc.catchingnow.com 的所有页面，都要长期 301 跳转到 icebox.catchingnow.com 上对应的新页面。冰箱 App 内写死的帮助链接（以及微博短链接）也都指向这个域名，所以这些跳转需要一直保留。

本目录的文件由 `npm run build` 自动生成，请不要手工修改：

| 文件 | 说明 |
| --- | --- |
| `cloudflare-bulk-redirects.csv` | 可直接导入 Cloudflare Bulk Redirects 的列表：每个旧页面（含 `.html` 变体）一条精确跳转，最后一条是保留路径的兜底跳转 |
| `legacy-map.json` | 旧链接与新链接的对照表，供核对和日后 `.cn` 镜像复用 |
| `single-redirect-expression.txt` | 兜底 Single Redirect 规则的匹配表达式（排除了精确条目的路径） |

跳转关系的来源是 `scripts/lib/config.mjs` 中的 `LEGACY_PAGES`、`LEGACY_FILES` 和 `APP_LINKS`。

## 在 Cloudflare 中配置（免费版额度内）

免费版的 Bulk Redirects 只允许 20 条跳转，所以只有 App 内写死的链接和最常用的页面做精确 301（`cloudflare-bulk-redirects.csv`，由 `scripts/lib/config.mjs` 里标了 `bulk: true` 的条目生成，构建时会检查不超过 20 条）。其余旧链接由一条保留路径的 Single Redirect 规则送到新站同名路径，再由新站上的跳转页（`<旧文件名>.html`，`meta refresh` 加 `canonical`）和 `404.html` 接到对应新页面。

两条规则都要在 `iceboxdoc` 记录开启代理（橙色云朵）的前提下才会生效。

1. **Single Redirect（兜底，1 条）**：Rules → Redirect Rules → Create rule
   - 条件：用 Edit expression 粘贴 `single-redirect-expression.txt` 的内容（主机名等于 `iceboxdoc.catchingnow.com`，且路径不在精确列表里）。Cloudflare 先执行 Single Redirects 再执行 Bulk Redirects，所以这里必须排除精确条目的路径，否则列表永远不会命中
   - 动作：Dynamic，表达式 `concat("https://icebox.catchingnow.com", http.request.uri.path)`，状态码 301，勾选 Preserve query string
2. **Bulk Redirects（精确，1 个列表 + 1 条规则）**：Manage Account → Configurations → Lists → Create new list，类型 Redirect，名称 `icebox_legacy`，Upload CSV 导入 `cloudflare-bulk-redirects.csv`；再到 Rules → Redirect Rules → Bulk Redirects 创建规则并选择该列表。
3. **验证**：仓库根目录运行 `npm run check:legacy`。脚本逐条请求旧链接（含 App 内全部链接），精确条目要求直接 301 到新页面，其余条目要求经兜底规则到达新站后由跳转页指向正确页面。

有 API 令牌时可以用 `redirects/cloudflare-apply.sh` 一次完成以上两步（所需权限见脚本头部）。

## 冰箱 App 内的旧链接

`legacy-map.json` 与 `npm run check:legacy` 覆盖了 App 中所有写死的文档链接：

- `values/strings_enviroment.xml`：`qa_online`、`dpm_online`、`qr_online`、`one_key_tool_online`、`shizuku_online`、`adb_daemon_online`
- `values-zh-rTW/strings_enviroment.xml`：首页、设备管理员、二维码、Shizuku 教程
- `values/strings.xml` 与 `values-zh-rCN/strings.xml` 中 `description_dpm` 的微博短链接（t.cn/AiRyHJIv、t.cn/EKINpeK），它们指向上面的设备管理员教程
- `strings_no_translate.xml` 与 `values-zh-rCN` 中的 `.cn` 链接（其他支付方式、软件购买说明、普通 ADB 模式），路径与 `.com` 相同，日后 `.cn` 镜像可以复用同一张表
- `Constants.java` 的 `THEME_DOMAIN`、`THEME_DOMAIN2`（`/theme/`）以及清单中的 `/list/` App Links，由新站的落地页处理
