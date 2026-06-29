/* =============================================================
   MAIN — renders content from data.js and wires up interactions.
   You normally won't need to edit this file; edit data.js instead.
   ============================================================= */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  };

  /* ---------------- HERO ---------------- */
  function renderHero() {
    $("#heroGreeting").textContent = SITE.hero.greeting;
    $("#heroName").textContent = SITE.name;
    $("#heroTitle").textContent = SITE.title;
    $("#heroTagline").textContent = SITE.hero.tagline;
    $("#resumeBtn").setAttribute("href", SITE.resume);

    // Avatar: use photo if provided, else monogram from initials
    const ring = document.querySelector(".avatar-ring");
    if (SITE.photo) {
      ring.classList.add("has-photo");
      ring.innerHTML = `<img src="${SITE.photo}" alt="${SITE.name}" class="avatar-img" />`;
    } else {
      const mono = SITE.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
      $("#avatarMono").textContent = mono;
    }

    const stats = $("#heroStats");
    SITE.hero.stats.forEach((s) => {
      const li = el("li");
      li.appendChild(el("span", "stat-value", s.value));
      li.appendChild(el("span", "stat-label", s.label));
      stats.appendChild(li);
    });
  }

  /* ---------------- TECH MARQUEE ---------------- */
  function renderMarquee() {
    const track = $("#marqueeTrack");
    if (!track || !SITE.techStack) return;
    // duplicate the list so the scroll loops seamlessly
    const items = [...SITE.techStack, ...SITE.techStack]
      .map((t) => `<span class="marquee-item">${t}</span>`)
      .join("");
    track.innerHTML = items;
  }

  /* ---------------- WHAT I DO (services) ---------------- */
  function renderServices() {
    const grid = $("#servicesGrid");
    if (!grid || !SITE.whatIDo) return;
    SITE.whatIDo.forEach((s) => {
      const card = el("div", "service-card glass reveal");
      card.innerHTML = `
        <span class="service-icon">${s.icon}</span>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------- ABOUT ---------------- */
  function renderAbout() {
    $("#aboutIntro").textContent = SITE.about.intro;

    const e = SITE.about.education;
    $("#educationCard").innerHTML = `
      <p class="edu-label">Education</p>
      <h3>${e.degree}</h3>
      <p class="edu-inst">${e.institute}</p>
      <div class="edu-meta">
        <span>${e.period}</span>
        <span class="edu-cgpa">${e.cgpa}</span>
      </div>
    `;
  }

  /* ---------------- EXPERIENCE ---------------- */
  function renderExperience() {
    const wrap = $("#timeline");
    SITE.experience.forEach((job) => {
      const item = el("div", "timeline-item reveal");
      const points = job.points.map((p) => `<li>${p}</li>`).join("");
      item.innerHTML = `
        <div class="ti-head">
          <h3>${job.role}</h3>
          <span class="ti-period">${job.period}</span>
        </div>
        <p class="ti-company">${job.company}</p>
        <ul>${points}</ul>
      `;
      wrap.appendChild(item);
    });
  }

  /* ---------------- PROJECTS ---------------- */
  function renderProjects() {
    const grid = $("#projectsGrid");
    SITE.projects.forEach((p) => {
      const card = el("article", "project-card glass reveal");
      const tech = p.tech.map((t) => `<span>${t}</span>`).join("");
      const outcome = p.outcome
        ? `<div class="pc-outcome"><span class="pc-outcome-label">Key Outcomes</span>${p.outcome}</div>`
        : "";
      card.innerHTML = `
        <div class="pc-top">
          <span class="pc-icon">📦</span>
          <a class="pc-link" href="${p.link}" target="_blank" rel="noopener" aria-label="View ${p.title} on GitHub">↗</a>
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        ${outcome}
        <div class="pc-tech">${tech}</div>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------- SKILLS ---------------- */
  function renderSkills() {
    const grid = $("#skillsGrid");
    SITE.skills.forEach((group) => {
      const card = el("div", "skill-card glass reveal");
      const tags = group.items.map((i) => `<span>${i}</span>`).join("");
      card.innerHTML = `
        <div class="sk-head">
          <span class="sk-icon">${group.icon}</span>
          <h3>${group.category}</h3>
        </div>
        <div class="sk-tags">${tags}</div>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------- CERTIFICATIONS ---------------- */
  function renderCerts() {
    const grid = $("#certsGrid");
    SITE.certifications.forEach((cert) => {
      const card = el("button", "cert-card glass reveal");
      card.type = "button";
      const hasFile = cert.link && cert.link !== "#";
      card.innerHTML = `
        <span class="cert-icon">${cert.icon}</span>
        <h3>${cert.name}</h3>
        <span class="cert-link">${hasFile ? "View →" : "Coming soon"}</span>
      `;
      if (hasFile) {
        card.addEventListener("click", () => openCertModal(cert));
      } else {
        card.disabled = true;
        card.style.cursor = "default";
      }
      grid.appendChild(card);
    });
  }

  /* ---------------- CERT MODAL VIEWER ---------------- */
  let modalEl = null;
  function buildModal() {
    modalEl = el("div", "cert-modal");
    modalEl.innerHTML = `
      <div class="cert-modal-backdrop" data-close></div>
      <div class="cert-modal-box glass" role="dialog" aria-modal="true">
        <div class="cert-modal-head">
          <h3 class="cert-modal-title"></h3>
          <div class="cert-modal-actions">
            <a class="cert-modal-open" target="_blank" rel="noopener">Open in new tab ↗</a>
            <button class="cert-modal-close" aria-label="Close">✕</button>
          </div>
        </div>
        <div class="cert-modal-body"></div>
      </div>
    `;
    document.body.appendChild(modalEl);
    modalEl.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-close") || e.target.classList.contains("cert-modal-close")) {
        closeCertModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCertModal();
    });
  }

  function openCertModal(cert) {
    if (!modalEl) buildModal();
    const isPdf = /\.pdf($|\?)/i.test(cert.link);
    const absUrl = new URL(cert.link, window.location.href).href;
    const body = modalEl.querySelector(".cert-modal-body");
    modalEl.querySelector(".cert-modal-title").textContent = cert.name;
    modalEl.querySelector(".cert-modal-open").setAttribute("href", cert.link);

    if (!isPdf) {
      body.innerHTML = `<img src="${cert.link}" alt="${cert.name}" />`;
    } else {
      const host = window.location.hostname;
      const isLocal = host === "localhost" || host === "127.0.0.1" || host === "";
      if (isLocal) {
        // Local dev: the browser renders the PDF directly
        body.innerHTML = `<iframe src="${cert.link}#toolbar=1&navpanes=0" title="${cert.name}"></iframe>`;
      } else {
        // Production: Google viewer renders PDFs inline on mobile + desktop
        const viewer = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(absUrl)}`;
        body.innerHTML = `<iframe src="${viewer}" title="${cert.name}"></iframe>`;
      }
    }
    modalEl.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCertModal() {
    if (!modalEl) return;
    modalEl.classList.remove("open");
    modalEl.querySelector(".cert-modal-body").innerHTML = "";
    document.body.style.overflow = "";
  }

  /* ---------------- RESUME ---------------- */
  function renderResume() {
    const card = $("#resumeCard");
    if (!card) return;
    card.innerHTML = `
      <div class="resume-info">
        <span class="resume-icon">📄</span>
        <div>
          <h3>${SITE.name} — ${SITE.title}</h3>
          <p>Download my full resume or preview it right here in your browser.</p>
        </div>
      </div>
      <div class="resume-actions">
        <button class="btn btn-ghost" id="resumePreviewBtn" type="button">Preview</button>
        <a class="btn btn-primary" href="${SITE.resume}" download>Download Resume</a>
      </div>
    `;
    card.querySelector("#resumePreviewBtn").addEventListener("click", () =>
      openCertModal({ name: "Resume — " + SITE.name, link: SITE.resume })
    );
  }

  /* ---------------- CONTACT + FOOTER ---------------- */
  function renderContact() {
    const phoneClean = SITE.phone.replace(/\s/g, "");
    $("#contactInfo").innerHTML = `
      <a class="ci-item" href="mailto:${SITE.email}">
        <span class="ci-icon">✉️</span>
        <span><span class="ci-label">Email</span><br><span class="ci-value">${SITE.email}</span></span>
      </a>
      <a class="ci-item" href="tel:${phoneClean}">
        <span class="ci-icon">📞</span>
        <span><span class="ci-label">Phone</span><br><span class="ci-value">${SITE.phone}</span></span>
      </a>
      <div class="ci-item">
        <span class="ci-icon">📍</span>
        <span><span class="ci-label">Location</span><br><span class="ci-value">${SITE.location}</span></span>
      </div>
      <div class="contact-socials">
        <a href="${SITE.links.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
        <a href="${SITE.links.github}" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
        <a href="${SITE.links.blog}" target="_blank" rel="noopener" aria-label="Blog">Blog</a>
      </div>
    `;

    $("#footerText").innerHTML = `© ${new Date().getFullYear()} ${SITE.name}. Built with care.`;
    $("#footerSocials").innerHTML = `
      <a href="${SITE.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${SITE.links.github}" target="_blank" rel="noopener">GitHub</a>
      <a href="${SITE.links.blog}" target="_blank" rel="noopener">Blog</a>
    `;
  }

  /* ---------------- CONTACT FORM (mailto handler) ---------------- */
  function wireForm() {
    const form = $("#contactForm");
    const note = $("#formNote");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = encodeURIComponent($("#cf-name").value.trim());
      const email = encodeURIComponent($("#cf-email").value.trim());
      const message = encodeURIComponent($("#cf-message").value.trim());
      const subject = `Portfolio contact from ${decodeURIComponent(name)}`;
      const body = `Name: ${decodeURIComponent(name)}%0D%0AEmail: ${decodeURIComponent(email)}%0D%0A%0D%0A${decodeURIComponent(message)}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      note.textContent = "Opening your email client… If nothing happens, email me directly at " + SITE.email;
      note.classList.add("success");
      form.reset();
    });
  }

  /* ---------------- NAVBAR + MOBILE MENU ---------------- */
  function wireNav() {
    const navbar = $("#navbar");
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    const backToTop = $("#backToTop");

    // Backdrop for the mobile slide-in menu
    const backdrop = el("div", "nav-backdrop");
    document.body.appendChild(backdrop);

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
      backToTop.classList.toggle("show", window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const setMenu = (open) => {
      links.classList.toggle("open", open);
      toggle.classList.toggle("open", open);
      backdrop.classList.toggle("show", open);
      navbar.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      // lock page scroll while the menu is open
      document.body.style.overflow = open ? "hidden" : "";
    };

    toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
    backdrop.addEventListener("click", () => setMenu(false));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

    // Reset menu state if resized up to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  /* ---------------- THEME TOGGLE ---------------- */
  function wireTheme() {
    const btn = $("#themeToggle");
    const icon = btn.querySelector(".theme-icon");
    const root = document.documentElement;

    const saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
    const setIcon = () => (icon.textContent = root.getAttribute("data-theme") === "light" ? "☀️" : "🌙");
    setIcon();

    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setIcon();
    });
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  function wireReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), idx * 70);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((i) => obs.observe(i));
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderMarquee();
    renderServices();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderCerts();
    renderResume();
    renderContact();
    wireForm();
    wireNav();
    wireTheme();
    wireReveal(); // run last so dynamically-added .reveal nodes are observed
  });
})();
