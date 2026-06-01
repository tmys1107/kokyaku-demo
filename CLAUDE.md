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
Live Server等で `login.html` を開く

## ファイル構成
- `login.html` — ログイン画面（顧客／管理者を選択）
- `dashboard.html` `menu.html` `requests.html` — 顧客画面
- `admin/index.html` `admin/customers.html` `admin/requests.html` `admin/menu.html` — 管理者画面
- `css/style.css` — 共通スタイル
- `js/mock.js` — モックデータ
- `js/app.js` — 共通ロジック

## 設計参考
本格版の設計書: `c:\Users\tmys1\Downloads\妻用顧客管理システム.md`
