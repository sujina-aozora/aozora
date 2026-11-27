/**
 * Contact "email draft helper": no data is sent by the site.
 * Builds a mailto: link from the form fields and opens the visitor's mail app,
 * or copies the text to the clipboard.
 */
export function initMailDraft(form, { contact }) {
  const status = form.querySelector('[data-js="draft-status"]');
  const copyBtn = form.querySelector('[data-js="draft-copy"]');

  const compose = () => {
    const data = new FormData(form);
    const topics = data.getAll('topic');
    const subject = `【お問い合わせ】${topics.length ? topics.join('・') : 'ご相談'}`;
    const lines = [
      `${contact.company} ご担当者様`, '',
      '■ 会社名', data.get('company') || '', '',
      '■ お名前', data.get('name') || '', '',
      '■ お電話番号', data.get('phone') || '', '',
      '■ ご相談の内容', ...(topics.length ? topics.map((t) => `・${t}`) : ['（未選択）']), '',
      '■ 詳細', data.get('message') || '', ''
    ];
    return { subject, body: lines.join('\r\n') };
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { subject, body } = compose();
    window.location.href = `mailto:${contact.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'メールソフトを起動しました。内容をご確認のうえ、メールソフトから送信してください。';
  });

  copyBtn?.addEventListener('click', async () => {
    const { subject, body } = compose();
    const text = `宛先：${contact.mail}\n件名：${subject}\n\n${body.replace(/\r\n/g, '\n')}`;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = '内容をコピーしました。お使いのメールに貼り付けて送信してください。';
    } catch {
      status.textContent = 'コピーできませんでした。お手数ですが、メールアドレス宛に直接ご連絡ください。';
    }
  });
}
