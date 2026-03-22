# SEjAI ホームページ

## サイトマップ
```
トップ (index.html)
├── Services → pages/services.html
│   ├── Assetry 詳細    → pages/services/assetry.html
│   ├── Habee 詳細      → pages/services/habee.html
│   └── FridgeChef 詳細 → pages/services/fridgechef.html
├── About   → pages/about.html
└── Contact → pages/contact.html
```

## ファイル構成
```
homepage/
├── index.html
├── css/
│   ├── style.css           # 全ページ共通スタイル（ダークテーマ・ヘッダー・フッター・ボタン）
│   ├── index.css           # トップページ専用スタイル
│   ├── services.css        # サービス一覧ページ専用スタイル ★新サービス追加時に編集
│   ├── about.css           # Aboutページ専用スタイル
│   ├── contact.css         # Contactページ専用スタイル
│   └── service-page.css    # サービス詳細ページ共通スタイル
├── js/
│   └── main.js             # スクロールヘッダー・モバイルナビ・フェードアニメーション
├── logo.png
├── favicon.png
├── favicon.ico
└── pages/
    ├── services.html       # サービス一覧
    ├── about.html
    ├── contact.html
    ├── img/
    │   └── services/
    │       ├── assetry-01.png
    │       ├── habee-01.png
    │       └── {サービス名}-01.png  ← 新サービス追加時に配置
    └── services/
        ├── _template.html      # ★ 新サービス追加用テンプレート
        ├── assetry.html
        ├── habee.html
        └── fridgechef.html
```

## 新しいサービスを追加する手順

詳細な手順・コードスニペット・チェックリストは `sejai-service-guide-v2.docx` を参照してください。以下は概要です。

### Step 1 — 画像を配置
```
pages/img/services/{サービス名}-01.png  ← サービス一覧用（推奨: 1200×675px / 16:9）
```

### Step 2 — css/style.css にカラー変数を追加
```css
:root {
  --newservice: #XXXXXX;
}
```

### Step 3 — css/services.css を編集
ファイル内の `★ 新サービス追加時` コメントを目印に4箇所追加:
- `.svc-badge.{name}` — バッジの色
- `.svc-visual.{name}` — ビジュアルのグロー・オーバーレイ色
- `.btn-{name}` — ボタンの色
- `.pp-tab.active.{name}` — プライバシータブのアクティブ色

### Step 4 — css/index.css を編集
サービスカードのカラー定義を追加:
```css
.svc-card[data-svc="newservice"] .svc-tag-line { color: var(--newservice); }
.svc-card[data-svc="newservice"] .svc-arrow    { color: var(--newservice); }
.svc-card[data-svc="newservice"]::after        { background: var(--newservice); }
```

### Step 5 — pages/services.html を編集
- サービスブロック HTML を追加（flip クラスは交互に付ける）
- プライバシーポリシーのタブ・コンテンツ・colorMap を追加

### Step 6 — index.html を編集
- `.services-grid` にサービスカードを追加
- フッターにリンクを追加

### Step 7 — 全ページのフッターを更新
`services.html` / `about.html` / `contact.html` / 各サービス詳細ページのフッター Services リストにリンクを追加。

### Step 8 — 詳細ページを新規作成
`pages/services/_template.html` をコピーして `pages/services/{サービス名}.html` を作成。
ファイル冒頭のチェックリストコメントに従って編集。

> ⚠️ 詳細ページは `pages/services/` 内にあるため、画像パスは `../../img/services/` となります（`../` が2段階必要）。

### 画像枚数の切り替え（詳細ページ Gallery）
`service-page.css` にて定義済み:
- 1枚: `<div class="gallery-1">`
- 2枚: `<div class="gallery-2">`
- 3枚: `<div class="gallery-3">`

## お問い合わせフォームの実装
`pages/contact.html` の `handleSubmit()` 内に実装:
```js
// Formspree の例
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, category: cat, message: msg })
});
```