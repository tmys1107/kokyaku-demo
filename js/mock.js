// ===== モックデータ（チケット制・広報伴走サービス版） =====
const MockData = {
  // 現在のログイン中ユーザー（顧客側のデモ用）
  currentUser: {
    id: "u1",
    name: "田中 花子",
    shopName: "サロン ド・ハナ",
    email: "hanako@example.com",
    plan: "standard",
    planLabel: "スタンダード",
    monthlyTickets: 15,
    monthlyFee: 20000
  },

  // チケット残高（先月繰越 + 今月付与 - 使用済み = 残）
  tickets: {
    carryOver: 5,        // 先月からの繰越
    granted: 15,         // 今月の付与
    used: 8,             // 使用済み
    expiring: 3,         // 失効予定
    expireDate: "2026-06-30",
    get remaining() { return this.carryOver + this.granted - this.used; }
  },
  lastGrantDate: "2026-06-01",
  nextGrantDate: "2026-07-01",

  // ダッシュボードの共有情報（固定リンク・メモ欄）
  clientInfo: {
    mtgUrl: "https://meet.google.com/abc-defg-hij",
    driveUrl: "https://drive.google.com/drive/folders/xxxxx",
    nextMtg: "2026-06-12 14:00",
    notes: "次回MTGまでにInstagramの固定投稿案を3パターンご用意します。"
  },

  // ご提案施策（こちらから今月おすすめする施策）
  proposedItems: [
    { id: "p1", title: "Instagramプロフィール改善",   description: "プロフィール文・ハイライト・リンク導線を見直し、来店・予約につながる入口を整えます。", estCost: 3, badge: "今月のおすすめ" },
    { id: "p2", title: "固定投稿3枚リニューアル",     description: "アカウントの第一印象を決める固定3枚を、世界観を統一して再設計します。", estCost: 4, badge: "今月のおすすめ" }
  ],

  // 施策メニュー（目安チケット制。実際の必要数は見積もり後に確定）
  menuItems: [
    { id: "m1", title: "Instagram投稿デザイン", category: "広報", description: "フィード投稿用の画像デザインを制作します。テキスト・写真はご支給またはこちらで選定。", estCost: 3, active: true },
    { id: "m2", title: "バナー制作",            category: "制作", description: "キャンペーン・告知用のバナー画像を制作します。サイズ・用途に応じて調整。", estCost: 2, active: true },
    { id: "m3", title: "Webサイト導線改善",     category: "広報", description: "予約・問い合わせまでの導線を見直し、離脱を減らす改善を行います。", estCost: 5, active: true },
    { id: "m4", title: "ページ修正",            category: "制作", description: "テキスト・画像の差し替えや軽微なレイアウト調整に対応します。", estCost: 2, active: true },
    { id: "m5", title: "Googleマップ・MEO対策", category: "広報", description: "Googleビジネスプロフィールの最適化、クチコミ導線の整備を行います。", estCost: 4, active: true },
    { id: "m6", title: "LP制作",               category: "制作", description: "キャンペーンや予約特化のランディングページを企画から実装まで。", estCost: 10, active: true },
    { id: "m7", title: "ロゴ調整",             category: "制作", description: "既存ロゴの色味調整やサイズバリエーション作成。", estCost: 3, active: false }
  ],

  // 顧客の依頼（タスク）。ステータスと見積・履歴を持つ
  myRequests: [
    {
      id: "r1",
      menuTitle: "Instagramプロフィール改善",
      comment: "プロフィール文を整えたいです。ハイライトのカバー画像も統一したいです。",
      status: "review",            // クライアント確認待ち（初稿の確認）
      estTickets: 3,
      confirmedTickets: 3,
      dueDate: "2026-06-10",
      createdAt: "2026-06-01",
      timeline: [
        { type: "created",   at: "2026-06-01 10:20", text: "依頼を送信しました" },
        { type: "quote",     at: "2026-06-01 15:40", text: "見積もり3チケットを提示しました" },
        { type: "approved",  at: "2026-06-02 09:10", text: "見積もりを承認しました（3チケット確定）" },
        { type: "draft",     at: "2026-06-05 18:30", text: "初稿をアップしました", file: "プロフィール改善案_v1.pdf" }
      ]
    },
    {
      id: "r2",
      menuTitle: "バナー制作",
      comment: "夏キャンペーン用バナー。ロゴは添付資料からお願いします。",
      status: "quote_ready",       // 見積提示・承認待ち
      estTickets: 2,
      confirmedTickets: null,
      dueDate: "2026-06-15",
      createdAt: "2026-06-03",
      timeline: [
        { type: "created", at: "2026-06-03 11:00", text: "依頼を送信しました" },
        { type: "quote",   at: "2026-06-03 16:20", text: "見積もり2チケットを提示しました。ご承認をお願いします" }
      ]
    },
    {
      id: "r3",
      menuTitle: "Webサイト導線改善",
      comment: "トップから予約ページへの導線が分かりにくいので改善したいです。",
      status: "in_progress",       // 対応中
      estTickets: 5,
      confirmedTickets: 5,
      dueDate: "2026-06-20",
      createdAt: "2026-05-28",
      timeline: [
        { type: "created",  at: "2026-05-28 13:00", text: "依頼を送信しました" },
        { type: "quote",    at: "2026-05-29 10:00", text: "見積もり5チケットを提示しました" },
        { type: "approved", at: "2026-05-29 12:30", text: "見積もりを承認しました（5チケット確定）" }
      ]
    },
    {
      id: "r4",
      menuTitle: "ページ修正",
      comment: "採用ページのフォームリンクが切れているので修正お願いします。",
      status: "pending",           // 受付（見積待ち）
      estTickets: null,
      confirmedTickets: null,
      dueDate: "",
      createdAt: "2026-06-02",
      timeline: [
        { type: "created", at: "2026-06-02 09:00", text: "依頼を送信しました。見積もりをお待ちください" }
      ]
    },
    {
      id: "r5",
      menuTitle: "Instagram投稿デザイン",
      comment: "5月の新メニュー告知の投稿を3枚お願いしました。",
      status: "completed",         // 完了
      estTickets: 3,
      confirmedTickets: 3,
      dueDate: "2026-05-20",
      createdAt: "2026-05-12",
      timeline: [
        { type: "created",  at: "2026-05-12 10:00", text: "依頼を送信しました" },
        { type: "quote",    at: "2026-05-12 14:00", text: "見積もり3チケットを提示しました" },
        { type: "approved", at: "2026-05-12 16:00", text: "見積もりを承認しました（3チケット確定）" },
        { type: "draft",    at: "2026-05-16 17:00", text: "初稿をアップしました", file: "5月投稿案_v1.pdf" },
        { type: "revise",   at: "2026-05-17 09:00", text: "修正を依頼しました", comment: "2枚目の文字を大きくしてください" },
        { type: "draft",    at: "2026-05-18 15:00", text: "修正版をアップしました", file: "5月投稿案_v2.pdf" },
        { type: "completed",at: "2026-05-19 10:00", text: "この内容で承認しました（完了）", by: "田中 花子" }
      ]
    }
  ],

  // 月次方針
  monthlyPolicy: {
    month: "2026年6月",
    challenge: "Instagramの投稿はできているが、Webサイトや予約ページへの導線が弱く、見た人の行動につながっていない。",
    direction: "投稿デザインを整えるだけでなく、プロフィール文・リンク先・キャンペーン導線まで一気通貫で見直し、「見る」から「行動する」への流れをつくる。",
    proposals: [
      "Instagramプロフィール改善",
      "固定投稿3枚の再設計",
      "Webサイトの予約導線改善"
    ],
    effect: "Instagramを見た人がサービス内容を理解しやすくなり、Webサイトや予約ページへの移動・問い合わせにつながりやすくなる。",
    note: ""
  },

  // 月次レポート（月別資料リンク + 数値指標）
  monthlyReports: [
    {
      month: "2026年5月",
      driveUrl: "https://drive.google.com/file/d/xxxxx",
      summary: {
        done: ["新メニュー告知の投稿3枚", "プロフィールのハイライト整理"],
        usedTickets: 8,
        remainTickets: 12,
        good: "新メニュー告知の投稿は保存数が普段の約2倍に伸びた。",
        improve: "Webサイトへのアクセスはまだ少なく、来月は導線改善が必要。",
        nextProposal: "Webサイトの予約導線改善、Googleマップ対策",
        confirm: "6月のキャンペーン有無について方針をご相談させてください。"
      },
      metrics: [
        { label: "Instagramフォロワー", value: "1,240", delta: "+85" },
        { label: "投稿リーチ",         value: "8,600", delta: "+1,200" },
        { label: "保存数",             value: "312",   delta: "+140" },
        { label: "プロフィールアクセス",value: "540",   delta: "+60" },
        { label: "Webサイトアクセス",   value: "210",   delta: "-15" },
        { label: "問い合わせ数",        value: "12",    delta: "+3" },
        { label: "Googleマップ閲覧",    value: "1,850", delta: "+220" },
        { label: "クチコミ数",          value: "28",    delta: "+4" },
        { label: "来店数",             value: "96",    delta: "+8" },
        { label: "売上メモ",           value: "前月比 +6%", delta: "" }
      ]
    },
    {
      month: "2026年4月",
      driveUrl: "https://drive.google.com/file/d/yyyyy",
      summary: {
        done: ["春キャンペーンバナー制作", "投稿4枚"],
        usedTickets: 10,
        remainTickets: 10,
        good: "春キャンペーンの告知でクチコミが増えた。",
        improve: "投稿頻度にばらつきがあった。",
        nextProposal: "投稿カレンダーの整備",
        confirm: "なし"
      },
      metrics: [
        { label: "Instagramフォロワー", value: "1,155", delta: "+60" },
        { label: "投稿リーチ",         value: "7,400", delta: "+900" },
        { label: "来店数",             value: "88",    delta: "+5" }
      ]
    }
  ],

  // ===== 管理者用 =====
  allCustomers: [
    { id: "u1", name: "田中 花子", shopName: "サロン ド・ハナ",   email: "hanako@example.com", plan: "standard", planLabel: "スタンダード", balance: 12 },
    { id: "u2", name: "鈴木 一郎", shopName: "鈴木整骨院",         email: "ichiro@example.com", plan: "light",    planLabel: "ライト",       balance: 3  },
    { id: "u3", name: "佐藤 美咲", shopName: "カフェ Misaki",      email: "misaki@example.com", plan: "standard", planLabel: "スタンダード", balance: 8  }
  ],

  allRequests: [
    { id: "r4", customer: "田中 花子", menuTitle: "ページ修正",            comment: "採用ページのフォームリンク修正", status: "pending",     estTickets: null, createdAt: "2026-06-02" },
    { id: "r2", customer: "田中 花子", menuTitle: "バナー制作",            comment: "夏キャンペーン用バナー",        status: "quote_ready", estTickets: 2,    createdAt: "2026-06-03" },
    { id: "r6", customer: "鈴木 一郎", menuTitle: "Googleマップ・MEO対策", comment: "クチコミ導線を整えたい",        status: "pending",     estTickets: null, createdAt: "2026-06-01" },
    { id: "r1", customer: "田中 花子", menuTitle: "Instagramプロフィール改善", comment: "プロフィール文を整えたい",  status: "review",      estTickets: 3,    createdAt: "2026-06-01" },
    { id: "r3", customer: "田中 花子", menuTitle: "Webサイト導線改善",      comment: "予約導線の改善",              status: "in_progress", estTickets: 5,    createdAt: "2026-05-28" },
    { id: "r7", customer: "佐藤 美咲", menuTitle: "Instagram投稿デザイン",  comment: "新商品の投稿3枚",             status: "in_progress", estTickets: 3,    createdAt: "2026-05-30" },
    { id: "r5", customer: "田中 花子", menuTitle: "Instagram投稿デザイン",  comment: "5月の新メニュー告知",          status: "completed",   estTickets: 3,    createdAt: "2026-05-12" }
  ],

  // 管理者用：Googleマップの口コミ（新着順）
  reviews: [
    { id: "rv1", shop: "サロン ド・ハナ", author: "Yuki M.",     rating: 5, text: "丁寧なカウンセリングで仕上がりも大満足でした。また伺います！", at: "2026-06-03 09:12", unread: true,  notified: true,  replied: false },
    { id: "rv2", shop: "鈴木整骨院",       author: "けんた",       rating: 4, text: "腰の痛みがだいぶ楽になりました。予約も取りやすいです。",       at: "2026-06-02 20:40", unread: true,  notified: true,  replied: false },
    { id: "rv3", shop: "カフェ Misaki",    author: "haru_cafe",    rating: 5, text: "新作のラテアートが可愛すぎる！雰囲気も最高でした。",           at: "2026-06-02 13:05", unread: true,  notified: true,  replied: false },
    { id: "rv4", shop: "サロン ド・ハナ", author: "Tomoko S.",    rating: 2, text: "予約時間に少し待たされました。技術は良かったので残念。",       at: "2026-06-01 18:22", unread: false, notified: true,  replied: true  },
    { id: "rv5", shop: "鈴木整骨院",       author: "Google ユーザー", rating: 5, text: "スタッフさんが親切で通いやすいです。",                       at: "2026-05-31 11:30", unread: false, notified: true,  replied: true  },
    { id: "rv6", shop: "カフェ Misaki",    author: "もも",          rating: 3, text: "コーヒーは美味しいですが、お昼時は混んでいて入れませんでした。", at: "2026-05-30 12:48", unread: false, notified: true,  replied: false }
  ]
};

// ===== 表示用ラベル =====
const StatusLabels = {
  pending:     "見積もり中",
  quote_ready: "承認待ち",
  in_progress: "対応中",
  review:      "確認待ち",
  revising:    "修正対応中",
  completed:   "完了",
  cancelled:   "キャンセル"
};

// クライアントのアクションが必要なステータス（背景を強調）
const ClientActionStatuses = ["quote_ready", "review"];

// ===== ユーティリティ =====
const fmt = {
  date: (s) => {
    if (!s) return "";
    const d = s.split(" ")[0];
    const [y, m, day] = d.split("-");
    return `${y}/${m}/${day}`;
  },
  datetime: (s) => {
    if (!s) return "";
    return s.replace("-", "/").replace("-", "/");
  },
  statusBadge: (status) =>
    `<span class="badge badge-${status}">${StatusLabels[status] ?? status}</span>`,
  needsClientAction: (status) => ClientActionStatuses.includes(status),
  stars: (n) => '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n)
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
