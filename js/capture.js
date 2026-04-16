/**
 * capture.js — Meimonde Photo Booth
 * Single capture, strip sequence, caption modal, localStorage persistence.
 * FIXED: countdown now correctly counts from selected duration to 1.
 */

/* ── CONSTANTS ── */
const STORAGE_KEY = 'memoire_photos';

/* ── DOM REFERENCES ── */
const btnSingle        = document.getElementById('btn-single');
const btnStrip         = document.getElementById('btn-strip');
const btnResetStrip    = document.getElementById('btn-reset-strip');
const countdownOverlay = document.getElementById('countdown-overlay');
const countdownNumEl   = document.getElementById('countdown-number');
const flashOverlay     = document.getElementById('flash-overlay');
const statusMsg        = document.getElementById('status-msg');
const captionModal     = document.getElementById('caption-modal');
const modalPreviewImg  = document.getElementById('modal-preview-img');
const captionInput     = document.getElementById('caption-input');
const btnSaveCaption   = document.getElementById('btn-save-caption');
const btnSkipCaption   = document.getElementById('btn-skip-caption');

/* ── STATE ── */
let isBusy         = false;
let countdownSecs  = 5;       // default timer — changed via timer buttons
let stripQueue     = [];      // collected frames for current strip
let captionResolve = null;    // resolves caption promise

/* ──────────────────────────────────────────
   STORAGE HELPERS
   ────────────────────────────────────────── */

function loadPhotos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const photos = raw ? JSON.parse(raw) : [];
    return photos.sort((a, b) => b.timestamp - a.timestamp);
  } catch {
    return [];
  }
}

function savePhoto(photo) {
  const photos = loadPhotos();
  photos.unshift(photo);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  } catch (e) {
    setStatus('⚠ Storage full — please clear some photos first.');
  }
}

function deletePhoto(id) {
  const photos = loadPhotos().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
}

function clearAllPhotos() {
  localStorage.removeItem(STORAGE_KEY);
}

/* ──────────────────────────────────────────
   UTILITIES
   ────────────────────────────────────────── */

