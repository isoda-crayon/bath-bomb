import { useState } from "react";

const C = {
  bg: "#FDFAF6",
  primary: "#D4654A",
  secondary: "#4A90A4",
  accent: "#E8A838",
  green: "#5BA06E",
  text: "#2E2E2E",
  muted: "#7A7570",
  card: "#FFFFFF",
  border: "#E8E0D6",
  light: "#FFF5ED",
  blueBg: "#EFF7FA",
  greenBg: "#EEF6F0",
  yellowBg: "#FFF8EB",
  mikaBg: "#FCE4EC",
  mikaColor: "#C0395E",
  misakiBg: "#E3F2FD",
  misakiColor: "#1565C0",
  bothBg: "#F3E5F5",
  bothColor: "#7B1FA2",
};

const Badge = ({ color, bg, children }) => (
  <span
    className="inline-block px-2 py-0.5 rounded-full text-xs font-bold"
    style={{ background: bg, color }}
  >
    {children}
  </span>
);

const MikaBadge = () => <Badge color={C.mikaColor} bg={C.mikaBg}>みか先生</Badge>;
const MisakiBadge = () => <Badge color={C.misakiColor} bg={C.misakiBg}>みさき先生</Badge>;
const BothBadge = () => <Badge color={C.bothColor} bg={C.bothBg}>2人で</Badge>;
const IsodaBadge = () => <Badge color="#666" bg="#EEEEEE">磯田</Badge>;

