// Service summaries used by the Service Finder results.
// Source: AOZORA company profile p.5–12 (wording condensed, no prices).
// `anchor` = section id on services.html, `tone` = group colour (yellow sales / sky efficiency / navy protect / azure entry)
export const SERVICES = {
  web:         { tone: 'yellow', name: 'Web制作・WordPress',     icon: 'globe',            anchor: 'web',         one: '見た目だけで終わらない、問い合わせや採用につながるサイトを。' },
  ec:          { tone: 'yellow', name: 'EC構築・運営',            icon: 'shopping-cart',    anchor: 'ec',          one: '売れる仕組みと、毎日回しやすい運営の両方をつくります。' },
  amazon:      { tone: 'yellow', name: 'Amazon出品・運用支援',    icon: 'package',          anchor: 'amazon',      one: '立ち上げから運用まで。自社ECやモールと合わせて販路全体で考えます。' },
  app:         { tone: 'yellow', name: 'スマホアプリ開発',        icon: 'smartphone',       anchor: 'app',         one: '会員証・予約から業務アプリまで。アプリでなくても足りる場合はWebアプリもご提案します。' },
  system:      { tone: 'sky', name: '業務システム・Webアプリ', icon: 'layout-dashboard', anchor: 'system',      one: 'Excelや紙の業務を、使いやすい仕組みに。必要最小限の機能から育てていきます。' },
  ai:          { tone: 'sky', name: 'AI活用・業務の自動化',    icon: 'bot',              anchor: 'ai',          one: '毎日の手作業を減らします。個人情報や機密情報の扱いルールを先に決めてから導入します。' },
  infra:       { tone: 'navy', name: 'サーバー・インフラ',      icon: 'server',           anchor: 'infra',       one: '「止まらない・困らない」環境づくり。作業前に影響範囲と戻す手順を必ず確認します。' },
  security:    { tone: 'navy', name: 'セキュリティ診断・対策',  icon: 'shield-check',     anchor: 'security',    one: '社内PCからWeb・クラウドまで、弱点を攻撃者より先に見つけて対策します。' },
  maintenance: { tone: 'navy', name: '保守・運用',              icon: 'wrench',           anchor: 'maintenance', one: '更新・監視・改善まで、公開後もずっと相談できる相手に。他社制作のものも対応します。' },
  consulting:  { tone: 'azure', name: 'ITコンサルティング',      icon: 'compass',          anchor: 'consulting',  one: '業務・IT環境・費用を見える化し、効果の大きい打ち手から進めます。' },
  subsidy:     { tone: 'azure', name: '補助金活用支援',          icon: 'file-check',       anchor: 'subsidy',     one: '使える制度を探し、資金計画までサポート。グループ会社KH Plusと連携してご支援します。' }
};
