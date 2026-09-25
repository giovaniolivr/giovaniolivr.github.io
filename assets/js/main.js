/**
 * main.js — Portfolio interactions
 * Handles: AOS init, active nav pill, mobile menu, scroll-to-top
 */

document.addEventListener("DOMContentLoaded", () => {
  // ── AOS (Animate On Scroll) ──────────────────────────────────────────────
  // Short, subtle fade-ups (DESIGN.md: 150-250ms ease-out for surface transitions)
  AOS.init({
    duration: 400,
    easing: "ease-out",
    once: true,
    offset: 40,
  });

  // ── Navbar: active pill follows the section in view ─────────────────────
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function updateNav() {
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

  // ── Year in footer ────────────────────────────────────────────────────────
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
