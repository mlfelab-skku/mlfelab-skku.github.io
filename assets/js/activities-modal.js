// Activities: click a card to open its detail modal; click a photo to enlarge it.
// Vanilla JS, event-delegated, no dependencies.
(function () {
  function lock(on) {
    document.body.style.overflow = on ? "hidden" : "";
  }

  function openModal(id) {
    var m = document.getElementById(id);
    if (!m) return;
    m.hidden = false;
    lock(true);
  }

  function closeModal() {
    var open = document.querySelector(".activity-modal:not([hidden])");
    if (open) open.hidden = true;
    closeLightbox();
    lock(false);
  }

  function openLightbox(src, alt) {
    var lb = document.getElementById("activity-lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "activity-lightbox";
      lb.innerHTML =
        '<button class="activity-lightbox-close" aria-label="Close">&times;</button><img alt="">';
      document.body.appendChild(lb);
      lb.addEventListener("click", function (e) {
        if (e.target === lb || e.target.classList.contains("activity-lightbox-close")) closeLightbox();
      });
    }
    var img = lb.querySelector("img");
    img.src = src;
    img.alt = alt || "";
    lb.classList.add("open");
  }

  function closeLightbox() {
    var lb = document.getElementById("activity-lightbox");
    if (lb) lb.classList.remove("open");
  }

  document.addEventListener("click", function (e) {
    var openBtn = e.target.closest("[data-activity-open]");
    if (openBtn) {
      openModal(openBtn.getAttribute("data-activity-open"));
      return;
    }
    if (e.target.closest("[data-activity-close]")) {
      closeModal();
      return;
    }
    var photo = e.target.closest(".activity-modal .activity-photo");
    if (photo) {
      openLightbox(photo.getAttribute("src"), photo.getAttribute("alt"));
      return;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var lb = document.getElementById("activity-lightbox");
      if (lb && lb.classList.contains("open")) closeLightbox();
      else closeModal();
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      var el = document.activeElement;
      if (el && el.hasAttribute && el.hasAttribute("data-activity-open")) {
        e.preventDefault();
        openModal(el.getAttribute("data-activity-open"));
      }
    }
  });
})();
