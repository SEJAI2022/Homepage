# SEjAI ホームページ

## サイトマップ
トップ (index.html)
├── Services → pages/services.html
│   ├── Assetry 詳細 → pages/services/assetry.html
│   ├── Habee 詳細   → pages/services/habee.html
│   └── FridgeChef   → pages/services/fridgechef.html
├── About   → pages/about.html
└── Contact → pages/contact.html

## ファイル構成
```
sejai/
├── index.html
├── css/
│   ├── style.css           # 共通スタイル（ダークテーマ）
│   └── service-page.css    # サービス個別ページ共通スタイル
├── js/
│   └── main.js
└── pages/
    ├── about.html
    ├── contact.html
    └── services/
        ├── index.html          # サービス一覧
        ├── assetry.html        # Assetry 詳細
        ├── habee.html          # Habee 詳細
        ├── fridgechef.html     # FridgeChef 詳細
        └── _template.html      # ★ 新サービス追加用テンプレート
```

## 新しいサービスを追加する手順

### Step 1 — テンプレートをコピー
```
_template.html → newservice.html
```

### Step 2 — _template.html 内のチェックリストをすべて対応
ファイル冒頭のコメントに変更箇所を列挙してあります。
主な変更点:
- `<title>` を変更
- `:root` の `--svc-color` 等カラー変数を設定
- サービス名・説明文・機能カードを記入
- プライバシーポリシーを記入

### Step 3 — services/index.html にカードを追加
ファイル内の `<!-- ★ 新しいサービスを追加する場合 -->` コメントを参照。

### Step 4 — 画像を配置して差し替え
```
img/services/newservice-hero.jpg  ← ヒーロー画像
img/services/newservice-01.jpg    ← スクリーンショット1
img/services/newservice-02.jpg    ← スクリーンショット2
img/services/newservice-03.jpg    ← スクリーンショット3
```
各ページの `<!-- ★ 画像差し替え -->` コメントを外して src を設定。

### 画像枚数の切り替え
service-page.css にて定義済み:
- 1枚: `<div class="gallery-1">`
- 2枚: `<div class="gallery-2">`  
- 3枚: `<div class="gallery-3">`

### Step 5 — フッターのリンクを更新
各ページのフッターに新サービスのリンクを追加。

## お問い合わせフォームの実装
`pages/contact.html` の `handleSubmit()` 内:
```js
// Formspree の例
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, category: cat, message: msg })
});
```
