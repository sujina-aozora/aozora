import { renderIcons } from './icons.js';
import { esc } from './util.js';

/**
 * Service Finder: renders steps from data and recommends services.
 * Logic is identical to the approved mockup; content lives in data/finder.js.
 * Markup hooks: [data-js="finder"] > [data-js="finder-stepper"], [data-js="finder-label"], [data-js="finder-body"]
 */
export function initFinder(root, { finder: FINDER, services: SERVICES, contact: CONTACT, servicesPage = 'services.html' }) {
  const body = root.querySelector('[data-js="finder-body"]');
  const label = root.querySelector('[data-js="finder-label"]');
  const stepper = root.querySelectorAll('[data-js="finder-stepper"] li');

  const state = { goal: null, concerns: new Set(), status: null };
  const arrow = '<span class="option__arrow"><i data-lucide="arrow-right"></i></span>';
  const total = FINDER.steps.length;

  function setStep(n, focus) {
    label.textContent = n > total ? '診断結果' : `STEP ${n} / ${total}`;
    stepper.forEach((li, i) => {
      li.classList.toggle('is-active', i === n - 1);
      li.classList.toggle('is-done', i < n - 1);
      if (i === n - 1) li.setAttribute('aria-current', 'step');
      else li.removeAttribute('aria-current');
    });
    body.style.animation = 'none';
    void body.offsetWidth;
    body.style.animation = '';
    renderIcons();
    if (focus) body.querySelector('.finder__q')?.focus({ preventScroll: true });
  }

  const goalById = (id) => FINDER.goals.find((g) => g.id === id);
  const statusById = (id) => FINDER.statuses.find((s) => s.id === id);

  /* Step 1 */
  function renderGoal(focus) {
    body.innerHTML = `
      <h3 class="finder__q" tabindex="-1">実現したいことは何ですか？</h3>
      <p class="finder__hint">一番近いものをひとつ選んでください。</p>
      <div class="options">
        ${FINDER.goals.map((g) => `
          <button type="button" class="option tone-${g.tone || 'sky'}${state.goal === g.id ? ' is-selected' : ''}" data-goal="${g.id}">
            <span class="icon-tile icon-tile--sm"><i data-lucide="${g.icon}"></i></span>
            <span><span class="option__label">${esc(g.label)}</span><span class="option__sub">${esc(g.sub)}</span></span>
            ${arrow}
          </button>`).join('')}
      </div>`;
    body.querySelectorAll('[data-goal]').forEach((b) => b.addEventListener('click', () => {
      if (state.goal !== b.dataset.goal) state.concerns.clear();
      state.goal = b.dataset.goal;
      renderConcerns(true);
    }));
    setStep(1, focus);
  }

  /* Step 2 */
  function renderConcerns(focus) {
    const list = FINDER.concerns[state.goal];
    body.innerHTML = `
      <h3 class="finder__q" tabindex="-1">一番近いお悩みを選んでください。</h3>
      <p class="finder__hint">複数選択できます。</p>
      <fieldset>
        <legend class="visually-hidden">お悩み（複数選択可）</legend>
        <div class="chips">
          ${list.map((c, i) => `
            <label class="chip">
              <input type="checkbox" value="${i}" ${state.concerns.has(i) ? 'checked' : ''}>
              <span class="chip__box"><span class="chip__check" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2.5 6.5 5 9 9.5 3.5"/></svg></span>${esc(c.label)}</span>
            </label>`).join('')}
        </div>
      </fieldset>
      <div class="finder__nav">
        <button type="button" class="btn btn--text" data-back><i data-lucide="arrow-left"></i>戻る</button>
        <button type="button" class="btn btn--primary" data-next ${state.concerns.size ? '' : 'disabled'}>次へ<i data-lucide="arrow-right"></i></button>
      </div>`;
    const next = body.querySelector('[data-next]');
    body.querySelectorAll('input[type="checkbox"]').forEach((cb) => cb.addEventListener('change', () => {
      const i = Number(cb.value);
      if (cb.checked) state.concerns.add(i); else state.concerns.delete(i);
      next.disabled = state.concerns.size === 0;
    }));
    body.querySelector('[data-back]').addEventListener('click', () => renderGoal(true));
    next.addEventListener('click', () => renderStatus(true));
    setStep(2, focus);
  }

  /* Step 3 */
  function renderStatus(focus) {
    body.innerHTML = `
      <h3 class="finder__q" tabindex="-1">現在の状況に近いものは？</h3>
      <p class="finder__hint">ひとつ選ぶと、診断結果を表示します。</p>
      <div class="options">
        ${FINDER.statuses.map((s) => `
          <button type="button" class="option tone-sky${state.status === s.id ? ' is-selected' : ''}" data-status="${s.id}">
            <span class="icon-tile icon-tile--sm"><i data-lucide="${s.icon}"></i></span>
            <span><span class="option__label">${esc(s.label)}</span></span>
            ${arrow}
          </button>`).join('')}
      </div>
      <div class="finder__nav">
        <button type="button" class="btn btn--text" data-back><i data-lucide="arrow-left"></i>戻る</button>
      </div>`;
    body.querySelectorAll('[data-status]').forEach((b) => b.addEventListener('click', () => {
      state.status = b.dataset.status;
      renderResult(true);
    }));
    body.querySelector('[data-back]').addEventListener('click', () => renderConcerns(true));
    setStep(3, focus);
  }

  /* Recommendation logic (unchanged from the approved mockup) */
  function recommend() {
    const list = FINDER.concerns[state.goal];
    const scores = new Map();
    [...state.concerns].sort((a, b) => a - b).forEach((i) => {
      const c = list[i];
      c.to.forEach((id, rank) => {
        const cur = scores.get(id) || { score: 0, order: Infinity, reasons: [] };
        cur.score += rank === 0 ? 2 : 1; // primary match weighs more
        cur.order = Math.min(cur.order, i * 10 + rank);
        cur.reasons.push(c.label);
        scores.set(id, cur);
      });
    });
    if (state.goal === 'consult' && !scores.has('consulting')) {
      scores.set('consulting', { score: 1, order: 999, reasons: [] });
    }
    return [...scores.entries()]
      .sort((a, b) => b[1].score - a[1].score || a[1].order - b[1].order)
      .slice(0, FINDER.maxResults)
      .map(([id, v]) => ({ id, ...SERVICES[id], reasons: v.reasons }));
  }

  function buildMailto(recs) {
    const goal = goalById(state.goal);
    const status = statusById(state.status);
    const concerns = [...state.concerns].sort((a, b) => a - b).map((i) => FINDER.concerns[state.goal][i].label);
    const subject = `【サービス診断】ご相談（${goal.label}）`;
    const lines = [
      `${CONTACT.company} ご担当者様`, '',
      'Webサイトのサービス診断の結果をもとに、相談させてください。', '',
      '■ 実現したいこと', goal.label, '',
      '■ お悩み', ...concerns.map((c) => `・${c}`), '',
      '■ 現在の状況', status.label, '',
      '■ 診断結果のサービス', ...recs.map((r) => `・${r.name}`), '',
      '――――――――――',
      '会社名：', 'お名前：', 'お電話番号：', 'ご相談内容（任意）：', ''
    ];
    return `mailto:${CONTACT.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\r\n'))}`;
  }

  /* Result */
  function renderResult(focus) {
    const recs = recommend();
    const status = statusById(state.status);
    const showSubsidy = recs.some((r) => FINDER.subsidyRelevant.includes(r.id)) && !recs.some((r) => r.id === 'subsidy');

    body.innerHTML = `
      <h3 class="finder__q" tabindex="-1">お悩みに合うサービスは、こちらです。</h3>
      <p class="finder__hint">選んでいただいたお悩みをもとにご案内しています。</p>
      <ol class="recs">
        ${recs.map((r, i) => `
          <li class="rec tone-${r.tone || 'sky'}">
            <span class="icon-tile icon-tile--sm"><i data-lucide="${r.icon}"></i></span>
            <div>
              <p class="rec__name"><span class="rec__rank">${String(i + 1).padStart(2, '0')}</span>${esc(r.name)}${i === 0 ? '<span class="rec__badge">最もおすすめ</span>' : ''}</p>
              <p class="rec__one">${esc(r.one)}</p>
              ${r.reasons.length
                ? `<p class="rec__why"><b>選んだお悩み：</b>${r.reasons.map(esc).join(' ／ ')}</p>`
                : '<p class="rec__why"><b>まずは全体の整理から：</b>課題と優先順位を一緒に整理します。</p>'}
              <a class="rec__link" href="${servicesPage}#${r.anchor}">詳しく見る<i data-lucide="arrow-right"></i></a>
            </div>
          </li>`).join('')}
      </ol>
      <p class="note"><i data-lucide="lightbulb"></i><span>${esc(status.advice)}</span></p>
      ${showSubsidy ? '<p class="note note--small"><i data-lucide="file-check"></i><span>内容によっては、IT導入補助金などの制度を活用できる可能性があります。グループ会社KH Plusと連携してご支援します（採択を保証するものではありません）。</span></p>' : ''}
      <div class="first-step">
        <p class="first-step__label">First step</p>
        <p class="first-step__title">まずは無料の初回簡単IT診断から</p>
        <p class="first-step__desc">業務・IT費用・セキュリティ・使える補助金をまとめて確認し、改善ポイントをお伝えします（オンライン）。いきなり大きな発注をしていただく必要はありません。</p>
      </div>
      <div class="btn-row result-actions">
        <a class="btn btn--primary" href="${buildMailto(recs)}"><i data-lucide="mail"></i>この内容でメールを作成</a>
        <a class="btn btn--secondary" href="tel:${CONTACT.tel}"><i data-lucide="phone"></i>電話で相談する ${CONTACT.telLabel}</a>
      </div>
      <p class="finder__fine">※「この内容でメールを作成」を押すと、お使いのメールソフトが開き、回答内容が入った下書きが作成されます。送信はお客様ご自身のメールソフトから行われます。</p>
      <div class="finder__nav">
        <button type="button" class="btn btn--text" data-back><i data-lucide="arrow-left"></i>戻る</button>
        <button type="button" class="btn btn--text" data-restart><i data-lucide="rotate-ccw"></i>最初からやり直す</button>
      </div>`;
    body.querySelector('[data-back]').addEventListener('click', () => renderStatus(true));
    body.querySelector('[data-restart]').addEventListener('click', () => {
      state.goal = null;
      state.concerns.clear();
      state.status = null;
      renderGoal(true);
    });
    setStep(total + 1, focus);
  }

  renderGoal(false);
}
