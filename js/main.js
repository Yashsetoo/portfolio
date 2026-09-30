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
  const pad = (n) => String(n).padStart(2, "0");
  const prefersCalm = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- ICONS (Lucide-style line icons) ---------------- */
  const svg = (paths) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

  const ICON = {
    github: svg('<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 4 5 4 5 4c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 11c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'),
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'),
    mail: svg('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
    globe: svg('<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'),
    phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    pin: svg('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    arrow: svg('<path d="M7 17 17 7M8 7h9v9"/>'),
    check: svg('<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'),
    cap: svg('<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>'),
    sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1.5 14.6 9.4 22.5 12l-7.9 2.6L12 22.5l-2.6-7.9L1.5 12l7.9-2.6z"/></svg>',
    asterisk: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3 5.3 18.7"/></svg>',
  };

  // One icon per "What I Do" card and per skill group (cycles if more are added)
  const SERVICE_ICONS = [
    svg('<circle cx="12" cy="12" r="8"/><path d="M12 2v7.5M19 5l-5.23 5.23M22 12h-7.5M19 19l-5.23-5.23M12 14.5V22M10.23 13.77 5 19M9.5 12H2M10.23 10.23 5 5"/><circle cx="12" cy="12" r="2.5"/>'),
    svg('<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>'),
    svg('<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>'),
    svg('<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>'),
    svg('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'),
    svg('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'),
  ];
  const SKILL_ICONS = [
    svg('<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>'),
    svg('<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>'),
    svg('<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>'),
    svg('<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>'),
    svg('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    svg('<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>'),
  ];

  // A tiny terminal "screenshot" per service, standing in for the template's mockup images
  const ok = (t) => `<span class="ok">${t}</span>`;
  const dim = (t) => `<span class="dim">${t}</span>`;
  const hl = (t) => `<span class="hl">${t}</span>`;
  const SERVICE_MOCKS = [
    `${dim("$")} kubectl get pods -n prod\napi-7d9f8     1/1  ${ok("Running")}\nworker-5c2b  1/1  ${ok("Running")}`,
    `${ok("✓")} build  ${ok("✓")} test  ${ok("✓")} scan\n${ok("✓")} promote → prod ${dim("(OIDC)")}`,
    `${dim("$")} terraform apply\n${ok("Apply complete!")} ${dim("state locked")}`,
    `aks-nodepool   ${hl("right-sized")}\nblob tier      ${hl("hot → cool")}\nmonthly spend  ${ok("▼ 35%")}`,
    `GET /healthz   ${ok("200 OK")}\nreadiness      ${ok("passing")}\nMTTD           ${ok("▼ 45%")}`,
    `static secrets     ${ok("0")}\nkeyvault csi       ${ok("✓")}\nworkload identity  ${ok("✓")}`,
  ];

  const PROJECT_VARIANTS = ["", "v-orange", "v-light"];

  const socialLinks = () => [
    { icon: ICON.github, href: SITE.links.github, label: "GitHub" },
    { icon: ICON.linkedin, href: SITE.links.linkedin, label: "LinkedIn" },
    { icon: ICON.mail, href: "mailto:" + SITE.email, label: "Email" },
    { icon: ICON.globe, href: SITE.links.blog, label: "Blog" },
  ];
  const socialAnchor = (s) =>
    `<a href="${s.href}"${s.href.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"'} aria-label="${s.label}">${s.icon}</a>`;

  const photoImg = (cls) =>
    `<img src="${SITE.photo}" alt="Portrait of ${SITE.name}" class="${cls}" width="400" height="400" />`;

  /* ---------------- HERO ---------------- */
  function renderHero() {
    const h = SITE.hero;
    const first = SITE.name.trim().split(/\s+/)[0];

    $("#heroGreeting").textContent = h.greeting || "Hello!";
    $("#heroName").innerHTML =
      `<span class="line">I'm <span class="accent">${first}</span>,</span>` +
      `<span class="line">${h.shortTitle || SITE.title}</span>`;
    $("#heroQuote").textContent = h.quote || "";

    if (h.highlight) {
      $("#heroHighlight").innerHTML = `
        <span class="hl-bars" aria-hidden="true">${"<i></i>".repeat(12)}</span>
        <strong class="hl-value" data-count="${h.highlight.value}">${h.highlight.value}</strong>
        <span class="hl-label">${h.highlight.label}</span>
      `;
    }

    // Portrait: use photo if provided, else monogram from initials
    const ring = $(".hero-photo");
    if (SITE.photo) {
      ring.innerHTML = photoImg("avatar-img");
      $("#hirePhoto").innerHTML = photoImg("");
    } else {
      $("#avatarMono").textContent = SITE.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    }
  }

  /* ---------------- TYPEWRITER (rotating roles) ---------------- */
  function typewriter() {
    const target = $("#heroTitle");
    const roles = (SITE.hero.roles && SITE.hero.roles.length) ? SITE.hero.roles : [SITE.title];
    if (prefersCalm()) { target.textContent = roles[0]; return; }
    let i = 0, char = 0, deleting = false;
    const tick = () => {
      const word = roles[i];
      char += deleting ? -1 : 1;
      target.textContent = word.slice(0, char);
      let delay = deleting ? 40 : 85;
      if (!deleting && char === word.length) { deleting = true; delay = 1700; }
      else if (deleting && char === 0) { deleting = false; i = (i + 1) % roles.length; delay = 350; }
      setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------------- COUNT-UP NUMBERS (when scrolled into view) ---------------- */
  function wireCounters() {
    const nodes = document.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window) || prefersCalm()) return; // keep the static values

    const run = (node) => {
      const raw = node.dataset.count || "";
      const isFloat = raw.includes(".");
      const num = isFloat ? parseFloat(raw) : parseInt(raw, 10);
      const suffix = raw.replace(/[0-9.]/g, "");
      if (isNaN(num)) return;
      const duration = 1300, start = performance.now();
      const frame = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        node.textContent = (isFloat ? (eased * num).toFixed(2) : Math.round(eased * num)) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); }
      }),
      { threshold: 0.6 }
    );
    nodes.forEach((n) => obs.observe(n));
  }

  /* ---------------- SERVICES ---------------- */
  function renderServices() {
    const grid = $("#servicesGrid");
    if (!grid || !SITE.whatIDo) return;
    $("#servicesLead").textContent = SITE.hero.tagline;
    SITE.whatIDo.forEach((s, i) => {
      const card = el("article", "service-card glass reveal");
      const mock = SERVICE_MOCKS[i]
        ? `<div class="sc-mock" aria-hidden="true"><div class="sc-mock-bar"><i></i><i></i><i></i></div><pre>${SERVICE_MOCKS[i]}</pre></div>`
        : "";
      card.innerHTML = `
        <div class="sc-head">
          <span class="sc-icon">${SERVICE_ICONS[i % SERVICE_ICONS.length]}</span>
          <h3>${s.title}</h3>
        </div>
        ${mock}
        <p>${s.description}</p>
        <span class="sc-arrow" aria-hidden="true">${ICON.arrow}</span>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------- ABOUT / WHY HIRE ME ---------------- */
  function renderAbout() {
    $("#aboutIntro").textContent = SITE.about.intro;

    const stats = $("#heroStats");
    SITE.hero.stats.forEach((s) => {
      stats.appendChild(el("li", null,
        `<span class="stat-value" data-count="${s.value}">${s.value}</span><span class="stat-label">${s.label}</span>`));
    });

    const e = SITE.about.education;
    $("#educationCard").innerHTML = `
      <span class="edu-icon">${ICON.cap}</span>
      <div class="edu-body">
        <h3>${e.degree}</h3>
        <p>${e.institute} · ${e.period} · <span class="edu-cgpa">${e.cgpa}</span></p>
      </div>
    `;
  }

  /* ---------------- EXPERIENCE ---------------- */
  // "Label: detail" bullets get their label set in bold
  const formatPoint = (p) => {
    const cut = p.indexOf(": ");
    return cut > 0 && cut < 60 ? `<strong>${p.slice(0, cut + 1)}</strong> ${p.slice(cut + 2)}` : p;
  };

  function renderExperience() {
    const wrap = $("#timeline");
    SITE.experience.forEach((job) => {
      const item = el("article", "timeline-item reveal");
      item.innerHTML = `
        <div class="ti-left">
          <h3 class="ti-company">${job.company}</h3>
          <p class="ti-period">${job.period}</p>
        </div>
        <span class="ti-mark" aria-hidden="true"></span>
        <div class="ti-right">
          <h4 class="ti-role">${job.role}</h4>
          <ul class="ti-points">${job.points.map((p) => `<li>${formatPoint(p)}</li>`).join("")}</ul>
        </div>
      `;
      wrap.appendChild(item);
    });
  }

  /* ---------------- PROJECTS ---------------- */
  function renderProjects() {
    const track = $("#projectsGrid");
    $("#seeAllProjects").setAttribute("href", SITE.links.github);
    SITE.projects.forEach((p, i) => {
      const [name, sub] = p.title.split(/\s+—\s+/);
      const variant = PROJECT_VARIANTS[i % PROJECT_VARIANTS.length];
      const chips = p.tech.slice(0, 3).map((t, j) => `<span class="pc-chip c${j + 1}">${t}</span>`).join("");
      const card = el("article", "project-card reveal");
      card.innerHTML = `
        <div class="pc-media ${variant}">
          <span class="pc-num" aria-hidden="true">${pad(i + 1)}</span>
          <div aria-hidden="true">${chips}</div>
          <h3 class="pc-title">${name}</h3>
          <a class="pc-go" href="${p.link}" target="_blank" rel="noopener" aria-label="View ${name} on GitHub">${ICON.arrow}</a>
        </div>
        <div class="pc-body">
          <div class="pc-tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
          ${sub ? `<p class="pc-sub">${sub}</p>` : ""}
          <p class="pc-desc">${p.description}</p>
          ${p.outcome ? `<p class="pc-outcome">${ICON.check}<span>${p.outcome}</span></p>` : ""}
        </div>
      `;
      track.appendChild(card);
    });
  }

  /* ---------------- CAROUSEL (projects on all sizes, services on phones) ---------------- */
  function wireCarousel(track, dotsEl, prev, next) {
    if (!track) return;
    const items = [...track.children];
    if (!items.length) return;

    if (dotsEl) {
      dotsEl.innerHTML = items.map((_, i) => `<button type="button" tabindex="-1" aria-label="Go to item ${i + 1}"></button>`).join("");
    }
    const dots = dotsEl ? [...dotsEl.children] : [];
    const step = () => (items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : track.clientWidth) || 1;
    const maxScroll = () => track.scrollWidth - track.clientWidth - 2;
    const current = () => (track.scrollLeft >= maxScroll() ? items.length - 1 : Math.round(track.scrollLeft / step()));
    const go = (i) => {
      const idx = Math.max(0, Math.min(items.length - 1, i));
      track.scrollTo({ left: items[idx].offsetLeft - items[0].offsetLeft, behavior: prefersCalm() ? "auto" : "smooth" });
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const i = current();
      dots.forEach((d, j) => d.classList.toggle("active", j === i));
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= maxScroll();
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(update); };

    dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
    if (prev) prev.addEventListener("click", () => go(Math.round(track.scrollLeft / step()) - 1));
    if (next) next.addEventListener("click", () => go(Math.round(track.scrollLeft / step()) + 1));
    track.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    update();
  }

  /* ---------------- SKILLS ---------------- */
  function renderSkills() {
    const grid = $("#skillsGrid");
    SITE.skills.forEach((group, i) => {
      const card = el("article", "skill-card glass reveal");
      card.innerHTML = `
        <div class="sk-head">
          <span class="sk-icon">${SKILL_ICONS[i % SKILL_ICONS.length]}</span>
          <h3 class="sk-name">${group.category}</h3>
          <span class="sk-count" aria-hidden="true">${ICON.sparkle}${pad(i + 1)}</span>
        </div>
        <div class="sk-tags">${group.items.map((t) => `<span>${t}</span>`).join("")}</div>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------- CERTIFICATIONS ---------------- */
  function renderCerts() {
    const grid = $("#certsGrid");
    SITE.certifications.forEach((cert) => {
      // "Course name (Issuer)" -> title + issuer
      const m = cert.name.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
      const title = m ? m[1] : cert.name;
      const issuer = m ? m[2] : "";
      const hasFile = cert.link && cert.link !== "#";
      const isImage = hasFile && !/\.pdf($|\?)/i.test(cert.link);
      const art = isImage
        ? `<img src="${cert.link}" alt="" loading="lazy" decoding="async" />`
        : `<span class="cert-empty">${hasFile ? "PDF certificate" : "Coming soon"}</span>`;

      const card = el("button", "cert-card reveal");
      card.type = "button";
      card.innerHTML = `
        <span class="cert-media">${art}<span class="cert-go" aria-hidden="true">${ICON.arrow}</span></span>
        <span class="cert-meta">
          <span class="cert-tag">Certification</span>
          ${issuer ? `<span class="cert-issuer">${issuer}</span>` : ""}
        </span>
        <span class="cert-title">${title}</span>
      `;
      if (hasFile) {
        card.setAttribute("aria-label", `View certificate: ${cert.name}`);
        card.addEventListener("click", () => openCertModal(cert));
      } else {
        card.disabled = true;
      }
      grid.appendChild(card);
    });
  }

  /* ---------------- CERT MODAL VIEWER ---------------- */
  let modalEl = null;
  let lastFocus = null;
  function buildModal() {
    modalEl = el("div", "cert-modal");
    modalEl.innerHTML = `
      <div class="cert-modal-backdrop" data-close></div>
      <div class="cert-modal-box" role="dialog" aria-modal="true" aria-labelledby="certModalTitle">
        <div class="cert-modal-head">
          <h3 class="cert-modal-title" id="certModalTitle"></h3>
          <div class="cert-modal-actions">
            <a class="cert-modal-open" target="_blank" rel="noopener">Open in new tab ↗</a>
            <button class="cert-modal-close" type="button" aria-label="Close">✕</button>
          </div>
        </div>
        <div class="cert-modal-body"></div>
      </div>
    `;
    document.body.appendChild(modalEl);
    modalEl.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-close") || e.target.closest(".cert-modal-close")) {
        closeCertModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCertModal();
    });
  }

  function openCertModal(cert) {
    if (!modalEl) buildModal();
    lastFocus = document.activeElement;
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
    modalEl.querySelector(".cert-modal-close").focus();
  }

  function closeCertModal() {
    if (!modalEl || !modalEl.classList.contains("open")) return;
    modalEl.classList.remove("open");
    modalEl.querySelector(".cert-modal-body").innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  /* ---------------- RESUME ---------------- */
  function renderResume() {
    $("#resumeBtn").setAttribute("href", SITE.resume);
    $("#footerResume").setAttribute("href", SITE.resume);
    $("#resumePreviewBtn").addEventListener("click", () =>
      openCertModal({ name: "Resume — " + SITE.name, link: SITE.resume })
    );
  }

  /* ---------------- CONTACT CTA ---------------- */
  function renderContact() {
    const phoneClean = SITE.phone.replace(/\s/g, "");
    const speciality = (SITE.title.split("|")[1] || "").trim();
    const badges = [
      SITE.hero.highlight && `${SITE.hero.highlight.value} ${SITE.hero.highlight.label}`,
      `${SITE.certifications.length} Certifications`,
      speciality,
    ].filter(Boolean);
    $("#ctaBadges").innerHTML = badges.map((b) => `<li>${ICON.sparkle}<span>${b}</span></li>`).join("");

    $("#contactInfo").innerHTML = `
      <a class="ci-item" href="mailto:${SITE.email}">${ICON.mail}<span>${SITE.email}</span></a>
      <a class="ci-item" href="tel:${phoneClean}">${ICON.phone}<span>${SITE.phone}</span></a>
      <span class="ci-item">${ICON.pin}<span>${SITE.location}</span></span>
    `;
  }

  /* ---------------- MARQUEE ---------------- */
  function renderMarquee() {
    const fill = (node, list) => {
      if (!node) return;
      // duplicate the list so the scroll loops seamlessly
      node.innerHTML = [...list, ...list].map((t) => `<span>${t}</span>${ICON.asterisk}`).join("");
    };
    fill($("#marqueeTrack"), SITE.techStack || []);
    fill($("#marqueeTrackB"), [...(SITE.techStack || [])].reverse());
  }

  /* ---------------- FOOTER ---------------- */
  function renderFooter() {
    const phoneClean = SITE.phone.replace(/\s/g, "");
    $("#footerHire").setAttribute("href", "mailto:" + SITE.email);
    $("#footerAbout").textContent = `${SITE.title.replace(/\s*\|\s*/g, " — ")}. Based in ${SITE.location}.`;
    $("#footerSocials").innerHTML = socialLinks().map(socialAnchor).join("");
    $("#footerContact").innerHTML = `
      <li><a href="tel:${phoneClean}">${SITE.phone}</a></li>
      <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
      <li><span>${SITE.location}</span></li>
    `;
    $("#footerText").textContent = `Copyright © ${new Date().getFullYear()} ${SITE.name}. All Rights Reserved.`;
  }

  /* ---------------- CONTACT FORM (mailto handler) ---------------- */
  function wireForm() {
    const form = $("#contactForm");
    const note = $("#formNote");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = $("#cf-message").value.trim();
      if (!message) return;
      const subject = "Project idea — via your portfolio";
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      note.textContent = "Opening your email client… If nothing happens, email me directly at " + SITE.email;
      form.reset();
    });
  }

  /* ---------------- NAVBAR + MOBILE MENU ---------------- */
  function wireNav() {
    const navbar = $("#navbar");
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    const backToTop = $("#backToTop");
    const bar = $("#scrollProgress");

    // Backdrop for the mobile dropdown
    const backdrop = el("div", "nav-backdrop");
    document.body.appendChild(backdrop);

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
      backToTop.classList.toggle("show", window.scrollY > 600);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const setMenu = (open) => {
      links.classList.toggle("open", open);
      toggle.classList.toggle("open", open);
      backdrop.classList.toggle("show", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
    backdrop.addEventListener("click", () => setMenu(false));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && links.classList.contains("open")) { setMenu(false); toggle.focus(); }
    });

    // Reset menu state if resized up to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1060 && links.classList.contains("open")) setMenu(false);
    });
  }

  /* ---------------- ACTIVE SECTION IN NAV ---------------- */
  function wireScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    const links = [...document.querySelectorAll('.nav-group a[href^="#"]')];
    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = byId.get(entry.target.id);
          if (!link) return;
          links.forEach((a) => { a.classList.remove("active"); a.removeAttribute("aria-current"); });
          link.classList.add("active");
          link.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => obs.observe(s));
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
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, idx) => {
            setTimeout(() => entry.target.classList.add("visible"), idx * 90);
            obs.unobserve(entry.target);
          });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((i) => obs.observe(i));
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderServices();
    renderExperience();
    renderAbout();
    renderProjects();
    renderSkills();
    renderCerts();
    renderResume();
    renderContact();
    renderMarquee();
    renderFooter();
    wireForm();
    wireNav();
    wireScrollSpy();
    wireCarousel($("#projectsGrid"), $("#projectsDots"), $("#projPrev"), $("#projNext"));
    wireCarousel($("#servicesGrid"), $("#servicesDots"));
    wireReveal(); // run after rendering so dynamically-added .reveal nodes are observed
    wireCounters();
    typewriter();
  });
})();
