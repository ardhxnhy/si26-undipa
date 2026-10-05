/**
 * ==========================================================================
 * SISFOR '26 — APPLICATION SCRIPT (INTERACTION & RUNTIME LOGIC)
 * Universitas Dipa Makassar · Program Studi Sistem Informasi
 *
 * Standards:
 * - Pure Vanilla JavaScript (zero external dependencies)
 * - Apple HIG Interactions (Clarity, Depth, Feedback, Accessibility)
 * - Safe resilient DOM handling
 * ==========================================================================
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. STATE MANAGEMENT
  // ------------------------------------------------------------------------
  let searchQuery = '';
  let currentClassFilter = 'All';
  let activeStudent = null;
  let previousActiveElement = null;
  let currentLanguage = 'id';

  /**
   * Resolve nested dictionary string e.g. "nav.about"
   */
  function t(path, fallback) {
    if (typeof SI26_I18N === 'undefined') return fallback || path;
    const dict = SI26_I18N[currentLanguage] || SI26_I18N.id;
    if (!dict) return fallback || path;

    const parts = path.split('.');
    let current = dict;
    for (let i = 0; i < parts.length; i++) {
      if (current && typeof current === 'object' && parts[i] in current) {
        current = current[parts[i]];
      } else {
        return fallback || path;
      }
    }
    return typeof current === 'string' ? current : fallback || path;
  }

  // ------------------------------------------------------------------------
  // 2. DOM CACHE
  // ------------------------------------------------------------------------
  const elements = {
    // Navigation
    mobileToggle: document.getElementById('mobile-toggle'),
    mobileMenu: document.getElementById('mobile-menu'),
    navLinks: document.querySelectorAll('.nav-link'),

    // Sections & Containers
    prodiContainer: document.getElementById('prodi-container'),
    orgGrid: document.getElementById('org-grid'),
    studentsGrid: document.getElementById('students-grid'),
    studentsCount: document.getElementById('students-count'),
    searchInput: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    filterGroup: document.getElementById('filter-group'),
    galleryContainer: document.getElementById('gallery-container'),
    announcementsList: document.getElementById('announcements-list'),
    quickLinksList: document.getElementById('quick-links-list'),

    // Modal Components
    studentModal: document.getElementById('student-modal'),
    modalClose: document.getElementById('modal-close'),
    modalPhoto: document.getElementById('modal-photo'),
    modalNim: document.getElementById('modal-nim'),
    modalName: document.getElementById('modal-name'),
    modalNickname: document.getElementById('modal-nickname'),
    modalClass: document.getElementById('modal-class'),
    modalQuoteWrap: document.getElementById('modal-quote-wrap'),
    modalQuote: document.getElementById('modal-quote'),
    modalSocial: document.getElementById('modal-social'),
    modalSocialBtn: document.getElementById('modal-social-btn'),
  };

  // ------------------------------------------------------------------------
  // 3. UTILITY FUNCTIONS
  // ------------------------------------------------------------------------

  /**
   * Escape HTML to prevent XSS injection
   */
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Extract clean username from Instagram URL or handle
   */
  function extractIgUsername(raw) {
    if (!raw) return '';
    return raw
      .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
      .replace(/^@/, '')
      .replace(/\/.*$/, '')
      .trim();
  }

  /**
   * Universal Fallback for Member / Lecturer Images
   */
  window.handleImageFallback = function (imgElement) {
    if (!imgElement) return;
    const currentSrc = imgElement.getAttribute('src') || '';

    if (currentSrc.includes('placeholder.jpg')) {
      // Second fallback: inline aesthetic SVG monogram
      const fallbackSvg =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400' width='100%' height='100%'><rect width='100%' height='100%' fill='%23121216'/><circle cx='150' cy='150' r='54' fill='%2322222a'/><path d='M80 320 C80 230 220 230 220 320 Z' fill='%2322222a'/><text x='150' y='360' font-family='sans-serif' font-size='15' font-weight='600' fill='%23555560' text-anchor='middle' letter-spacing='2'>SI 26</text></svg>";
      imgElement.onerror = null;
      imgElement.src = fallbackSvg;
    } else {
      // First fallback: default placeholder image
      imgElement.src = 'assets/images/members/placeholder.jpg';
    }
  };

  // ------------------------------------------------------------------------
  // 4. RENDERING MODULES
  // ------------------------------------------------------------------------

  /**
   * Render Ketua Program Studi Card
   */
  function renderKetuaProdi() {
    if (!elements.prodiContainer || typeof SI26_KETUA_PRODI === 'undefined') return;

    const data = SI26_KETUA_PRODI;
    const roleText = t('about.prodiRole', data.role);
    elements.prodiContainer.innerHTML = `
      <div class="prodi-card">
        <div class="prodi-photo-wrap">
          <img
            src="${escapeHtml(data.photo || 'assets\images\lecturers\lecturer.jpg')}"
            alt="${escapeHtml(data.name)}"
            class="prodi-photo"
            loading="lazy"
            onerror="this.onerror=null; this.src='assets\images\lecturers\lecturer.jpg';"
          />
        </div>
        <div class="prodi-info">
          <span class="prodi-role-tag">${escapeHtml(roleText)}</span>
          <h3 class="prodi-name">${escapeHtml(data.name)}</h3>
          <p class="prodi-institution">${escapeHtml(data.program)} · ${escapeHtml(data.institution)}</p>
        </div>
      </div>
    `;
  }

  /**
   * Render Organization Structure (Placeholder / Data-driven)
   */
  function renderOrganization() {
    if (!elements.orgGrid || typeof SI26_ORGANIZATION === 'undefined') return;

    elements.orgGrid.innerHTML = SI26_ORGANIZATION.map(function (item) {
      const photoSrc = item.photo || 'assets/images/members/placeholder.jpg';
      const hasIg = Boolean(item.instagram && item.instagram.trim().length > 0);
      const igUser = hasIg ? extractIgUsername(item.instagram) : '';
      const igUrl = hasIg
        ? item.instagram.startsWith('http')
          ? item.instagram
          : `https://instagram.com/${igUser}`
        : '';

      const positionText = t(`leadership.positions.${item.position}`, item.position);
      const isComingSoon = !item.name || item.name === 'Coming Soon';
      const nameText = isComingSoon ? 'Coming Soon' : item.name;
      const statusText = isComingSoon
        ? t('leadership.status', 'Belum Ditentukan')
        : item.status || 'Pengurus Angkatan';

      return `
        <div class="org-card">
          <div class="org-photo-wrap">
            <img
              src="${escapeHtml(photoSrc)}"
              alt="${escapeHtml(positionText)}"
              class="org-photo"
              loading="lazy"
              onerror="handleImageFallback(this)"
            />
          </div>
          <div class="org-info">
            <span class="org-position">${escapeHtml(positionText)}</span>
            <h4 class="org-name">${escapeHtml(nameText)}</h4>
            <span class="org-status">${escapeHtml(statusText)}</span>
            ${
              hasIg
                ? `
              <a
                href="${escapeHtml(igUrl)}"
                target="_blank"
                rel="noopener noreferrer"
                class="student-card-ig"
                style="margin-top: 0.35rem;"
                onclick="event.stopPropagation()"
              >
                <span>@${escapeHtml(igUser)}</span>
                <span aria-hidden="true">↗</span>
              </a>
            `
                : ''
            }
          </div>
        </div>
      `;
    }).join('');
  }

  /**
   * Render Dynamic Class Filter Pills
   */
  function renderClassFilters() {
    if (!elements.filterGroup || typeof SI26_STUDENTS === 'undefined') return;

    // Detect unique classes
    const classSet = new Set();
    SI26_STUDENTS.forEach(function (student) {
      if (student.className && student.className.trim()) {
        classSet.add(student.className.trim());
      }
    });

    const classes = ['All', ...Array.from(classSet)];

    elements.filterGroup.innerHTML = classes
      .map(function (cls) {
        const isActive = cls === currentClassFilter;
        let count = 0;
        if (cls === 'All') {
          count = SI26_STUDENTS.length;
        } else {
          count = SI26_STUDENTS.filter(function (s) {
            return s.className === cls;
          }).length;
        }

        const displayFilterName =
          cls === 'All'
            ? t('directory.filterAll', 'Semua')
            : cls === 'Belum Ditentukan'
              ? t('directory.defaultClass', 'Belum Ditentukan')
              : cls;
        const labelText = `${displayFilterName} (${count})`;

        return `
          <button
            type="button"
            class="filter-btn ${isActive ? 'is-active' : ''}"
            data-class="${escapeHtml(cls)}"
            aria-pressed="${isActive ? 'true' : 'false'}"
          >
            ${escapeHtml(labelText)}
          </button>
        `;
      })
      .join('');

    // Filter click handlers
    const buttons = elements.filterGroup.querySelectorAll('.filter-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentClassFilter = btn.getAttribute('data-class') || 'All';
        buttons.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        renderStudents();
      });
    });
  }

  /**
   * Filter & Render Student Cards
   */
  function renderStudents() {
    if (!elements.studentsGrid || typeof SI26_STUDENTS === 'undefined') return;

    // Filter logic
    const filtered = SI26_STUDENTS.filter(function (student) {
      const matchClass = currentClassFilter === 'All' || student.className === currentClassFilter;

      if (!matchClass) return false;

      if (!searchQuery) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = student.name && student.name.toLowerCase().includes(q);
      const nimMatch = student.nim && student.nim.toLowerCase().includes(q);
      const nickMatch = student.nickname && student.nickname.toLowerCase().includes(q);

      return nameMatch || nimMatch || nickMatch;
    });

    // Update count feedback
    if (elements.studentsCount) {
      if (searchQuery.trim().length > 0 || currentClassFilter !== 'All') {
        const template = t('directory.showingCount', 'Menampilkan {count} dari {total} mahasiswa');
        elements.studentsCount.textContent = template
          .replace('{count}', filtered.length)
          .replace('{total}', SI26_STUDENTS.length);
      } else {
        const template = t('directory.showingAll', 'Menampilkan seluruh {total} mahasiswa');
        elements.studentsCount.textContent = template.replace('{total}', SI26_STUDENTS.length);
      }
    }

    // Empty state
    if (filtered.length === 0) {
      const emptyTitle = t('directory.emptyTitle', 'No one found.');
      const emptyText = t(
        'directory.emptyText',
        'Tidak ditemukan mahasiswa dengan kata kunci "{query}". Silakan coba cari berdasarkan nama atau NIM.'
      ).replace('{query}', escapeHtml(searchQuery));
      const resetBtnText = t('directory.resetBtn', 'Tampilkan Semua Mahasiswa');

      elements.studentsGrid.innerHTML = `
        <div class="empty-state">
          <h3 class="empty-state-title">${escapeHtml(emptyTitle)}</h3>
          <p class="empty-state-text">
            ${emptyText}
          </p>
          <button type="button" class="empty-state-btn" id="empty-reset-btn">
            ${escapeHtml(resetBtnText)}
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('empty-reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          if (elements.searchInput) elements.searchInput.value = '';
          searchQuery = '';
          currentClassFilter = 'All';
          if (elements.searchClear) elements.searchClear.classList.remove('is-visible');
          renderClassFilters();
          renderStudents();
        });
      }
      return;
    }

    // Render cards
    elements.studentsGrid.innerHTML = filtered
      .map(function (student) {
        const photoPath = student.photo || `assets/images/members/${student.nim}.jpg`;
        const hasQuote = Boolean(student.quote && student.quote.trim().length > 0);
        const hasIg = Boolean(student.instagram && student.instagram.trim().length > 0);
        const igUser = hasIg ? extractIgUsername(student.instagram) : '';
        const igUrl = hasIg
          ? student.instagram.startsWith('http')
            ? student.instagram
            : `https://instagram.com/${igUser}`
          : '';

        const displayClass =
          student.className === 'Belum Ditentukan' || !student.className
            ? t('directory.defaultClass', 'Belum Ditentukan')
            : student.className;
        const viewProfileAria = t(
          'directory.viewProfileAria',
          'Lihat detail profil {name}'
        ).replace('{name}', student.name);

        return `
          <div
            class="student-card"
            role="button"
            tabindex="0"
            data-nim="${escapeHtml(student.nim)}"
            aria-label="${escapeHtml(viewProfileAria)}"
          >
            <div class="student-photo-wrapper">
              <img
                src="${escapeHtml(photoPath)}"
                alt="${escapeHtml(student.name)}"
                class="student-photo"
                loading="lazy"
                onerror="handleImageFallback(this)"
              />
            </div>
            <div class="student-card-info">
              <h3 class="student-card-name">${escapeHtml(student.name)}</h3>
              <p class="student-card-nim tabular-nums">${escapeHtml(student.nim)}</p>
              <p class="student-card-class">${escapeHtml(displayClass)}</p>
              ${hasQuote ? `<p class="student-card-quote">“${escapeHtml(student.quote)}”</p>` : ''}
              ${
                hasIg
                  ? `
                <div class="student-card-social">
                  <a
                    href="${escapeHtml(igUrl)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="student-card-ig"
                    onclick="event.stopPropagation()"
                    aria-label="Buka Instagram @${escapeHtml(igUser)}"
                  >
                    <span>@${escapeHtml(igUser)}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              `
                  : ''
              }
            </div>
          </div>
        `;
      })
      .join('');

    // Bind card click & keyboard press
    const cards = elements.studentsGrid.querySelectorAll('.student-card');
    cards.forEach(function (card) {
      const nim = card.getAttribute('data-nim');
      const targetStudent = SI26_STUDENTS.find(function (s) {
        return s.nim === nim;
      });

      card.addEventListener('click', function () {
        if (targetStudent) openModal(targetStudent, card);
      });

      card.addEventListener('keydown', function (e) {
        if ((e.key === 'Enter' || e.key === ' ') && targetStudent) {
          e.preventDefault();
          openModal(targetStudent, card);
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 5. MODAL SYSTEM (APPLE HIG DIALOG & RESPONSIVE SHEET)
  // ------------------------------------------------------------------------

  /**
   * Modal Open
   */
  function openModal(student, triggerElement) {
    if (!elements.studentModal || !student) return;

    activeStudent = student;
    previousActiveElement = triggerElement || document.activeElement;

    // Populate data
    if (elements.modalPhoto) {
      const photoPath = student.photo || `assets/images/members/${student.nim}.jpg`;
      elements.modalPhoto.src = photoPath;
      elements.modalPhoto.alt = student.name;
      elements.modalPhoto.onerror = function () {
        handleImageFallback(elements.modalPhoto);
      };
    }

    if (elements.modalNim) elements.modalNim.textContent = `NIM ${student.nim}`;
    if (elements.modalName) elements.modalName.textContent = student.name;
    if (elements.modalClass) {
      const displayClass =
        student.className === 'Belum Ditentukan' || !student.className
          ? t('directory.defaultClass', 'Belum Ditentukan')
          : student.className;
      elements.modalClass.textContent = displayClass;
    }

    // Nickname
    if (elements.modalNickname) {
      if (student.nickname && student.nickname.trim().length > 0) {
        elements.modalNickname.textContent = `"${student.nickname.trim()}"`;
        elements.modalNickname.style.display = 'block';
      } else {
        elements.modalNickname.style.display = 'none';
      }
    }

    // Quote
    if (elements.modalQuoteWrap && elements.modalQuote) {
      if (student.quote && student.quote.trim().length > 0) {
        elements.modalQuote.textContent = `“${student.quote.trim()}”`;
        elements.modalQuoteWrap.style.display = 'block';
      } else {
        elements.modalQuoteWrap.style.display = 'none';
      }
    }

    // Instagram
    if (elements.modalSocial && elements.modalSocialBtn) {
      if (student.instagram && student.instagram.trim().length > 0) {
        let igUrl = student.instagram.trim();
        if (!igUrl.startsWith('http')) {
          igUrl = `https://instagram.com/${igUrl.replace('@', '')}`;
        }
        elements.modalSocialBtn.href = igUrl;
        elements.modalSocialBtn.innerHTML = `<span>Instagram · @${escapeHtml(extractIgUsername(student.instagram))}</span><span aria-hidden="true">↗</span>`;
        elements.modalSocial.style.display = 'block';
      } else {
        elements.modalSocial.style.display = 'none';
      }
    }

    // Open & lock background scroll
    elements.studentModal.classList.add('is-open');
    elements.studentModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (elements.modalClose) {
      setTimeout(function () {
        elements.modalClose.focus();
      }, 50);
    }
  }

  /**
   * Modal Close
   */
  function closeModal() {
    if (!elements.studentModal) return;
    elements.studentModal.classList.remove('is-open');
    elements.studentModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeStudent = null;

    // Restore focus
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  // ------------------------------------------------------------------------
  // 6. GALLERY & UPDATES MODULES
  // ------------------------------------------------------------------------

  /**
   * Render Gallery Items
   */
  function renderGallery() {
    if (!elements.galleryContainer || typeof SI26_GALLERY === 'undefined') return;

    if (!Array.isArray(SI26_GALLERY) || SI26_GALLERY.length === 0) {
      elements.galleryContainer.innerHTML = `
        <div class="empty-state">
          <h3 class="empty-state-title">${escapeHtml(t('gallery.emptyTitle', 'Visual Archive Coming Soon'))}</h3>
          <p class="empty-state-text">
            ${escapeHtml(t('gallery.emptyText', "Dokumentasi kegiatan dan momen kebersamaan angkatan SISFOR '26 akan ditampilkan di sini."))}
          </p>
        </div>
      `;
      return;
    }

    elements.galleryContainer.innerHTML = `
      <div class="gallery-grid">
        ${SI26_GALLERY.map(function (item) {
          return `
            <div class="gallery-item">
              <div class="gallery-photo-wrap">
                <img
                  src="${escapeHtml(item.photo)}"
                  alt="${escapeHtml(item.title || item.caption || "Dokumentasi SISFOR '26")}"
                  loading="lazy"
                  onerror="this.onerror=null; this.src='assets/images/gallery/placeholder.jpg';"
                />
              </div>
              <div class="gallery-meta">
                <span class="gallery-date">${escapeHtml(item.date || 'Coming Soon')}</span>
                <h4 class="gallery-title">${escapeHtml(item.title || 'Momen Kegiatan')}</h4>
                <p class="gallery-caption">${escapeHtml(item.caption || "Dokumentasi kegiatan angkatan SISFOR '26.")}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  /**
   * Render Announcements
   */
  function renderAnnouncements() {
    if (!elements.announcementsList || typeof SI26_ANNOUNCEMENTS === 'undefined') return;

    elements.announcementsList.innerHTML = SI26_ANNOUNCEMENTS.map(function (item) {
      return `
        <article class="announcement-card">
          <span class="announcement-date">${escapeHtml(item.date || 'TBA')}</span>
          <h3 class="announcement-title">${escapeHtml(item.title)}</h3>
          <p class="announcement-text">${escapeHtml(item.description)}</p>
        </article>
      `;
    }).join('');
  }

  /**
   * Render Quick Links
   */
  function renderQuickLinks() {
    if (!elements.quickLinksList || typeof SI26_QUICK_LINKS === 'undefined') return;

    elements.quickLinksList.innerHTML = SI26_QUICK_LINKS.map(function (item) {
      const isAvailable = Boolean(item.url && item.url.trim().length > 0);
      const targetAttr = isAvailable
        ? `target="_blank" rel="noopener noreferrer"`
        : `aria-disabled="true"`;
      const linkTag = isAvailable ? 'a' : 'div';

      return `
        <${linkTag}
          href="${isAvailable ? escapeHtml(item.url) : '#'}"
          class="quick-link-card"
          ${targetAttr}
        >
          <div class="quick-link-info">
            <h4 class="quick-link-title">${escapeHtml(item.title)}</h4>
            <span class="quick-link-sub">${escapeHtml(item.subtitle || '')}</span>
          </div>
          <span class="quick-link-badge">
            <span>${escapeHtml(item.status || 'Open')}</span>
            <span aria-hidden="true">${isAvailable ? '↗' : '·'}</span>
          </span>
        </${linkTag}>
      `;
    }).join('');
  }

  // ------------------------------------------------------------------------
  // 7. EVENT LISTENERS & NAVIGATION SPY
  // ------------------------------------------------------------------------
  function setupEvents() {
    // Mobile navigation toggle
    if (elements.mobileToggle && elements.mobileMenu) {
      elements.mobileToggle.addEventListener('click', function () {
        const isOpen = elements.mobileMenu.classList.toggle('is-active');
        elements.mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close menu when clicking link
      const mobileLinks = elements.mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          elements.mobileMenu.classList.remove('is-active');
          elements.mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Search input
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value;
        if (elements.searchClear) {
          if (searchQuery.length > 0) {
            elements.searchClear.classList.add('is-visible');
          } else {
            elements.searchClear.classList.remove('is-visible');
          }
        }
        renderStudents();
      });
    }

    // Search clear button
    if (elements.searchClear && elements.searchInput) {
      elements.searchClear.addEventListener('click', function () {
        elements.searchInput.value = '';
        searchQuery = '';
        elements.searchClear.classList.remove('is-visible');
        elements.searchInput.focus();
        renderStudents();
      });
    }

    // Modal close button
    if (elements.modalClose) {
      elements.modalClose.addEventListener('click', closeModal);
    }

    // Backdrop click to close
    if (elements.studentModal) {
      elements.studentModal.addEventListener('click', function (e) {
        if (e.target === elements.studentModal) {
          closeModal();
        }
      });
    }

    // Keyboard controls (Esc to close)
    document.addEventListener('keydown', function (e) {
      if (
        e.key === 'Escape' &&
        elements.studentModal &&
        elements.studentModal.classList.contains('is-open')
      ) {
        closeModal();
      }
    });

    // Active Navigation Spy on Scroll
    if ('IntersectionObserver' in window && elements.navLinks.length > 0) {
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const currentId = entry.target.getAttribute('id');
              elements.navLinks.forEach(function (link) {
                const href = link.getAttribute('href');
                if (href === `#${currentId}`) {
                  link.classList.add('is-active');
                } else {
                  link.classList.remove('is-active');
                }
              });
            }
          });
        },
        {
          rootMargin: '-20% 0px -70% 0px',
        }
      );

      sections.forEach(function (sec) {
        observer.observe(sec);
      });
    }
  }

  // ------------------------------------------------------------------------
  // 8. THEME TOGGLE (DARK / LIGHT) & PERSISTENCE
  // ------------------------------------------------------------------------
  function setupThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const mobileThemeBtn = document.getElementById('mobile-theme-toggle');
    const mobileThemeText = document.getElementById('mobile-theme-text');

    function getPreferredTheme() {
      try {
        const saved = localStorage.getItem('si26-theme') || localStorage.getItem('si26_theme');
        if (saved === 'light' || saved === 'dark') return saved;
      } catch (e) {}

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
      return 'dark';
    }

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('si26-theme', theme);
        localStorage.setItem('si26_theme', theme);
      } catch (e) {}

      const isLight = theme === 'light';
      const ariaLabel = isLight
        ? t('theme.switchToDark', 'Ganti ke mode gelap')
        : t('theme.switchToLight', 'Ganti ke mode terang');
      const statusText = isLight ? t('theme.light', 'Light Mode') : t('theme.dark', 'Dark Mode');

      if (themeBtn) {
        themeBtn.setAttribute('aria-label', ariaLabel);
        themeBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        themeBtn.setAttribute('title', ariaLabel);
      }
      if (mobileThemeBtn) {
        mobileThemeBtn.setAttribute('aria-label', ariaLabel);
        mobileThemeBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
      }
      if (mobileThemeText) {
        mobileThemeText.textContent = statusText;
      }
    }

    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
    }

    // Initialize state
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', toggleTheme);
    }

    // Listen to system changes if user hasn't explicitly set preference
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
        try {
          if (!localStorage.getItem('si26-theme') && !localStorage.getItem('si26_theme')) {
            applyTheme(e.matches ? 'light' : 'dark');
          }
        } catch (err) {}
      });
    }
  }

  // ------------------------------------------------------------------------
  // 9. LANGUAGE SWITCHER (ID / EN) & PERSISTENCE
  // ------------------------------------------------------------------------
  function setupLanguageToggle() {
    function getPreferredLanguage() {
      try {
        const saved = localStorage.getItem('si26-language') || localStorage.getItem('si26_lang');
        if (saved === 'en' || saved === 'id') return saved;
      } catch (e) {}
      return 'id';
    }

    function applyLanguage(lang) {
      currentLanguage = lang === 'en' ? 'en' : 'id';
      document.documentElement.setAttribute('lang', currentLanguage);
      try {
        localStorage.setItem('si26-language', currentLanguage);
        localStorage.setItem('si26_lang', currentLanguage);
      } catch (e) {}

      // Update segmented control buttons state (Desktop & Mobile)
      const allLangButtons = document.querySelectorAll('.lang-btn[data-lang]');
      allLangButtons.forEach(function (btn) {
        const btnLang = btn.getAttribute('data-lang');
        const isActive = btnLang === currentLanguage;
        if (isActive) {
          btn.classList.add('is-active');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('is-active');
          btn.setAttribute('aria-pressed', 'false');
        }
      });

      // Update static elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        const translated = t(key, null);
        if (translated !== null && translated !== undefined) {
          el.textContent = translated;
        }
      });

      // Update placeholder attributes with data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-placeholder');
        const translated = t(key, null);
        if (translated !== null && translated !== undefined) {
          el.setAttribute('placeholder', translated);
        }
      });

      // Update aria-label attributes with data-i18n-aria
      document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-aria');
        const translated = t(key, null);
        if (translated !== null && translated !== undefined) {
          el.setAttribute('aria-label', translated);
        }
      });

      // Update theme toggle aria-labels for current language
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const isLight = currentTheme === 'light';
      const themeLabel = isLight
        ? t('theme.switchToDark', 'Ganti ke mode gelap')
        : t('theme.switchToLight', 'Ganti ke mode terang');
      const themeStatus = isLight ? t('theme.light', 'Light Mode') : t('theme.dark', 'Dark Mode');

      const themeBtn = document.getElementById('theme-toggle');
      if (themeBtn) {
        themeBtn.setAttribute('aria-label', themeLabel);
        themeBtn.setAttribute('title', themeLabel);
      }
      const mobileThemeBtn = document.getElementById('mobile-theme-toggle');
      if (mobileThemeBtn) {
        mobileThemeBtn.setAttribute('aria-label', themeLabel);
      }
      const mobileThemeText = document.getElementById('mobile-theme-text');
      if (mobileThemeText) {
        mobileThemeText.textContent = themeStatus;
      }

      // Re-render dynamic components with translated UI labels
      renderKetuaProdi();
      renderOrganization();
      renderClassFilters();
      renderStudents();
      renderGallery();
      renderAnnouncements();
      renderQuickLinks();

      // If student modal is currently open, refresh its labels
      if (
        activeStudent &&
        elements.studentModal &&
        elements.studentModal.classList.contains('is-open')
      ) {
        const displayClass =
          activeStudent.className === 'Belum Ditentukan' || !activeStudent.className
            ? t('directory.defaultClass', 'Belum Ditentukan')
            : activeStudent.className;
        if (elements.modalClass) elements.modalClass.textContent = displayClass;
      }
    }

    // Attach click events on all lang-btn
    const allLangButtons = document.querySelectorAll('.lang-btn[data-lang]');
    allLangButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLanguage) {
          applyLanguage(targetLang);
        }
      });
    });

    // Initialize with preferred language
    const initialLang = getPreferredLanguage();
    applyLanguage(initialLang);
  }

  // ------------------------------------------------------------------------
  // 10. INITIALIZATION
  // ------------------------------------------------------------------------
  function init() {
    setupThemeToggle();
    setupLanguageToggle();
    setupEvents();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
