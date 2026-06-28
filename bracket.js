const FLAGS = {
  'South Africa': 'za', 'Canada': 'ca', 'Netherlands': 'nl', 'Morocco': 'ma',
  'Germany': 'de', 'Paraguay': 'py', 'France': 'fr', 'Sweden': 'se',
  'Brazil': 'br', 'Japan': 'jp', 'Ivory Coast': 'ci', 'Norway': 'no',
  'Mexico': 'mx', 'Ecuador': 'ec', 'England': 'gb-eng', 'DR Congo': 'cd',
  'United States': 'us', 'Bosnia and Herzegovina': 'ba', 'Belgium': 'be',
  'Senegal': 'sn', 'Portugal': 'pt', 'Croatia': 'hr', 'Spain': 'es',
  'Austria': 'at', 'Argentina': 'ar', 'Cape Verde': 'cv', 'Australia': 'au',
  'Egypt': 'eg', 'Switzerland': 'ch', 'Algeria': 'dz', 'Colombia': 'co', 'Ghana': 'gh'
};

const STORAGE_KEY = 'fifa2026-bracket-v1';

/** Official kickoff times (local venue timezone) — source: FIFA World Cup 2026 schedule */
const MATCH_KICKOFFS = {
  73: '2026-06-28T12:00:00-07:00',
  74: '2026-06-29T16:30:00-04:00',
  75: '2026-06-29T19:00:00-06:00',
  76: '2026-06-29T12:00:00-05:00',
  77: '2026-06-30T17:00:00-04:00',
  78: '2026-06-30T12:00:00-05:00',
  79: '2026-06-30T19:00:00-06:00',
  80: '2026-07-01T12:00:00-04:00',
  81: '2026-07-01T17:00:00-07:00',
  82: '2026-07-01T13:00:00-07:00',
  83: '2026-07-02T19:00:00-04:00',
  84: '2026-07-02T12:00:00-07:00',
  85: '2026-07-02T20:00:00-07:00',
  86: '2026-07-03T18:00:00-04:00',
  87: '2026-07-03T20:30:00-05:00',
  88: '2026-07-03T13:00:00-05:00',
  89: '2026-07-04T17:00:00-04:00',
  90: '2026-07-04T12:00:00-05:00',
  91: '2026-07-05T16:00:00-04:00',
  92: '2026-07-05T18:00:00-06:00',
  93: '2026-07-06T14:00:00-05:00',
  94: '2026-07-06T17:00:00-07:00',
  95: '2026-07-07T12:00:00-04:00',
  96: '2026-07-07T13:00:00-07:00',
  97: '2026-07-09T16:00:00-04:00',
  98: '2026-07-10T12:00:00-07:00',
  99: '2026-07-11T17:00:00-04:00',
  100: '2026-07-11T20:00:00-05:00',
  101: '2026-07-14T14:00:00-05:00',
  102: '2026-07-15T15:00:00-04:00',
  103: '2026-07-18T17:00:00-04:00',
  104: '2026-07-19T15:00:00-04:00'
};

const BDT_DATE_FORMAT = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Dhaka',
  weekday: 'short',
  day: 'numeric',
  month: 'short'
});

const BDT_TIME_FORMAT = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Dhaka',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
});

