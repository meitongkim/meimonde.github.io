/**
 * modals.js — Meimonde Photo Booth
 * All icon-bar modal logic: CD Studio, Phone Booth, Café Mode, Menu.
 * Strip + Caption modals are handled in capture.js / strip.js.
 */

/* ──────────────────────────────────────────
   GENERIC MODAL HELPER
   ────────────────────────────────────────── */

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'flex';
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

/** Close a modal when clicking its backdrop */
function bindBackdropClose(modalId) {
  const el = document.getElementById(modalId);
  if (!el) return;
  el.addEventListener('click', (e) => {
    if (e.target === el) closeModal(modalId);
  });
}

/* ──────────────────────────────────────────
   CD STUDIO MODAL
   ────────────────────────────────────────── */

function initCDModal() {
  const modal        = document.getElementById('cd-modal');
  const titleInput   = document.getElementById('cd-title-input');
  const subInput     = document.getElementById('cd-sub-input');
  const titleDisplay = document.getElementById('cd-title-display');
  const subDisplay   = document.getElementById('cd-sub-display');
  const fontBtns     = document.querySelectorAll('.cd-font-btn');
  const coverOpts    = document.querySelectorAll('.cd-cover-opt');
  const disc         = document.getElementById('cd-disc');
  const btnBurn      = document.getElementById('btn-burn-cd');
  const burnOverlay  = document.getElementById('burn-overlay');

  // Live preview: title
  titleInput.addEventListener('input', () => {
    titleDisplay.textContent = titleInput.value || 'your title';
  });

  // Live preview: subtitle
  subInput.addEventListener('input', () => {
    subDisplay.textContent = subInput.value || 'subtitle';
  });

  // Font selection
  fontBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fontBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      titleDisplay.style.fontFamily = btn.dataset.font;
    });
  });

  // Cover colour selection
  coverOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      coverOpts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      // Apply background to disc
      disc.style.background = opt.style.background || opt.dataset.cover;
    });
  });

  // Burn disc animation
  btnBurn.addEventListener('click', () => {
    closeModal('cd-modal');
    burnOverlay.style.display = 'flex';

    setTimeout(() => {
      burnOverlay.style.display = 'none';
      alert(`Disc "${titleInput.value || 'your title'}" has been burned! (Preview only — connect to your photo strip to export.)`);
    }, 2800);
  });

  bindBackdropClose('cd-modal');
  document.getElementById('btn-close-cd')?.addEventListener('click', () => closeModal('cd-modal'));
}

/* ──────────────────────────────────────────
   PHONE BOOTH MODAL
   ────────────────────────────────────────── */

function initPhoneModal() {
  document.getElementById('btn-close-phone')?.addEventListener('click', () => closeModal('phone-modal'));
  bindBackdropClose('phone-modal');

  const btnShare = document.getElementById('btn-phone-share');
  if (btnShare) {
    btnShare.addEventListener('click', () => {
      // Simulate dial animation and share
      btnShare.textContent = '📞 dialling…';
      btnShare.disabled = true;

      setTimeout(() => {
        // Try Web Share API, fall back to clipboard copy
        const shareText = 'Check out my Meimonde photo strip! 📸';
        if (navigator.share) {
          navigator.share({ title: 'Meimonde Photo Booth', text: shareText, url: window.location.href })
            .catch(() => {});
        } else {
          navigator.clipboard.writeText(`${shareText} ${window.location.href}`)
            .then(() => alert('Link copied to clipboard!'))
            .catch(() => alert('Share link ready: ' + window.location.href));
        }
        btnShare.textContent = '📞 share strip';
        btnShare.disabled = false;
      }, 1800);
    });
  }
}

/* ──────────────────────────────────────────
   CAFÉ MODE MODAL
   ────────────────────────────────────────── */

function initCafeModal() {
  document.getElementById('btn-close-cafe')?.addEventListener('click', () => closeModal('cafe-modal'));
  bindBackdropClose('cafe-modal');

  const opts = document.querySelectorAll('.cafe-opt');
  let selectedCafe = 'matcha';

  opts.forEach(opt => {
    opt.addEventListener('click', () => {
      opts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedCafe = opt.dataset.cafe || opt.id.replace('cafe-opt-', '');
    });
  });

  document.getElementById('btn-apply-cafe')?.addEventListener('click', () => {
    closeModal('cafe-modal');
    // Apply visual frame overlay to viewport
    applyCafeFrame(selectedCafe);
  });
}

/**
 * Applies a CSS class to the viewport frame to simulate a café-themed frame.
 * @param {'matcha'|'coffee'} type
 */
function applyCafeFrame(type) {
  const frame = document.getElementById('vintage-frame');
  if (!frame) return;

  // Remove previous café frames
  frame.classList.remove('frame--matcha', 'frame--coffee');
  frame.classList.add(`frame--${type}`);

  // Inject frame style dynamically if not already present
  if (!document.getElementById('cafe-frame-style')) {
    const style = document.createElement('style');
    style.id = 'cafe-frame-style';
    style.textContent = `
      .frame--matcha { border-color: #5a7a5a !important; box-shadow: 0 0 0 3px #c8dbc0, 3px 3px 0 #5a7a5a !important; }
      .frame--coffee { border-color: #7a5a3a !important; box-shadow: 0 0 0 3px #f0e8d8, 3px 3px 0 #7a5a3a !important; }
    `;
    document.head.appendChild(style);
  }
}

/* ──────────────────────────────────────────
   MENU MODAL
   ────────────────────────────────────────── */

function initMenuModal() {
  document.getElementById('btn-close-menu')?.addEventListener('click', () => closeModal('menu-modal'));
  bindBackdropClose('menu-modal');

  const menuItems  = document.querySelectorAll('.menu-item');
  const panels     = ['about', 'submit', 'review'];

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.panel;

      // Toggle active on nav items
      menuItems.forEach(m => m.classList.remove('active'));
      item.classList.add('active');

      // Show/hide panels
      panels.forEach(p => {
        const panelEl = document.getElementById(`panel-${p}`);
        if (panelEl) panelEl.style.display = (p === target) ? 'block' : 'none';
      });
    });
  });

  // Send review via mailto
  document.getElementById('btn-send-review')?.addEventListener('click', () => {
    const text = document.getElementById('review-textarea')?.value?.trim();
    if (!text) { alert('Please write your review first!'); return; }
    const subject = encodeURIComponent('Meimonde Review');
    const body    = encodeURIComponent(text);
    window.location.href = `mailto:meitongkimnyp@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ──────────────────────────────────────────
   ICON BAR BINDINGS
   ────────────────────────────────────────── */

function initIconBar() {
  const modes = {
    'btn-mode-cd':    'cd-modal',
    'btn-mode-phone': 'phone-modal',
    'btn-mode-cafe':  'cafe-modal',
    'btn-menu':       'menu-modal'
  };

  Object.entries(modes).forEach(([btnId, modalId]) => {
    document.getElementById(btnId)?.addEventListener('click', () => {
      // Toggle active state on icon button
      const btn = document.getElementById(btnId);
      const isActive = btn.classList.contains('active');
      document.querySelectorAll('.icon-btn').forEach(b => b.classList.remove('active'));
      if (!isActive) {
        btn.classList.add('active');
        openModal(modalId);
      }
    });
  });

  // Remove active when any modal closes
  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) {
        document.querySelectorAll('.icon-btn').forEach(b => b.classList.remove('active'));
      }
    });
  });

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.icon-btn').forEach(b => b.classList.remove('active'));
    });
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initIconBar();
  initCDModal();
  initPhoneModal();
  initCafeModal();
  initMenuModal();
});
