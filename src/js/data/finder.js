// Service Finder content. Edit questions, options and mappings here;
// the rendering/logic in js/modules/finder.js does not need to change.
//   goals     → step 1 (single choice)
//   concerns  → step 2 (multi-select, per goal); `to` = service ids, first = primary match
//   statuses  → step 3 (single choice) with an advice line shown on the result
// Problems and advice lines are based on the "When to use" / "Key point" text
// in the AOZORA company profile (p.5–12, p.28–29).

export const FINDER = {
  steps: ['実現したいこと', 'お悩み', '現在の状況'],

  goals: [
    { id: 'sales',      tone: 'yellow',    icon: 'trending-up',  label: '売上・集客を伸ばしたい',           sub: 'Web・EC・Amazon・アプリなど' },
    { id: 'efficiency', tone: 'sky',      icon: 'gauge',        label: '手作業やコストを減らしたい',       sub: '業務システム・AI・自動化' },
    { id: 'protect',    tone: 'navy',     icon: 'shield-check', label: 'サイトやシステムを安全に守りたい', sub: 'セキュリティ・インフラ・保守' },
    { id: 'consult',    tone: 'azure', icon: 'compass',      label: 'まだ整理できていない',             sub: 'まずは相談して、何をすべきか知りたい' }
  ],

  concerns: {
    sales: [
      { label: 'サイトが古く、スマホで見づらい',            to: ['web'] },
      { label: '問い合わせや採用応募を増やしたい',          to: ['web', 'consulting'] },
      { label: 'ネットショップを始めたい・作り直したい',    to: ['ec'] },
      { label: 'Amazonで販売したい・売上が伸びない',        to: ['amazon'] },
      { label: '楽天・Yahoo!など複数の販路の運営が大変',    to: ['ec', 'amazon'] },
      { label: 'リピーターを増やしたい（会員証・ポイント）', to: ['app'] }
    ],
    efficiency: [
      { label: 'Excel・紙・電話での管理が限界',             to: ['system'] },
      { label: '毎月、同じ集計や転記をしている',            to: ['ai'] },
      { label: '問い合わせ対応に時間がかかる',              to: ['ai'] },
      { label: '社内の資料やマニュアルが探しにくい',        to: ['ai'] },
      { label: '現場の報告や点検を、紙からスマホにしたい',  to: ['app', 'system'] },
      { label: '受注や在庫の作業が手作業で大変',            to: ['system', 'ec'] }
    ],
    protect: [
      { label: 'セキュリティ対策が十分か判断できない',      to: ['security'] },
      { label: '取引先からセキュリティの確認を求められた',  to: ['security'] },
      { label: 'サイトが遅い・ときどき表示されない',        to: ['infra'] },
      { label: 'サーバーやドメインの管理者がわからない',    to: ['infra', 'maintenance'] },
      { label: 'SSLの更新やバックアップが不安',             to: ['infra', 'maintenance'] },
      { label: '他社が作ったサイトの保守を任せたい',        to: ['maintenance'] }
    ],
    consult: [
      { label: 'DXと言われても、何から始めればいいかわからない', to: ['consulting'] },
      { label: '社内にIT担当者がいない',                    to: ['consulting', 'maintenance'] },
      { label: 'IT投資の優先順位を決めたい',                to: ['consulting'] },
      { label: 'システムやサーバーの費用が年々かさんでいる', to: ['consulting', 'infra'] },
      { label: '使える補助金・助成金を知りたい',            to: ['subsidy'] },
      { label: '業者がバラバラで、全体を見てくれる人がいない', to: ['consulting'] }
    ]
  },

  statuses: [
    { id: 'existing', icon: 'monitor',     label: '既存のサイト・システムがある',
      advice: '現状を確認したうえで、効果の大きい改善点からご提案します。' },
    { id: 'other',    icon: 'git-branch',  label: '他社が作ったものを使っている',
      advice: '他社が制作したものでも対応可能です。まず現状を調査し、対応できる範囲とリスクをご説明してから進めます。' },
    { id: 'new',      icon: 'sparkles',    label: 'これから新しく作りたい',
      advice: 'まずはご要望と要件を整理します。必要最小限の機能から始め、使いながら育てていく進め方もご提案できます。' },
    { id: 'unknown',  icon: 'circle-help', label: 'わからない・まだ決めていない',
      advice: '「何を頼めばいいかわからない」段階でも大丈夫です。初回のIT診断で、一緒に整理するところから始めましょう。' }
  ],

  maxResults: 3,
  // results that show the subsidy note (wording follows profile p.7 / FAQ: no guarantee)
  subsidyRelevant: ['web', 'ec', 'system', 'app', 'ai', 'consulting', 'subsidy']
};