const MATCHES = {
  73: { round: 'r32', team1: 'South Africa', team2: 'Canada', next: 90, slot: 1 },
  74: { round: 'r32', team1: 'Germany', team2: 'Paraguay', next: 89, slot: 1 },
  75: { round: 'r32', team1: 'Netherlands', team2: 'Morocco', next: 90, slot: 2 },
  76: { round: 'r32', team1: 'Brazil', team2: 'Japan', next: 91, slot: 1 },
  77: { round: 'r32', team1: 'France', team2: 'Sweden', next: 89, slot: 2 },
  78: { round: 'r32', team1: 'Ivory Coast', team2: 'Norway', next: 91, slot: 2 },
  79: { round: 'r32', team1: 'Mexico', team2: 'Ecuador', next: 92, slot: 1 },
  80: { round: 'r32', team1: 'England', team2: 'DR Congo', next: 92, slot: 2 },
  81: { round: 'r32', team1: 'United States', team2: 'Bosnia and Herzegovina', next: 94, slot: 1 },
  82: { round: 'r32', team1: 'Belgium', team2: 'Senegal', next: 94, slot: 2 },
  83: { round: 'r32', team1: 'Portugal', team2: 'Croatia', next: 93, slot: 1 },
  84: { round: 'r32', team1: 'Spain', team2: 'Austria', next: 93, slot: 2 },
  85: { round: 'r32', team1: 'Switzerland', team2: 'Algeria', next: 96, slot: 1 },
  86: { round: 'r32', team1: 'Argentina', team2: 'Cape Verde', next: 95, slot: 1 },
  87: { round: 'r32', team1: 'Colombia', team2: 'Ghana', next: 96, slot: 2 },
  88: { round: 'r32', team1: 'Australia', team2: 'Egypt', next: 95, slot: 2 },

  89: { round: 'r16', feeds: [74, 77], next: 97, slot: 2 },
  90: { round: 'r16', feeds: [73, 75], next: 97, slot: 1 },
  91: { round: 'r16', feeds: [76, 78], next: 99, slot: 1 },
  92: { round: 'r16', feeds: [79, 80], next: 99, slot: 2 },
  93: { round: 'r16', feeds: [83, 84], next: 98, slot: 1 },
  94: { round: 'r16', feeds: [81, 82], next: 98, slot: 2 },
  95: { round: 'r16', feeds: [86, 88], next: 100, slot: 1 },
  96: { round: 'r16', feeds: [85, 87], next: 100, slot: 2 },

  97: { round: 'qf', feeds: [89, 90], next: 101, slot: 1 },
  98: { round: 'qf', feeds: [93, 94], next: 101, slot: 2 },
  99: { round: 'qf', feeds: [91, 92], next: 102, slot: 1 },
  100: { round: 'qf', feeds: [95, 96], next: 102, slot: 2 },

  101: { round: 'sf', feeds: [97, 98], next: 104, slot: 1, loserNext: 103, loserSlot: 1 },
  102: { round: 'sf', feeds: [99, 100], next: 104, slot: 2, loserNext: 103, loserSlot: 2 },

  103: { round: '3rd', feeds: [101, 102] },
  104: { round: 'final', feeds: [101, 102] }
};

const ROUND_ORDER = [
  { key: 'r32', label: 'Round of 32', ids: [73, 75, 74, 77, 83, 84, 81, 82, 76, 78, 79, 80, 86, 88, 85, 87] },
  { key: 'r16', label: 'Round of 16', ids: [90, 89, 93, 94, 91, 92, 95, 96] },
  { key: 'qf', label: 'Quarter-finals', ids: [97, 98, 99, 100] },
  { key: 'sf', label: 'Semi-finals', ids: [101, 102] }
];

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (_) {
    /* ignore corrupt storage */
  }
  return { winners: {}, teams: {} };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getWinner(matchId) {
  return state.winners[String(matchId)] || state.winners[matchId] || null;
}

function setWinner(matchId, team) {
  if (team) {
    state.winners[String(matchId)] = team;
  } else {
    delete state.winners[String(matchId)];
    delete state.winners[matchId];
  }
}

