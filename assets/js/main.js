/**
 * main.js — Portfolio interactions
 * Handles: AOS init, typewriter, navbar scroll, mobile menu, scroll-to-top
 */

document.addEventListener("DOMContentLoaded", () => {
  // ── AOS (Animate On Scroll) ──────────────────────────────────────────────
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });

  // ── Typewriter Effect ────────────────────────────────────────────────────
  const typewriterEl = document.getElementById("typewriter");

  function createTypewriter(el, roles) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const TYPE_SPEED = 80;
    const DELETE_SPEED = 40;
    const PAUSE_AFTER_WORD = 1800;
    const PAUSE_BEFORE_TYPE = 300;

    function tick() {
      const current = roles[roleIndex];

      if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timeout = setTimeout(tick, PAUSE_AFTER_WORD);
          return;
        }
        timeout = setTimeout(tick, TYPE_SPEED);
      } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeout = setTimeout(tick, PAUSE_BEFORE_TYPE);
          return;
        }
        timeout = setTimeout(tick, DELETE_SPEED);
      }
    }

    function updateRoles(newRoles) {
      clearTimeout(timeout);
      roles = newRoles;
      roleIndex = 0;
      charIndex = 0;
      isDeleting = false;
      tick();
    }

    tick();
    return { updateRoles };
  }

  if (typewriterEl) {
    const lang = i18n.getCurrentLang();
    const roles = i18n.t(lang, "hero_roles").split("|");
    window._typewriter = createTypewriter(typewriterEl, roles);
  }

  // ── Navbar: shrink + active-link on scroll ───────────────────────────────
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function updateNav() {
    // Shrink navbar after scrolling down
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }

    // Highlight active section
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  // ── Mobile Menu ───────────────────────────────────────────────────────────
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      menuBtn.querySelector(".bar-top").classList.toggle("rotate-45");
      menuBtn.querySelector(".bar-mid").classList.toggle("opacity-0");
      menuBtn.querySelector(".bar-bot").classList.toggle("-rotate-45");
    });

    // Close on nav link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", false);
        menuBtn.querySelector(".bar-top").classList.remove("rotate-45");
        menuBtn.querySelector(".bar-mid").classList.remove("opacity-0");
        menuBtn.querySelector(".bar-bot").classList.remove("-rotate-45");
      });
    });
  }

  // ── Smooth scroll for anchor links ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ── Scroll-to-top button ──────────────────────────────────────────────────
  const scrollTopBtn = document.getElementById("scroll-top");
  if (scrollTopBtn) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 400) {
          scrollTopBtn.classList.add("visible");
        } else {
          scrollTopBtn.classList.remove("visible");
        }
      },
      { passive: true }
    );

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Skill tags: build from data-skills attribute ──────────────────────────
  // Skills data is structured in the DOM via data-skills attribute
  // Format: "Python,Django,PostgreSQL"
  document.querySelectorAll("[data-skills]").forEach((container) => {
    const skills = container.dataset.skills.split(",").filter(Boolean);
    container.innerHTML = skills
      .map((s) => `<span class="skill-tag">${s.trim()}</span>`)
      .join("");
  });

  // ── Year in footer ────────────────────────────────────────────────────────
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Intersection Observer for number counters ─────────────────────────────
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          let current = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target + (el.dataset.countSuffix || "");
              clearInterval(timer);
            } else {
              el.textContent = current + (el.dataset.countSuffix || "");
            }
          }, 30);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
  }
});
