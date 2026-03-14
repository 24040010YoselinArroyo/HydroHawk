document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
      });
    });
  }

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.tab;

        tabButtons.forEach((btn) => {
          btn.classList.remove("bg-blue-600", "text-white");
          btn.classList.add("bg-white", "border", "border-slate-300", "text-slate-800");
        });

        button.classList.remove("bg-white", "border", "border-slate-300", "text-slate-800");
        button.classList.add("bg-blue-600", "text-white");

        tabPanels.forEach((panel) => {
          if (panel.dataset.panel === target) {
            panel.classList.remove("hidden");
          } else {
            panel.classList.add("hidden");
          }
        });
      });
    });
  }

  const animatedTexts = document.querySelectorAll("[data-animate-text]");

  animatedTexts.forEach((element) => {
    const text = element.dataset.animateText || element.textContent;
    element.innerHTML = "";

    [...text].forEach((char, index) => {
      if (char === " ") {
        const space = document.createElement("span");
        space.className = "hero-space";
        space.innerHTML = "&nbsp;";
        element.appendChild(space);
      } else {
        const span = document.createElement("span");
        span.className = "hero-letter";
        span.textContent = char;
        span.style.animationDelay = `${index * 0.045}s`;
        element.appendChild(span);
      }
    });
  });
});