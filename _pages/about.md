---
layout: about
title: About Me
permalink: /
subtitle: Chemist · M.Sc. Student in Polymer Science and Technology

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Istanbul Technical University</p>
    <p>Istanbul, Türkiye</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items

latest_posts:
  enabled: false
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
  .post-title {
    font-weight: 700 !important;
  }
</style>

<script>
  // The theme hides the navbar name on the home page; show it here too so every page looks the same.
  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector("#navbar .container");
    if (container && !container.querySelector(".navbar-brand")) {
      var a = document.createElement("a");
      a.className = "navbar-brand title font-weight-lighter";
      a.href = "/";
      a.innerHTML = '<span class="font-weight-bold">Ece</span> Dönmez';
      container.insertBefore(a, container.firstChild);
    }
  });
</script>

I am Ece Dönmez, a chemist from Istanbul, Türkiye. I received my B.Sc. in Chemistry from Istanbul University-Cerrahpaşa (2021–2026) and I am currently pursuing an M.Sc. in Polymer Science and Technology at Istanbul Technical University (2026–2028).

My research experience spans electrochemical sensors, nanoparticle synthesis, microfluidics, photopolymerization, and the synthesis of thiocarbohydrazone ligands and their metal complexes. I have completed research internships in Poland, Slovakia and Türkiye.
