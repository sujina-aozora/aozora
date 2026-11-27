# Homepage: Content & Design Proposal (for review)

Status: **draft for approval**. Japanese copy is final-draft quality but needs native review (A14).
Markers: ⚠️A# = pending management approval (see [content-register.md](content-register.md) §2) · ◇ = interpretation.

---

## A. Visual direction

**Concept: 「晴れ渡るIT」 (Clear Sky Engineering).** Aozora means blue sky. The design is clear, calm and transparent: you can see who does what, how it progresses, and what is protected.

| Element | Direction |
|---|---|
| Overall feel | Japanese editorial layout with engineering precision. Generous whitespace, strong type hierarchy, hairline rules. Not a SaaS template: no gradient blobs, no glassmorphism, no floating 3D, no stock handshakes. |
| Signature motif | **Horizon line**: a 1px rule that runs through key sections, carrying mono-type labels (`01 / 06`, `JST`, `NPT`). It links Okinawa's sky and Kathmandu's. |
| Section rhythm | paper → white → paper → **navy** → paper → white → **navy** … Dark bands are reserved for 3 moments: Finder, Parijat, final CTA. |
| Colour use | Text in ink; one action colour (sky `#1F6FD1`); cyan only on navy; amber only for the 「売上アップ」 accent; green only for "checked / protected". |
| Imagery | Original SVG diagrams only: build/protect loop, team equation, working-hours overlap. A single-weight line horizon (sea + mountain ridge) on the Parijat band. |
| Logo | Text logotype: **AOZORA** (Plex Sans JP Bold, +0.08em) with 株式会社青空 below in 11px. Replaced by the official logo when supplied (A13). |
| Type | Plex Sans JP: H1 clamp(36–64px)/1.25, H2 clamp(26–40px)/1.35, body 16px/1.85. Plex Mono 12px uppercase +0.12em for eyebrows and indices. |
| Motion | Hero text fades in; figures count up once; loop diagram draws on scroll; cards rise 12px on reveal. All off under `prefers-reduced-motion`. |
| Grid | 1200px container, 12 columns, 24px gutter; mobile 16px side padding, single column. |

---

## B. Section map

| # | Section | Background | Purpose |
|---|---|---|---|
| 0 | Header | white | Navigation, CTA |
| 1 | Hero | paper | Promise + key facts |
| 2 | お悩み | white | Problem-first entry |
| 3 | 進め方の考え方 + loop | paper | "Understand first" + one-stop cycle |
| 4 | サービス | white | 9 areas grouped by outcome |
| 5 | Service Finder | **navy** | Original feature #1 (entry) |
| 6 | 体制 (日本 × ネパール × AI) | paper | Delivery model, qualitative cost benefit |
| 7 | ネパール開発拠点 Parijat | **navy** | ~15% presence on Home |
| 8 | 品質と情報管理 | white | Trust |
| 9 | 実績 | paper | Track record |
| 10 | グループ会社 KH Plus | white | ~5% presence |
| 11 | よくあるご質問 | paper | Objections |
| 12 | まずは小さく | **navy** | Conversion |
| 13 | Footer | ink | Contact, locations |

---

## C. Section-by-section copy and layout

### 0. Header
- Left: **AOZORA** logotype (links to top)
- Nav: サービス / 進め方・体制 / 開発拠点 / 実績 / 会社情報
- Right: `098-989-6318` (desktop ≥1024px, `tel:` link) + button **無料IT診断を相談する** ⚠️A1 → contact.html
- Language: `JA / EN` (EN hidden until English pages exist)
- Mobile: logotype + menu button → full-height drawer with the nav, phone and email, and the CTA. Focus-trapped, Esc closes it.