export default function StaffBriefing() {
  const [expandedWeek, setExpandedWeek] = useState(null);

  const toggleWeek = (w) => setExpandedWeek(expandedWeek === w ? null : w);

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif" }}>
      {/* Print button */}
      <button
        onClick={() => window.print()}
        className="fixed top-4 right-4 z-50 px-5 py-2.5 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition print:hidden"
        style={{ background: C.primary }}
      >
        🖨️ 印刷
      </button>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* ========== HEADER ========== */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3" style={{ background: C.primary + "15", color: C.primary }}>
            にじいろくれよん イベント企画
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 900, color: C.text, lineHeight: 1.3 }}>
            🛁 バスボムづくりイベント<br />担当者説明資料
          </h1>
          <p style={{ color: C.muted, marginTop: "8px", fontSize: "14px" }}>
            2026年2月25日作成 ｜ イベント本番：3月14日（土）
          </p>
        </div>

        {/* ========== EVENT OVERVIEW ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.card, border: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.primary, marginBottom: "12px" }}>
            📋 イベント概要
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm" style={{ color: C.text }}>
            {[
              ["📅 日時", "3月14日（土）9:30〜11:30"],
              ["📍 場所", "みなみのくれよん（南八木）"],
              ["👶 対象", "利用児童 10名程度"],
              ["💰 参加費", "500円"],
              ["👩‍🏫 講師", "大谷さん（te-shigoto）"],
              ["🎯 テーマ", "えらぶ → つくる → みせあう"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="font-bold whitespace-nowrap">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========== TEAM ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.card, border: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.primary, marginBottom: "12px" }}>
            👥 担当チーム
          </h2>

          <div className="flex gap-3 mb-4">
            <div className="flex-1 rounded-xl p-4" style={{ background: C.mikaBg }}>
              <div style={{ fontSize: "20px", fontWeight: 800, color: C.mikaColor }}>今井さん（みか先生）</div>
              <div style={{ fontSize: "13px", color: C.mikaColor, marginTop: "4px", fontWeight: 600 }}>
                メイン担当：制作・当日進行
              </div>
              <ul className="mt-2 text-xs space-y-1" style={{ color: C.text }}>
                <li>• 視覚支援資料の作成</li>
                <li>• 当日の子どもへの声かけ・進行補助</li>
                <li>• クイズ進行</li>
              </ul>
            </div>
            <div className="flex-1 rounded-xl p-4" style={{ background: C.misakiBg }}>
              <div style={{ fontSize: "20px", fontWeight: 800, color: C.misakiColor }}>三戸さん（みさき先生）</div>
              <div style={{ fontSize: "13px", color: C.misakiColor, marginTop: "4px", fontWeight: 600 }}>
                メイン担当：準備・材料管理
              </div>
              <ul className="mt-2 text-xs space-y-1" style={{ color: C.text }}>
                <li>• 材料の購入・計量・小分け</li>
                <li>• 会場セッティング</li>
                <li>• 当日の材料配布・水加減チェック</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg p-3 text-sm" style={{ background: "#F5F5F5" }}>
            <span className="font-bold">📞 連携体制：</span>
            磯田が全体管理・大谷さんとの窓口を担当。週1回（金曜）に進捗確認を行います。
          </div>
        </section>

        {/* ========== OVERALL SCHEDULE ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.card, border: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.primary, marginBottom: "4px" }}>
            🗓️ 全体スケジュール
          </h2>
          <p className="text-xs mb-4" style={{ color: C.muted }}>
            毎週金曜日に進捗確認ミーティングを行います
          </p>

          {/* Timeline visual */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: C.border }} />

            {/* Week 1 */}
            <TimelineBlock
              week="Week 1"
              date="2/25（火）〜 2/28（金）"
              title="企画確定・キックオフ"
              color={C.secondary}
              checkpoint="2/28（金）第1回 進捗確認"
              expanded={expandedWeek === 1}
              onToggle={() => toggleWeek(1)}
              tasks={[
                { who: "both", text: "本資料をもとに役割分担・スケジュール確認" },
                { who: "isoda", text: "大谷さんへ企画案送付、フィードバック依頼" },
                { who: "isoda", text: "大谷さんから写真・Canva素材受領" },
                { who: "mika", text: "告知チラシ原案作成（Canva等）" },
                { who: "misaki", text: "購入物リストの確認・購入先の目星をつける" },
                { who: "both", text: "参加募集の開始（3/7締切）" },
              ]}
            />

            {/* Week 2 */}
            <TimelineBlock
              week="Week 2"
              date="3/2（月）〜 3/6（金）"
              title="試作体験・資料作成"
              color={C.green}
              checkpoint="3/6（金）第2回 進捗確認 ＋ 試作体験"
              isHighlight
              expanded={expandedWeek === 2}
              onToggle={() => toggleWeek(2)}
              tasks={[
                { who: "mika", text: "視覚支援資料の作成（ステップカード、スケジュールボード等）" },
                { who: "mika", text: "クイズカード・説明ポスター作成" },
                { who: "misaki", text: "材料の購入（ダイソーのスポンジ、スプレーボトル、カップ等）" },
                { who: "misaki", text: "購入品の確認・不足チェック" },
                { who: "both", text: "★ 3/6 大谷さんとの試作体験（実際に作る）" },
                { who: "both", text: "試作を踏まえて工程を最終調整" },
                { who: "isoda", text: "参加者確定（3/7締切後集計）" },
              ]}
            />

            {/* Week 3 */}
            <TimelineBlock
              week="Week 3"
              date="3/9（月）〜 3/13（金）"
              title="最終準備"
              color={C.accent}
              checkpoint="3/13（金）第3回 進捗確認（最終チェック）"
              expanded={expandedWeek === 3}
              onToggle={() => toggleWeek(3)}
              tasks={[
                { who: "misaki", text: "材料の計量・小分け作業（ポリ袋×20セット）" },
                { who: "misaki", text: "クエン酸を別袋に小分け（×20セット）" },
                { who: "misaki", text: "色粉の小分け・アロマオイルセット準備" },
                { who: "mika", text: "視覚支援資料の印刷・ラミネート" },
                { who: "mika", text: "レベル分け表の確定（参加者ごとの対応レベル）" },
                { who: "both", text: "会場セッティングのシミュレーション" },
                { who: "isoda", text: "保護者向け案内配信（持ち物・注意事項）" },
                { who: "isoda", text: "送迎スケジュール作成" },
              ]}
            />

            {/* Event Day */}
            <TimelineBlock
              week="本番"
              date="3/14（土）"
              title="🛁 イベント当日！"
              color={C.primary}
              checkpoint=""
              expanded={expandedWeek === 4}
              onToggle={() => toggleWeek(4)}
              tasks={[
                { who: "misaki", text: "9:00 会場入り → 材料配置・会場最終セッティング" },
                { who: "misaki", text: "ダイソースポンジのカット" },
                { who: "mika", text: "9:00 会場入り → 視覚支援資料の掲示" },
                { who: "mika", text: "スケジュールボード・ステップカードの設置" },
                { who: "both", text: "9:15 大谷さん到着 → 最終打ち合わせ" },
                { who: "both", text: "9:30〜11:20 イベント進行" },
                { who: "both", text: "11:20〜 片付け・振り返り" },
              ]}
            />
          </div>
        </section>

        {/* ========== MARCH 6 DETAIL ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.greenBg, border: `2px solid ${C.green}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.green, marginBottom: "4px" }}>
            ⭐ 3月6日（金）試作体験について
          </h2>
          <p className="text-sm mb-4" style={{ color: C.muted }}>
            本番前に大谷さんと一緒に実際にバスボムを作ります。最も重要な準備日です。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: C.card }}>
              <div className="font-bold text-sm mb-1" style={{ color: C.green }}>🎯 目的</div>
              <ul className="text-sm space-y-1" style={{ color: C.text }}>
                <li>① 作り方を2人が体で覚える（水の加減、混ぜ方の感覚）</li>
                <li>② 子どもへの声かけポイントを大谷さんから直接学ぶ</li>
                <li>③ 工程の所要時間を体感して、当日の流れを最終確定する</li>
                <li>④ 失敗しやすいポイント・対処法を確認する</li>
              </ul>
            </div>

            <div className="rounded-lg p-3" style={{ background: C.card }}>
              <div className="font-bold text-sm mb-1" style={{ color: C.green }}>📝 試作当日にやること</div>
              <ul className="text-sm space-y-1" style={{ color: C.text }}>
                <li>• 動物型＋まる型、それぞれ1個ずつ試作</li>
                <li>• 袋での混ぜ方を体験（もみ加減）</li>
                <li>• 水スプレーの感覚を確認（最重要：入れすぎ注意）</li>
                <li>• 型への詰め方・外し方を練習</li>
                <li>• ラメ・スポンジの入れ方を確認</li>
                <li>• クイズの実験（重曹＋クエン酸＋水）を実演</li>
              </ul>
            </div>

            <div className="rounded-lg p-3" style={{ background: C.card }}>
              <div className="font-bold text-sm mb-1" style={{ color: C.green }}>✅ 試作後に確定させること</div>
              <ul className="text-sm space-y-1" style={{ color: C.text }}>
                <li>• 1個あたりの所要時間 → タイムスケジュール最終版</li>
                <li>• 水スプレーの回数目安</li>
                <li>• レベル別の補助の仕方</li>
                <li>• 当日の配置図（テーブル・材料の置き場）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========== ROLE DETAIL TABLE ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.card, border: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.primary, marginBottom: "12px" }}>
            📊 役割分担 詳細
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: C.primary + "10" }}>
                  <th className="text-left p-2 font-bold" style={{ color: C.primary, borderBottom: `2px solid ${C.primary}` }}>タスク</th>
                  <th className="text-center p-2 font-bold" style={{ color: C.mikaColor, borderBottom: `2px solid ${C.primary}`, width: "70px" }}>みか</th>
                  <th className="text-center p-2 font-bold" style={{ color: C.misakiColor, borderBottom: `2px solid ${C.primary}`, width: "70px" }}>みさき</th>
                  <th className="text-center p-2 font-bold" style={{ color: C.muted, borderBottom: `2px solid ${C.primary}`, width: "60px" }}>期限</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "準備（制作系）", items: [
                    { task: "告知チラシ作成", mika: "◎", misaki: "", due: "2/28" },
                    { task: "視覚支援資料（ステップカード等）作成", mika: "◎", misaki: "", due: "3/6" },
                    { task: "クイズカード作成", mika: "◎", misaki: "", due: "3/6" },
                    { task: "説明ポスター作成", mika: "◎", misaki: "○", due: "3/6" },
                    { task: "レベル分け表（参加者別）", mika: "◎", misaki: "○", due: "3/13" },
                    { task: "資料の印刷・ラミネート", mika: "◎", misaki: "", due: "3/13" },
                  ]},
                  { cat: "準備（材料系）", items: [
                    { task: "購入物リスト確認", mika: "", misaki: "◎", due: "2/28" },
                    { task: "材料購入（ダイソー等）", mika: "", misaki: "◎", due: "3/10" },
                    { task: "材料の計量・小分け（×20セット）", mika: "○", misaki: "◎", due: "3/13" },
                    { task: "持ち帰り用カップ・袋準備", mika: "", misaki: "◎", due: "3/13" },
                    { task: "スプレーボトル準備（×10）", mika: "", misaki: "◎", due: "3/13" },
                  ]},
                  { cat: "当日", items: [
                    { task: "会場セッティング（テーブル・ブルーシート）", mika: "", misaki: "◎", due: "当日" },
                    { task: "視覚支援資料の掲示", mika: "◎", misaki: "", due: "当日" },
                    { task: "材料配置", mika: "", misaki: "◎", due: "当日" },
                    { task: "イベント進行補助（声かけ・寄り添い）", mika: "◎", misaki: "○", due: "当日" },
                    { task: "材料配布・水加減チェック", mika: "○", misaki: "◎", due: "当日" },
                    { task: "クイズ進行", mika: "◎", misaki: "", due: "当日" },
                    { task: "写真撮影", mika: "○", misaki: "◎", due: "当日" },
                  ]},
                ].map((cat) => (
                  <>
                    <tr key={cat.cat}>
                      <td colSpan={4} className="p-2 font-bold text-xs" style={{ background: "#F5F5F5", color: C.muted }}>
                        {cat.cat}
                      </td>
                    </tr>
                    {cat.items.map((item, j) => (
                      <tr key={j} style={{ borderBottom: `1px solid ${C.border}` }}>
                        <td className="p-2" style={{ color: C.text }}>{item.task}</td>
                        <td className="text-center p-2" style={{ color: C.mikaColor, fontWeight: item.mika === "◎" ? 800 : 400 }}>{item.mika}</td>
                        <td className="text-center p-2" style={{ color: C.misakiColor, fontWeight: item.misaki === "◎" ? 800 : 400 }}>{item.misaki}</td>
                        <td className="text-center p-2 text-xs" style={{ color: C.muted }}>{item.due}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs" style={{ color: C.muted }}>
            ◎＝主担当　○＝サポート　※大谷さんとの窓口・全体管理は磯田が担当
          </div>
        </section>

        {/* ========== DEADLINES SUMMARY ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.yellowBg, border: `2px solid ${C.accent}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#B8860B", marginBottom: "12px" }}>
            ⏰ 締切カレンダー
          </h2>
          <div className="space-y-2">
            {[
              { date: "2/28（金）", items: "第1回進捗確認 ／ チラシ原案 ／ 購入リスト確認 ／ 募集開始", icon: "1️⃣" },
              { date: "3/6（金）", items: "第2回進捗確認 ／ ★試作体験 ／ 視覚支援資料完成 ／ クイズカード完成", icon: "2️⃣" },
              { date: "3/7（土）", items: "参加募集締切", icon: "📝" },
              { date: "3/10（火）", items: "材料購入完了", icon: "🛒" },
              { date: "3/13（金）", items: "第3回進捗確認（最終）／ 計量・小分け完了 ／ 資料印刷完了 ／ 会場シミュレーション", icon: "3️⃣" },
              { date: "3/14（土）", items: "🛁 本番！", icon: "🎉" },
            ].map((d) => (
              <div key={d.date} className="flex gap-3 items-start rounded-lg p-2.5" style={{ background: C.card }}>
                <span style={{ fontSize: "20px" }}>{d.icon}</span>
                <div>
                  <span className="font-bold text-sm" style={{ color: C.text }}>{d.date}</span>
                  <span className="text-sm ml-2" style={{ color: C.muted }}>{d.items}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== WEEKLY MEETING FORMAT ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.card, border: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.primary, marginBottom: "12px" }}>
            🔄 週次進捗確認の進め方
          </h2>
          <div className="text-sm space-y-2" style={{ color: C.text }}>
            <p><strong>頻度：</strong>毎週金曜日（2/28、3/6、3/13）</p>
            <p><strong>所要時間：</strong>15〜20分程度</p>
            <p><strong>参加者：</strong>みか先生、みさき先生、磯田</p>
            <div className="rounded-lg p-3 mt-3" style={{ background: "#F9F9F9" }}>
              <p className="font-bold mb-2">確認する内容：</p>
              <ol className="space-y-1 pl-4 list-decimal">
                <li>各タスクの進捗状況（完了 ／ 進行中 ／ 未着手）</li>
                <li>困っていること・相談事項</li>
                <li>翌週までの具体的なToDoの確認</li>
                <li>大谷さんへの確認事項があれば共有</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ========== ROUGH SCHEDULE (GANTT-LIKE) ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.card, border: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.primary, marginBottom: "12px" }}>
            📅 ざっくりスケジュール表
          </h2>

          <div className="overflow-x-auto">
            <div style={{ minWidth: "500px" }}>
              {/* Header - dates */}
              <div className="grid gap-0.5 mb-1" style={{ gridTemplateColumns: "120px repeat(18, 1fr)" }}>
                <div className="text-xs font-bold p-1" style={{ color: C.muted }}></div>
                {Array.from({ length: 18 }, (_, i) => {
                  const day = 25 + i;
                  const month = day <= 28 ? 2 : 3;
                  const d = month === 2 ? day : day - 28;
                  const dow = ["火","水","木","金","土","日","月","火","水","木","金","土","日","月","火","水","木","金"][i];
                  const isWeekend = dow === "土" || dow === "日";
                  const isFri = dow === "金";
                  const isEvent = month === 3 && d === 14;
                  return (
                    <div
                      key={i}
                      className="text-center p-0.5 rounded"
                      style={{
                        fontSize: "9px",
                        background: isEvent ? C.primary + "20" : isFri ? C.accent + "20" : isWeekend ? "#F5F5F5" : "transparent",
                        color: isEvent ? C.primary : isFri ? "#B8860B" : C.muted,
                        fontWeight: isFri || isEvent ? 700 : 400,
                      }}
                    >
                      {month}/{d}<br/>{dow}
                    </div>
                  );
                })}
              </div>

              {/* Gantt rows */}
              {[
                { label: "チラシ作成", color: C.mikaColor, start: 0, end: 3 },
                { label: "購入リスト確認", color: C.misakiColor, start: 0, end: 3 },
                { label: "参加募集", color: C.bothColor, start: 3, end: 11 },
                { label: "視覚支援資料", color: C.mikaColor, start: 5, end: 10 },
                { label: "材料購入", color: C.misakiColor, start: 5, end: 13 },
                { label: "★試作体験", color: C.green, start: 10, end: 10 },
                { label: "計量・小分け", color: C.misakiColor, start: 12, end: 16 },
                { label: "印刷・ラミネート", color: C.mikaColor, start: 14, end: 16 },
                { label: "🛁 本番", color: C.primary, start: 17, end: 17 },
              ].map((row, i) => (
                <div key={i} className="grid gap-0.5 mb-0.5" style={{ gridTemplateColumns: "120px repeat(18, 1fr)" }}>
                  <div className="text-xs p-1 truncate" style={{ color: C.text, fontSize: "10px", fontWeight: 600 }}>
                    {row.label}
                  </div>
                  {Array.from({ length: 18 }, (_, j) => (
                    <div
                      key={j}
                      className="rounded-sm"
                      style={{
                        height: "18px",
                        background: j >= row.start && j <= row.end ? row.color + "60" : "#F9F9F9",
                        border: j >= row.start && j <= row.end ? `1px solid ${row.color}` : "1px solid #F0F0F0",
                      }}
                    />
                  ))}
                </div>
              ))}

              {/* Legend */}
              <div className="flex gap-4 mt-3 text-xs" style={{ color: C.muted }}>
                <span><span className="inline-block w-3 h-3 rounded mr-1" style={{ background: C.mikaColor + "60", border: `1px solid ${C.mikaColor}` }} /> みか先生</span>
                <span><span className="inline-block w-3 h-3 rounded mr-1" style={{ background: C.misakiColor + "60", border: `1px solid ${C.misakiColor}` }} /> みさき先生</span>
                <span><span className="inline-block w-3 h-3 rounded mr-1" style={{ background: C.bothColor + "60", border: `1px solid ${C.bothColor}` }} /> 共同</span>
                <span><span className="inline-block w-3 h-3 rounded mr-1" style={{ background: C.green + "60", border: `1px solid ${C.green}` }} /> 試作</span>
                <span>🔶 金＝進捗確認</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========== KEY NOTES ========== */}
        <section className="rounded-xl p-5 mb-6" style={{ background: C.light, border: `2px solid ${C.primary}40` }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: C.primary, marginBottom: "12px" }}>
            💡 大事なポイント
          </h2>
          <div className="text-sm space-y-3" style={{ color: C.text }}>
            <div className="rounded-lg p-3" style={{ background: C.card }}>
              <strong>🎯 イベントのねらい（療育目標）</strong>
              <p className="mt-1">① 五感体験（色・香り・触感）　② 選ぶ練習　③ 達成感　④ 見通しを持って取り組む　⑤ 友だちと共有する</p>
            </div>
            <div className="rounded-lg p-3" style={{ background: C.card }}>
              <strong>⚠️ 特に注意すること</strong>
              <p className="mt-1">• 水の入れすぎが最大の失敗原因 → 大谷さんが各テーブルを回ってチェック</p>
              <p>• 崩れても大丈夫！「くずれたのもおふろでつかえるよ！」と声かけ</p>
              <p>• 「えらぶこと自体が療育」→ 急がせない、迷う時間を大切に</p>
            </div>
            <div className="rounded-lg p-3" style={{ background: C.card }}>
              <strong>📄 詳細資料</strong>
              <p className="mt-1">企画書（全体版）、視覚支援資料データは磯田から共有済みです。不明点は随時質問してください。</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-4 text-xs" style={{ color: C.muted }}>
          にじいろくれよん ｜ バスボムづくりイベント担当者説明資料 ｜ 2026.02.25
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .fixed { position: static !important; }
          body { font-size: 12px; }
          section { break-inside: avoid; }
          @page { margin: 12mm; }
        }
      `}</style>
    </div>
  );
}

function TimelineBlock({ week, date, title, color, checkpoint, tasks, isHighlight, expanded, onToggle }) {
  const C_text = "#2E2E2E";
  const C_muted = "#7A7570";
  const C_mikaColor = "#C0395E";
  const C_misakiColor = "#1565C0";
  const C_bothColor = "#7B1FA2";

  const whoColors = {
    mika: { bg: "#FCE4EC", color: C_mikaColor, label: "みか先生" },
    misaki: { bg: "#E3F2FD", color: C_misakiColor, label: "みさき先生" },
    both: { bg: "#F3E5F5", color: C_bothColor, label: "2人で" },
    isoda: { bg: "#EEEEEE", color: "#666", label: "磯田" },
  };

  return (
    <div className="relative pl-14 pb-6">
      {/* Circle on timeline */}
      <div
        className="absolute left-4 w-5 h-5 rounded-full border-2"
        style={{ background: color, borderColor: "white", top: "4px", boxShadow: `0 0 0 2px ${color}` }}
      />

      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: isHighlight ? `2px solid ${color}` : `1px solid #E8E0D6`,
          background: "white",
        }}
      >
        {/* Header - clickable */}
        <button
          className="w-full text-left p-3 flex items-center justify-between print:pointer-events-none"
          onClick={onToggle}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ background: color }}>
                {week}
              </span>
              <span className="text-xs" style={{ color: C_muted }}>{date}</span>
            </div>
            <div className="font-bold mt-1" style={{ fontSize: "15px", color: C_text }}>{title}</div>
          </div>
          <span className="text-lg print:hidden" style={{ color: C_muted }}>{expanded ? "▲" : "▼"}</span>
        </button>

        {/* Checkpoint */}
        {checkpoint && (
          <div className="px-3 pb-2">
            <span className="inline-block px-2 py-1 rounded text-xs font-bold" style={{ background: "#FFF8EB", color: "#B8860B" }}>
              🔶 {checkpoint}
            </span>
          </div>
        )}

        {/* Expandable tasks */}
        <div className={`${expanded ? "block" : "hidden"} print:block`}>
          <div className="px-3 pb-3 space-y-1">
            {tasks.map((t, i) => {
              const w = whoColors[t.who];
              return (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span
                    className="inline-block px-1.5 py-0.5 rounded text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: w.bg, color: w.color, minWidth: "64px", textAlign: "center" }}
                  >
                    {w.label}
                  </span>
                  <span style={{ color: C_text }}>{t.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}