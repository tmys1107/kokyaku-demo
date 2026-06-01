# 顧客管理システム デモ

## プロジェクト概要
妻（個人事業主・Web制作）向けのサブスク型ポイント制顧客管理システムのデモ版。
画面イメージを確認するためのモック実装。本格運用はReact+Supabase+Vercelで別途構築予定。

## 技術スタック（デモ版）
- HTML / CSS / JavaScript（静的サイト）
- データはモック（mock.js）

## チーム
- カカシ：常駐PM
- カブト：開発
- サイ：デザイン
- ネジ：品質管理
- シカマル：人事

## 動作確認
- ローカル：Live Server等で `login.html` を開く
- 公開URL：https://tmys1107.github.io/kokyaku-demo/login.html
- GitHubリポジトリ：https://github.com/tmys1107/kokyaku-demo

## ファイル構成
- `login.html` — ログイン画面（顧客／管理者を選択）
- `dashboard.html` `menu.html` `requests.html` — 顧客画面
- `admin/index.html` `admin/customers.html` `admin/requests.html` `admin/menu.html` — 管理者画面
- `css/style.css` — 共通スタイル
- `js/mock.js` — モックデータ

## 設計参考
本格版の設計書: `c:\Users\tmys1\Downloads\妻用顧客管理システム.md`

---

## 現状（2026-06-02時点）

### 完了
- 全画面（顧客側4画面 + 管理者側4画面）のデモ実装
- インディゴ系のデザイン適用
- ダミーデータでの動作確認
- GitHub Pagesへのデプロイ・公開
- 奥様への共有準備完了

### 進行中
- 奥様にデモを触ってもらいフィードバック収集中

### ダミーで埋めた箇所（奥様確認後に差し替え）
- 屋号：「Web Studio」
- ブランドカラー：インディゴ（#6366f1）
- メニュー：ページ修正/バナー/新規ページ/SEO/LP/ロゴ調整
- ステータス段階：受付中→対応中→完了/キャンセル
- ライト：10,000円/5pt、スタンダード：20,000円/15pt

### 次のステップ候補
1. **奥様のフィードバック反映**（屋号・カラー・メニュー内容など）
2. **本格版（React + Supabase + Vercel）への移行検討**
   - 設計書のPhase 1（Supabase基盤構築）から着手
3. **追加機能の検討**（通知・決済連携など）

### 重要：データ保護方針
- このデモは公開URLで奥様と共有しているが、データはすべてダミー
- 本格版で実顧客データを扱う際は**絶対にGitHub Pages（Public）で公開しない**
- 本格版はVercel + Supabase Authで認証付きデプロイすること
