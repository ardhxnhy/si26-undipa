/**
 * ==================================================
 * SI '26 APPLICATION LOGIC
 * Sistem Informasi 2026 — Universitas Dipa Makassar
 * Vanilla JavaScript ES6+
 * ==================================================
 */

(function () {
  "use strict";

  // State Management
  const state = {
    searchQuery: "",
    selectedClass: "all",
    selectedStudent: null
  };

  // Helper: Dapatkan inisial dari nama
  function getInitials(name) {
    if (!name) return "SI";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  // 1. Inisialisasi Navigasi & Mobile Menu
  function initNavigation() {
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-cta");
    const navLinks = document.querySelectorAll(".nav-link");

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener("click", () => {
        const isOpen = mobileDrawer.classList.toggle("open");
        mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        mobileToggle.innerHTML = isOpen
          ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
          : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
      });

      mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
          mobileDrawer.classList.remove("open");
          mobileToggle.setAttribute("aria-expanded", "false");
          mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
        });
      });
    }

    // Active Section Observer for Desktop Nav
    const sections = document.querySelectorAll("section[id]");
    if ("IntersectionObserver" in window && sections.length > 0) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const currentId = entry.target.getAttribute("id");
              navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (href === `#${currentId}`) {
                  link.classList.add("active");
                } else {
                  link.classList.remove("active");
                }
              });
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      sections.forEach(sec => observer.observe(sec));
    }
  }

  // 2. Render Statistik
  function renderStatistics() {
    const totalStudentsEl = document.getElementById("statTotalStudents");
    if (totalStudentsEl && siteData.students) {
      totalStudentsEl.textContent = siteData.students.length;
    }
  }

  // 3. Render Ketua Program Studi
  function renderHeadOfProgram() {
    const container = document.getElementById("prodiContainer");
    if (!container || !siteData.headOfProgram) return;

    const { name, title } = siteData.headOfProgram;
    const initials = getInitials(name);

    container.innerHTML = `
      <div class="prodi-card">
        <div class="prodi-avatar" aria-label="Foto ${name}">
          <span>${initials}</span>
        </div>
        <div class="prodi-info">
          <div class="prodi-role">${escapeHtml(title)}</div>
          <h3 class="prodi-name">${escapeHtml(name)}</h3>
          <p class="prodi-caption">Program Studi Sistem Informasi — Universitas Dipa Makassar</p>
        </div>
      </div>
    `;
  }

  // 4. Render Struktur Angkatan
  function renderOrganization() {
    const container = document.getElementById("organizationGrid");
    if (!container || !siteData.organization) return;

    container.innerHTML = siteData.organization
      .map(item => {
        const hasName = Boolean(item.name && item.name.trim());
        return `
          <div class="org-card">
            <div class="org-avatar-slot" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h4 class="org-position">${escapeHtml(item.position)}</h4>
            <div class="org-name">${hasName ? escapeHtml(item.name) : "—"}</div>
            <span class="org-status">${escapeHtml(item.status || "Segera Diumumkan")}</span>
          </div>
        `;
      })
      .join("");
  }

  // 5. Render Filter Kelas
  function renderClassFilters() {
    const container = document.getElementById("classFilters");
    if (!container || !siteData.students) return;

    const uniqueClasses = Array.from(
      new Set(siteData.students.map(s => s.className || "Belum Ditentukan"))
    );

    let html = `
      <button type="button" class="filter-btn active" data-class="all">Semua (${siteData.students.length})</button>
    `;

    uniqueClasses.forEach(cls => {
      const count = siteData.students.filter(s => (s.className || "Belum Ditentukan") === cls).length;
      html += `
        <button type="button" class="filter-btn" data-class="${escapeHtml(cls)}">
          ${escapeHtml(cls)} (${count})
        </button>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedClass = btn.dataset.class;
        filterAndRenderStudents();
      });
    });
  }

  // 6. Filter & Render Student Directory
  function filterAndRenderStudents() {
    const grid = document.getElementById("studentsGrid");
    const countEl = document.getElementById("resultsCount");
    if (!grid || !siteData.students) return;

    const query = state.searchQuery.trim().toLowerCase();
    const selectedClass = state.selectedClass;

    const filtered = siteData.students.filter(student => {
      const matchesSearch =
        student.name.toLowerCase().includes(query) ||
        student.nim.toLowerCase().includes(query) ||
        (student.nickname && student.nickname.toLowerCase().includes(query));

      const studentClass = student.className || "Belum Ditentukan";
      const matchesClass = selectedClass === "all" || studentClass === selectedClass;

      return matchesSearch && matchesClass;
    });

    if (countEl) {
      countEl.textContent = `Menampilkan ${filtered.length} dari ${siteData.students.length} mahasiswa`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h3 class="empty-title">Tidak ada mahasiswa ditemukan</h3>
          <p class="empty-desc">Coba gunakan kata kunci pencarian yang lain atau reset filter kelas.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(student => {
        const initials = getInitials(student.name);
        const hasCustomPhoto = Boolean(
          student.photo &&
          student.photo.trim() &&
          !student.photo.includes("placeholder.jpg")
        );
        const photoTag = hasCustomPhoto
          ? `<img src="${escapeHtml(student.photo)}" alt="${escapeHtml(student.name)}" loading="lazy" onerror="this.remove();" />`
          : "";

        return `
          <div class="student-card" role="button" tabindex="0" data-nim="${student.nim}" aria-label="Lihat profil ${escapeHtml(student.name)}">
            <div class="student-avatar" aria-hidden="true">
              ${photoTag}
              <span>${initials}</span>
            </div>
            <h4 class="student-name">${escapeHtml(student.name)}</h4>
            <div class="student-nim">NIM: ${student.nim}</div>
            <div class="student-class-tag">${escapeHtml(student.className || "Belum Ditentukan")}</div>
          </div>
        `;
      })
      .join("");

    // Tambahkan event click & keyboard (Enter/Space) pada setiap kartu mahasiswa
    grid.querySelectorAll(".student-card").forEach(card => {
      const nim = card.dataset.nim;
      const targetStudent = siteData.students.find(s => s.nim === nim);

      const openHandler = () => {
        if (targetStudent) {
          openStudentModal(targetStudent);
        }
      };

      card.addEventListener("click", openHandler);
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHandler();
        }
      });
    });
  }

  // 7. Modal Detail Mahasiswa
  function initModal() {
    const modal = document.getElementById("studentModal");
    const closeBtn = document.getElementById("modalCloseBtn");

    if (!modal) return;

    const closeModal = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", e => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });
  }

  function openStudentModal(student) {
    const modal = document.getElementById("studentModal");
    const modalBody = document.getElementById("modalBody");
    if (!modal || !modalBody) return;

    const initials = getInitials(student.name);
    const hasNickname = Boolean(student.nickname && student.nickname.trim());
    const hasQuote = Boolean(student.quote && student.quote.trim());
    const hasInstagram = Boolean(student.instagram && student.instagram.trim());
    const hasCustomPhoto = Boolean(
      student.photo &&
      student.photo.trim() &&
      !student.photo.includes("placeholder.jpg")
    );
    const photoTag = hasCustomPhoto
      ? `<img src="${escapeHtml(student.photo)}" alt="${escapeHtml(student.name)}" onerror="this.remove();" />`
      : "";

    modalBody.innerHTML = `
      <div class="modal-profile-header">
        <div class="modal-avatar">
          ${photoTag}
          <span>${initials}</span>
        </div>
        <h3 class="modal-name">${escapeHtml(student.name)}</h3>
        <div class="modal-nim">NIM: ${student.nim}</div>
      </div>

      <div class="modal-details-list">
        <div class="modal-detail-row">
          <span class="modal-detail-label">Nama Panggilan</span>
          <span class="modal-detail-val">${hasNickname ? escapeHtml(student.nickname) : "Belum tersedia"}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-label">Kelas Angkatan</span>
          <span class="modal-detail-val">${escapeHtml(student.className || "Belum Ditentukan")}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-label">Program Studi</span>
          <span class="modal-detail-val">Sistem Informasi 2026</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-label">Institusi</span>
          <span class="modal-detail-val">Universitas Dipa Makassar</span>
        </div>
      </div>

      <div class="modal-quote-box">
        <div class="modal-quote-label">Kutipan / Catatan Pribadi</div>
        <div class="modal-quote-text">
          ${hasQuote ? `“${escapeHtml(student.quote)}”` : "Belum tersedia. Ruang ini akan diisi catatan atau kutipan pribadi mahasiswa."}
        </div>
      </div>

      <div class="modal-social-area">
        ${
          hasInstagram
            ? `
          <a href="https://instagram.com/${escapeHtml(student.instagram)}" target="_blank" rel="noopener noreferrer" class="modal-social-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>@${escapeHtml(student.instagram)}</span>
          </a>
        `
            : `
          <div class="modal-social-btn disabled" aria-disabled="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram: Belum tersedia</span>
          </div>
        `
        }
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  // 8. Render Galeri
  function renderGallery() {
    const container = document.getElementById("galleryGrid");
    if (!container || !siteData.gallery) return;

    container.innerHTML = siteData.gallery
      .map(item => {
        return `
          <div class="gallery-card">
            <div class="gallery-img-container" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity: 0.5;">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <div class="gallery-placeholder-badge">Segera Hadir</div>
            </div>
            <div class="gallery-content">
              <div class="gallery-meta">
                <span>${escapeHtml(item.category)}</span>
                <span>•</span>
                <span>${escapeHtml(item.date)}</span>
              </div>
              <h4 class="gallery-title">${escapeHtml(item.title)}</h4>
              <p class="gallery-caption">${escapeHtml(item.caption)}</p>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // 9. Render Pengumuman / Announcements
  function renderAnnouncements() {
    const container = document.getElementById("announcementsList");
    if (!container || !siteData.announcements) return;

    container.innerHTML = siteData.announcements
      .map(item => {
        return `
          <div class="announcement-card">
            <div class="announcement-icon-wrap" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <div class="announcement-main">
              <div class="announcement-header">
                <h4 class="announcement-title">${escapeHtml(item.title)}</h4>
                <span class="announcement-date">${escapeHtml(item.date)}</span>
              </div>
              <p class="announcement-body">${escapeHtml(item.content)}</p>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // 10. Render Quick Links
  function renderQuickLinks() {
    const container = document.getElementById("quicklinksGrid");
    if (!container || !siteData.quickLinks) return;

    const icons = {
      instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
      whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
      drive: '<path d="M12 2L2 19.5h20L12 2z"></path>',
      documents: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>'
    };

    container.innerHTML = siteData.quickLinks
      .map(item => {
        const hasUrl = Boolean(item.url && item.url.trim());
        const iconSvg = icons[item.type] || icons.documents;

        if (hasUrl) {
          return `
            <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="quicklink-card available">
              <div class="quicklink-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  ${iconSvg}
                </svg>
              </div>
              <h4 class="quicklink-title">${escapeHtml(item.title)}</h4>
              <p class="quicklink-desc">${escapeHtml(item.description)}</p>
              <span class="quicklink-status" style="color: var(--color-accent); font-weight: 600;">Buka Tautan &rarr;</span>
            </a>
          `;
        }

        return `
          <div class="quicklink-card coming-soon">
            <div class="quicklink-icon-wrap" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${iconSvg}
              </svg>
            </div>
            <h4 class="quicklink-title">${escapeHtml(item.title)}</h4>
            <p class="quicklink-desc">${escapeHtml(item.description)}</p>
            <span class="quicklink-status">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${escapeHtml(item.status || "Segera Hadir")}
            </span>
          </div>
        `;
      })
      .join("");
  }

  // 11. Search Input Handler
  function initSearch() {
    const searchInput = document.getElementById("studentSearch");
    const clearBtn = document.getElementById("searchClearBtn");

    if (!searchInput) return;

    searchInput.addEventListener("input", e => {
      state.searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = state.searchQuery ? "block" : "none";
      }
      filterAndRenderStudents();
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        clearBtn.style.display = "none";
        searchInput.focus();
        filterAndRenderStudents();
      });
    }

    // Keyboard shortcut '/' untuk mencari
    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement !== searchInput && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // Helper Escape HTML untuk proteksi XSS
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Document Ready Execution
  function init() {
    initNavigation();
    renderStatistics();
    renderHeadOfProgram();
    renderOrganization();
    renderClassFilters();
    filterAndRenderStudents();
    initModal();
    renderGallery();
    renderAnnouncements();
    renderQuickLinks();
    initSearch();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
