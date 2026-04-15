/**
 * i18n.js — Language switching engine
 *
 * Usage:
 *   Elements use data-i18n="key" to have their textContent replaced.
 *   Elements use data-i18n-html="key" to have their innerHTML replaced (for rich text).
 *   Elements use data-i18n-placeholder="key" for input placeholders.
 *   Elements use data-i18n-aria="key" for aria-label.
 *   Elements use data-i18n-title="key" for title attribute.
 *
 * Language is stored in localStorage under the key "lang".
 * Supported values: "en" | "pt"
 */

const i18n = (() => {
  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = ["en", "pt"];

  // Detect browser language on first visit
  function detectBrowserLang() {
    const browserLang = navigator.language || navigator.userLanguage || "";
    return browserLang.toLowerCase().startsWith("pt") ? "pt" : "en";
  }

  // Get current language from storage, or detect from browser
  function getCurrentLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    return detectBrowserLang();
  }

  // Resolve a dot-notation key from the translations object
  function t(lang, key) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    return dict[key] !== undefined ? dict[key] : `[${key}]`;
  }

  // Apply all translations to the DOM
  function applyTranslations(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;

    // Update <html lang="...">
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    // data-i18n → textContent
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = t(lang, key);
    });

    // data-i18n-html → innerHTML
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      el.innerHTML = t(lang, key);
    });

    // data-i18n-placeholder → placeholder attribute
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = t(lang, key);
    });

    // data-i18n-aria → aria-label attribute
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      el.setAttribute("aria-label", t(lang, key));
    });

    // data-i18n-title → title attribute
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.dataset.i18nTitle;
      el.title = t(lang, key);
    });

    // Re-render tag lists (data-i18n-tags) — pipe-separated values
    document.querySelectorAll("[data-i18n-tags]").forEach((el) => {
      const key = el.dataset.i18nTags;
      const raw = t(lang, key);
      const tags = raw.split("|").filter(Boolean);
      el.innerHTML = tags
        .map(
          (tag) =>
            `<span class="skill-tag">${tag.trim()}</span>`
        )
        .join("");
    });

    // Update typewriter source if it exists
    if (window._typewriter) {
      window._typewriter.updateRoles(t(lang, "hero_roles").split("|"));
    }
  }

  // Switch language and persist
  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);

    // Update toggle button visual state
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = t(lang, "nav_lang_toggle");
      toggle.setAttribute("aria-label", t(lang, "nav_lang_toggle_aria"));
    }

    // Dispatch custom event for any external listeners
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  // Toggle between en ↔ pt
  function toggle() {
    const current = getCurrentLang();
    setLang(current === "en" ? "pt" : "en");
  }

  // Initialize
  function init() {
    const lang = getCurrentLang();
    applyTranslations(lang);

    // Set initial toggle button state
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = t(lang, "nav_lang_toggle");
      toggle.setAttribute("aria-label", t(lang, "nav_lang_toggle_aria"));
      toggle.addEventListener("click", () => i18n.toggle());
    }
  }

  return { init, toggle, setLang, getCurrentLang, t };
})();
