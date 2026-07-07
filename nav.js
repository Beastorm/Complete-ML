// Shared hamburger menu for Complete ML pages
// Requires lessons.js to be loaded before this file.
// It injects a floating menu button + drawer into every HTML page.

(function () {
  const config = window.SITE_CONFIG || { baseUrl: './' };
  const baseUrl = config.baseUrl || './';
  const lessons = Array.isArray(window.LESSONS) ? window.LESSONS : [];
  const groups = Array.isArray(window.LESSON_GROUPS) ? window.LESSON_GROUPS : [];

  if (window.__completeMlNavLoaded) return;
  window.__completeMlNavLoaded = true;

  function currentFile() {
    const file = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
    return file || 'index.html';
  }

  function groupLabel(groupId) {
    const group = groups.find(g => g.id === groupId);
    return group ? group.label : groupId;
  }

  function groupAccent(groupId) {
    const group = groups.find(g => g.id === groupId);
    return group ? group.accent : '#4f46e5';
  }

  function buildStyles() {
    const css = `
      .mlnav-toggle {
        position: fixed;
        top: 18px;
        left: 18px;
        z-index: 99999;
        width: 48px;
        height: 48px;
        border: 1px solid rgba(226, 232, 240, 0.9);
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.92);
        color: #111827;
        display: grid;
        place-items: center;
        cursor: pointer;
        box-shadow: 0 14px 34px rgba(15, 23, 42, 0.16);
        backdrop-filter: blur(14px);
        transition: transform 0.18s ease, background 0.18s ease;
      }
      .mlnav-toggle:hover { transform: translateY(-2px); background: white; }
      .mlnav-toggle span,
      .mlnav-toggle span::before,
      .mlnav-toggle span::after {
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 99px;
        background: #111827;
        position: relative;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }
      .mlnav-toggle span::before,
      .mlnav-toggle span::after { content: ''; position: absolute; left: 0; }
      .mlnav-toggle span::before { top: -7px; }
      .mlnav-toggle span::after { top: 7px; }
      .mlnav-open .mlnav-toggle span { background: transparent; }
      .mlnav-open .mlnav-toggle span::before { transform: translateY(7px) rotate(45deg); }
      .mlnav-open .mlnav-toggle span::after { transform: translateY(-7px) rotate(-45deg); }

      .mlnav-backdrop {
        position: fixed;
        inset: 0;
        z-index: 99997;
        background: rgba(15, 23, 42, 0.42);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
        backdrop-filter: blur(2px);
      }
      .mlnav-open .mlnav-backdrop { opacity: 1; pointer-events: auto; }

      .mlnav-drawer {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 99998;
        width: min(430px, calc(100vw - 34px));
        background: #ffffff;
        color: #111827;
        border-right: 1px solid #e2e8f0;
        box-shadow: 24px 0 60px rgba(15, 23, 42, 0.22);
        transform: translateX(-105%);
        transition: transform 0.24s ease;
        display: flex;
        flex-direction: column;
      }
      .mlnav-open .mlnav-drawer { transform: translateX(0); }

      .mlnav-header {
        padding: 20px 20px 14px 82px;
        border-bottom: 1px solid #e2e8f0;
        background:
          radial-gradient(circle at 20% 0%, rgba(79,70,229,0.12), transparent 32%),
          radial-gradient(circle at 90% 0%, rgba(6,182,212,0.12), transparent 32%),
          #ffffff;
      }
      .mlnav-kicker {
        color: #4f46e5;
        font-weight: 1000;
        font-size: 0.82rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .mlnav-title {
        font: 1000 1.35rem/1.1 Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;
        letter-spacing: -0.04em;
        margin-top: 4px;
      }
      .mlnav-subtitle {
        color: #64748b;
        font-weight: 750;
        font-size: 0.9rem;
        margin-top: 4px;
      }
      .mlnav-home {
        display: inline-flex;
        margin-top: 12px;
        text-decoration: none;
        color: white;
        background: linear-gradient(135deg, #4f46e5, #06b6d4);
        border-radius: 999px;
        padding: 9px 12px;
        font-weight: 1000;
        font-size: 0.88rem;
      }

      .mlnav-search-wrap {
        padding: 14px 16px;
        border-bottom: 1px solid #e2e8f0;
      }
      .mlnav-search {
        width: 100%;
        border: 1px solid #e2e8f0;
        background: #f8fafc;
        border-radius: 14px;
        padding: 11px 13px;
        font: 800 0.95rem Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;
        outline: none;
      }
      .mlnav-search:focus {
        border-color: rgba(79, 70, 229, 0.55);
        box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.10);
        background: white;
      }

      .mlnav-list {
        overflow: auto;
        padding: 10px 12px 18px;
      }
      .mlnav-group { margin: 12px 0 16px; }
      .mlnav-group-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #64748b;
        font-weight: 1000;
        font-size: 0.74rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        padding: 0 8px 8px;
      }
      .mlnav-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: var(--mlnav-accent, #4f46e5);
      }
      .mlnav-link {
        display: grid;
        grid-template-columns: 42px 1fr;
        gap: 10px;
        align-items: center;
        text-decoration: none;
        color: #111827;
        padding: 10px;
        border-radius: 16px;
        border: 1px solid transparent;
        transition: background 0.16s ease, border-color 0.16s ease, transform 0.16s ease;
      }
      .mlnav-link:hover {
        background: #f8fafc;
        border-color: #e2e8f0;
        transform: translateX(2px);
      }
      .mlnav-link.active {
        background: #eef2ff;
        border-color: #c7d2fe;
      }
      .mlnav-no {
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border-radius: 14px;
        color: white;
        background: var(--mlnav-accent, #4f46e5);
        font-weight: 1000;
        font-size: 0.9rem;
      }
      .mlnav-link-title {
        font-weight: 950;
        line-height: 1.18;
        letter-spacing: -0.02em;
      }
      .mlnav-link-meta {
        color: #64748b;
        font-weight: 750;
        font-size: 0.78rem;
        margin-top: 2px;
      }
      .mlnav-empty {
        display: none;
        margin: 12px;
        padding: 18px;
        border-radius: 16px;
        background: #f8fafc;
        color: #64748b;
        font-weight: 900;
        text-align: center;
      }
      .mlnav-empty.show { display: block; }

      @media (max-width: 560px) {
        .mlnav-toggle { top: 12px; left: 12px; width: 46px; height: 46px; }
        .mlnav-header { padding-left: 72px; }
      }

      @media print {
        .mlnav-toggle, .mlnav-backdrop, .mlnav-drawer { display: none !important; }
      }
    `;

    const style = document.createElement('style');
    style.id = 'mlnav-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildDrawer() {
    const current = currentFile();

    const byGroup = groups.map(group => {
      const items = lessons.filter(lesson => lesson.group === group.id);
      return { ...group, items };
    }).filter(group => group.items.length > 0);

    const groupHtml = byGroup.map(group => `
      <div class="mlnav-group" data-mlnav-group="${group.id}">
        <div class="mlnav-group-title" style="--mlnav-accent:${group.accent || '#4f46e5'}">
          <span class="mlnav-dot"></span>${group.label}
        </div>
        ${group.items.map(lesson => {
          const active = lesson.file === current;
          const meta = lesson.interactive ? 'Interactive notes' : group.label;
          return `
            <a class="mlnav-link ${active ? 'active' : ''}" href="${baseUrl}${lesson.file}" data-mlnav-search="${(lesson.no + ' ' + lesson.title + ' ' + lesson.file + ' ' + (lesson.tags || []).join(' ')).toLowerCase()}" style="--mlnav-accent:${group.accent || '#4f46e5'}">
              <span class="mlnav-no">${lesson.no}</span>
              <span>
                <span class="mlnav-link-title">${lesson.title}</span>
                <span class="mlnav-link-meta">${meta}</span>
              </span>
            </a>
          `;
        }).join('')}
      </div>
    `).join('');

    const root = document.createElement('div');
    root.id = 'mlnav-root';
    root.innerHTML = `
      <button class="mlnav-toggle" id="mlnavToggle" aria-label="Open lesson menu" aria-expanded="false"><span></span></button>
      <div class="mlnav-backdrop" id="mlnavBackdrop" aria-hidden="true"></div>
      <aside class="mlnav-drawer" id="mlnavDrawer" aria-label="Lesson menu">
        <div class="mlnav-header">
          <div class="mlnav-kicker">Complete ML</div>
          <div class="mlnav-title">Lesson Menu</div>
          <div class="mlnav-subtitle">Open any generated HTML note</div>
          <a class="mlnav-home" href="${baseUrl}index.html">Index Home</a>
        </div>
        <div class="mlnav-search-wrap">
          <input class="mlnav-search" id="mlnavSearch" type="search" placeholder="Search lessons..." autocomplete="off" />
        </div>
        <nav class="mlnav-list" id="mlnavList">
          ${groupHtml}
          <div class="mlnav-empty" id="mlnavEmpty">No lessons found.</div>
        </nav>
      </aside>
    `;

    document.body.appendChild(root);
  }

  function setupEvents() {
    const toggle = document.getElementById('mlnavToggle');
    const backdrop = document.getElementById('mlnavBackdrop');
    const search = document.getElementById('mlnavSearch');
    const empty = document.getElementById('mlnavEmpty');

    function openMenu() {
      document.documentElement.classList.add('mlnav-open');
      toggle.setAttribute('aria-expanded', 'true');
      setTimeout(() => search && search.focus(), 80);
    }

    function closeMenu() {
      document.documentElement.classList.remove('mlnav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
      document.documentElement.classList.contains('mlnav-open') ? closeMenu() : openMenu();
    });
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });

    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      let visible = 0;

      document.querySelectorAll('.mlnav-link').forEach(link => {
        const show = !q || link.dataset.mlnavSearch.includes(q);
        link.style.display = show ? 'grid' : 'none';
        if (show) visible++;
      });

      document.querySelectorAll('.mlnav-group').forEach(group => {
        const any = [...group.querySelectorAll('.mlnav-link')].some(link => link.style.display !== 'none');
        group.style.display = any ? 'block' : 'none';
      });

      empty.classList.toggle('show', visible === 0);
    });
  }

  function init() {
    if (!lessons.length) return;
    buildStyles();
    buildDrawer();
    setupEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
