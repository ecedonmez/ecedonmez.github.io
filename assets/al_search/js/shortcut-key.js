// Local override of the theme's shortcut-key.js (loaded on every page).
// 1) Shows "Search" instead of the "ctrl k" / "⌘ k" hint in the navbar.
// 2) Applies the site-wide heading/name color (#4C5866) in light mode.
(function () {
  function addStyle() {
    var st = document.createElement("style");
    st.textContent =
      'html:not([data-theme="dark"]) :is(h1, h2, h3, h4, h5, h6, .post-title, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a),' +
      'html:not([data-theme="dark"]) .navbar-brand,' +
      'html:not([data-theme="dark"]) .navbar-brand *,' +
      'html:not([data-theme="dark"]) .post-title *,' +
      'html:not([data-theme="dark"]) .font-weight-bold { color: #4c5866 !important; }' +
      ".navbar-brand { font-weight: 700 !important; }";
    document.head.appendChild(st);
  }

  function fixSearch() {
    var el = document.querySelector("#search-toggle .nav-link");
    if (!el) return;
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.nodeValue.trim() !== "" && n.nodeValue.trim() !== "Search") n.nodeValue = "Search ";
    }
  }

  function init() {
    fixSearch();
    var btn = document.getElementById("search-toggle");
    if (btn) new MutationObserver(fixSearch).observe(btn, { childList: true, characterData: true, subtree: true });
  }

  addStyle();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  window.addEventListener("load", fixSearch);
})();
