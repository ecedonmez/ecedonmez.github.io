// Check if the user is on a Mac and update the shortcut key for search accordingly
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement && isMac) {
      // use the unicode for command key
      shortcutKeyElement.innerHTML = '&#x2318; k <i class="fa-solid fa-magnifying-glass"></i>';
    }
  }
});
// Site tweaks, appended to the theme's shortcut-key.js (loaded on every page) during the deploy build.
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

// 3) Right-hand profile card (photo, name, affiliation, links) on every page except the home page and 404.
(function () {
  function build() {
    if (document.querySelector(".profile")) return; // home page already has one
    var main = document.querySelector('.container[role="main"]');
    if (!main || document.querySelector(".site-profile")) return;
    var h1 = document.querySelector("h1.post-title");
    if (h1 && /page not found/i.test(h1.textContent)) return;

    var st = document.createElement("style");
    st.textContent =
      ".site-profile{float:right;width:220px;margin:0 0 1.5rem 2rem;font-size:.9rem;line-height:1.4}" +
      ".site-profile img{width:100%;height:auto;border-radius:.25rem;margin-bottom:.9rem}" +
      ".site-profile .sp-name{font-size:1.25rem;font-weight:700}" +
      'html:not([data-theme="dark"]) .site-profile .sp-name{color:#4c5866}' +
      ".site-profile .sp-tag{margin:.15rem 0 .9rem}" +
      ".site-profile ul{list-style:none;padding:0;margin:0}" +
      ".site-profile li{margin:.35rem 0}" +
      ".site-profile li i{width:1.4rem;text-align:center;margin-right:.35rem}" +
      ".site-profile a{color:inherit}" +
      "@media (max-width:767px){.site-profile{float:none;width:100%;max-width:260px;margin:0 auto 1.5rem}}";
    document.head.appendChild(st);

    var mail = ["ecedonmez2003", "gmail.com"].join("@");
    var box = document.createElement("aside");
    box.className = "site-profile";
    box.innerHTML =
      '<img src="/assets/img/prof_pic.png" alt="Ece Dönmez">' +
      '<div class="sp-name">Ece Dönmez</div>' +
      '<div class="sp-tag">Chemist<br>M.Sc. Student in Polymer Science and Technology</div>' +
      "<ul>" +
      '<li><i class="fa-solid fa-location-dot"></i>Istanbul, Türkiye</li>' +
      '<li><i class="fa-solid fa-building-columns"></i>Istanbul Technical University</li>' +
      '<li><i class="fa-solid fa-envelope"></i><a href="mailto:' + mail + '">Email</a></li>' +
      '<li><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/ecedonmez/" target="_blank" rel="noopener">LinkedIn</a></li>' +
      '<li><i class="fa-brands fa-github"></i><a href="https://github.com/ecedonmez" target="_blank" rel="noopener">GitHub</a></li>' +
      "</ul>";
    main.insertBefore(box, main.firstChild);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
