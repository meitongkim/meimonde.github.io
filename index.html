<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meimonde — Photo Booth</title>

  <!-- Pinyon Script: elegant copperplate logo | Cormorant Garamond: body -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cormorant:wght@300;400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <!-- ═══════════════════════════════════════
       HEADER
  ═══════════════════════════════════════ -->
  <header class="site-header">
    <p class="store-name">meimonde store</p>
    <div class="header-hr"></div>
    <p class="header-est">est today. for always</p>
    <h1 class="logo-script">Meimonde.</h1>
    <div class="header-hr"></div>
    <p class="tagline">photos for every moment</p>
  </header>

  <!-- ═══════════════════════════════════════
       MAIN TWO-COLUMN GRID
  ═══════════════════════════════════════ -->
  <main class="main-grid">

    <!-- ── LEFT: Decorative photo strips ── -->
    <aside class="strips-col" aria-hidden="true">
      <div class="deco-strip deco-strip--back">
        <div class="deco-strip__header">
          <span class="deco-strip__label">PHOTO BOOTH</span>
          <span class="deco-strip__sub">meimonde store</span>
        </div>
        <div class="deco-strip__slot"></div>
        <div class="deco-strip__slot"></div>
        <div class="deco-strip__slot"></div>
        <div class="deco-strip__footer">
          <span>est. today · for always</span>
        </div>
      </div>
      <div class="deco-strip deco-strip--front">
        <div class="deco-strip__header">
          <span class="deco-strip__label">PHOTO BOOTH</span>
          <span class="deco-strip__sub">meimonde store</span>
        </div>
        <div class="deco-strip__slot"></div>
        <div class="deco-strip__slot"></div>
        <div class="deco-strip__slot"></div>
        <div class="deco-strip__footer">
          <span class="deco-script">a moment, kept forever</span>
        </div>
      </div>
    </aside>

    <!-- ── RIGHT: Interactive booth panel ── -->
    <section class="booth-panel">

      <!-- Icon bar -->
      <div class="icon-bar">
        <button class="icon-btn" id="btn-mode-cd" title="CD Studio">
          <svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="15.5" stroke="currentColor" stroke-width="1.2"/><circle cx="18" cy="18" r="11" stroke="currentColor" stroke-width="0.7" stroke-dasharray="2.5 2"/><circle cx="18" cy="18" r="6" stroke="currentColor" stroke-width="0.9"/><circle cx="18" cy="18" r="2.2" fill="currentColor"/></svg>
        </button>
        <button class="icon-btn" id="btn-mode-phone" title="Phone Booth">
          <svg viewBox="0 0 36 36" fill="none"><rect x="10" y="3" width="16" height="30" rx="2.5" stroke="currentColor" stroke-width="1.2"/><rect x="13" y="6" width="10" height="17" rx="1" stroke="currentColor" stroke-width="0.9"/><circle cx="18" cy="27.5" r="1.4" fill="currentColor"/></svg>
        </button>
        <button class="icon-btn" id="btn-mode-cafe" title="Café Mode">
          <svg viewBox="0 0 36 36" fill="none"><path d="M10 15h16l-2 11H12L10 15Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M26 17h2a2.5 2.5 0 0 1 0 5h-2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><line x1="8" y1="27" x2="28" y2="27" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M15 12 Q16.5 9 18 10 Q19.5 11 21 9" stroke="currentColor" stroke-width="0.9" stroke-linecap="round" fill="none"/></svg>
        </button>
        <button class="icon-btn" id="btn-menu" title="Menu">
          <svg viewBox="0 0 36 36" fill="none"><line x1="9" y1="12" x2="27" y2="12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="9" y1="18" x2="27" y2="18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="9" y1="24" x2="27" y2="24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </button>
      </div>

      <!-- Viewport + preview -->
      <div class="viewport-row">
        <div class="viewport-frame" id="vintage-frame">
          <span class="bracket bracket--tl" aria-hidden="true"></span>
          <span class="bracket bracket--br" aria-hidden="true"></span>
          <div class="frame-inner">
            <video id="video" autoplay playsinline muted></video>
            <canvas id="capture-canvas" style="display:none;"></canvas>
            <div class="countdown-overlay" id="countdown-overlay" aria-live="polite">
              <span class="countdown-number" id="countdown-number"></span>
            </div>
            <div class="flash-overlay" id="flash-overlay"></div>
            <div class="camera-error" id="camera-error" style="display:none;">
              <div class="error-icon">⌖</div>
              <p class="error-title">Camera access denied</p>
              <p class="error-message">Allow camera permissions in your browser settings, then refresh.</p>
            </div>
          </div>
        </div>

        <div class="preview-col">
          <p class="preview-label">preview</p>
          <div class="preview-slots" id="strip-slots">
            <div class="strip-slot" data-index="0"><span>1</span></div>
            <div class="strip-slot" data-index="1"><span>2</span></div>
            <div class="strip-slot" data-index="2"><span>3</span></div>
            <div class="strip-slot" data-index="3"><span>4</span></div>
          </div>
        </div>
      </div>

      <!-- Control panel -->
      <div class="controls-panel">

        <div class="control-row">
          <span class="control-label">mood</span>
          <div class="filter-swatches" role="radiogroup" aria-label="Select filter">
            <button class="filter-swatch-btn active" data-filter="none" title="Natural"><span class="swatch swatch--none"></span><span class="swatch-name">natural</span></button>
            <button class="filter-swatch-btn" data-filter="bw" title="Noir"><span class="swatch swatch--bw"></span><span class="swatch-name">noir</span></button>
            <button class="filter-swatch-btn" data-filter="warm" title="Golden"><span class="swatch swatch--warm"></span><span class="swatch-name">golden</span></button>
            <button class="filter-swatch-btn" data-filter="fade" title="Faded"><span class="swatch swatch--fade"></span><span class="swatch-name">faded</span></button>
            <button class="filter-swatch-btn" data-filter="dreamy" title="Dreamy"><span class="swatch swatch--dreamy"></span><span class="swatch-name">dreamy</span></button>
          </div>
        </div>

        <div class="control-row">
          <span class="control-label">timer</span>
          <div class="timer-options" role="radiogroup" aria-label="Countdown duration">
            <button class="timer-btn" data-seconds="3">3s</button>
            <button class="timer-btn active" data-seconds="5">5s</button>
            <button class="timer-btn" data-seconds="10">10s</button>
          </div>
        </div>

        <div class="control-row">
          <span class="control-label">add strip</span>
          <button class="strip-add-btn" id="btn-strip-add" aria-label="Add strip">+</button>
        </div>

        <p class="status-msg" id="status-msg" aria-live="polite"></p>

        <div class="action-btns">
          <button class="action-btn action-btn--primary" id="btn-single">capture</button>
          <button class="action-btn action-btn--secondary" id="btn-strip">start strip</button>
          <button class="action-btn action-btn--ghost" id="btn-reset-strip" style="display:none;">reset</button>
        </div>
      </div>
    </section>
  </main>

  <!-- ═══════════════════════════════════════
       FOOTER
  ═══════════════════════════════════════ -->
  <footer class="site-footer">
    <div class="footer-hr"></div>
    <div class="memories-header">
      <p class="memories-label">your memories</p>
      <div class="memories-actions">
        <span class="gallery-count" id="gallery-count">0 photos saved</span>
        <button class="text-btn" id="btn-clear-gallery">clear all</button>
      </div>
    </div>
    <div class="gallery-grid" id="gallery-grid">
      <div class="gallery-empty" id="gallery-empty">
        <p class="gallery-empty__script">nothing yet —</p>
        <p class="gallery-empty__text">your memories will appear here once you capture them</p>
      </div>
    </div>
    <div class="footer-rects">
      <div class="footer-rect"><span>recent strip</span></div>
      <div class="footer-rect"><span>featured memory</span></div>
    </div>
    <p class="footer-credit"><span class="footer-script">Meimonde.</span>&thinsp;— all photos stored locally in your browser</p>
  </footer>

  <!-- ═══ CAPTION MODAL ═══ -->
  <div class="modal-backdrop" id="caption-modal" style="display:none;" role="dialog" aria-modal="true">
    <div class="modal-card">
      <div class="modal-preview"><img id="modal-preview-img" src="" alt="Captured photo" /></div>
      <div class="modal-body">
        <p class="modal-eyebrow">a moment captured</p>
        <h3 class="modal-title">Add a caption</h3>
        <input type="text" id="caption-input" class="caption-input" placeholder="write something beautiful…" maxlength="80" />
        <div class="modal-actions">
          <button class="action-btn action-btn--primary" id="btn-save-caption">save memory</button>
          <button class="action-btn action-btn--ghost" id="btn-skip-caption">skip</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ STRIP MODAL ═══ -->
  <div class="modal-backdrop" id="strip-modal" style="display:none;" role="dialog" aria-modal="true">
    <div class="modal-card modal-card--strip">
      <div class="modal-strip-wrap"><img id="strip-result-img" src="" alt="Photo strip" /></div>
      <div class="modal-body">
        <p class="modal-eyebrow">your strip is ready</p>
        <h3 class="modal-title">Four frames, one story.</h3>
        <div class="modal-actions">
          <button class="action-btn action-btn--primary" id="btn-download-strip">download strip</button>
          <button class="action-btn action-btn--ghost" id="btn-close-strip">close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ CD STUDIO MODAL ═══ -->
  <div class="modal-backdrop" id="cd-modal" style="display:none;" role="dialog" aria-modal="true">
    <div class="modal-card modal-card--cd">
      <button class="modal-close" id="btn-close-cd">✕</button>
      <div class="modal-body">
        <p class="modal-eyebrow">studio mode</p>
        <h3 class="modal-title">Design Your Disc</h3>
        <div class="cd-designer">
          <div class="cd-preview-wrap">
            <div class="cd-disc" id="cd-disc">
              <div class="cd-ring cd-ring--1"></div>
              <div class="cd-ring cd-ring--2"></div>
              <div class="cd-label-area">
                <p class="cd-label-title" id="cd-title-display">your title</p>
                <p class="cd-label-sub" id="cd-sub-display">subtitle</p>
              </div>
              <div class="cd-hole"></div>
            </div>
          </div>
          <div class="cd-controls">
            <label class="cd-field-label">Disc Title</label>
            <input id="cd-title-input" class="cd-input" type="text" placeholder="e.g. meimonde 2025" maxlength="28" />
            <label class="cd-field-label">Subtitle</label>
            <input id="cd-sub-input" class="cd-input" type="text" placeholder="e.g. summer memories" maxlength="28" />
            <label class="cd-field-label">Title Font</label>
            <div class="cd-font-btns">
              <button class="cd-font-btn active" data-font="'Pinyon Script', cursive">Script</button>
              <button class="cd-font-btn" data-font="'Cormorant Garamond', serif">Serif</button>
              <button class="cd-font-btn" data-font="'Cormorant', serif">Light</button>
            </div>
            <label class="cd-field-label" style="margin-top:14px;">Album Cover Colour</label>
            <div class="cd-covers">
              <div class="cd-cover-opt active" data-cover="ivory" style="background:#f9f7f4;border:1.5px solid #1c1c1c;"></div>
              <div class="cd-cover-opt" data-cover="noir"  style="background:#1c1c1c;"></div>
              <div class="cd-cover-opt" data-cover="rose"  style="background:#d4a89a;"></div>
              <div class="cd-cover-opt" data-cover="sage"  style="background:#8aab9a;"></div>
            </div>
            <button class="action-btn action-btn--primary cd-burn-btn" id="btn-burn-cd">◎&nbsp; burn disc</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ PHONE BOOTH MODAL ═══ -->
  <div class="modal-backdrop" id="phone-modal" style="display:none;" role="dialog" aria-modal="true">
    <div class="modal-card">
      <button class="modal-close" id="btn-close-phone">✕</button>
      <div class="modal-body">
        <p class="modal-eyebrow">ring ring —</p>
        <h3 class="modal-title">Phone Booth</h3>
        <div class="phone-layout">
          <div class="phone-strip-preview">
            <p class="phone-strip-label">PHOTO BOOTH</p>
            <div class="phone-slot"></div>
            <div class="phone-slot"></div>
            <div class="phone-slot"></div>
            <p class="phone-footer-label">London · <em>Meimonde.</em></p>
          </div>
          <div class="phone-dial-area">
            <p class="phone-hint">Capture your strip, then dial to share.</p>
            <div class="phone-number">077 — MEI</div>
            <button class="action-btn action-btn--primary" id="btn-phone-share">📞 share strip</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ CAFÉ MODAL ═══ -->
  <div class="modal-backdrop" id="cafe-modal" style="display:none;" role="dialog" aria-modal="true">
    <div class="modal-card">
      <button class="modal-close" id="btn-close-cafe">✕</button>
      <div class="modal-body">
        <p class="modal-eyebrow">today's special</p>
        <h3 class="modal-title">Choose Your Frame</h3>
        <div class="cafe-options">
          <button class="cafe-opt active" id="cafe-opt-matcha" data-cafe="matcha">
            <div class="cafe-icon">
              <svg viewBox="0 0 60 70" fill="none"><rect x="8" y="18" width="44" height="44" rx="3" stroke="#5a7a5a" stroke-width="1.5"/><ellipse cx="30" cy="18" rx="22" ry="5" stroke="#5a7a5a" stroke-width="1.5" fill="#c8dbc0"/><rect x="14" y="24" width="32" height="32" rx="2" fill="#e8f0e2" stroke="#8aab9a" stroke-width="0.8"/></svg>
            </div>
            <span>matcha latte</span>
          </button>
          <button class="cafe-opt" id="cafe-opt-coffee" data-cafe="coffee">
            <div class="cafe-icon">
              <svg viewBox="0 0 60 70" fill="none"><rect x="8" y="18" width="44" height="44" rx="3" stroke="#7a5a3a" stroke-width="1.5"/><ellipse cx="30" cy="18" rx="22" ry="5" stroke="#7a5a3a" stroke-width="1.5" fill="#c8a878"/><rect x="14" y="24" width="32" height="32" rx="2" fill="#f0e8d8" stroke="#b8945a" stroke-width="0.8"/></svg>
            </div>
            <span>café au lait</span>
          </button>
        </div>
        <button class="action-btn action-btn--primary" id="btn-apply-cafe">apply frame</button>
      </div>
    </div>
  </div>

  <!-- ═══ MENU MODAL ═══ -->
  <div class="modal-backdrop" id="menu-modal" style="display:none;" role="dialog" aria-modal="true">
    <div class="modal-card modal-card--menu">
      <button class="modal-close" id="btn-close-menu">✕</button>
      <div class="modal-body">
        <p class="menu-logo">Meimonde.</p>
        <nav class="menu-nav">
          <button class="menu-item" data-panel="about">About Us</button>
          <button class="menu-item" data-panel="submit">Send Us Your Pictures</button>
          <button class="menu-item" data-panel="review">Write a Review</button>
        </nav>
        <div class="menu-panel" id="panel-about" style="display:none;">
          <p>Meimonde is a love letter to the moments we keep — born from a belief that photographs deserve frames as beautiful as the feelings inside them.</p>
        </div>
        <div class="menu-panel" id="panel-submit" style="display:none;">
          <p>Share your favourite captures with us. We curate and feature community moments on our feed.</p>
          <a href="mailto:meitongkimnyp@gmail.com?subject=Meimonde%20Submission" class="action-btn action-btn--primary" style="margin-top:14px;display:inline-flex;">send photos →</a>
        </div>
        <div class="menu-panel" id="panel-review" style="display:none;">
          <textarea id="review-textarea" class="review-textarea" placeholder="tell us what you loved…" rows="4"></textarea>
          <button class="action-btn action-btn--primary" id="btn-send-review" style="margin-top:10px;">send review</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ CD BURN ANIMATION ═══ -->
  <div class="burn-overlay" id="burn-overlay" style="display:none;" aria-hidden="true">
    <div class="burn-disc-anim" id="burn-disc-anim">
      <div class="burn-outer"></div>
      <div class="burn-inner"></div>
      <div class="burn-hole"></div>
      <p class="burn-label">burning…</p>
    </div>
  </div>

  <script src="js/filters.js"></script>
  <script src="js/camera.js"></script>
  <script src="js/capture.js"></script>
  <script src="js/strip.js"></script>
  <script src="js/gallery.js"></script>
  <script src="js/modals.js"></script>
</body>
</html>
