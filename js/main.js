const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.querySelectorAll(".mobile-links a");
const navbar = document.querySelector(".navbar");
const serviceBox = document.querySelectorAll(".service-grid");
const year = new Date().getFullYear();
const sBtn = document.getElementById("scrollToTop");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollBy({ top: 140, behavior: "smooth" });
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    navbar.style.boxShadow = "var(--shadow)";
    navbar.style.transition = "background-color 0.8s ease, box-shadow 0.8s ease";
    sBtn.style.display = "block";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
    sBtn.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    serviceBox.forEach((box) => {
      box.style.margin = "-10rem 0";
      box.style.justifyContent = "center";
      box.style.alignItems = "center";
    box.style.transition = "margin 1.5s ease";
      box.style.position = "sticky";
      box.style.display = "flex";
    });
  } else {
    serviceBox.forEach((box) => {
      box.style.marginTop = "0";
    });
  }
});

function filterSelection(category) {
    const cards = document.querySelectorAll(".portfolio-card");
    const buttons = document.querySelectorAll(".filter-btn");
  
    buttons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.filter-btn[data-filter='${category}']`).classList.add("active");
  
    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "all" || category === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    filterSelection("all");
  
    document.querySelectorAll(".filter-btn").forEach(button => {
      button.addEventListener("click", () => {
        filterSelection(button.dataset.filter);
      });
    });
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
const scrollToTopButton = document.getElementById("scrollToTop");
scrollToTopButton.addEventListener("click", scrollToTop);

document.getElementById(
  "footerYear"
).innerHTML = `&copy; ${year} TMI Studio. All rights reserved.`;
