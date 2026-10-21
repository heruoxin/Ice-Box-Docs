import * as OpenCC from 'opencc-js';

// Simplified to Traditional (Taiwan phrasing), then aligned with the app's own zh-rTW strings.
const toTW = OpenCC.Converter({ from: 'cn', to: 'twp' });

// Applied after OpenCC. Order matters: longer phrases first.
const OVERRIDES = [
  ['裝置管理員', '設備管理員'],
  ['後臺', '背景'],
  ['一鍵啟用器', '一鍵啟動器'],
  ['啟用器', '啟動器'],
  ['解除安裝', '移除'],
  ['賬號', '帳號'],
  ['賬戶', '帳戶'],
  ['反饋', '回饋'],
  ['鎖屏延時', '鎖定螢幕延遲'],
  ['鎖屏', '鎖定螢幕'],
  ['二維碼', 'QR Code'],
  ['U 盤', '隨身碟'],
  ['優盤', '隨身碟'],
  ['菜單', '選單'],
  ['屏幕', '螢幕'],
  ['短視頻', '短影音'],
  ['視頻', '影片'],
  ['雲服務', '雲端服務'],
  ['在線', '線上'],
  ['數據', '資料'],
  ['文件管理器', '檔案管理器'],
  ['彈窗', '彈出視窗'],
  ['默認', '預設'],
  ['許可權', '權限'],
  ['專案', '項目'],
  ['通過', '透過'],
];

// Spans that must never be converted: code, link targets, HTML tags, shortcodes, anchors.
const PROTECT = /```[\s\S]*?```|`[^`\n]*`|\]\([^)\n]*\)|<[^>\n]+>|\[\[[^\]\n]*\]\]|\{#[^}\n]*\}|https?:\/\/[^\s)>\]]+/g;

export function toHant(text) {
  const kept = [];
  const masked = String(text).replace(PROTECT, (m) => {
    kept.push(m);
    return `\u0000${kept.length - 1}\u0000`;
  });
  let out = toTW(masked);
  for (const [from, to] of OVERRIDES) out = out.split(from).join(to);
  return out.replace(/\u0000(\d+)\u0000/g, (_, i) => kept[Number(i)]);
}

// Deep-convert every string in a dictionary object.
export function toHantDeep(value) {
  if (typeof value === 'string') return toHant(value);
  if (Array.isArray(value)) return value.map(toHantDeep);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, toHantDeep(v)]));
  }
  return value;
}
