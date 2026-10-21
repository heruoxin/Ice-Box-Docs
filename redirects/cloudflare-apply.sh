#!/usr/bin/env bash
# 通过 Cloudflare API 配置 iceboxdoc.catchingnow.com 的跳转（免费版额度内）：
#   1. 一条 Single Redirect 规则：保留路径跳到 https://icebox.catchingnow.com
#   2. 一个 Bulk Redirects 列表（cloudflare-bulk-redirects.csv，不超过 20 条）和引用它的一条规则
#
# 需要环境变量 CLOUDFLARE_API_TOKEN，令牌权限：
#   Zone    > Dynamic Redirect       > Edit   （catchingnow.com）
#   Zone    > Zone                   > Read
#   Account > Account Filter Lists   > Edit
#   Account > Account Rulesets       > Edit
#
# 用法：CLOUDFLARE_API_TOKEN=... redirects/cloudflare-apply.sh
set -Eeuo pipefail

ZONE_NAME="catchingnow.com"
LEGACY_HOST="iceboxdoc.catchingnow.com"
NEW_SITE="https://icebox.catchingnow.com"
LIST_NAME="icebox_legacy"
CSV="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)/cloudflare-bulk-redirects.csv"
API="https://api.cloudflare.com/client/v4"

: "${CLOUDFLARE_API_TOKEN:?请先设置 CLOUDFLARE_API_TOKEN}"
cf() { curl -sS -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" -H "Content-Type: application/json" "$@"; }
pick() { python3 -c "import sys,json; d=json.load(sys.stdin)
if not d.get('success'): print(json.dumps(d.get('errors'), ensure_ascii=False), file=sys.stderr); sys.exit(1)
r=d['result']; print(eval(sys.argv[1]))" "$1"; }

zone=$(cf "$API/zones?name=$ZONE_NAME" | pick "r[0]['id']")
account=$(cf "$API/zones/$zone" | pick "r['account']['id']")

echo "== Single Redirect：$LEGACY_HOST/* -> $NEW_SITE/*"
cf -X PUT "$API/zones/$zone/rulesets/phases/http_request_dynamic_redirect/entrypoint" --data "$(python3 - "$LEGACY_HOST" "$NEW_SITE" <<'PY'
import json, sys
host, site = sys.argv[1:]
print(json.dumps({"rules": [{
  "description": "iceboxdoc -> icebox (keep path)",
  "expression": f'(http.host eq "{host}")',
  "action": "redirect",
  "action_parameters": {"from_value": {"status_code": 301, "preserve_query_string": True,
    "target_url": {"expression": f'concat("{site}", http.request.uri.path)'}}},
  "enabled": True}]}))
PY
)" | pick "'规则数 %d' % len(r['rules'])"

echo "== Bulk Redirects：列表 $LIST_NAME"
list_id=$(cf "$API/accounts/$account/rules/lists" | pick "next((x['id'] for x in r if x['name']=='$LIST_NAME'), '')")
if [[ -z "$list_id" ]]; then
  list_id=$(cf -X POST "$API/accounts/$account/rules/lists" --data "{\"name\":\"$LIST_NAME\",\"kind\":\"redirect\",\"description\":\"$LEGACY_HOST legacy pages\"}" | pick "r['id']")
  echo "  已创建列表 $list_id"
else echo "  列表已存在 $list_id，整体替换内容"; fi
items=$(python3 - "$CSV" <<'PY'
import csv, json, sys
rows = []
for r in csv.DictReader(open(sys.argv[1], encoding='utf-8')):
    b = lambda k: r[k].strip().upper() == 'TRUE'
    rows.append({"redirect": {"source_url": r["source_url"], "target_url": r["target_url"], "status_code": int(r["status_code"]),
                 "preserve_query_string": b("preserve_query_string"), "include_subdomains": b("include_subdomains"),
                 "subpath_matching": b("subpath_matching"), "preserve_path_suffix": b("preserve_path_suffix")}})
assert len(rows) <= 20, f"{len(rows)} 条，超过免费版 20 条"
print(json.dumps(rows))
PY
)
cf -X PUT "$API/accounts/$account/rules/lists/$list_id/items" --data "$items" | pick "'操作 ' + r['operation_id']"
echo "  已提交 $(python3 -c "import json,sys; print(len(json.loads(sys.argv[1])))" "$items") 条（列表更新为异步，通常几秒内完成）"
cf -X PUT "$API/accounts/$account/rulesets/phases/http_request_redirect/entrypoint" --data "{\"rules\":[{\"expression\":\"http.request.full_uri in \$$LIST_NAME\",\"description\":\"iceboxdoc exact legacy links\",\"action\":\"redirect\",\"action_parameters\":{\"from_list\":{\"name\":\"$LIST_NAME\",\"key\":\"http.request.full_uri\"}},\"enabled\":true}]}" | pick "'Bulk 规则数 %d' % len(r['rules'])"
echo "完成。接下来在仓库根目录运行：npm run check:legacy"
