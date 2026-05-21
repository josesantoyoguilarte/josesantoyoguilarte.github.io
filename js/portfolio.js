(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Typed effect (lightweight, no dependency)
  var typedEl = document.getElementById("typed");
  if (typedEl) {
    var phrases = [
      "Systems Developer / Integrator",
      "Software Engineer",
      "DevOps & Automation",
      "QA Automation",
      "Full-stack Developer",
      "Bienvenido \u00b7 Bienvenue \u00b7 Welcome"
    ];
    var pi = 0, ci = 0, deleting = false;

    function tick() {
      var current = phrases[pi];
      if (!deleting) {
        ci++;
        typedEl.textContent = current.slice(0, ci);
        if (ci === current.length) {
          deleting = true;
          return setTimeout(tick, 1500);
        }
      } else {
        ci--;
        typedEl.textContent = current.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 80);
    }
    tick();
  }

  // Auto-collapse mobile nav after clicking a link
  var navLinks = document.querySelectorAll("#navbarMain .nav-link");
  var collapseEl = document.getElementById("navbarMain");
  if (collapseEl && window.bootstrap) {
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (collapseEl.classList.contains("show")) {
          var bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl);
          bsCollapse.hide();
        }
      });
    });
  }

  // Add a solid background to the navbar after scroll
  var nav = document.getElementById("mainNav");
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
