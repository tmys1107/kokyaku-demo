// ===== モックデータ =====
const MockData = {
  // 現在のログイン中ユーザー（顧客側のデモ用）
  currentUser: {
    id: "u1",
    name: "田中 花子",
    email: "hanako@example.com",
    plan: "standard",
    planLabel: "スタンダード",
    monthlyPoints: 15,
    monthlyFee: 20000
  },

  // ポイント残高
  pointBalance: 23,
  lastGrantDate: "2026-06-01",

  // メニュー
  menuItems: [
    { id: "m1", title: "ページ修正",       description: "テキスト・画像の差し替えや軽微なレイアウト調整。最大2箇所まで対応します。", cost: 2, active: true },
    { id: "m2", title: "バナー制作",       description: "サイズ・テキスト指定のバナー画像を1枚制作します。", cost: 3, active: true },
    { id: "m3", title: "新規ページ追加",   description: "既存サイトに新しいページを1ページ追加します。", cost: 5, active: true },
    { id: "m4", title: "SEO対策",         description: "メタタグ・構造化データの最適化、表示速度の改善まで一気通貫で対応。", cost: 4, active: true },
    { id: "m5", title: "LP制作",          description: "ランディングページの企画・デザイン・実装を一気通貫で。", cost: 10, active: true },
    { id: "m6", title: "ロゴ調整",         description: "既存ロゴの色味調整やサイズバリエーション作成。", cost: 3, active: false }
  ],

  // 顧客の依頼履歴
  myRequests: [
    { id: "r1", menuTitle: "ページ修正", comment: "トップページの会社概要テキストを更新したいです。", status: "completed",   cost: 2, createdAt: "2026-05-15" },
    { id: "r2", menuTitle: "バナー制作", comment: "夏キャンペーン用バナー（728×90）。ロゴは添付資料からお願いします。\nhttps://drive.google.com/...", status: "in_progress", cost: 3, createdAt: "2026-05-28" },
    { id: "r3", menuTitle: "ページ修正", comment: "採用ページのフォームリンクが切れているので修正お願いします。", status: "pending",     cost: 2, createdAt: "2026-06-01" }
  ],

  // 管理者用：全顧客
  allCustomers: [
    { id: "u1", name: "田中 花子",   email: "hanako@example.com",  plan: "standard", planLabel: "スタンダード", balance: 23 },
    { id: "u2", name: "鈴木 一郎",   email: "ichiro@example.com",  plan: "light",    planLabel: "ライト",       balance: 3  },
    { id: "u3", name: "佐藤 美咲",   email: "misaki@example.com",  plan: "standard", planLabel: "スタンダード", balance: 8  }
  ],

  // 管理者用：全依頼
  allRequests: [
    { id: "r3", customer: "田中 花子", menuTitle: "ページ修正",     comment: "採用ページのフォームリンク修正", status: "pending",     cost: 2, createdAt: "2026-06-01" },
    { id: "r4", customer: "鈴木 一郎", menuTitle: "SEO対策",       comment: "商品ページのSEO見直しお願いします", status: "pending",     cost: 4, createdAt: "2026-06-01" },
    { id: "r2", customer: "田中 花子", menuTitle: "バナー制作",     comment: "夏キャンペーン用バナー 728×90", status: "in_progress", cost: 3, createdAt: "2026-05-28" },
    { id: "r5", customer: "佐藤 美咲", menuTitle: "新規ページ追加", comment: "採用情報ページの追加",         status: "in_progress", cost: 5, createdAt: "2026-05-30" },
    { id: "r1", customer: "田中 花子", menuTitle: "ページ修正",     comment: "トップページの会社概要を更新",  status: "completed",   cost: 2, createdAt: "2026-05-15" },
    { id: "r6", customer: "佐藤 美咲", menuTitle: "ページ修正",     comment: "お知らせの更新",               status: "completed",   cost: 2, createdAt: "2026-05-20" }
  ]
};

// ===== 表示用ラベル =====
const StatusLabels = {
  pending:     "受付中",
  in_progress: "対応中",
  completed:   "完了",
  cancelled:   "キャンセル"
};

// ===== ユーティリティ =====
const fmt = {
  date: (s) => {
    if (!s) return "";
    const [y, m, d] = s.split("-");
    return `${y}/${m}/${d}`;
  },
  statusBadge: (status) =>
    `<span class="badge badge-${status}">${StatusLabels[status] ?? status}</span>`
};

// ===== トースト =====
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}
