/* ===== submit.js — logic for submit.html ===== */

import { initializeApp }              from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp }
                                       from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyD2Xq4aTbW_Q6cFxEDruu-5S1BFPhGrFr8",
  authDomain:        "crypto-7dfc2.firebaseapp.com",
  projectId:         "crypto-7dfc2",
  storageBucket:     "crypto-7dfc2.firebasestorage.app",
  messagingSenderId: "33900231152",
  appId:             "1:33900231152:web:2f669a41938e950f6fc535"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ===== EMAILJS CONFIG =====
const EMAILJS_PUBLIC_KEY  = "emNNfRHTpJ5FjiwKk";
const EMAILJS_SERVICE_ID  = "service_52lyd9o";
const OWNER_TEMPLATE_ID   = "template_618u88r";  // Contact Us — notifies owner
const USER_TEMPLATE_ID    = "template_ywec04i";  // Auto Reply — confirms to user

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
      const x     = i * (candleW + gap) - 6;
      const bull  = Math.random() > 0.45;
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

window.selectPayment = function(el, method) {
  document.querySelectorAll('.pay-option').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = method;
};

// ===== FAQ TOGGLE =====
window.toggleFaq = function(el) {
  el.parentElement.classList.toggle('open');
};

// ===== EMAILJS LOADER =====
function loadEmailJS() {
  return new Promise((resolve, reject) => {
    if (window.emailjs) { resolve(); return; }
    const script  = document.createElement('script');
    script.src    = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// ===== SEND OWNER EMAIL =====
// "To Email" in template_618u88r must be hardcoded to: ahmedqureshi6120@gmail.com
async function sendOwnerEmail(data) {
  return emailjs.send(EMAILJS_SERVICE_ID, OWNER_TEMPLATE_ID, {
    group_name:     data.name,
    category:       data.cat,
    whatsapp:       data.whatsapp,
    telegram_link:  data.link,
    spot:           data.spot,
    email:          data.email,        // ✅ fixed: was "user_email", template uses {{email}}
    payment_method: data.payment || "Not selected",
    submitted_at:   data.submittedAt
  });
}

// ===== SEND USER EMAIL =====
// "To Email" in template_ywec04i must be set to: {{to_email}}
async function sendUserEmail(data) {
  return emailjs.send(EMAILJS_SERVICE_ID, USER_TEMPLATE_ID, {
    to_email:       data.email,        // ✅ must match {{to_email}} in template's "To Email" field
    user_name:      data.name,
    group_name:     data.name,
    category:       data.cat,
    spot:           data.spot,
    payment_method: data.payment || "Not selected",
    telegram_link:  data.link,
    whatsapp:       data.whatsapp,
    submitted_at:   data.submittedAt
  });
}

// ===== FORM SUBMIT =====
function initForm() {
  const form = document.getElementById('submitForm');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
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

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Submitting…'; }

    const submittedAt = new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' });
    const formData    = { name, cat, whatsapp, link, spot, email,
                          payment: selectedPayment, submittedAt };

    // ── 1. Save to Firestore ──────────────────────────────────────────────
    try {
      await addDoc(collection(db, "submissions"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      console.log("✅ Firestore saved");
    } catch (fsErr) {
      console.error("❌ Firestore error:", fsErr);
      alert("Failed to save submission. Please try again.");
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Submit My Group'; }
      return;
    }

    // ── 2. Send emails (won't block success message) ──────────────────────
    try {
      await loadEmailJS();
      console.log("✅ EmailJS loaded");

      try {
        await sendOwnerEmail(formData);
        console.log("✅ Owner email sent");
      } catch (ownerErr) {
        console.error("❌ Owner email failed:", JSON.stringify(ownerErr));
      }

      try {
        await sendUserEmail(formData);
        console.log("✅ User email sent");
      } catch (userErr) {
        console.error("❌ User email failed:", JSON.stringify(userErr));
      }

    } catch (ejsErr) {
      console.error("❌ EmailJS load error:", ejsErr);
    }

    // ── 3. Always show success ────────────────────────────────────────────
    form.style.display = 'none';
    const successMsg = document.getElementById('successMsg');
    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

// ===== INIT =====
window.addEventListener('load', function() {
  initCandleBg2();
  initForm();
});