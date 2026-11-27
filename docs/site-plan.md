# AOZORA Corporate Website: Content Specification (v2)

Related docs: [content-register.md](content-register.md) (claims: verified / approval / excluded) · [homepage.md](homepage.md) (homepage copy + design, for review)

Do not include the `docs/` folder in the submission ZIP.

Legend: ✅ decided · ⚠️ approval needed (see register §2) · ◇ my interpretation, not documented

---

## 0. Decisions log

**Round 1 (2026-11-25)**
- Japanese primary and complete; English key pages only if time allows.
- Future direction: AI adoption and AI-assisted development, Japan–Nepal collaboration, speed and innovation, complete IT support.
- No U.S. branch, no Vietnam-offshore targeting.
- Original features: Service Finder + How We Work interactive process. No estimator, no clock.
- No prices. No office count. Positive philosophy only. No Cyber Shisa. No KH Plus capital.
- Real tel/mail links; no fake form submission.

**Round 2 (2026-11-25)**
- Cost benefit is qualitative only (4 messages, register §4.2).
- Documented commitments (1h reply, 6-month fixes, 24h monitoring, English) are not universal guarantees; they are held for approval.
- KH Plus = 「グループ会社・連携パートナー」. No ownership change or transactions.
- Parijat = 「AOZORAのネパール開発拠点」. No legal ownership wording.
- Cases: documented fields only. Problem and outcome are not invented.
- KH Plus figures: KH Plus section only, attributed, pending approval.
- No postal codes, no FAX, no privacy page, no invented legal text.
- How We Work: simplified group collaboration, documented vs interpreted roles marked.
- Asset inspection done: no official logo, colour values or photos available as files (register §0).

---

## 1. Messaging framework

- **Core promise:** 作るも守るも、同じチーム。/ We build it. We protect it. One team.
- **Positioning:** ITの力で、売上を伸ばし、コストを下げる。ご相談から開発、セキュリティ、保守運用まで、ひとつの窓口で伴走するITパートナー。

| Pillar | Message | Main pages |
|---|---|---|
| 1 課題から考える | いきなり作らず、業務・IT・費用を見える化してから | Home, Services, Finder |
| 2 最適な提案 | ご要望と違っても、プロとして最善の案を率直に | Home, Company |
| 3 日本式の進行・品質管理 | 窓口・要件・設計・品質は日本チーム | How We Work |
| 4 ネパール開発拠点 Parijat | 開発とQAを担う専属チーム、当日中のやりとり | Parijat, Home |
| 5 AIを活用した効率的な開発 | 作成・テスト・資料をAIで効率化、レビューは人が | Home, How We Work |
| 6 公開後も長く伴走 | 保守・監視・月次報告・改善提案、他社制作も相談可 | Services, How We Work |

**Future-direction thread** (no internal plans): AI-native development, Japan–Nepal global team, speed ("速く作って、速く試す" spirit, without citing the internal pillar), complete IT support.

**Cost benefit (qualitative):** 日本とネパールの協働による効率的な開発 · 日本式の進行・品質管理 · 必要な分だけ使える柔軟な体制 · AIを活用した効率的な開発.

---

## 2. Sitemap

```
index.html          ホーム                 → homepage.md
services.html       サービス + Service Finder
how-we-work.html    進め方・体制 (interactive process)
parijat.html        ネパール開発拠点 Parijat Infotech
works.html          実績
company.html        会社情報 + グループ会社 KH Plus
contact.html        お問い合わせ + FAQ
en/*                English: index, services, how-we-work, parijat, contact (only if time allows)
```

Global nav: サービス / 進め方・体制 / 開発拠点 / 実績 / 会社情報 / [無料IT診断を相談する]⚠️A1

---

## 3. Inner pages: structure

### services.html
1. Hero: 9つの領域を、ワンストップで。
2. Service Finder (`#finder`)
3. Outcome filter: すべて / 売上を伸ばす / 業務を効率化する / 安心して使い続ける
4. 9 service blocks: こんなときに / 主な対応内容 / AOZORAのポイント / 期間の目安⚠️A6 (Security & Maintenance: 「内容に応じてご提案」) / CTA 「このサービスについて相談する」 (mailto with subject)
5. Consulting + 補助金活用支援 (with group company KH Plus)
6. 費用について: 「費用はご要件・規模により異なります。ヒアリング後にお見積りを無料で作成します」 (P p.26 note: free formal quote after hearing ✅)
7. CTA

### how-we-work.html
1. Hero: 窓口は日本、開発はチームで。
2. Group collaboration diagram (§4.2)
3. Interactive 7-step process (§4.2)
4. Communication: single Japanese contact, bridge staff, weekly meeting, task visibility, tools, hours. ⚠️A2/A5 shown only if approved.
5. Quality (6 mechanisms) + Information handling (5 rules)
6. AI-assisted development: what AI does / what people always check
7. Contract types (no prices): ITコンサル顧問 / 一括請負 / ラボ型 / 保守・運用, with 向いている方 and 役割分担
8. After release: support list. ⚠️A3/A4 only if approved, with conditions.
9. CTA

### parijat.html (~15%)
1. Hero: AOZORAのネパール開発拠点、Parijat Infotech。(Kathmandu, 2018年設立⚠️A11)
2. Role: 開発とQAを担い、日本チームと一体で進める
3. Strengths: Japanese-style process & QC · bridge staff in Japan · 3h15m difference + working-hours overlap visual · ⚠️A5 English
4. Skills overview (aggregate, "2026年10月時点")⚠️A10
5. Ways to work: オフショア開発 (AOZORA manages scope) / ラボ型開発 (dedicated team, flexible priorities, optional bridge staff). No prices.
6. CTA

