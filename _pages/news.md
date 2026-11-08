---
layout: page
title: News
permalink: /news/
nav: true
nav_order: 5
---

<style>
  html:not([data-theme="dark"]) :is(h1, h2, h3, h4, h5, h6, .post-title, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a) {
    color: #4c5866 !important;
  }
  html:not([data-theme="dark"]) .navbar-brand,
  html:not([data-theme="dark"]) .navbar-brand *,
  html:not([data-theme="dark"]) .post-title *,
  html:not([data-theme="dark"]) .font-weight-bold {
    color: #4c5866 !important;
  }
  .navbar-brand {
    font-weight: 700 !important;
  }
</style>

<script>
  // Show "Search" instead of the "ctrl k" hint in the navbar.
  (function () {
    function fix() {
      var el = document.querySelector("#search-toggle .nav-link");
      if (!el) return;
      for (var i = 0; i < el.childNodes.length; i++) {
        var n = el.childNodes[i];
        if (n.nodeType === 3 && n.nodeValue.trim() !== "" && n.nodeValue.trim() !== "Search") n.nodeValue = "Search ";
      }
    }
    document.addEventListener("DOMContentLoaded", function () {
      fix();
      var el = document.querySelector("#search-toggle .nav-link");
      if (el) new MutationObserver(fix).observe(el, { childList: true, characterData: true, subtree: true });
    });
    window.addEventListener("load", fix);
  })();
</script>

{% include news.liquid %}
