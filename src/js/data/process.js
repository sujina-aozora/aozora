// "How We Work" process content (how-we-work.html).
// Steps and deliverables: AOZORA company profile p.20.
// Lane roles:
//   basis 'doc' = documented in the materials (profile p.7, p.13–15, p.20–21, p.28; pamphlet p.3)
//   basis 'int' = our simplified interpretation of how the group collaborates (shown dashed)
// This is an illustration of collaboration, not a contractual responsibility chart.

export const LANES = [
  { id: 'customer', label: 'お客様',                    color: 'var(--ink)' },
  { id: 'khplus',   label: 'KH Plus（グループ会社）',   color: 'var(--accent-group)' },
  { id: 'japan',    label: 'AOZORA 日本チーム',         color: 'var(--sky)' },
  { id: 'nepal',    label: 'Parijat（ネパール開発拠点）', color: 'var(--yellow)' },
  { id: 'ai',       label: 'AI',                        color: 'var(--azure)' }
];

export const PROCESS = [
  {
    no: '01', title: '無料相談・診断',
    desc: '業務・IT環境・費用の現状をお聞きし、課題を整理します。何を頼めばいいかわからない段階でも大丈夫です。',
    deliverable: '課題の整理メモ',
    checkpoint: '整理した課題と優先順位をご確認いただきます。',
    lanes: {
      customer: { basis: 'doc', text: '現状とお困りごとを共有' },
      khplus:   { basis: 'int', text: '課題の整理・ITコンサルの面で連携' },
      japan:    { basis: 'doc', text: '窓口として現状をヒアリングし、課題を整理' }
    }
  },
  {
    no: '02', title: 'ヒアリング・補助金確認',
    desc: 'ご要望と要件を詳しくお聞きし、活用できる補助金・助成金があるかを確認します。',
    deliverable: '要件シート・使える制度の一覧',
    checkpoint: '要件と、活用を検討する制度をご確認いただきます。',
    lanes: {
      customer: { basis: 'doc', text: 'ご要望・要件を共有' },
      khplus:   { basis: 'doc', text: '補助金・助成金の確認と申請準備をサポート' },
      japan:    { basis: 'doc', text: '要件を整理し、要件シートにまとめる' }
    }
  },
  {
    no: '03', title: 'ご提案・お見積り',
    desc: '作業量（人日）×単価で算出し、何にいくらかかるかを内訳で明記したお見積りと提案書をお渡しします。',
    deliverable: '提案書・内訳つき見積書',
    checkpoint: '内容・費用・スケジュールにご納得いただいてから進めます。',
    lanes: {
      customer: { basis: 'doc', text: '提案内容と見積りを確認し、承認' },
      japan:    { basis: 'doc', text: '提案書と内訳つき見積書を作成' },
      nepal:    { basis: 'int', text: '開発の工数見積りに協力' }
    }
  },
  {
    no: '04', title: '設計',
    desc: '画面と機能を仕様書にまとめ、認識のずれをなくしてから開発に入ります。',
    deliverable: '画面イメージ・仕様書',
    checkpoint: '画面イメージと仕様書をご確認いただきます。',
    lanes: {
      customer: { basis: 'doc', text: '画面イメージ・仕様を確認' },
      japan:    { basis: 'doc', text: '要件整理・設計・仕様書の作成' },
      nepal:    { basis: 'int', text: '技術面から設計内容を確認' },
      ai:       { basis: 'int', text: '資料作成の効率化' }
    }
  },
  {
    no: '05', title: '開発',
    desc: 'ネパールの開発拠点が開発を担当し、日本チームが進行を管理します。毎日、朝と夕に進捗を確認します。',
    deliverable: '週次の進捗報告',
    checkpoint: 'タスク管理ツールで、いつでも状況をご確認いただけます。',
    lanes: {
      customer: { basis: 'doc', text: '週1回の定例と、タスク管理ツールで進捗を確認' },
      japan:    { basis: 'doc', text: '進行管理・仕様の橋渡し（日本語ブリッジ）' },
      nepal:    { basis: 'doc', text: '開発を担当' },
      ai:       { basis: 'doc', text: 'プログラム作成を効率化（担当者以外が必ずレビュー）' }
    }
  },
  {
    no: '06', title: 'テスト・セキュリティ確認',
    desc: '専任QAが日本の基準でテストし、本番とは別の確認用環境で、公開前に実際に触ってご確認いただきます。',
    deliverable: '確認環境・テスト結果',
    checkpoint: '確認環境で、実際の動きをご確認いただきます。',
    lanes: {
      customer: { basis: 'doc', text: '確認環境で動作を確認' },
      japan:    { basis: 'doc', text: '品質管理・セキュリティ確認・最終チェック' },
      nepal:    { basis: 'doc', text: 'QA（テスト）を担当' },
      ai:       { basis: 'doc', text: 'テスト作業の効率化' }
    }
  },
  {
    no: '07', title: '公開・保守・改善',
    desc: '公開後も、更新・監視・バックアップ・定期的なセキュリティ診断を続け、数字を見ながら次の一手をご提案します。',
    deliverable: '操作マニュアル・月次報告',
    checkpoint: '月次報告で、対応内容とアクセス・売上状況をご確認いただけます。',
    lanes: {
      customer: { basis: 'doc', text: '変更・不具合のご連絡、月次報告の確認' },
      khplus:   { basis: 'int', text: '業務改善・次の施策の面で連携' },
      japan:    { basis: 'doc', text: '保守・監視・運用、改善のご提案' },
      nepal:    { basis: 'int', text: '改修・機能追加の開発' },
      ai:       { basis: 'int', text: '運用作業・資料作成の効率化' }
    }
  }
];
