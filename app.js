/* ===== app.js — main logic for index.html ===== */

// Telegram SVG icon
const TG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2AABEE">
  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.9 8.2l-2 9.3c-.1.7-.5.8-1.1.5l-3-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.6-5c.2-.2-.1-.3-.4-.1l-6.9 4.3-3-.9c-.6-.2-.7-.6.1-.9l11.6-4.5c.5-.2 1 .1.9.8z"/>
</svg>`;

// ===== STATE =====
let currentFilter = 'all';
let visibleCount  = 20;

function getFiltered() {
  return ALL_GROUPS.filter(g => currentFilter === 'all' || g.cat === currentFilter);
}

function renderGrid() {
  const filtered = getFiltered();
  const toShow   = filtered.slice(0, visibleCount);

  document.getElementById('groupCount').textContent =
    'Showing ' + toShow.length + ' of ' + filtered.length + ' groups';

  const grid = document.getElementById('groupGrid');
  grid.innerHTML = toShow.map(g => {
    const catLabel  = CAT_NAMES[g.cat] || g.cat;
    const badgeCls  = 'badge-' + g.badge;
    const badgeTxt  = BADGE_LABEL[g.badge] || g.badge.toUpperCase();
    const link      = g.link || PREMIUM_LINK;
    const featCls   = g.featured ? ' featured' : '';

    return `
    <div class="card${featCls}">
      <span class="card-num">#${g.num}</span>
      <div class="card-header">
        <div class="card-icon">${TG_SVG}</div>
        <div class="card-meta">
          <div class="card-name">${g.name}</div>
          <div class="card-cat">${catLabel}</div>
        </div>
        <span class="badge ${badgeCls}">${badgeTxt}</span>
      </div>
      <div class="card-desc">${g.desc}</div>
      <div class="card-footer">
        <div class="card-members">Members: <span>${g.members}</span></div>
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="join-btn">
          ${TG_SVG} Join
        </a>
      </div>
    </div>`;
  }).join('');

  const btn = document.getElementById('showMoreBtn');
  if (visibleCount >= filtered.length) {
    btn.classList.add('hidden');
  } else {
    btn.classList.remove('hidden');
    btn.textContent = 'Show ' + Math.min(10, filtered.length - visibleCount) + ' More Groups';
  }
}

function setFilter(type, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = type;
  visibleCount  = 20;
  renderGrid();
}

function showMore() {
  visibleCount += 10;
  renderGrid();
}

// ===== CANDLESTICK BG =====
function initCandleBg() {
  const canvas = document.getElementById('candleBg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }

  function draw() {
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const candleW = 18;
    const gap     = 10;
    const cols    = Math.ceil(W / (candleW + gap)) + 2;

    for (let i = 0; i < cols; i++) {
      const x    = i * (candleW + gap) - 10;
      const bull = Math.random() > 0.45;
      const bodyH = 20 + Math.random() * 80;
      const bodyY = 60 + Math.random() * (H - bodyH - 100);
      const wickT = bodyY - (10 + Math.random() * 30);
      const wickB = bodyY + bodyH + (10 + Math.random() * 30);

      ctx.strokeStyle = bull ? '#00E676' : '#FF1744';
      ctx.fillStyle   = bull ? '#00E676' : '#FF1744';
      ctx.lineWidth   = 2;

      // Wick
      ctx.beginPath();
      ctx.moveTo(x + candleW / 2, wickT);
      ctx.lineTo(x + candleW / 2, wickB);
      ctx.stroke();

      // Body
      ctx.fillRect(x, bodyY, candleW, bodyH);
    }
  }

  window.addEventListener('resize', resize);
  resize();
}

// ===== INTRO =====
function runIntro() {
  // Set coin image from file
  const coinImg = document.getElementById('coinImg');
  if (coinImg) {
    coinImg.src = 'bitcoin.png';
  }

  renderGrid();
  initCandleBg();

  setTimeout(() => {
    const intro = document.getElementById('intro');
    const site  = document.getElementById('site');
    intro.classList.add('hide');
    setTimeout(() => {
      intro.style.display = 'none';
      site.classList.add('visible');
    }, 420);
  }, 2700);
}

window.addEventListener('load', runIntro);
