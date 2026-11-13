/* Home page logic: builds sections from data.js, navigation, contact form. */

// Escape text so it is safe to put inside HTML
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- Render sections ---------- */
function renderSkills() {
  document.getElementById("skills-grid").innerHTML = SKILL_CATEGORIES.map((cat) => `
    <div class="card card-hover">
      <div class="skill-head">
        ${icon(cat.icon, "icon icon-6 cyber-text")}
        <h3>${esc(cat.title)}</h3>
      </div>
      <ul class="skill-list">
        ${cat.skills.map((s) => `
          <li>
            <div class="skill-row">
              <span class="skill-name">${esc(s.name)}</span>
              <span class="skill-level">${s.level}%</span>
            </div>
            <div class="skill-progress"><div class="skill-progress-bar" style="width:${s.level}%"></div></div>
          </li>`).join("")}
      </ul>
    </div>`).join("");
}

function renderCertifications() {
  document.getElementById("cert-grid").innerHTML = CERTIFICATES.map((c) => {
    const viewer = `certificate.html?id=${encodeURIComponent(c.id)}`;
    const img = `certificates/${encodeURIComponent(c.id)}.png`;
    return `
    <article class="card card-secondary card-hover cert-card">
      <div class="cert-thumb">
        <img src="${img}" alt="${esc(c.title)}" loading="lazy" />
      </div>
      <div class="cert-body">
        <div class="cert-head">
          <div class="cert-head-left">
            ${icon("award", "icon icon-6 cyber-text")}
            <h3 class="cert-title">${esc(c.title)}</h3>
          </div>
          ${icon("external-link", "icon icon-4 cyber-text cert-open-icon")}
        </div>
        <p class="card-desc">${esc(c.description)}</p>
        <div class="cert-foot">
          <span class="cert-vendor cyber-text">Vendor: ${esc(c.vendor)}</span>
          <span class="tag">${esc(c.year)}</span>
        </div>
      </div>
      <!-- Invisible link that covers the whole card: opens the certificate viewer page in a new tab -->
      <a class="cert-link" href="${viewer}" target="_blank" rel="noopener noreferrer"
         aria-label="View certificate: ${esc(c.title)}"></a>
    </article>`;
  }).join("");

  document.getElementById("cert-note").innerHTML =
    `Click the ${icon("external-link", "icon icon-4 icon-inline")} icon to view certificate details`;
}

function renderExperience() {
  document.getElementById("exp-list").innerHTML = EXPERIENCE.map((e) => `
    <div class="card card-hover">
      <div class="exp-head">
        <div>
          <h3 class="card-title">${esc(e.title)}</h3>
          <p class="exp-company cyber-text">${esc(e.company)}</p>
        </div>
        <span class="exp-period cyber-text">${esc(e.period)}</span>
      </div>
      <ul class="exp-points">
        ${e.responsibilities.map((r) => `<li>${esc(r)}</li>`).join("")}
      </ul>
    </div>`).join("");
}

function renderProjects() {
  document.getElementById("project-grid").innerHTML = PROJECTS.map((p) => {
    const inner = `
      <div class="project-head">
        ${icon("box", "icon icon-6 cyber-text")}
        <h3 class="card-title">${esc(p.title)}</h3>
      </div>
      <p class="project-desc">${esc(p.description)}</p>
      <div class="badges">${p.technologies.map((t) => `<span class="badge">${esc(t)}</span>`).join("")}</div>`;
    const cls = "card card-secondary card-hover project-card";
    return p.link
      ? `<a class="${cls}" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
      : `<div class="${cls}">${inner}</div>`;
  }).join("");
}

function renderCV() {
  document.getElementById("cv-icon").innerHTML = icon("file-text", "icon icon-12");
  const link = document.getElementById("cv-link");
  link.href = CONFIG.cvUrl;
  link.innerHTML = `${icon("download", "icon icon-5")}View My CV`;
  document.getElementById("cv-updated").textContent = "Last updated: " + CONFIG.cvLastUpdated;
}

function renderContactLinks() {
  document.getElementById("social-list").innerHTML = SOCIAL_LINKS.map((l) => {
    const external = l.href.startsWith("http");
    return `
      <div class="social-item">
        <div class="social-icon">${icon(l.icon, "icon icon-5 cyber-text")}</div>
        <a class="social-link" href="${esc(l.href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(l.label)}</a>
      </div>`;
  }).join("");
  document.getElementById("submit-btn").innerHTML = `${icon("send", "icon icon-4")}Send Message`;
}

/* ---------- Navigation ---------- */
function setupNavigation() {
  const menuBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = Array.from(navLinks.querySelectorAll(".nav-link"));

  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.innerHTML = icon(open ? "x" : "menu", "icon icon-5");
  }
  setMenu(false);
  menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
  links.forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Highlight the link of the section that is currently on screen
  const ids = links.map((a) => a.getAttribute("href").slice(1));
  function onScroll() {
    const current = ids.find((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.top <= 150 && r.bottom >= 150;
    });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
}

/* ---------- Toast messages ---------- */
function showToast(title, description, isError) {
  const root = document.getElementById("toast-root");
  const el = document.createElement("div");
  el.className = "toast" + (isError ? " destructive" : "");
  el.innerHTML = `
    <div class="toast-title">${esc(title)}</div>
    <div class="toast-desc">${esc(description)}</div>
    <button class="toast-close" type="button" aria-label="Close">${icon("x", "icon")}</button>`;
  el.querySelector(".toast-close").addEventListener("click", () => el.remove());
  root.appendChild(el);
  setTimeout(() => el.remove(), 5000);
}

/* ---------- Contact form ---------- */
function validateContact(data) {
  if (data.name.length < 1) return "Name is required";
  if (data.name.length > 100) return "Name must be less than 100 characters";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Invalid email address";
  if (data.email.length > 255) return "Email must be less than 255 characters";
  if (data.message.length < 1) return "Message is required";
  if (data.message.length > 1000) return "Message must be less than 1000 characters";
  return null;
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("submit-btn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    const error = validateContact(data);
    if (error) {
      showToast("Validation Error", error, true);
      return;
    }

    btn.disabled = true;
    btn.innerHTML = `${icon("send", "icon icon-4")}Sending...`;

    try {
      const c = CONFIG.emailjs;
      await emailjs.send(
        c.serviceId,
        c.templateId,
        { from_name: data.name, from_email: data.email, message: data.message, to_name: "Md. Pranto" },
        c.publicKey
      );
      showToast("Message sent!", "Thanks for reaching out. I'll get back to you soon.", false);
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      showToast("Error", "Failed to send message. Please try again or contact me directly via email.", true);
    } finally {
      btn.disabled = false;
      btn.innerHTML = `${icon("send", "icon icon-4")}Send Message`;
    }
  });
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderCertifications();
  renderExperience();
  renderProjects();
  renderCV();
  renderContactLinks();
  setupNavigation();
  setupContactForm();
  initMatrix(document.getElementById("matrix-canvas"));
  document.getElementById("year").textContent = new Date().getFullYear();
});