function generateId() {
  return `photo_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
}

function setStatus(msg) {
  statusMsg.textContent = msg;
}

function triggerFlash() {
  flashOverlay.classList.add('flashing');
  setTimeout(() => flashOverlay.classList.remove('flashing'), 160);
}

function captureCurrentFrame() {
  const canvas = window.Camera.captureFrameToCanvas();
  window.Filters.applyFilterToCanvas(canvas);
  return canvas.toDataURL('image/jpeg', 0.92);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ──────────────────────────────────────────
   COUNTDOWN  ← FIXED
   The previous version had animation restart issues causing only "2" to show.
   This version uses a clean interval + explicit animation reset each tick.
   ────────────────────────────────────────── */

/**
 * Counts down from `from` to 1 (one number per second), then resolves.
 * Shows each number in the overlay with an animation restart per tick.
 * @param {number} from - starting count (e.g. 5)
 * @returns {Promise<void>}
 */
function runCountdown(from) {
  return new Promise((resolve) => {
    let count = from;

    // Show overlay
    countdownOverlay.classList.add('active');
    showCountNumber(count);

    const interval = setInterval(() => {
      count--;

      if (count <= 0) {
        // Done — hide overlay and resolve
        clearInterval(interval);
        countdownOverlay.classList.remove('active');
        countdownNumEl.textContent = '';
        resolve();
      } else {
        showCountNumber(count);
      }
    }, 1000);
  });
}

/**
 * Displays a number in the countdown element and re-triggers its CSS animation.
 * Forcing animation restart via the "reflow trick" (void offsetHeight).
 * @param {number} n
 */
function showCountNumber(n) {
  countdownNumEl.textContent = n;
  // Reset animation so it plays fresh for each number
  countdownNumEl.style.animation = 'none';
  void countdownNumEl.offsetHeight;            // force reflow
  countdownNumEl.style.animation = 'countPop 1s ease-out forwards';
}

/* ──────────────────────────────────────────
   TIMER SELECTION UI
   ────────────────────────────────────────── */

function initTimerButtons() {
  const timerBtns = document.querySelectorAll('.timer-btn');
  timerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      countdownSecs = parseInt(btn.dataset.seconds, 10);
      // Update active state
      timerBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
    });
  });
}

/* ──────────────────────────────────────────
   CAPTION MODAL
   ────────────────────────────────────────── */

function promptForCaption(dataUrl) {
  return new Promise((resolve) => {
    captionResolve = resolve;
    modalPreviewImg.src = dataUrl;
    captionInput.value = '';
    captionModal.style.display = 'flex';
    setTimeout(() => captionInput.focus(), 100);
  });
}

function closeCaptionModal() {
  captionModal.style.display = 'none';
  captionInput.value = '';
  modalPreviewImg.src = '';
}

btnSaveCaption.addEventListener('click', () => {
  const caption = captionInput.value.trim();
  closeCaptionModal();
  if (captionResolve) { captionResolve(caption); captionResolve = null; }
});

btnSkipCaption.addEventListener('click', () => {
  closeCaptionModal();
  if (captionResolve) { captionResolve(''); captionResolve = null; }
});

captionInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') btnSaveCaption.click();
});

captionModal.addEventListener('click', (e) => {
  if (e.target === captionModal) {
    closeCaptionModal();
    if (captionResolve) { captionResolve(''); captionResolve = null; }
  }
});

/* ──────────────────────────────────────────
   SINGLE CAPTURE
   ────────────────────────────────────────── */

async function captureSingle() {
  if (isBusy) return;
  isBusy = true;
  setAllButtonsBusy(true);

  try {
    setStatus('get ready…');
    await runCountdown(countdownSecs);   // uses selected timer

    triggerFlash();
    const dataUrl = captureCurrentFrame();
    const filter  = window.Filters.getActiveFilter();

    setStatus('beautiful ✦ add a caption?');
    const caption = await promptForCaption(dataUrl);

    savePhoto({ id: generateId(), dataUrl, filter, caption, timestamp: Date.now(), type: 'single' });
    setStatus('memory saved ✦');
    setTimeout(() => setStatus(''), 3000);
    window.Gallery.refresh();

  } catch (err) {
    console.error('[capture] Single error:', err);
    setStatus('Something went wrong — please try again.');
  } finally {
    isBusy = false;
    setAllButtonsBusy(false);
  }
}

/* ──────────────────────────────────────────
   STRIP SEQUENCE (4 photos)
   ────────────────────────────────────────── */

async function captureStrip() {
  if (isBusy) return;
  isBusy = true;
  stripQueue = [];
  setAllButtonsBusy(true);
  btnResetStrip.style.display = 'none';

  try {
    for (let shot = 0; shot < 4; shot++) {
      setStatus(`photo ${shot + 1} of 4 — get ready…`);
      await runCountdown(countdownSecs);   // full timer between each shot

      triggerFlash();
      const dataUrl = captureCurrentFrame();
      const filter  = window.Filters.getActiveFilter();

      stripQueue.push({ dataUrl, filter, timestamp: Date.now() });
      updateStripSlot(shot, dataUrl);
      setStatus(`${shot + 1} of 4 captured ✦`);

      if (shot < 3) await delay(600);
    }

    setStatus('generating your strip…');

    const stripDataUrl = await window.Strip.generateStrip(stripQueue);

    // Save each frame to gallery
    stripQueue.forEach(frame => {
      savePhoto({ id: generateId(), dataUrl: frame.dataUrl, filter: frame.filter, caption: '', timestamp: frame.timestamp, type: 'strip' });
    });

    window.Strip.showStripModal(stripDataUrl);
    setStatus('');
    btnResetStrip.style.display = 'inline-flex';
    window.Gallery.refresh();

  } catch (err) {
    console.error('[capture] Strip error:', err);
    setStatus('Something went wrong — please try again.');
  } finally {
    isBusy = false;
    setAllButtonsBusy(false);
  }
}

/* ── Strip slot helpers ── */

function updateStripSlot(index, dataUrl) {
  const slot = document.querySelector(`.strip-slot[data-index="${index}"]`);
  if (!slot) return;
  const img = document.createElement('img');
  img.src = dataUrl;
  img.alt = `Strip photo ${index + 1}`;
  slot.innerHTML = '';
  slot.appendChild(img);
  slot.classList.add('filled');
}

function resetStripSlots() {
  for (let i = 0; i < 4; i++) {
    const slot = document.querySelector(`.strip-slot[data-index="${i}"]`);
    if (!slot) continue;
    slot.innerHTML = `<span>${i + 1}</span>`;
    slot.classList.remove('filled');
  }
  stripQueue = [];
  btnResetStrip.style.display = 'none';
  setStatus('');
}

/* ── Disable/enable controls during capture ── */
function setAllButtonsBusy(busy) {
  [btnSingle, btnStrip].forEach(btn => btn.disabled = busy);
}

/* ──────────────────────────────────────────
   INIT
   ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  btnSingle.addEventListener('click', captureSingle);
  btnStrip.addEventListener('click', captureStrip);
  btnResetStrip.addEventListener('click', resetStripSlots);

  // "Add strip" — alias for strip sequence for now
  const btnStripAdd = document.getElementById('btn-strip-add');
  if (btnStripAdd) btnStripAdd.addEventListener('click', captureStrip);

  initTimerButtons();
});

/* ── EXPOSE ── */
window.Capture = {
  captureSingle,
  captureStrip,
  loadPhotos,
  savePhoto,
  deletePhoto,
  clearAllPhotos,
  generateId
};
