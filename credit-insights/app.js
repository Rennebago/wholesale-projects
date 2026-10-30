(function () {
  'use strict';

  /* ======================================================================
     Icons (Feather-style, 24px grid)
     ====================================================================== */
  const ICONS = {
    'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
    'chevron-up': '<polyline points="18 15 12 9 6 15"/>',
    'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
    'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    'arrow-down': '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    sparkle: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    'triangle-right': '<polygon points="7 3 20 12 7 21"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    'trending-down': '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
    percent: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    'thumbs-up': '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',
    grip: '<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>'
  };
  const icon = (name, size = 16) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  /* ======================================================================
     Placeholder data (de-identified, mirrors the ticket and the Figma frames)
     ====================================================================== */
  const CLIENT = {
    name: 'Pat Ellison', lead: 'WS-48213',
    hardship: 'Reduced Income', goal: 'Be Debt Free', employment: 'Retired',
    firstLate: '2024-09', firstLateAgo: '25 mo. ago'
  };

  const IND = [
    { id: 'bank', label: 'Bank credit cards' },
    { id: 'auto', label: 'Auto financing' },
    { id: 'dept', label: 'Department and retail store' },
    { id: 'pers', label: 'Personal loans' },
    { id: 'other', label: 'Other lenders' }
  ];
  const IND_INDEX = { bank: 0, auto: 1, dept: 2, pers: 3, other: 4 };

  // New tradelines per year: [bank, auto, dept, pers, other]
  const YEAR_DATA = {
    2001: [0, 0, 0, 0, 1], 2003: [1, 0, 0, 0, 0], 2004: [0, 1, 0, 0, 0], 2005: [1, 0, 1, 0, 0],
    2007: [1, 0, 0, 1, 0], 2008: [0, 0, 1, 0, 0], 2010: [1, 0, 0, 0, 1], 2011: [1, 0, 1, 0, 0],
    2012: [3, 1, 2, 1, 0], 2013: [1, 0, 0, 0, 0], 2014: [0, 1, 0, 0, 0], 2015: [1, 0, 1, 0, 0],
    2016: [1, 0, 0, 1, 0], 2017: [0, 0, 0, 0, 1], 2018: [1, 1, 0, 0, 0], 2019: [0, 0, 1, 0, 0],
    2021: [1, 0, 0, 1, 0], 2022: [1, 0, 1, 0, 0], 2023: [0, 1, 0, 0, 0], 2024: [1, 0, 0, 0, 1]
  };
  const FIRST_YEAR = 2001;
  const LAST_YEAR = 2026;
  // Tradelines whose open date is missing when "Missing open dates" is on.
  const MISSING = [{ year: 2012, ind: 'bank', debt: 'B' }, { year: 2015, ind: 'dept' }, { year: 2018, ind: 'bank' }];
  const EVENTS = [
    { year: 2024, label: 'First delinquency · 2024-09', tone: 'warn' },
    { year: 2025, label: 'First charge-off · 2025-02', tone: 'neg' }
  ];

  // The 12 accounts in the Figma Debt Accounts table. `util` is the table's Utiliz column, so each limit is derived from balance and util.
  // APR, minimum payment, open date, status and account numbers are placeholders (not in the Figma frame).
  const DEBTS = [
    { id: 'A', name: 'Comenity/Express', type: 'Department store card', acct: 'Credit Card', bal: 535, util: 42.8, apr: 29.99, min: 25, last: 25, lastDate: 'Sep 1, 2024', no: '216543546', opened: '2012-03', year: 2012, status: 'Open', tint: 'ok', flag: true, months: '1 - 3 Months' },
    { id: 'B', name: 'Syncb/PayPal', type: 'Bank credit card', acct: 'Credit Card', bal: 596, util: 97.7, apr: 28.99, min: 30, last: 30, lastDate: 'Oct 1, 2024', no: '604419XXXX', opened: '2012-08', year: 2012, status: 'Open · delinquent', tint: 'ok', flag: true, months: '1 - 3 Months' },
    { id: 'C', name: 'BMG Money', type: 'Personal loan', acct: 'Unsecured', bal: 8193, util: 100, apr: 34.9, min: 295, last: 200, lastDate: 'Sep 1, 2024', no: '331808504', opened: '2007-04', year: 2007, status: 'Charged-off', tint: 'warn', flag: true },
    { id: 'D', name: 'Kashable', type: 'Personal loan', acct: 'Unsecured', bal: 4930, util: 100, apr: 24.9, min: 190, last: 563, lastDate: 'Oct 1, 2024', no: '299512', opened: '2021-06', year: 2021, status: 'Charged-off', tint: 'warn', flag: true },
    { id: 'E', name: 'Syncb/Sam’s Club', type: 'Department store card', acct: 'Credit Card', bal: 2596, util: 103.02, apr: 29.99, min: 78, last: 126, lastDate: 'Aug 1, 2024', no: '521333XXXX', opened: '2012-11', year: 2012, status: 'Open · delinquent', tint: 'warn', flag: true },
    { id: 'F', name: 'Comenity/Kay Jewelers', type: 'Department store card', acct: 'Credit Card', bal: 2206, util: 59.62, apr: 27.99, min: 66, last: 78, lastDate: 'Oct 1, 2024', no: '778850403', opened: '2005-05', year: 2005, status: 'Open', tint: 'warn', flag: false },
    { id: 'G', name: 'Credit Card FB&T', type: 'Bank credit card', acct: 'Credit Card', bal: 1843, util: 67.02, apr: 29.9, min: 55, last: 45, lastDate: 'Sep 1, 2024', no: '481176XXXX', opened: '2012-05', year: 2012, status: 'Open', tint: 'warn', flag: true },
    { id: 'H', name: 'Regions Bank', type: 'Bank credit card', acct: 'Credit Card', bal: 1145, util: 57.25, apr: 22.9, min: 36, last: 36, lastDate: 'Sep 1, 2024', no: '410064XXXX', opened: '2022-09', year: 2022, status: 'Open', tint: 'ok', flag: true },
    { id: 'I', name: 'Upgrade', type: 'Bank credit card', acct: 'Credit Card', bal: 1038, util: 100, apr: 18.5, min: 52, last: 0, lastDate: 'Sep 1, 2024', no: '167620683', opened: '2016-05', year: 2016, status: 'Charged-off', tint: 'ok', flag: true },
    { id: 'J', name: 'Capital One', type: 'Bank credit card', acct: 'Credit Card', bal: 1037, util: 51.85, apr: 26.9, min: 37, last: 37, lastDate: 'Oct 1, 2024', no: '400344XXXX', opened: '2012-02', year: 2012, status: 'Open', tint: 'ok', flag: true },
    { id: 'K', name: 'Citicards', type: 'Bank credit card', acct: 'Credit Card', bal: 1008, util: 50.4, apr: 24.9, min: 41, last: 41, lastDate: 'Sep 1, 2024', no: '518941XXXX', opened: '2015-07', year: 2015, status: 'Open', tint: 'ok', flag: true },
    { id: 'L', name: 'TBM/Aspire', type: 'Bank credit card', acct: 'Credit Card', bal: 650, util: 26, apr: 28.9, min: 30, last: 81, lastDate: 'Oct 1, 2024', no: '550114XXXX', opened: '2018-06', year: 2018, status: 'Open · delinquent', tint: 'warn', flag: true }
  ];

  const INCOME = {
    net: 2980,
    costs: [['Housing', 1050], ['Food', 480], ['Utilities', 240], ['Transportation', 230], ['Health care', 220], ['Other', 156]]
  };

  /* One calculation model feeds the page cards and the insights panel, so their numbers agree.
     The ratios come from the Figma frame: settlement is 59.7% of enrolled debt, the FDR fee is 25% of enrolled debt,
     and the bank fee is $10 a month of the program. The rest is derived from the 12 accounts above. */
  const SETTLE_PCT = 0.597;
  const FEE_PCT = 0.25;
  const BANK_FEE_MO = 10;
  const TERM = 48;
  const sumOf = (list, f) => list.reduce((s, x) => s + f(x), 0);
  // Creditor names as the Salesforce table shows them (the table is the existing page and is not redesigned).
  const CRED = ['Comenity Bank/Expres', 'Syncb/PayPal', 'BMG Money Inc', 'Kashable LLC', 'Syncb/Sam S Club DC', 'ComenityBank/KayJewe', 'Credit Card FB&T', 'Regions Bank', 'Upgrade Inc', 'Capital One Bank USA', 'Citicards CBNA', 'TBM/Aspire MC'];
  DEBTS.forEach((d, i) => { d.cred = CRED[i]; d.limit = Math.round(d.bal / d.util * 100); d.settle = Math.round(d.bal * SETTLE_PCT); d.elig = true; });

  function programFigures(term) {
    const total = sumOf(DEBTS, (d) => d.bal);
    const settle = sumOf(DEBTS.filter((d) => d.elig), (d) => d.settle);
    const fees = Math.round(total * FEE_PCT);
    const bank = BANK_FEE_MO * term;
    const cost = settle + fees + bank;
    return { total, settle, fees, bank, cost, dep: Math.ceil(cost / term) };
  }

  // Staying on minimums: each debt is paid down on its own APR and minimum payment. Debt-free when the slowest one clears.
  const minPath = (() => {
    const runs = DEBTS.map((d) => {
      const r = d.apr / 1200;
      const n = -Math.log(1 - r * d.bal / d.min) / Math.log(1 + r);
      return { months: n, interest: d.min * n - d.bal };
    });
    return {
      payment: sumOf(DEBTS, (d) => d.min),
      months: Math.ceil(Math.max(...runs.map((x) => x.months))),
      interest: Math.round(sumOf(runs, (x) => x.interest))
    };
  })();

  const F48 = programFigures(TERM);
  const PROGRAM = { deposit: F48.dep, term: TERM, enrolled: F48.total, owed: F48.settle, total: F48.cost };
  const STATUS_QUO = { payment: minPath.payment, months: minPath.months, interest: minPath.interest };

  /* ======================================================================
     State
     ====================================================================== */
  // Width of the insights panel in px. The divider between the page and the panel is draggable between min and max.
  const PANEL = { min: 440, def: 710 };

  const state = {
    panelOpen: true,          // the Credit Report Insights split view panel. Open: Debt Accounts sits under the left content. Closed: it spans the page below.
    unseen: false,            // insights refreshed while the panel was closed
    cfa: true,                // CFA_COMPLETED has happened (live WIB data)
    program: true,            // PROGRAM_GENERATED has happened (live WIB data)
    scenario: { partial: false, negative: false, failNext: false },
    ins: { data: null, fetchedAt: null, source: '', stale: false, failed: false },
    inflight: false,
    pending: null,
    panelW: PANEL.def,        // current width of the insights panel
    cvOpen: false,            // the optional small window that shows what the client sees
    spot: null,               // talking-point zone in view in the panel (highlighted as the DC scrolls)
    cvKey: 'story',           // which part of the client's Financial Analysis the window shows
    timeline: { year: null, ind: null },
    budgetOpen: false,
    log: []
  };

  /* ======================================================================
     Helpers
     ====================================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const abs = (n) => Math.abs(Math.round(n)).toLocaleString('en-US');
  const money = (n) => `${n < 0 ? '-' : ''}$${abs(n)}`;
  const moneyS = (n) => `${n > 0 ? '+' : n < 0 ? '-' : ''}$${abs(n)}`;
  const timeStr = (d) => d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  function budget() {
    const costs = INCOME.costs.map(([k, v]) => [k, state.scenario.negative && k === 'Other' ? v + 294 : v]);
    const total = costs.reduce((s, c) => s + c[1], 0);
    return { costs, total, disposable: INCOME.net - total };
  }

  function rate(disposable, deposit) {
    const r = disposable / deposit;
    const note = `Verified disposable income covers the deposit ${r.toFixed(1)}×`;
    if (r >= 2) return { label: 'Comfortable', chip: 'chip-positive', ic: 'check-circle', note };
    if (r >= 1.25) return { label: 'Manageable', chip: 'chip-warning', ic: 'info', note };
    if (r >= 1) return { label: 'Tight', chip: 'chip-warning', ic: 'alert', note };
    return { label: 'Inadequate', chip: 'chip-negative', ic: 'alert', note };
  }

  function buildTimeline() {
    const partial = state.scenario.partial;
    const cols = [];
    for (let y = FIRST_YEAR; y <= LAST_YEAR; y++) {
      const counts = (YEAR_DATA[y] || [0, 0, 0, 0, 0]).slice();
      if (partial) MISSING.forEach((m) => { if (m.year === y) counts[IND_INDEX[m.ind]] -= 1; });
      cols.push({ year: y, counts, total: counts.reduce((s, n) => s + n, 0) });
    }
    const unknownCounts = [0, 0, 0, 0, 0];
    if (partial) MISSING.forEach((m) => { unknownCounts[IND_INDEX[m.ind]] += 1; });
    const unknown = { counts: unknownCounts, total: unknownCounts.reduce((s, n) => s + n, 0) };
    const known = cols.reduce((s, c) => s + c.total, 0);
    const all = known + unknown.total;
    const peak = cols.reduce((p, c) => (c.total > p.total ? c : p), cols[0]);
    const avg = known / (LAST_YEAR - FIRST_YEAR + 1);
    const legend = IND.map((ind, i) => ({ ...ind, n: cols.reduce((s, c) => s + c.counts[i], 0) + unknown.counts[i] }));
    return { cols, unknown, known, all, peak, avg, legend };
  }

  /* ======================================================================
     Request log
     ====================================================================== */
  function log(kind, text) { state.log.unshift({ t: new Date(), kind, text }); }

  /* ======================================================================
     Request flow (the triggers proposed in the ticket)
     ====================================================================== */
  function requestInsights(label) {
    if (state.inflight) {
      state.pending = { label };
      log('coalesced', `${label}: a request is already in flight. Queued one follow-up refresh.`);
      render();
      return;
    }
    const snap = { cfa: state.cfa, program: state.program };
    const payload = snap.cfa || snap.program ? 'Post-UW' : 'Pre-UW';
    state.inflight = true;
    log('request', `${label}: requesting ${payload} insights`);
    render();
    setTimeout(() => {
      state.inflight = false;
      if (state.scenario.failNext) {
        state.scenario.failNext = false;
        if (state.ins.data) state.ins.stale = true; else state.ins.failed = true;
        log('error', `${label}: Insights API unavailable (503). ${state.ins.data ? 'Showing the last good insights.' : 'No cached insights to show.'}`);
      } else {
        state.ins = { data: snap, fetchedAt: new Date(), source: label, stale: false, failed: false };
        log('response', `${payload} payload received. Lenses updated.`);
      }
      if (!state.panelOpen) state.unseen = true;
      render();
      if (state.pending) {
        const p = state.pending;
        state.pending = null;
        requestInsights(`${p.label} (follow-up)`);
      }
    }, 1100);
  }

  function toast(text) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `${icon('info', 20)}<span>${esc(text)}</span>`;
    $('#toasts').appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }

  /* ======================================================================
     WIB page: program terms, debt account summary and the debt table.
     These sit on the page today. Only the insights panel is new.
     ====================================================================== */
  const STATUS_CHIP = { 'Charged-off': 'chip-negative', 'Open · delinquent': 'chip-warning', Open: 'chip-info', Closed: 'chip-info' };

  /* Page content. Labels and layout come from the Figma frame. Every value is derived from the 12 accounts, so the page and the panel agree.
     Assumptions: Loan = unsecured personal loan at 12% APR over 48 months. CCCS = debt management plan at 8% APR over 60 months.
     Available Credit Data is bureau data on other tradelines, so it stays as drawn in Figma. */
  const dollars = (n) => `${n < 0 ? '-' : ''}$${abs(n)}.00`;
  const loanCost = (p, apr, n) => { const r = apr / 1200; return p * r / (1 - Math.pow(1 + r, -n)) * n; };
  const PAGE = (() => {
    const f = F48;
    const limits = sumOf(DEBTS, (d) => d.limit);
    const costMins = f.total + minPath.interest;
    return {
      term: TERM,
      deposit: f.dep,
      options: [48, 42, 36].map((n) => { const g = programFigures(n); return { n, dep: g.dep, cost: g.cost }; }),
      biweekly: Math.ceil(f.dep * 12 / 26),
      split: Math.ceil(f.dep / 2),
      // [group title, program-only, rows of [label, value]]. Left column then right column.
      left: [
        ['Current Client Situation', false, [['Total Estimated Debt', dollars(f.total)], ['Fee Charges - Min Payments', dollars(minPath.interest)], ['Est. Cost of Paying Minimums', dollars(costMins)], ['Current Last Monthly Payment', dollars(sumOf(DEBTS, (d) => d.last))], ['Pay Down Time - Min Payments', String(minPath.months)]]],
        ['Savings from FDR Program', true, [['Savings vs. Enrolled Debt', dollars(f.total - f.settle)], ['Fee Savings vs Min Payments', dollars(minPath.interest - f.fees - f.bank)], ['Est. Savings against Min. Payoff', dollars(costMins - f.cost)], ['Program Time Savings vs Min Payments', String(minPath.months - TERM)], ['Savings Compared to Current', dollars(f.total - f.cost)]]],
        ['Other Debt Solutions', true, [['Est. Savings compared to Loan', dollars(loanCost(f.total, 12, 48) - f.cost)], ['Est. Savings compared to CCCS', dollars(loanCost(f.total, 8, 60) - f.cost)]]]
      ],
      right: [
        ['FDR Program', true, [['FDR Est. Settlement', dollars(f.settle)], ['FDR Fees', dollars(f.fees)], ['Est. Bank Service Fees', dollars(f.bank)], ['Total Fees', dollars(f.fees + f.bank)], ['FDR Total Cost to Client', dollars(f.cost)], ['FDR Monthly Deposit', dollars(f.dep)], ['FDR Program Length', String(TERM)]]],
        ['Additional Data', false, [['Fee %', `${FEE_PCT * 100}%`], ['Credit Utilization', `${(f.total / limits * 100).toFixed(2)}%`], ['Eligible Debt Omitted', '0%'], ['FICO Score', '749']]],
        ['Available Credit Data', false, [['Total Available Credit', '$26,266.00'], ['Aggregate Utilization', '43.43%'], ['Available Credit Capacity', '$14,859.25'], ['Est. Min Pmt', '$1,822.00']]]
      ]
    };
  })();

  function negativeCard() {
    const factors = [['Lack of real estate secured loan information', '00068'], ['Too many revolving accounts with high usage', '00043'], ['Balances on bankcards too high compared to credit limits', '00029'], ['High number of inquiries', 'FA']];
    return `<section class="lens spot-zone${zoneOn('neg')}" aria-labelledby="negTitle" data-spot="neg" data-cv="story">
      <div class="lens-head">
        <h3 class="lens-title" id="negTitle">Negative factors</h3>
        <span class="chip chip-negative">${icon('alert', 12)}${factors.length} lowering the score</span>
      </div>
      <ul class="neg-list">${factors.map(([t, c]) => `<li><span class="neg-text">${t}</span><span class="neg-code">Code ${c}</span></li>`).join('')}</ul>
      <div class="spot-notes">${note('neg', 'High usage and balances near limits come straight from what they owe. Those are the factors that improve as balances are resolved.')}</div>
    </section>`;
  }

  function termsCard() {
    const head = '<h2 class="card-title" id="termsTitle">Program Terms Estimate</h2>';
    if (!state.program) {
      return `<section class="card card-empty" aria-labelledby="termsTitle">${head}<p>Not generated yet. Terms appear after Program Generate.</p></section>`;
    }
    const cells = (fn) => PAGE.options.map((o) => `<td class="num">${fn(o)}</td>`).join('');
    return `<section class="card" aria-labelledby="termsTitle">
      ${head}
      <div class="terms">
        <div class="terms-form">
          <label class="field"><span>Total Mo.</span><input class="input" type="text" value="${PAGE.term}" readonly></label>
          <label class="field"><span>$/Mo.</span><input class="input" type="text" value="${PAGE.deposit}" readonly></label>
          <button class="btn btn-primary" type="button" data-action="noop">Save</button>
        </div>
        <div class="terms-main">
          <div class="table-wrap"><table class="table table-grid">
            <caption class="sr-only">Program length options</caption>
            <tbody>
              <tr><th scope="row">Program Length</th>${cells((o) => `<strong>${o.n}</strong>`)}</tr>
              <tr><th scope="row">Deposit Amount (monthly)</th>${cells((o) => money(o.dep))}</tr>
              <tr><th scope="row">Est. Cost</th>${cells((o) => money(o.cost))}</tr>
              <tr><th scope="row">Time to 1st Settlement (months)</th>${cells(() => '1-3')}</tr>
            </tbody>
          </table></div>
          <p class="terms-note">Draft Amount (Bi-weekly): ${money(PAGE.biweekly)}<br>Draft Amount (Split): ${money(PAGE.split)}</p>
        </div>
      </div>
    </section>`;
  }

  function summaryCard() {
    const has = state.program;
    const col = (groups) => groups.filter(([, programOnly]) => has || !programOnly).map(([title, , rows]) =>
      `<div class="sum-group"><h3 class="sum-h">${title}</h3><dl>${rows.map(([k, v], i) =>
        `<div class="kv${i === 0 && title === 'Current Client Situation' ? ' kv-strong' : ''}"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></div>`).join('');
    return `<section class="card" aria-labelledby="sumTitle">
      <div class="card-head"><h2 class="card-title" id="sumTitle">Debt Account Summary</h2>${has ? '<span class="sum-elig">Eligible</span>' : ''}</div>
      <div class="sum-cols"><div>${col(PAGE.left)}</div><div>${col(PAGE.right)}</div></div>
    </section>`;
  }

  /* Talking points: the page-level read for the DC, above the program estimate. It reads the same insights payload as the panel,
     so the numbers agree, and the opener changes with where the lead is (credit pull, CFA done, program generated). */
  function talkingPoint(d) {
    const first = CLIENT.name.split(' ')[0];
    if (!d.cfa && !d.program) {
      return `${first} cited ${CLIENT.hardship.toLowerCase()}, and the first late payment was ${CLIENT.firstLate}. Ask what changed in their income around then, before you talk terms.`;
    }
    if (!d.cfa) {
      return `A ${money(PROGRAM.deposit)}/mo program is ready. Confirm the budget first, so you know ${first} can fund it.`;
    }
    const disp = budget().disposable;
    if (!d.program) {
      return `Verified disposable income is ${money(disp)}/mo. Ask what they can commit comfortably each month before you quote a deposit.`;
    }
    const head = disp - PROGRAM.deposit;
    if (head < 0) {
      return `The ${money(PROGRAM.deposit)}/mo deposit is ${money(-head)} over verified disposable income. Ask which living costs can come down before they enroll.`;
    }
    return `The ${money(PROGRAM.deposit)}/mo deposit leaves ${money(head)}/mo of headroom. Tie it to their goal to ${CLIENT.goal.toLowerCase()} in ${PROGRAM.term / 12} years.`;
  }

  function troubled() {
    return DEBTS.filter((x) => x.status !== 'Open').sort((a, b) => b.bal - a.bal);
  }

  function snapshotCard() {
    const d = state.ins.data;
    if (!d) return '';
    const ut = utilSummary();
    const ul = utilLevel(ut.pct);
    const bad = troubled();
    const badTotal = sumOf(bad, (x) => x.bal);
    const top = bad[0];
    const goalNote = d.program
      ? `On the program they are debt-free in ${PROGRAM.term / 12} years, against about ${Math.round(STATUS_QUO.months / 12)} on minimums.`
      : 'Ask what being debt free would change for them, then come back to it when you present terms.';
    // One consolidated card: a row per topic, with the value, a status chip where it helps, and a one-line AI note.
    const row = (ic, k, v, chip, text) => `<li class="tp-row">
        <span class="tp-k">${icon(ic, 16)}${k}</span>
        <span class="tp-body">
          <span class="tp-line"><strong class="tp-v">${v}</strong>${chip || ''}</span>
          <span class="tp-note">${icon('sparkle', 14)}<span>${text}</span></span>
        </span>
      </li>`;
    const open = state.panelOpen
      ? ''
      : `<button class="btn btn-outlined btn-sm" type="button" data-action="toggle-panel" data-fid="snapOpen" aria-controls="insPanel">Open full insights</button>`;
    return `<section class="card tp" aria-labelledby="tpHead">
      <div class="tp-head">
        <h2 class="card-title" id="tpHead">Talking points</h2>
        <span class="chip chip-ai">${icon('sparkle', 14)}AI-generated</span>
        ${open}
      </div>
      <p class="tp-open">${icon('sparkle', 16)}<span><strong>Open with:</strong> ${talkingPoint(d)}</span></p>
      <ul class="tp-rows">
        ${row('trending-down', 'Hardship', CLIENT.hardship, '', `First late payment was ${CLIENT.firstLate} (${CLIENT.firstLateAgo}). Ask what changed in their income then.`)}
        ${row('target', 'Goal', CLIENT.goal, '', goalNote)}
        ${row('briefcase', 'Employment', CLIENT.employment, '', 'Ask about every income source and whether the change is permanent. It sets the deposit they can sustain.')}
        ${row('percent', 'Utilization', `${ut.pct}%`, `<span class="chip ${ul.chip}">${ul.label}</span>`, `${ut.maxed} of ${ut.cards} accounts are at 90% or more of their limit. Explain how that weighs on their score.`)}
        ${row('alert', 'In trouble', `${bad.length} of ${DEBTS.length} accounts`, `<span class="tp-v-sub">${money(badTotal)} combined</span>`, `Start with ${esc(top.name)}, the largest at ${money(top.bal)}${top.status === 'Charged-off' ? ' and already charged-off' : ''}. Then ${esc(bad[1].name)} (${money(bad[1].bal)}).`)}
      </ul>
    </section>`;
  }

  function debtAccountsPage() {
    const fmtUtil = (u) => (u === 100 ? '100%' : `${u.toFixed(2)}%`);
    const rows = DEBTS.map((d, i) => {
      const enroll = !state.program
        ? '<span class="is-muted">Pending program</span>'
        : `<span class="enroll"><button class="switch" type="button" role="switch" aria-checked="true" aria-label="Enrolled: ${esc(d.name)}" data-action="noop">${icon('check', 12)}</button><span class="enroll-l">Active</span></span>`;
      return `<tr class="row-${d.tint}">
        <td>${i + 1}</td><td>${enroll}</td><td>CBR</td>
        <th scope="row" class="creditor">${esc(d.cred)}</th>
        <td><input class="input input-cell" type="text" value="${money(d.bal)}.00" readonly aria-label="Est. debt, ${esc(d.name)}"></td>
        <td><input class="input input-cell" type="text" value="${money(d.last)}.00" readonly aria-label="Last payment, ${esc(d.name)}"></td>
        <td><span class="input input-cell input-date">${d.lastDate}${icon('calendar', 14)}</span></td>
        <td><input class="input input-cell${d.flag ? ' is-flag' : ''}" type="text" value="${d.no}" readonly aria-label="Account number, ${esc(d.name)}"></td>
        <td class="center">${state.program && d.months ? d.months : ''}</td>
        <td>${fmtUtil(d.util)}</td><td>Current</td>
        <td><select class="input input-cell" aria-label="Account type, ${esc(d.name)}"><option${d.acct === 'Credit Card' ? ' selected' : ''}>Credit Card</option><option${d.acct === 'Unsecured' ? ' selected' : ''}>Unsecured</option></select></td>
      </tr>`;
    }).join('');
    return `<section class="card card-flush" aria-labelledby="pageDebtTitle">
      <div class="card-pad">
      <div class="card-head">
        <h2 class="card-title" id="pageDebtTitle">Debt Accounts</h2>
        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-action="noop">New</button>
          <button class="btn btn-destructive" type="button" data-action="noop">Recalculate</button>
          <button class="btn btn-outlined btn-icon" type="button" data-action="noop" aria-label="Table settings">${icon('settings', 16)}</button>
        </div>
      </div>
      <button class="detail-bar" type="button" data-action="noop">${icon('plus', 16)}Utilization detail view</button>
      <p class="count-line">${DEBTS.length} items • Sorted by Default</p>
      </div>
      <div class="table-wrap"><table class="table table-debts">
        <caption class="sr-only">Debt accounts</caption>
        <thead><tr><th scope="col"><span class="sr-only">Row</span></th><th scope="col">Enroll</th><th scope="col">Source</th><th scope="col">Creditor</th><th scope="col">Est.Debt</th><th scope="col">Last Payment</th><th scope="col">Last Payment Date</th><th scope="col">Account #</th><th scope="col" class="center">Months to Settle</th><th scope="col">Utiliz</th><th scope="col">Aging</th><th scope="col">Acct Type</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
    </section>`;
  }

  /* ======================================================================
     Credit Report Insights
     ====================================================================== */
  /* Talking-point notes. Each lens in the panel is a "zone". The zone nearest the middle of the panel is highlighted as the DC scrolls,
     and each note carries a tag (Positive, Worth raising, Talking point) so meaning never rests on colour alone. */
  const TONE = {
    pos: { chip: 'chip-positive', ic: 'thumbs-up', tag: 'Positive for their credit' },
    neg: { chip: 'chip-warning', ic: 'alert', tag: 'Worth raising' },
    info: { chip: 'chip-info', ic: 'info', tag: 'Talking point' }
  };
  const zoneOn = (id) => (state.spot === id ? ' is-active' : '');
  const note = (tone, text) => `<p class="spot-note">${icon('sparkle', 14)}<span><span class="chip chip-sm ${TONE[tone].chip}">${icon(TONE[tone].ic, 12)}${TONE[tone].tag}</span>${text}</span></p>`;

  // Shared figures, so the lenses and the client view always agree.
  function pathTotals() {
    const sqTotal = PROGRAM.enrolled + STATUS_QUO.interest;
    return { sqTotal, saved: sqTotal - PROGRAM.total };
  }
  function winPlan() {
    const share = PROGRAM.owed / PROGRAM.total;
    const fund = PROGRAM.deposit * share;
    const order = DEBTS.filter((x) => x.elig).sort((a, b) => a.settle - b.settle);
    let cum = 0;
    const rows = order.map((x, i) => {
      cum += x.settle;
      return { i: i + 1, x, month: Math.ceil(cum / fund - 1e-9) };
    });
    return { share, rows };
  }

  /* Client view: an optional small window that shows the part of the client's Financial Analysis that matches the lens in view.
     It is a simplified preview built from the same figures, not the real FA layout. */
  const CV = {
    story: { title: 'Your debt reality', needs: null, body: () => {
      const off = DEBTS.filter((x) => x.status === 'Charged-off').length;
      const late = DEBTS.filter((x) => x.status === 'Open · delinquent').length;
      return `<p class="cv-big">${money(sumOf(DEBTS, (x) => x.bal))}</p><p class="cv-cap">owed across ${DEBTS.length} unsecured accounts</p>
        <ul class="cv-rows"><li><span>Charged-off</span><strong>${off}</strong></li><li><span>Past due</span><strong>${late}</strong></li><li><span>Current</span><strong>${DEBTS.length - off - late}</strong></li></ul>`;
    } },
    timeline: { title: 'Unsecured debts', needs: null, body: () => {
      const top = DEBTS.slice().sort((a, b) => b.bal - a.bal).slice(0, 4);
      return `<ul class="cv-rows cv-bars">${top.map((x) => `<li><span>${esc(x.name)}</span><strong>${money(x.bal)}</strong><i style="width:${(x.bal / top[0].bal * 100).toFixed(1)}%"></i></li>`).join('')}</ul><p class="cv-cap">Largest 4 of ${DEBTS.length} accounts</p>`;
    } },
    afford: { title: 'Current plan vs. Resolution program', needs: 'program', body: () => `<div class="cv-cols">
        <div><p class="cv-k">Current plan</p><p class="cv-big">${money(STATUS_QUO.payment)}<small>/mo</small></p><p class="cv-cap">about ${Math.round(STATUS_QUO.months / 12)} years</p></div>
        <div class="cv-prog"><p class="cv-k">Resolution program</p><p class="cv-big">${money(PROGRAM.deposit)}<small>/mo</small></p><p class="cv-cap">${PROGRAM.term / 12} years</p></div>
      </div>` },
    paths: { title: 'Est. program total savings', needs: 'program', body: () => `<p class="cv-big cv-pos">${money(pathTotals().saved)}</p><p class="cv-cap">estimated savings compared with staying on minimums</p>` },
    win: { title: 'Next steps', needs: 'program', body: () => `<ol class="cv-steps"><li>Start your ${money(PROGRAM.deposit)}/mo deposit</li><li>First settlement around month ${winPlan().rows[0].month}</li><li>Debt-free in about ${PROGRAM.term / 12} years</li></ol>` }
  };

  function cvMain() {
    const d = state.ins.data;
    const spec = CV[state.cvKey] || CV.story;
    const body = spec.needs && !d[spec.needs]
      ? `<p class="cv-cap">${icon('lock', 14)}Appears after Program Generate.</p>`
      : spec.body();
    return `<p class="cv-section">${spec.title}</p>${body}`;
  }

  function clientViewWindow() {
    if (!state.ins.data) return '';
    return `<aside class="cv" id="cv" aria-labelledby="cvTitle">
      <header class="cv-head">${icon('eye', 14)}<h3 class="cv-title" id="cvTitle">What ${esc(CLIENT.name.split(' ')[0])} sees</h3>
        <button class="icon-btn icon-btn-sm" type="button" data-action="cv-toggle" data-fid="cvClose" aria-label="Close client view">${icon('x', 14)}</button></header>
      <div class="cv-main" id="cvMain">${cvMain()}</div>
      <p class="cv-foot">Simplified preview of the Financial Analysis. It follows the section you are viewing.</p>
    </aside>`;
  }

  function lockedCard(title, reason, will) {
    return `<section class="lens lens-locked" aria-labelledby="lk-${title.replace(/\W/g, '')}">
      <div class="lens-head">
        <h3 class="lens-title" id="lk-${title.replace(/\W/g, '')}">${title}</h3>
        <span class="lens-tools"><span class="chip chip-info">${icon('lock', 12)}Locked · ${reason}</span></span>
      </div>
      <div class="lock-body"><p>Unlocks: ${will}</p></div>
    </section>`;
  }

  function utilLevel(p) {
    if (p >= 90) return { label: 'Very high', chip: 'chip-negative', ic: 'alert', fill: 'gauge-neg' };
    if (p >= 50) return { label: 'High', chip: 'chip-warning', ic: 'alert', fill: 'gauge-warn' };
    if (p >= 30) return { label: 'Moderate', chip: 'chip-info', ic: 'info', fill: 'gauge-info' };
    return { label: 'Low', chip: 'chip-positive', ic: 'check-circle', fill: 'gauge-pos' };
  }
  function utilSummary() {
    const bal = sumOf(DEBTS, (x) => x.bal);
    const limit = sumOf(DEBTS, (x) => x.limit);
    return { bal, limit, pct: Math.round(bal / limit * 100), cards: DEBTS.length, maxed: DEBTS.filter((x) => x.util >= 90).length };
  }

  function storyCard() {
    const tl = buildTimeline();
    const tile = (k, v, s, extra) => `<div class="tile"><span class="tile-k">${k}</span><span class="tile-v">${v}</span><span class="tile-s">${s}</span>${extra || ''}</div>`;
    return `<section class="lens spot-zone${zoneOn('story')}" aria-labelledby="kmTitle" data-spot="story" data-cv="story">
      <div class="lens-head"><h3 class="lens-title" id="kmTitle">Key moments</h3></div>
      <div class="stat-grid">
        ${tile('Oldest account', '2001-01-09', 'Closed sales financing · 25.8 yrs')}
        ${tile('First delinquency', '2024-09-01', '25 mo. ago', `<span class="chip chip-ai">${icon('sparkle', 14)}Inflection point</span>`)}
        ${tile('First charge-off', '2025-02-09', '20 mo. ago')}
        ${tile('Peak borrowing year', String(tl.peak.year), `${tl.peak.total} opens vs. ${tl.avg.toFixed(1)}/yr avg`)}
      </div>
      <div class="spot-notes">
        ${note('pos', 'Nearly 24 years passed before the first late payment. A 25.8-year credit history is a strength, so say so early and frame the hardship as a life event, not a habit.')}
        ${note('neg', 'The first charge-off followed within 5 months of the first late payment. Frame the program as the way to stop that slide.')}
      </div>
    </section>`;
  }

  function timelineCard(d) {
    const tl = buildTimeline();
    const tagged = d.program;
    const sel = state.timeline.year || tl.peak.year;
    const hasUnknown = tl.unknown.total > 0;
    const cols = tl.cols.length + (hasUnknown ? 1 : 0);
    const style = `style="--cols:${cols}"`;

    const notice = hasUnknown
      ? `<p class="notice notice-warning" role="status">${icon('alert', 16)}<span><strong>${tl.unknown.total} of ${tl.all} accounts are missing open dates.</strong> They are grouped under "n/a" and left off the year-by-year view. The rest of the timeline is unaffected.</span></p>`
      : '';

    const firstEv = EVENTS[0];
    const eligPeak = DEBTS.filter((x) => x.elig && x.year === tl.peak.year).length;
    const eligAll = DEBTS.filter((x) => x.elig).length;
    const headline = `Borrowing peaked in <strong>${tl.peak.year}</strong> with ${tl.peak.total} new accounts, about ${Math.round(tl.peak.total / tl.avg)}× the yearly average. The first late payment came in <strong>${firstEv.year}</strong>, ${firstEv.year - tl.peak.year} years later.${tagged ? ` ${eligPeak} of the ${eligAll} program-eligible debts started in ${tl.peak.year}.` : ''}`;

    const seg = (n, ind) => `<i class="seg ${ind.id}" style="flex:${n}"></i>`;
    const maxY = Math.ceil((Math.max(tl.peak.total, tl.unknown.total) + 1) / 2) * 2;
    const hPct = (n) => (n / maxY * 100).toFixed(2);
    const yTicks = Array.from({ length: maxY / 2 + 1 }, (_, k) => k * 2);
    const bars = tl.cols.map((c) => {
      if (!c.total) return '<div class="tl-cell"></div>';
      const segs = IND.map((ind, i) => (c.counts[i] ? seg(c.counts[i], ind) : '')).join('');
      const isPeak = c.year === tl.peak.year;
      const cls = `tl-cell${isPeak ? ' is-peak' : ''}${c.year === sel ? ' is-selected' : ''}`;
      return `<button class="${cls}" style="--h:${hPct(c.total)}" type="button" data-action="tl-year" data-year="${c.year}" data-fid="tl-${c.year}" aria-pressed="${c.year === sel}" aria-label="${c.year}: ${c.total} new ${c.total === 1 ? 'account' : 'accounts'}${isPeak ? ', peak year' : ''}"><span class="tl-val">${c.total}</span><span class="tl-bar">${segs}</span></button>`;
    }).join('');
    const unkBar = hasUnknown
      ? `<div class="tl-cell tl-cell-unknown" style="--h:${hPct(tl.unknown.total)}" role="img" aria-label="${tl.unknown.total} accounts with no open date"><span class="tl-val">${tl.unknown.total}</span><span class="tl-bar">${IND.map((ind, i) => (tl.unknown.counts[i] ? seg(tl.unknown.counts[i], ind) : '')).join('')}</span></div>`
      : '';
    const axis = tl.cols.map((c) => `<span>${(c.year - FIRST_YEAR) % 5 === 0 ? c.year : ''}</span>`).join('') + (hasUnknown ? '<span>n/a</span>' : '');

    const evPills = EVENTS.map((e, idx) => `<div class="ev ev-${e.tone}" style="grid-column:${e.year - FIRST_YEAR + 1};--top:${4 + idx * 28}px"><span class="ev-line"></span><span class="ev-pill">${icon('flag', 12)}${e.label}</span></div>`).join('');

    const selCol = tl.cols.find((c) => c.year === sel);
    const opened = DEBTS.filter((x) => x.year === sel && !(state.scenario.partial && x.id === 'B'));
    const readout = selCol && selCol.total
      ? `<strong>${sel}</strong><span>${selCol.total} new ${selCol.total === 1 ? 'account' : 'accounts'}${opened.length ? `, including ${opened.map((x) => esc(x.name)).join(', ')}` : ''}</span>`
      : `<strong>${sel}</strong><span>No new accounts opened</span>`;

    const body = `<div class="tl">
      <p class="tl-lane-label">New accounts opened per year, by industry. Select a year for detail.</p>
      <div class="tl-chart" ${style}>
        <div class="tl-y" aria-hidden="true">${yTicks.map((t) => `<span style="bottom:${hPct(t)}%">${t}</span>`).join('')}</div>
        <div class="tl-plot">
          <div class="tl-lines" aria-hidden="true">${yTicks.map((t) => `<i style="bottom:${hPct(t)}%"></i>`).join('')}</div>
          <div class="tl-grid" data-ind="${state.timeline.ind || ''}">${bars}${unkBar}</div>
          <div class="tl-overlay">${evPills}</div>
        </div>
        <span></span>
        <div class="tl-axis">${axis}</div>
      </div>
      <p class="tl-readout" aria-live="polite">${readout}</p>
    </div>`;

    const legend = `<div class="legend" aria-label="Legend">
      ${tl.legend.map((l) => `<button class="legend-btn" type="button" data-action="tl-ind" data-ind="${l.id}" data-fid="ind-${l.id}" aria-pressed="${state.timeline.ind === l.id}" title="Highlight ${l.label}"><i class="swatch ${l.id}"></i>${l.label} ${l.n}</button>`).join('')}
    </div>`;

    return `<section class="lens spot-zone${zoneOn('timeline')}" aria-labelledby="tlTitle" data-spot="timeline" data-cv="timeline">
      <div class="lens-head">
        <div><h3 class="lens-title" id="tlTitle">Timeline</h3><p class="lens-desc">${tl.all} accounts on file · opening chronology, borrowing velocity and industry mix</p></div>
      </div>
      <div class="spot-notes">${note('info', headline)}</div>
      ${notice}${body}${legend}
    </section>`;
  }

  function affordCard(d) {
    if (!d.cfa) return lockedCard('Affordability', 'Requires CFA completion', 'verified disposable income vs. deposit, headroom rating and budget breakdown.');
    const b = budget();
    const has = d.program;
    const dep = PROGRAM.deposit;
    const head = b.disposable - dep;
    const r = has ? rate(b.disposable, dep) : null;
    const tile = (k, v, s, extra) => `<div class="tile"><span class="tile-k">${k}</span><span class="tile-v ${extra || ''}">${v}</span><span class="tile-s">${s}</span></div>`;

    let bar = '';
    if (has) {
      const scale = head >= 0 ? INCOME.net : b.total + dep;
      const pct = (n) => `${(n / scale * 100).toFixed(2)}%`;
      bar = `<div role="img" aria-label="Monthly net income ${money(INCOME.net)}: living costs ${money(b.total)}, program deposit ${money(dep)}, ${head >= 0 ? 'left over ' + money(head) : 'short by ' + money(-head)}">
        <div class="budget-bar">
          <span class="bar-seg bar-costs" style="width:${pct(b.total)}"></span>
          <span class="bar-seg bar-deposit" style="width:${pct(dep)}"></span>
          ${head >= 0 ? `<span class="bar-seg bar-left" style="width:${pct(head)}"></span>` : `<span class="bar-marker" style="left:${pct(INCOME.net)}"></span>`}
        </div></div>
        <div class="bar-legend" aria-hidden="true">
          <span class="legend-item"><i class="swatch swatch-costs"></i>Living costs ${money(b.total)}</span>
          <span class="legend-item"><i class="swatch swatch-deposit"></i>Program deposit ${money(dep)}</span>
          <span class="legend-item"><i class="swatch ${head >= 0 ? 'swatch-left' : 'swatch-short'}"></i>${head >= 0 ? 'Left over' : 'Short by'} ${money(Math.abs(head))}</span>
          ${head < 0 ? `<span class="legend-item">| Net income ${money(INCOME.net)}</span>` : ''}
        </div>`;
    }

    const alert = has && head < 0
      ? `<p class="notice notice-negative" role="alert">${icon('alert', 20)}<span><strong>Affordability Alert: Inadequate Headroom.</strong> Verified disposable income of ${money(b.disposable)}/mo is ${money(-head)} short of the ${money(dep)}/mo deposit. Other lenses are not affected.</span></p>`
      : '';
    const pending = !has
      ? `<p class="notice notice-info" role="status">${icon('info', 16)}<span>Headroom vs. the program deposit appears after Program Generate.</span></p>`
      : '';

    const breakdown = state.budgetOpen
      ? `<div class="table-wrap"><table class="table">
          <caption class="sr-only">Monthly budget breakdown from the verified CFA</caption>
          <thead><tr><th scope="col">Budget line</th><th scope="col" class="num">Monthly</th></tr></thead>
          <tbody>
            <tr><th scope="row" class="strong">Net income</th><td class="num strong">${money(INCOME.net)}</td></tr>
            ${b.costs.map(([k, v]) => `<tr><th scope="row">${k}</th><td class="num">-${money(v)}</td></tr>`).join('')}
          </tbody>
          <tfoot><tr><th scope="row">Verified disposable income</th><td class="num">${money(b.disposable)}</td></tr></tfoot></table></div>`
      : '';

    return `<section class="lens spot-zone${zoneOn('afford')}" aria-labelledby="affTitle" data-spot="afford" data-cv="afford">
      <div class="lens-head"><h3 class="lens-title" id="affTitle">Affordability</h3></div>
      <p class="lens-desc">Verified disposable income vs. the program deposit.</p>
      ${alert}${pending}
      <div class="afford-stats">
        ${tile('Verified disposable income', `${money(b.disposable)}/mo`, 'From CFA budget')}
        ${tile('Program deposit', has ? `${money(dep)}/mo` : '-', has ? `${PROGRAM.term} month term` : 'Needs a program offer')}
        <div class="tile"><span class="tile-k">Headroom</span><span class="tile-v ${has ? (head < 0 ? 'is-neg' : '') : ''}">${has ? `${moneyS(head)}/mo` : '-'}</span>${r ? `<span class="chip ${r.chip}">${icon(r.ic, 14)}${r.label}</span><span class="tile-s">${r.note}</span>` : '<span class="tile-s">Needs a program offer</span>'}</div>
      </div>
      ${bar}
      <div><button class="btn btn-text btn-flush" type="button" data-action="budget-toggle" data-fid="budget" aria-expanded="${state.budgetOpen}">${icon(state.budgetOpen ? 'chevron-up' : 'chevron-down', 14)}${state.budgetOpen ? 'Hide budget breakdown' : 'View budget breakdown'}</button></div>
      ${breakdown}
      <div class="spot-notes">${has
        ? (head < 0
          ? note('neg', 'Can any of the living costs come down, or is there other income, before they enroll?')
          : note('pos', `Headroom of ${money(head)}/mo after the deposit. Confirm they are comfortable with it, then tie it to their goal.`))
        : note('info', `Verified disposable income is ${money(b.disposable)}/mo. Ask what they can commit comfortably before you quote a deposit.`)}</div>
    </section>`;
  }

  function twoPathsCard(d) {
    if (!d.program) return lockedCard('Two Paths', 'Requires Program Offer generation', 'a side-by-side of staying on minimums vs. the program, with total cost, time and monthly cash flow.');
    const sq = STATUS_QUO;
    const pg = PROGRAM;
    const fees = pg.total - pg.owed;
    const { sqTotal, saved } = pathTotals();
    const years = Math.round((sq.months - pg.term) / 12);
    const disp = d.cfa ? budget().disposable : null;
    const row = (label, a, b2, diff, aNeg, bNeg) => `<tr><th scope="row">${label}</th><td class="num${aNeg ? ' is-neg' : ''}">${a}</td><td class="num${bNeg ? ' is-neg' : ''}">${b2}</td><td class="num diff diff-good">${diff}</td></tr>`;
    const left = disp === null
      ? '<tr><th scope="row">Money left over monthly</th><td class="num is-muted">-</td><td class="num is-muted">-</td><td class="num is-muted">Needs CFA</td></tr>'
      : row('Money left over monthly', `${money(disp - sq.payment)}/mo`, `${money(disp - pg.deposit)}/mo`, `${moneyS(sq.payment - pg.deposit)}/mo`, disp - sq.payment < 0, disp - pg.deposit < 0);
    return `<section class="lens spot-zone${zoneOn('paths')}" aria-labelledby="tpTitle" data-spot="paths" data-cv="paths">
      <div class="lens-head">
        <div><h3 class="lens-title" id="tpTitle">Two Paths</h3><p class="lens-desc">If nothing changes vs. on the program</p></div>
      </div>
      <div class="spot-notes">${note('pos', `Same ${money(pg.enrolled)} of debt: <strong>${money(saved)} cheaper</strong> and about <strong>${years} years faster</strong> on the program. Staying on minimums adds ${money(sq.interest)} in interest.`)}</div>
      <div class="table-wrap"><table class="table">
        <caption class="sr-only">Status quo compared with the program</caption>
        <thead><tr><th scope="col"><span class="sr-only">Measure</span></th><th scope="col" class="num">If nothing changes</th><th scope="col" class="num th-program">On the program</th><th scope="col" class="num">Difference</th></tr></thead>
        <tbody>
          ${row('Pays each month', `${money(sq.payment)}/mo`, `${money(pg.deposit)}/mo`, `${moneyS(pg.deposit - sq.payment)}/mo`)}
          ${row('Until debt-free', `${sq.months} months (~${Math.round(sq.months / 12)} yrs)`, `${pg.term} months (~${pg.term / 12} yrs)`, `${moneyS(pg.term - sq.months).replace('$', '')} months`)}
          ${row('Owes to creditors', money(pg.enrolled), money(pg.owed), moneyS(pg.owed - pg.enrolled))}
          ${row('Interest / program fees', money(sq.interest), money(fees), moneyS(fees - sq.interest))}
          ${row('Total they will pay', money(sqTotal), money(pg.total), moneyS(pg.total - sqTotal))}
          ${left}
        </tbody>
      </table></div>
    </section>`;
  }

  function firstWinCard(d) {
    if (!d.program) return lockedCard('First Win', 'Requires Program Offer generation', 'the first likely settlement, the settlement order and a funding timeline from the verified deposit.');
    const { share, rows } = winPlan();
    const first = rows[0];
    return `<section class="lens spot-zone${zoneOn('win')}" aria-labelledby="fwTitle" data-spot="win" data-cv="win">
      <div class="lens-head">
        <div><h3 class="lens-title" id="fwTitle">First Win</h3><p class="lens-desc">Settlement order using the program deposit</p></div>
      </div>
      <div class="spot-notes">${note('pos', `<strong>First likely win: ${esc(first.x.name)} at ${money(first.x.settle)}</strong>, around month ${first.month}. An early win builds their confidence in the plan.`)}</div>
      <div class="table-wrap"><table class="table">
        <caption class="sr-only">Expected settlement order</caption>
        <thead><tr><th scope="col">#</th><th scope="col">Creditor</th><th scope="col" class="num">Balance</th><th scope="col" class="num">Est. settlement</th><th scope="col" class="num">Funded by</th><th scope="col">Status</th></tr></thead>
        <tbody>${rows.slice(0, 5).map((r) => `<tr><td>${r.i}</td><th scope="row" class="strong">${esc(r.x.name)}</th><td class="num">${money(r.x.bal)}</td><td class="num">${money(r.x.settle)}</td><td class="num">Month ${r.month}</td><td><span class="chip ${STATUS_CHIP[r.x.status]}">${r.x.status}</span></td></tr>`).join('')}</tbody>
      </table></div>
      <p class="lens-desc">Showing the first 5 of ${rows.length} settlements. Uses the ${money(PROGRAM.deposit)}/mo deposit, with about ${Math.round(share * 100)}% of each deposit funding settlements. Settlement amounts are estimates.</p>
    </section>`;
  }

  function insightsBody() {
    const i = state.ins;
    if (!i.data) {
      if (state.inflight) {
        return `<div class="ins" aria-busy="true"><p class="ins-updated"><span class="spinner" aria-hidden="true"></span>Requesting insights from the credit pull...</p><div class="skel"></div><div class="skel"></div><div class="skel"></div></div>`;
      }
      return `<div class="ins"><p class="notice notice-negative" role="alert">${icon('alert', 20)}<span><strong>Credit Report Insights are unavailable.</strong> The rest of the debt table still works. Try again in a moment.</span><button class="btn btn-outlined" type="button" data-action="refresh" data-fid="retry">Retry</button></p></div>`;
    }
    const d = i.data;
    const post = d.cfa || d.program;
    const meta = `<div class="ins-meta">
      <span class="chip chip-accent">${post ? 'Post-UW · Program-aligned' : 'Pre-UW · Diagnostic only'}</span>
      <span class="ins-updated">${state.inflight ? '<span class="spinner" aria-hidden="true"></span>Refreshing insights...' : `Updated ${timeStr(i.fetchedAt)} · ${esc(i.source)}`}</span>
      <button class="btn btn-outlined" type="button" data-action="refresh" data-fid="refresh"${state.inflight ? ' disabled' : ''}>${icon('refresh', 16)}Refresh insights</button>
    </div>`;
    const stale = i.stale
      ? `<p class="notice notice-warning" role="status">${icon('alert', 16)}<span><strong>Showing insights from ${timeStr(i.fetchedAt)}.</strong> The latest refresh failed, so these may be out of date.</span><button class="btn btn-outlined" type="button" data-action="refresh" data-fid="retry"${state.inflight ? ' disabled' : ''}>Retry</button></p>`
      : '';
    return `<div class="ins" aria-busy="${state.inflight}">
      ${meta}${stale}
      <div class="band-group">
        <div class="band"><h3 class="band-title">The client’s debt reality</h3></div>
        ${storyCard(d)}${negativeCard()}${timelineCard(d)}
      </div>
      <div class="band-group">
        <div class="band"><h3 class="band-title">The client’s debt solution program</h3></div>
        ${d.cfa && d.program ? '' : '<p class="lens-desc">Unlocks after CFA completion and Program Generate.</p>'}
        ${affordCard(d)}${twoPathsCard(d)}${firstWinCard(d)}
      </div>
    </div>`;
  }

  /* ======================================================================
     Render
     ====================================================================== */
  function renderWorkspace() {
    // Side by side with the panel open: Debt Accounts sits under the left content and scrolls with it. Otherwise it spans the page below.
    const sideDebts = state.panelOpen;
    // Talking points sit above Program Terms Estimate in one stack. Once there is room, the stack sits to the left of Debt Account Summary.
    const main = `<div class="work-main" id="workMain"><div class="work-cards"><div class="work-stack">${snapshotCard()}${termsCard()}</div>${summaryCard()}</div>${sideDebts ? debtAccountsPage() : ''}</div>`;
    // The handle collapses the panel. When it is closed, a labelled tab stays on the right edge to bring it back.
    const side = state.panelOpen
      ? `<div class="split-divider">
          <div class="split-resizer" role="separator" aria-orientation="vertical" tabindex="0" data-fid="resizer" aria-controls="insPanel" aria-label="Resize Credit Report Insights panel" aria-valuemin="${PANEL.min}" aria-valuemax="${panelMax()}" aria-valuenow="${state.panelW}" aria-valuetext="${state.panelW} pixels wide">${icon('grip', 12)}</div>
          <button class="split-collapse" type="button" data-action="toggle-panel" data-fid="handle" aria-expanded="true" aria-controls="insPanel" aria-label="Collapse Credit Report Insights panel">${icon('chevron-right', 12)}</button>
        </div>
        <aside class="split-panel${state.cvOpen ? ' has-cv' : ''}" id="insPanel" aria-labelledby="panelTitle" style="width:${state.panelW}px">
          <header class="panel-head"><h2 class="panel-title" id="panelTitle">Credit Report Insights</h2>
            <span class="panel-tools">
              <button class="btn btn-secondary btn-sm" type="button" data-action="cv-toggle" data-fid="cvBtn" aria-pressed="${state.cvOpen}" aria-controls="cv">${icon('eye', 14)}Client view</button>
              <button class="icon-btn" type="button" data-action="toggle-panel" data-fid="panelClose" aria-label="Collapse Credit Report Insights panel">${icon('x', 20)}</button>
            </span></header>
          <div class="panel-body">${insightsBody()}</div>
          ${state.cvOpen ? clientViewWindow() : ''}
        </aside>`
      : `<button class="split-tag" type="button" data-action="toggle-panel" data-fid="handle" aria-expanded="false" aria-controls="insPanel">${icon('chevron-left', 16)}Credit Report Insights${state.unseen ? '<span class="tab-dot" aria-hidden="true"></span><span class="sr-only"> (updated)</span>' : ''}</button>
        <button class="split-tab" type="button" data-action="toggle-panel" tabindex="-1" aria-hidden="true">${icon('triangle-right', 12)}</button>`;
    $('#workspace').className = `workspace${state.panelOpen ? ' is-fit' : ' panel-closed'}`;
    $('#workspace').innerHTML = `<div class="split-region">${main}${side}</div>${sideDebts ? '' : `<div class="page-below">${debtAccountsPage()}</div>`}`;
  }

  function syncControls() {
    $$('[data-action="scenario"]').forEach((b) => b.setAttribute('aria-pressed', String(String(state.scenario[b.dataset.key]) === b.dataset.value)));
    $('#btnCfa').disabled = state.cfa;
    $('#btnProgram').disabled = state.program;
  }

  /* Spotlight: as the panel scrolls, the zone nearest the middle gets the highlight, and the client view window follows it. */
  function bindSpotlight() {
    const body = $('.panel-body');
    if (!body) return;
    const zones = $$('.spot-zone', body);
    if (!zones.length) return;
    let queued = false;
    const apply = () => {
      queued = false;
      const box = body.getBoundingClientRect();
      const mid = box.top + box.height * 0.4;
      let best = zones[0];
      let gap = Infinity;
      zones.forEach((z) => {
        const r = z.getBoundingClientRect();
        const g = r.top <= mid && r.bottom >= mid ? 0 : Math.min(Math.abs(r.top - mid), Math.abs(r.bottom - mid));
        if (g < gap) { gap = g; best = z; }
      });
      zones.forEach((z) => z.classList.toggle('is-active', z === best));
      if (state.spot !== best.dataset.spot) {
        state.spot = best.dataset.spot;
        state.cvKey = best.dataset.cv;
        const main = $('#cvMain');
        if (main) main.innerHTML = cvMain();
      }
    };
    body.addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(apply); } }, { passive: true });
    apply();
  }

  function render() {
    const act = document.activeElement;
    const fid = act && act.dataset ? act.dataset.fid : null;
    const pageTop = $('#workspace').scrollTop;
    const mainTop = $('#workMain') ? $('#workMain').scrollTop : 0;
    const panel = $('.panel-body');
    const panelTop = panel ? panel.scrollTop : 0;
    renderWorkspace();
    syncControls();
    $('#workspace').scrollTop = pageTop;
    if ($('#workMain')) $('#workMain').scrollTop = mainTop;
    if ($('.panel-body')) $('.panel-body').scrollTop = panelTop;
    bindSpotlight();
    if (fid) { const el = document.querySelector(`[data-fid="${fid}"]`); if (el) el.focus({ preventScroll: true }); }
  }

  /* ======================================================================
     Events
     ====================================================================== */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if (!t) return;
    switch (t.dataset.action) {
      case 'noop':
        toast('This control is on the page today and is not part of the prototype.');
        break;
      case 'toggle-panel':
        state.panelOpen = !state.panelOpen;
        if (state.panelOpen) state.unseen = false;
        render();
        break;
      case 'evt-cfa':
        if (state.cfa) break;
        state.cfa = true;
        log('event', 'CFA_COMPLETED received');
        requestInsights('CFA completed');
        break;
      case 'evt-program':
        if (state.program) break;
        state.program = true;
        log('event', 'PROGRAM_GENERATED received');
        requestInsights('Program generated');
        break;
      case 'evt-reset':
        state.cfa = false;
        state.program = false;
        log('proto', 'Reset to Pre-UW (prototype control). Credit pull replayed.');
        requestInsights('Credit pull completed');
        break;
      case 'evt-reopen': {
        const when = state.ins.fetchedAt ? timeStr(state.ins.fetchedAt) : 'n/a';
        log('cache', `Lead re-opened. No state change, so no request. Served cached insights from ${when}.`);
        toast('Lead re-opened. No request sent, showing cached insights.');
        render();
        break;
      }
      case 'scenario':
        state.scenario[t.dataset.key] = t.dataset.value === 'true';
        log('proto', `Scenario changed: ${t.dataset.key} = ${t.dataset.value} (prototype control).`);
        render();
        break;
      case 'refresh':
        requestInsights('Manual refresh');
        break;
      case 'tl-year':
        state.timeline.year = Number(t.dataset.year);
        render();
        break;
      case 'tl-ind':
        state.timeline.ind = state.timeline.ind === t.dataset.ind ? null : t.dataset.ind;
        render();
        break;
      case 'budget-toggle':
        state.budgetOpen = !state.budgetOpen;
        render();
        break;
      case 'cv-toggle':
        state.cvOpen = !state.cvOpen;
        render();
        if (!state.cvOpen) { const btn = $('[data-fid="cvBtn"]'); if (btn) btn.focus(); }
        break;
      default:
        break;
    }
  });

  /* ======================================================================
     Resizable insights panel. Drag the divider, or focus it and use the arrow keys. Double-click resets the width.
     ====================================================================== */
  function panelMax() { return Math.max(PANEL.min, Math.min(960, window.innerWidth - 520)); }
  function setPanelW(w) {
    state.panelW = Math.round(Math.min(panelMax(), Math.max(PANEL.min, w)));
    const panel = $('.split-panel');
    if (panel) panel.style.width = `${state.panelW}px`;
    const bar = $('.split-resizer');
    if (bar) {
      bar.setAttribute('aria-valuemax', String(panelMax()));
      bar.setAttribute('aria-valuenow', String(state.panelW));
      bar.setAttribute('aria-valuetext', `${state.panelW} pixels wide`);
    }
  }

  document.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || !e.target.closest('.split-resizer')) return;
    e.preventDefault();
    const x0 = e.clientX;
    const w0 = state.panelW;
    document.body.classList.add('is-resizing');
    const move = (ev) => setPanelW(w0 + x0 - ev.clientX);
    const stop = () => {
      document.body.classList.remove('is-resizing');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
  });

  document.addEventListener('keydown', (e) => {
    if (!e.target.closest || !e.target.closest('.split-resizer')) return;
    const step = e.shiftKey ? 96 : 24;
    // The panel is on the right, so moving the divider left makes it wider.
    if (e.key === 'ArrowLeft') setPanelW(state.panelW + step);
    else if (e.key === 'ArrowRight') setPanelW(state.panelW - step);
    else if (e.key === 'Home') setPanelW(PANEL.min);
    else if (e.key === 'End') setPanelW(panelMax());
    else return;
    e.preventDefault();
  });

  document.addEventListener('dblclick', (e) => { if (e.target.closest('.split-resizer')) setPanelW(PANEL.def); });
  window.addEventListener('resize', () => { if (state.panelOpen) setPanelW(state.panelW); });

  /* ======================================================================
     Init
     ====================================================================== */
  log('event', 'Lead intake: credit pull, CFA and Program Generate already complete');
  requestInsights('Lead opened');
})();
