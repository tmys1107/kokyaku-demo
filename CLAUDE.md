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
- `dashboard.html` `menu.html` `requests.html` `task.html` `monthly-policy.html` `monthly-report.html` — 顧客画面
- `admin/index.html` `admin/customers.html` `admin/requests.html` `admin/menu.html` — 管理者画面
- `css/style.css` — 共通スタイル
- `js/mock.js` — モックデータ

## 設計参考
本格版の設計書: `c:\Users\tmys1\Downloads\妻用顧客管理システム.md`

---

## 現状（2026-06-03時点）

### 完了
- 全画面のデモ実装（顧客側6画面 + 管理者側4画面）
- インディゴ系のデザイン適用
- **奥様の第1回フィードバックを全面反映（サービスを「広報伴走・チケット制」に刷新）**
  - ポイント→**チケット**表記に統一
  - ダッシュボード：チケット5項目（付与/使用/残/繰越/失効予定）・今月の依頼・確認待ち色分け・共有情報パネル（MTG/Drive/次回日程/メモ）
  - 施策メニュー一覧：名称変更・目安チケット表記・ご提案施策枠・依頼フォーム拡張（希望納期/複数ファイル添付）
  - タスク詳細（`task.html`）：見積→承認→確定フロー、初稿のOK/修正依頼/相談、履歴タイムライン
  - 月次方針ページ（`monthly-policy.html`）・月次レポートページ（`monthly-report.html`：月別リンク＋数値指標）
- ダミーデータでの動作確認・構文チェック済み

### 進行中
- ローカル反映済み。GitHub Pagesへの再デプロイと奥様への再共有が次の一手

### チケット制の仕様（重要）
- 依頼時点では消化しない。**見積もり→承認→確定**の流れでチケット確定
- ステータス：見積もり中(pending)→承認待ち(quote_ready)→対応中(in_progress)→確認待ち(review)→修正対応中(revising)→完了(completed)
- `quote_ready` と `review` は「クライアントの対応が必要」＝カードを強調表示

### ダミーで埋めた箇所（奥様確認後に差し替え）
- 屋号：「Web Studio」／ブランドカラー：インディゴ（#6366f1）
- 施策メニュー：広報系＋制作系の混合ダミー（Instagram運用/MEO/バナー/LP等）
- 各種ダミー数値（チケット残高・月次レポートの指標値）

### 次のステップ候補
1. **GitHub Pagesへ再デプロイ**し奥様に第2回フィードバックを依頼
2. 第2回フィードバック反映（屋号・カラー・施策内容の確定）
3. **本格版（React + Supabase + Vercel）への移行検討**（設計書Phase 1から）

### 重要：データ保護方針
- このデモは公開URLで奥様と共有しているが、データはすべてダミー
- 本格版で実顧客データを扱う際は**絶対にGitHub Pages（Public）で公開しない**
- 本格版はVercel + Supabase Authで認証付きデプロイすること
