/* ===== submit.js — logic for submit.html ===== */

// ===== CANDLESTICK BG =====
function initCandleBg2() {
  const canvas = document.getElementById('candleBg2');
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

    const candleW = 14;
    const gap     = 8;
    const cols    = Math.ceil(W / (candleW + gap)) + 2;

    for (let i = 0; i < cols; i++) {
      const x    = i * (candleW + gap) - 6;
      const bull = Math.random() > 0.45;
      const bodyH = 16 + Math.random() * 70;
      const bodyY = 50 + Math.random() * (H - bodyH - 80);
      const wickT = bodyY - (8 + Math.random() * 24);
      const wickB = bodyY + bodyH + (8 + Math.random() * 24);

      ctx.strokeStyle = bull ? '#00E676' : '#FF1744';
      ctx.fillStyle   = bull ? '#00E676' : '#FF1744';
      ctx.lineWidth   = 1.5;

      ctx.beginPath();
      ctx.moveTo(x + candleW / 2, wickT);
      ctx.lineTo(x + candleW / 2, wickB);
      ctx.stroke();

      ctx.fillRect(x, bodyY, candleW, bodyH);
    }
  }

  window.addEventListener('resize', resize);
  resize();
}

// ===== PAYMENT SELECTION =====
let selectedPayment = '';

function selectPayment(el, method) {
  document.querySelectorAll('.pay-option').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = method;
}

// ===== FAQ TOGGLE =====
function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}

// ===== FORM SUBMIT =====
function initForm() {
  const form = document.getElementById('submitForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name     = document.getElementById('gname').value.trim();
    const cat      = document.getElementById('gcat').value;
    const whatsapp = document.getElementById('gwhatsapp').value.trim();
    const link     = document.getElementById('glink').value.trim();
    const spot     = document.getElementById('gspot').value;
    const email    = document.getElementById('gemail').value.trim();
    const agreed   = document.getElementById('agreeBox').checked;

    if (!name || !cat || !whatsapp || !link || !spot || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!link.startsWith('https://t.me/')) {
      alert('Please enter a valid Telegram link starting with https://t.me/');
      return;
    }

    if (!agreed) {
      alert('Please agree to the submission rules.');
      return;
    }

    this.style.display = 'none';
    const successMsg = document.getElementById('successMsg');
    successMsg.style.display = 'block';
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// ===== INIT =====
window.addEventListener('load', function() {
  initCandleBg2();
  initForm();
});