### 1. Hero
```
ONE-STOP IT PARTNER                                         ┌──────────────┐
                                                            │  build/protect│
作るも守るも、                                               │  loop mark   │
同じチーム。                                                 │  (SVG)       │
                                                            └──────────────┘
ITの力で、売上を伸ばし、コストを下げる。
ご相談から開発、セキュリティ、保守運用まで、
ひとつの窓口で伴走するITパートナーです。

[ 無料IT診断を相談する ]   [ 自社に合うサービスを探す → ]

────────────────────────────────────────────────────────── (horizon line)
2011年        150件以上          37名                    9分野
設立          年間プロジェクト    日本12名・ネパール25名    対応領域
                                           沖縄・東京・カトマンズ
```
- Eyebrow: `ONE-STOP IT PARTNER`
- H1: **作るも守るも、同じチーム。**
- Lead: ITの力で、売上を伸ばし、コストを下げる。ご相談から開発、セキュリティ、保守運用まで、ひとつの窓口で伴走するITパートナーです。
- CTA primary: 無料IT診断を相談する ⚠️A1 · CTA secondary: 自社に合うサービスを探す (→ #finder)
- Figures (count-up): 2011年 設立 · 150件以上 年間プロジェクト · 37名 日本12名・ネパール25名 · 9分野 対応領域
- Location line (mono): 沖縄・東京・カトマンズ
- Mobile: text stacked; the loop mark moves below the CTAs at a smaller size; figures in a 2×2 grid.

### 2. お悩み
- Eyebrow: `YOUR CHALLENGES`
- H2: **経営とITの、こんなお悩みはありませんか？**
- 6 cards (icon + text + small link to the matching service):
  1. IT投資が、売上につながっているのか分からない → コンサルティング
  2. 人手が足りず、毎日の作業が回らない → AI活用・業務の自動化
  3. システムやサーバーの費用が、年々かさんでいる → サーバー・インフラ
  4. 使える補助金・助成金を、調べる時間がない → 補助金活用支援
  5. セキュリティ対策が十分か、社内で判断できない → セキュリティ診断・対策
  6. 業者がバラバラで、全体を見てくれる人がいない → ワンストップでのご支援
- Closing bar: **青空なら、相談窓口ひとつで、まとめて解決に向けて動きます。**
- Layout: 3×2 grid on desktop, 1 column on mobile. Bordered white cards with a sky icon and a hover lift.

### 3. 私たちの進め方
- Eyebrow: `OUR APPROACH`
- H2: **まずは「何をすべきか」から、一緒に考えます。**
- Body: いきなり作り始めるのではなく、業務・IT環境・費用を見える化し、効果の大きい打ち手から進めます。ご要望と異なる場合でも、そのまま受け入れるのではなく、プロとして最善だと考える案を率直にお伝えします。
- Loop diagram (5 nodes + return arrow):
  - コンサル: 現状診断・課題の整理
  - 補助金活用: 使える制度を探し、資金計画まで
  - 開発: Web・EC・アプリ・システム・AI
  - セキュリティ: 日本のプロによる診断と対策
  - 保守・運用: 日々の運用と、数字を見た改善
  - Return arrow label: 運用で得たデータをもとに、次の一手をご提案
- Three outcomes under the loop:
  - **売上アップ**: 集客・EC・Amazon・アプリなど、売上につながる施策を数字で考えてご提案します。
  - **コストダウン**: 業務の自動化、IT費用の見直し、補助金の活用で、ムダな出費を減らします。
  - **安心・安全**: 日本のエンジニアがセキュリティを診断し、止まらない仕組みで運用します。
- Layout: text left (5 columns) + loop SVG right (7 columns); the outcomes are a 3-column row below with amber / sky / green top rules.

### 4. サービス
- Eyebrow: `SERVICES`
- H2: **9つの領域を、ワンストップで。**
- Lead: すべてまとめても、必要なところだけでも。コンサルティングや補助金活用と組み合わせてご提案します。
- Three labelled groups:
  - **売上を伸ばす**
    - Web制作・WordPress: 見た目だけで終わらない、問い合わせや採用につながるサイトを。
    - EC構築・運営: 売れる仕組みと、毎日回しやすい運営を。
    - Amazon出品・運用支援: 立ち上げから運用まで、販路を広げます。
    - スマホアプリ開発: 会員証・予約から業務アプリまで、企画からストア公開まで。
  - **業務を効率化する**
    - 業務システム・Webアプリ: Excelや紙で回している業務を、使いやすい仕組みに。
    - AI活用・業務の自動化: 毎日の手作業を減らし、人にしかできない仕事に時間を。
  - **安心して使い続ける**
    - サーバー・インフラ: 「止まらない・困らない」環境を、見えないところで支えます。
    - セキュリティ診断・対策: 弱点を、攻撃者より先に見つけます。
    - 保守・運用: 公開後も、ずっと相談できる相手に。他社が制作したサイトもご相談ください。
- Link: サービス一覧を見る →
- Layout: three columns with a group header and stacked compact cards (icon, title, one line, arrow). Each card links to `services.html#…`. Single column on mobile.

### 5. Service Finder (navy band)
- Eyebrow: `SERVICE FINDER`
- H2: **何を頼めばいいか、わからなくても大丈夫です。**
- Body: 3つの質問に答えるだけで、お悩みに合ったサービスと、最初の一歩をご案内します。（約30秒）
- Embedded step 1, 「実現したいことは何ですか？」, as 4 large buttons:
  - 売上・集客を伸ばしたい
  - 手作業やコストを減らしたい
  - サイトやシステムを安全に守りたい
  - まだ整理できていない・まず相談したい
- Choosing one continues steps 2–3 in place (progress `1 / 3`, 戻る, やり直す). The result panel shows the recommended services, the reason each fits, the free assessment as the first step, and actions: 「この内容でメールを作成」 / 「電話で相談する」.
- Small print: 入力内容はこのページ内でのみ使われ、保存・送信されません。
- No JS: the buttons are links to services.html.

### 6. 体制: 日本 × ネパール × AI
- Eyebrow: `HOW WE DELIVER`
- H2: **日本の品質管理と、ネパールの開発力と、AI。**
- Lead: お客様の窓口と品質管理は日本チームが、開発はネパールの開発拠点Parijatが担い、AIで作業そのものを効率化します。日本品質を保ちながら、無理のないコストでお届けします。
- Equation diagram: `[日本チーム 12名] + [Parijat 25名] + [AI活用] = 日本品質の、効率的な開発`
  - 日本チーム（12名）: ご要望の整理・設計・品質管理・お客様対応。日本の商習慣を知るメンバーが窓口です。
  - Parijat（25名）: AOZORAのネパール開発拠点。日本と同じ管理手法で、開発とQAを担当します。
  - AI活用: プログラム作成・テスト・資料作成をAIで効率化。AIが書いたコードも、必ず別のエンジニアがレビューします。
- Four qualitative benefits (icon row):
  - 日本とネパールの協働による、効率的な開発
  - 日本式の進行管理・品質管理
  - 必要な分だけ使える、柔軟な開発体制
  - AIを活用した、スピーディな開発
- Link: 進め方・体制を詳しく見る →

### 7. ネパール開発拠点 Parijat (navy band)
```
NEPAL DEVELOPMENT CENTRE

AOZORAのネパール開発拠点、
Parijat Infotech。

（body）                                  JST  9      12     15     18     21
                                          日本   ████████████████████
                                          Parijat        ███████████████████
                                                   ↑ 重なる時間に、当日中にやりとり
~~~~~~~~~~~~~~ line-art horizon: sea (Okinawa) ··· ridge (Himalaya) ~~~~~~~~~~~~~~
25名 開発メンバー     3時間15分 時差     3名 日本在住のブリッジスタッフ
```
- Eyebrow: `NEPAL DEVELOPMENT CENTRE`
- H2: **AOZORAのネパール開発拠点、Parijat Infotech。**
- Body: ネパール・カトマンズの開発チームが、日本チームと一体となって開発とQAを担当しています。日本在住のネパール人ブリッジスタッフが仕様を日本語で正確に伝え、日本と同じ手法でスケジュールと品質を管理しています。
- Working-hours visual: 日本 9:00–18:00 / Parijat 12:15–21:15（現地 9:00–18:00）. Caption: 時差はわずか3時間15分。日本の昼から夜にかけて開発チームが稼働するため、当日中のやりとりが可能です。
- Figures: 25名 開発メンバー · 3時間15分 時差 · 3名 日本在住のブリッジスタッフ
- Link: 開発拠点について詳しく見る →

### 8. 品質と情報管理
- Eyebrow: `QUALITY & DATA PROTECTION`
- H2: **日本式の品質管理と、お預かりする情報の取り扱い。**
- Left column, 「品質を守る6つの仕組み」:
  - 作る前に文書で合意: 画面と機能を仕様書にまとめ、認識のずれをなくしてから開発します。
  - 毎日、朝と夕に進捗確認: 始業・終業時のミーティングで、進み具合と遅れを確認します。
  - タスクを見える化: Jira・Backlogで作業を管理し、いつでも状況をご確認いただけます。
  - 別のエンジニアがレビュー: AIで書いたコードも含め、担当者以外が必ずチェックします。
  - 専任QAが日本基準でテスト: 品質管理の専任スタッフが、日本の基準でテストします。
  - 確認用の環境で試せる: 本番とは別の環境で、公開前に実際に触ってご確認いただけます。
- Right column, 「お預かりする情報の取り扱い」:
  - 秘密保持契約（NDA）: ご相談の段階から締結できます。
  - 権限は必要最小限: 作業に必要なアカウントだけを使い、終了後は削除・返却します。
  - 個人情報の取り扱い: 必要な範囲だけを扱い、本番データを不用意に持ち出しません。
  - AI利用のルール: お客様の機密情報を、学習に使われる形でAIに入力しません。
  - 海外拠点での作業範囲: 海外チームが扱う情報の範囲を事前にご説明し、ご了承のうえで進めます。
- Layout: two columns with green check icons on the left and lock icons on the right. ⚠️A3 (6-month fix) is deliberately not shown here.

### 9. 実績
- Eyebrow: `TRACK RECORD`
- H2: **幅広い業種で、年間150件以上のプロジェクト。**
- Lead: 2011年の設立以来、Webからシステム・アプリまで対応してきました。
- Industry tags: 食品・製造 / 小売・EC / 観光 / 制作会社・代理店 / 不動産 / 福祉・介護 / アパレル / スポーツウェア
- 4 case cards (documented fields only ⚠️A7):
  - 観光・レンタカーポータル | レンタカー予約プラットフォームの開発／保守・運用 | 業務システム | 2年
  - 製粉会社 | Shopifyストアの新規構築／保守・運用 | EC構築 | 8ヶ月
  - 福祉・介護関連事業者 | 福祉施設向けWebアプリアンケートシステムの開発／保守・運用 | Webアプリ | 2年
  - スポーツウェア製造・販売事業者 | Amazonベンダー・セラーの出品／保守・運用 | Amazon支援 | 2ヶ月
- Note: ※お客様名は伏せて掲載しています。詳細は守秘義務の範囲内で個別にご紹介します。
- Link: 実績一覧を見る →

### 10. グループ会社 KH Plus
- Eyebrow: `GROUP COMPANY`
- H2: **グループ会社 KH Plus と、ひとつのチームで。**
- Body: 株式会社ケーエイチプラスは、ITコンサルティング、DX・AI導入、業務改善、IT補助金・助成金の申請サポート、DX人材育成を手がけるグループ会社です。課題の整理や補助金の活用はKH Plus、制作・開発・保守はAOZORAが担当。窓口はひとつのまま、全体を見ながら最適な打ち手をご提案します。
- Role pair: `KH Plus: 課題整理・ITコンサル・業務改善・補助金` ⇄ `AOZORA: 制作・開発・セキュリティ・保守`
- ⚠️A8: the KH Plus figures are omitted until approved.
- Link: KH Plusについて（khplus.jp）↗ (opens in a new tab, with `rel="noopener"`)
- Layout: deliberately compact (one row). Visually quieter than the AOZORA sections.

### 11. よくあるご質問 (accordion, from P p.29)
- Q. 海外チームでも品質は大丈夫ですか？ A. 日本チームが仕様と品質を確認し、レビュー・テストを経てからお渡しします。
- Q. 本当にコストは下がりますか？ A. 現状を診断し、削減できる見込みと費用を比べたうえでご提案します。
- Q. 補助金は必ず使えますか？ A. 制度ごとに条件があり、採択を保証することはできません。使える可能性があるかどうかは、無料で確認いたします。
- Q. 小さな作業だけでも頼めますか？ A. はい。1ページの修正や、セキュリティ診断だけのご依頼もお受けしています。
- Q. 他社が作ったサイトやシステムも直せますか？ A. 可能です。まず現状を調査し、対応できる範囲とリスクをご説明してから進めます。
- Q. やりとりは日本語でできますか？ A. はい。窓口・打ち合わせ・資料・報告はすべて日本語で対応します。

### 12. まずは小さく (navy band)
- Eyebrow: `GET STARTED`
- H2: **まずは無料の初回簡単IT診断から、小さく始められます。** ⚠️A1
- Lead: 「何を頼めばいいかわからない」段階でも大丈夫です。いきなり大きな発注をしていただく必要はありません。
- Steps on the horizon line:
  - STEP 1 初回簡単IT診断: 業務・IT費用・セキュリティ・使える補助金をまとめて確認し、改善ポイントをお伝えします。（無料・オンライン）
  - STEP 2 小さな改善から: 1ページの改修やセキュリティ点検など、小さなお仕事で進め方や相性をご確認ください。
  - STEP 3 本格的なパートナーへ: ご納得いただけたら、開発・顧問・保守など、最適な形で長くお付き合いします。
- Contact block: **お電話** 098-989-6318（平日 9:00–18:00）· **メール** seisaku@aozora-okinawa.com · button 「お問い合わせページへ」
- No prices (the "3万円〜" in P p.30 is excluded).

### 13. Footer (ink)
- AOZORA / 株式会社青空 · 作るも守るも、同じチーム。
- Locations:
  - 沖縄本社: 沖縄県那覇市安里381-1 5F
  - 東京オフィス: 東京都千代田区神田須田町1-17 神田須田町117ビル 4F
  - ネパール開発拠点: Parijat Infotech（Kathmandu, Nepal）
- TEL 098-989-6318 · seisaku@aozora-okinawa.com
- Sitemap links · グループ会社: KH Plus ↗
- © AOZORA Inc.

---

## D. Mobile behaviour (≤768px)
- Header: logotype + menu button; the CTA moves into the drawer, and a sticky bottom bar (電話 / メール / 無料IT診断) appears after the hero.
- All grids collapse to 1 column; the service groups become an accordion-like stack with group headers.
- The loop diagram changes to a vertical numbered list with a return arrow.
- The working-hours visual stays horizontal (scaled), with labels above the bars.
- Tap targets ≥44px; body text 16px minimum.

## E. Interactions on the homepage
| Element | Behaviour |
|---|---|
| Mobile drawer | open/close, `aria-expanded`, focus trap, Esc, closes on link click |
| Figures | count up once when visible |
| Loop SVG | stroke draws on scroll |
| Finder | 3-step in-place flow, keyboard-operable, result → mailto/tel |
| FAQ | `<details>`/`<summary>` (works without JS), animated with JS |
| Smooth anchors | to `#finder`, respecting reduced motion |

## F. For your review
1. **Visual direction**: horizon-line motif, navy bands at 3 moments, diagram-only imagery. OK?
2. **Section order**: is Finder at §5 (right after the services) the right place, or should it come straight after the hero?
3. **Content weight**: Parijat gets a full navy band (§7) plus mentions in §6; KH Plus gets one compact row (§10). OK for 80/15/5?
4. **Primary CTA** 「無料IT診断を相談する」 depends on A1 approval. Fallback if not approved: 「お問い合わせ・ご相談」.
5. **Case cards** show documented fields only. OK to publish these 4 on the homepage?
6. Optional before full build: I can make a **static visual mockup of the hero + §2–3** (one HTML file) so you can judge the look in a browser before approving.