### works.html
- 年間150件以上 · industry tags · filter (Web / EC・モール・Amazon / システム・アプリ)
- 11 cases. Card template: 業種 · 対応内容 · 関連サービス · 期間 · [課題] [成果] (hidden until supplied⚠️A7)
- Note: お客様名は伏せて掲載しています。詳細は守秘義務の範囲内で個別にご紹介します。(P ✅)

### company.html
1. Mission, 3 Values
2. 私たちの姿勢 ✏️: 「お客様から『神様』と言われる存在を目指して」: ownership, real problems, honest professional advice, exceeding expectations as one global team
3. Company profile: 社名 / 設立 2011年1月 / 事業内容 / 本社 / 東京オフィス / ネパール開発拠点 / TEL / Email / URL
4. **グループ会社 KH Plus** (~5%): consulting, DX/AI, business improvement, subsidy support, DX talent development, sake branding (one line). How we collaborate. khplus.jp. ⚠️A8 figures only if approved.
5. CTA

### contact.html
1. Hero: まずは無料の初回簡単IT診断から⚠️A1
2. What we check: 業務・IT費用・セキュリティ・使える補助金
3. Flow: お問い合わせ → オンライン診断 → ご提案・概算お見積り
4. Contact methods: `tel:0989896318` (平日9:00–18:00⚠️A12) · `mailto:seisaku@aozora-okinawa.com`
5. Email draft helper: optional fields → 「メールソフトで下書きを作成」 + 「内容をコピー」. Labelled: 送信はお使いのメールソフトから行われます。本サイトには入力内容は保存・送信されません。
6. FAQ · office addresses

---

## 4. Original features

### 4.1 Service Finder
3 steps: 実現したいこと → 一番近いお悩み (chips) → 現在の状況. The result shows 1–3 services with the reason each fits, a first step (free assessment ⚠️A1), a subsidy note (「活用できる可能性があります。採択を保証するものではありません」), and actions: mailto with answers / 電話 / やり直す. Nothing is stored or sent by the site. The mapping table is unchanged from v1 (in `src/js/data/services.js`).

### 4.2 How We Work: group collaboration + process

**Group roles diagram** (simplified; labelled 「グループでの連携イメージ」):

| Party | Role on the diagram | Basis |
|---|---|---|
| KH Plus (グループ会社) | 課題の整理・ITコンサル・業務改善・補助金活用支援 | ✅ K p.3 ("KH Plus handles issue organisation and subsidies"), P p.7 |
| AOZORA 日本チーム | お客様窓口・要件整理・PM・設計・品質管理・最終確認 | ✅ P p.13–14, K p.3 |
| Parijat (ネパール開発拠点) | 開発・QA | ✅ P p.14 |
| AI | 作成・テスト・資料作成の効率化 | ✅ P p.13 |
| AOZORA | 保守・監視・運用・改善提案 | ✅ P p.4, p.28 |

**Process × lanes:** documented facts are drawn solid; my interpretation is drawn as a dotted outline (legend: 「◇ 連携のイメージ」).

| Step (P p.20) | お客様 | KH Plus | 日本チーム | Parijat | AI | Deliverable (✅ P p.20) |
|---|---|---|---|---|---|---|
| 01 無料相談・診断 | ● | ◇ 課題整理 | ● | | | 課題の整理メモ |
| 02 ヒアリング・補助金確認 | ● | ● 補助金 (✅ K/P p.7) | ● | | | 要件シート・使える制度 |
| 03 ご提案・お見積り | ● 承認 | | ● | ◇ 工数確認 | | 提案書・内訳つき見積書 |
| 04 設計 | ● 確認 | | ● 設計 | ◇ | ◇ 資料 | 画面イメージ・仕様書 |
| 05 開発 | ◇ 進捗確認 (✅ task tool) | | ● 進行管理 | ● 開発 | ● | 週次の進捗報告 |
| 06 テスト・セキュリティ確認 | ● 確認環境 | | ● QA・セキュリティ・最終確認 | ● QA | ● テスト | 確認環境・テスト結果 |
| 07 公開・保守・改善 | ● | ◇ 改善提案 | ● 保守・運用 | ◇ 改修 | ◇ | 操作マニュアル・月次報告 |

- ● = documented in source materials (P or K)
- ◇ = my interpretation, drawn as an illustrative dotted outline

---

## 5. Design system

Unchanged from v1. Summary:
- IBM Plex Sans JP + IBM Plex Mono (self-hosted subsets)
- Palette harmonised with the observed brand colours, **not official**: ink `#0E1B2C`, paper `#F6F5F1`, navy `#0D2A44`, sky `#1F6FD1`, sky-light `#4A9BE8`, cyan `#5BC2DC`, amber `#E0813A`, ok `#1E8E5A`
- 4px spacing, 1200px / 12-column grid, 4–8px radius, reduced-motion-safe animation
- Text logotype until the official file is supplied

Homepage application: see [homepage.md](homepage.md).

---

## 6. Build order (deadline 2026-11-30 23:59 JST)

| Day | Work |
|---|---|
| Nov 26 | After homepage approval: Vite setup (file://-safe), tokens, base, header/footer, Home |
| Nov 27 | Services + Service Finder |
| Nov 28 | How We Work (process), Parijat |
| Nov 29 | Works, Company, Contact; QA (responsive, a11y, file://, anonymity) |
| Nov 30 | Native review fixes; English key pages if time; ZIP; report |