function flagUrl(country) {
  const code = FLAGS[country];
  return code ? `https://flagcdn.com/w40/${code}.png` : '';
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatKickoffBDT(matchId) {
  const iso = MATCH_KICKOFFS[matchId];
  if (!iso) return null;

  const date = new Date(iso);
  return {
    date: BDT_DATE_FORMAT.format(date),
    time: `${BDT_TIME_FORMAT.format(date)} BDT`
  };
}

function getTeam(matchId, slot) {
  const m = MATCHES[matchId];
  if (!m) return null;

  if (m.round === 'r32') {
    const key = `${matchId}-${slot}`;
    if (state.teams[key]) return state.teams[key];
    return slot === 1 ? m.team1 : m.team2;
  }

  if (m.round === '3rd') {
    return getLoser(m.feeds[slot - 1]);
  }

  return getWinner(m.feeds[slot - 1]);
}

function getMatchTeams(matchId) {
  return [getTeam(matchId, 1), getTeam(matchId, 2)];
}

function getLoser(matchId) {
  const winner = getWinner(matchId);
  if (!winner) return null;
  const [a, b] = getMatchTeams(matchId);
  return winner === a ? b : a;
}

/** Clear all winners downstream from a match (not the match itself). */
function clearDownstream(fromMatchId) {
  const visited = new Set();

  function walk(id) {
    if (visited.has(id)) return;
    visited.add(id);
    setWinner(id, null);

    const match = MATCHES[id];
    if (!match) return;

    if (match.next) walk(match.next);
    if (match.loserNext) walk(match.loserNext);

    for (const [mid, m] of Object.entries(MATCHES)) {
      if (m.feeds && m.feeds.includes(id)) {
        walk(Number(mid));
      }
    }
  }

  const source = MATCHES[fromMatchId];
  if (!source) return;

  if (source.next) walk(source.next);
  if (source.loserNext) walk(source.loserNext);

  for (const [mid, m] of Object.entries(MATCHES)) {
    if (m.feeds && m.feeds.includes(fromMatchId)) {
      walk(Number(mid));
    }
  }
}

function pickWinner(matchId, team) {
  const [t1, t2] = getMatchTeams(matchId);
  if (!team || (team !== t1 && team !== t2)) return;

  clearDownstream(matchId);

  if (getWinner(matchId) === team) {
    setWinner(matchId, null);
  } else {
    setWinner(matchId, team);
  }

  saveState();
  render();
}

function editTeam(matchId, slot, value) {
  const key = `${matchId}-${slot}`;
  state.teams[key] = value.trim();
  clearDownstream(matchId);
  saveState();
  render();
}

function renderTeamRow(matchId, slot, team, isWinner) {
  const empty = !team;
  const cls = ['team', empty ? 'empty' : '', isWinner ? 'winner' : ''].filter(Boolean).join(' ');
  const flag = team ? `<img src="${flagUrl(team)}" alt="">` : '';
  const label = empty ? 'TBD' : escapeHtml(team);
  const editable = MATCHES[matchId].round === 'r32' ? ' data-editable="true"' : '';

  return `
    <button type="button" class="${cls}"
      data-match="${matchId}"
      data-slot="${slot}"
      data-team="${escapeHtml(team || '')}"
      ${empty ? 'disabled' : ''}${editable}>
      ${flag}<span class="team-name">${label}</span>
    </button>`;
}

function renderMatch(matchId, extraClass = '', options = {}) {
  const { incoming = false } = options;
  const [t1, t2] = getMatchTeams(matchId);
  const winner = getWinner(matchId);
  const labels = { r32: 'R32', r16: 'R16', qf: 'QF', sf: 'SF', final: 'Final', '3rd': '3rd' };
  const round = MATCHES[matchId].round;
  const matchLabel = round === 'r32'
    ? `Match ${matchId}`
    : `${labels[round] || round} · Match ${matchId}`;

  const kickoff = formatKickoffBDT(matchId);
  const datetimeHtml = kickoff
    ? `<div class="match-datetime">
         <span class="match-date">${escapeHtml(kickoff.date)}</span>
         <span class="match-time">${escapeHtml(kickoff.time)}</span>
       </div>`
    : '';

  const slotClass = incoming ? ' has-incoming' : '';

  return `
    <div class="match-slot${slotClass}">
      <div class="match ${extraClass}">
        <div class="match-header">
          <div class="match-num">${matchLabel}</div>
          ${datetimeHtml}
        </div>
        ${renderTeamRow(matchId, 1, t1, winner === t1)}
        ${renderTeamRow(matchId, 2, t2, winner === t2)}
      </div>
    </div>`;
}

function renderRound(round) {
  const pairs = [];
  for (let i = 0; i < round.ids.length; i += 2) {
    pairs.push(round.ids.slice(i, i + 2));
  }

  let html = `
    <div class="round" data-round="${round.key}">
      <div class="round-label">${round.label}</div>
      <div class="round-matches">`;

  pairs.forEach((pair) => {
    html += '<div class="bracket-pair">';
    pair.forEach((id) => { html += renderMatch(id); });
    html += '</div>';
  });

  html += '</div></div>';
  return html;
}

function render() {
  const bracket = document.getElementById('bracket');
  const thirdPlace = document.getElementById('thirdPlace');
  if (!bracket || !thirdPlace) return;

  let html = ROUND_ORDER.map((round) => renderRound(round)).join('');

  html += `
    <div class="round final-column">
      <div class="round-label"><span class="trophy">🏆</span> Final</div>
      <div class="round-matches">
        <div class="bracket-pair final-receive">
          ${renderMatch(104, 'final-match', { incoming: true })}
        </div>
      </div>
    </div>`;

  bracket.innerHTML = html;

  thirdPlace.innerHTML = `
    <div class="third-place-label">Third place</div>
    ${renderMatch(103, 'third-place')}`;

  updateChampion();
}

function updateChampion() {
  const champion = getWinner(104);
  const nameEl = document.getElementById('championName');
  const banner = document.getElementById('championBanner');
  if (!nameEl || !banner) return;

  const existing = banner.querySelector('img');
  if (existing) existing.remove();

  if (champion) {
    nameEl.textContent = champion;
    nameEl.style.color = 'var(--gold)';
    const img = document.createElement('img');
    img.src = flagUrl(champion);
    img.alt = champion;
    banner.insertBefore(img, banner.firstChild);
  } else {
    nameEl.textContent = 'Pick every round…';
    nameEl.style.color = '';
  }
}

function handleBracketClick(event) {
  const teamBtn = event.target.closest('.team');
  if (!teamBtn || teamBtn.disabled || teamBtn.classList.contains('empty')) return;

  const matchId = Number(teamBtn.dataset.match);
  const team = teamBtn.dataset.team;
  pickWinner(matchId, team);
}

function handleBracketDblClick(event) {
  const teamBtn = event.target.closest('.team[data-editable="true"]');
  if (!teamBtn || teamBtn.disabled) return;

  event.preventDefault();

  const matchId = Number(teamBtn.dataset.match);
  const slot = Number(teamBtn.dataset.slot);
  const current = teamBtn.dataset.team;
  const next = prompt('Edit team name:', current);
  if (next !== null && next.trim()) {
    editTeam(matchId, slot, next.trim());
  }
}

function init() {
  const bracketWrap = document.querySelector('.bracket-wrap');
  const resetBtn = document.getElementById('resetBtn');
  const exportBtn = document.getElementById('exportBtn');

  if (!bracketWrap || !resetBtn || !exportBtn) return;

  bracketWrap.addEventListener('click', handleBracketClick);
  bracketWrap.addEventListener('dblclick', handleBracketDblClick);

  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all predictions?')) {
      state = { winners: {}, teams: {} };
      saveState();
      render();
    }
  });

  exportBtn.addEventListener('click', () => {
    const lines = ['FIFA World Cup 2026 — My Knockout Predictions', ''];
    const order = [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
      89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104];

    order.forEach((id) => {
      const winner = getWinner(id);
      if (winner) lines.push(`Match ${id}: ${winner}`);
    });

    if (getWinner(104)) {
      lines.push('', `🏆 Champion: ${getWinner(104)}`);
    }

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      const original = exportBtn.textContent;
      exportBtn.textContent = 'Copied!';
      setTimeout(() => { exportBtn.textContent = original; }, 1500);
    });
  });

  render();
}

document.addEventListener('DOMContentLoaded', init);
