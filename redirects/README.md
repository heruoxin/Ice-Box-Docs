# iceboxdoc.catchingnow.com 旧链接跳转

旧文档站 iceboxdoc.catchingnow.com 的所有页面，都要长期 301 跳转到 icebox.catchingnow.com 上对应的新页面。冰箱 App 内写死的帮助链接（以及微博短链接）也都指向这个域名，所以这些跳转需要一直保留。

本目录的文件由 `npm run build` 自动生成，请不要手工修改：

| 文件 | 说明 |
| --- | --- |
| `cloudflare-bulk-redirects.csv` | 可直接导入 Cloudflare Bulk Redirects 的列表：每个旧页面（含 `.html` 变体）一条精确跳转，最后一条是保留路径的兜底跳转 |
| `legacy-map.json` | 旧链接与新链接的对照表，供核对和日后 `.cn` 镜像复用 |

跳转关系的来源是 `scripts/lib/config.mjs` 中的 `LEGACY_PAGES`、`LEGACY_FILES` 和 `APP_LINKS`。

## 在 Cloudflare 中配置

1. **DNS**：确认 `iceboxdoc` 记录存在并开启代理（橙色云朵）。新站上线后 GitHub Pages 不再服务这个域名，源站不再重要：可以保留现有记录，也可以改成 `AAAA 100::` 的占位记录，只要是代理状态即可。
2. **建立列表**：Manage Account → Configurations → Lists → Create new list，类型选择「Redirect」，名称例如 `icebox_legacy`。在列表中选择「Upload CSV」，导入 `cloudflare-bulk-redirects.csv`。
3. **启用规则**：Rules → Redirect Rules → Bulk Redirects → Create Bulk Redirect Rule，选择上一步的列表并部署。
4. **验证**：在仓库根目录运行 `npm run check:legacy`。脚本会逐条请求旧链接（包括 App 内用到的全部链接），确认返回 301 并指向正确的新页面。

## 兜底规则

CSV 最后一行把 `iceboxdoc.catchingnow.com/` 以「子路径匹配 + 保留路径」跳转到 `https://icebox.catchingnow.com/`。它负责：

- 首页：旧首页跳到新站首页，新站首页会按浏览器语言自动进入对应语言版本。
- 旧的文件：`icebox_latest.apk`、`files/冰箱激活器-Windows.zip`、`wechatpay.jpg` 等，在新站上路径不变。
- 列表之外的旧路径：新站上保留了同名的跳转页，`404.html` 也会识别带斜杠、带 `.html` 等写法，再转到对应的新页面。

如果导入后发现兜底规则覆盖了精确规则（`check:legacy` 会报告），可以删除 CSV 最后一行，改为添加一条 Single Redirect 规则：当主机名等于 `iceboxdoc.catchingnow.com` 时，动态跳转到 `concat("https://icebox.catchingnow.com", http.request.uri.path)`，状态码 301，保留查询字符串。新站上的跳转页会接着把旧路径转到新页面。

## 冰箱 App 内的旧链接

`legacy-map.json` 与 `npm run check:legacy` 覆盖了 App 中所有写死的文档链接：

- `values/strings_enviroment.xml`：`qa_online`、`dpm_online`、`qr_online`、`one_key_tool_online`、`shizuku_online`、`adb_daemon_online`
- `values-zh-rTW/strings_enviroment.xml`：首页、设备管理员、二维码、Shizuku 教程
- `values/strings.xml` 与 `values-zh-rCN/strings.xml` 中 `description_dpm` 的微博短链接（t.cn/AiRyHJIv、t.cn/EKINpeK），它们指向上面的设备管理员教程
- `strings_no_translate.xml` 与 `values-zh-rCN` 中的 `.cn` 链接（其他支付方式、软件购买说明、普通 ADB 模式），路径与 `.com` 相同，日后 `.cn` 镜像可以复用同一张表
- `Constants.java` 的 `THEME_DOMAIN`、`THEME_DOMAIN2`（`/theme/`）以及清单中的 `/list/` App Links，由新站的落地页处理
