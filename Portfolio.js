/* ==========================================
   ABHISHEK THAKUR PORTFOLIO
   Premium Agency JavaScript
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     LOADER
     ========================================== */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";

      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 800);
  });

  /* ==========================================
     SCROLL PROGRESS BAR
     ========================================== */

  const progressBar = document.getElementById("progress-bar");

  const updateProgressBar = () => {
    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent =
      (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
  };

  window.addEventListener("scroll", updateProgressBar);

  /* ==========================================
     BACK TO TOP BUTTON
     ========================================== */

  const backToTop =
    document.getElementById("backToTop");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

  /* ==========================================
     COUNTER ANIMATION
     ========================================== */

  const counters =
    document.querySelectorAll(".counter");

  const counterObserver =
    new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const counter = entry.target;

          const target =
            +counter.getAttribute("data-target");

          let current = 0;

          const speed = target / 100;

          const updateCounter = () => {

            if (current < target) {

              current += speed;

              counter.innerText =
                Math.ceil(current);

              requestAnimationFrame(updateCounter);

            } else {

              counter.innerText = target + "+";

            }

          };

          updateCounter();

          counterObserver.unobserve(counter);

        }

      });

    }, {
      threshold: 0.5
    });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  /* ==========================================
     SCROLL REVEAL ANIMATION
     ========================================== */

  const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card, .service-card, .testimonial, .blog-card, .timeline-item, .stat-card"
  );

  revealElements.forEach(el => {
    el.classList.add("reveal");
  });

  const revealObserver =
    new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

        }

      });

    }, {
      threshold: 0.15
    });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* ==========================================
     NAVBAR SCROLL EFFECT
     ========================================== */

  const navbar =
    document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

      navbar.style.background =
        "rgba(0,0,0,0.95)";

      navbar.style.boxShadow =
        "0 10px 30px rgba(37,99,235,0.15)";

    } else {

      navbar.style.background =
        "rgba(0,0,0,0.80)";

      navbar.style.boxShadow = "none";

    }

  });

  /* ==========================================
     ACTIVE NAVIGATION LINKS
     ========================================== */

  const sections =
    document.querySelectorAll("section");

  const navLinks =
    document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.clientHeight;

      if (
        pageYOffset >= sectionTop &&
        pageYOffset <
        sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active-link");

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {
        link.classList.add("active-link");
      }

    });

  });

  /* ==========================================
     HERO PARALLAX EFFECT
     ========================================== */

  const heroImage =
    document.querySelector(".hero-right img");

  window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    if (heroImage) {

      heroImage.style.transform =
        `translateY(${scrollY * 0.08}px)`;

    }

  });

  /* ==========================================
     GLASS CARD HOVER TILT
     ========================================== */

  const cards = document.querySelectorAll(
    ".skill-card, .project-card, .service-card"
  );

  cards.forEach(card => {

    card.addEventListener(
      "mousemove",
      (e) => {

        const rect =
          card.getBoundingClientRect();

        const x =
          e.clientX - rect.left;

        const y =
          e.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          (y - centerY) / 15;

        const rotateY =
          (centerX - x) / 15;

        card.style.transform =
          `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.03)
          `;
      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
          `;

      }
    );

  });

  /* ==========================================
     BUTTON RIPPLE EFFECT
     ========================================== */

  const buttons =
    document.querySelectorAll(
      ".btn-primary, .btn-secondary, button"
    );

  buttons.forEach(button => {

    button.addEventListener("click", function (e) {

      const ripple =
        document.createElement("span");

      const rect =
        this.getBoundingClientRect();

      const size =
        Math.max(rect.width, rect.height);

      ripple.style.width =
        ripple.style.height =
        `${size}px`;

      ripple.style.left =
        `${e.clientX - rect.left - size / 2}px`;

      ripple.style.top =
        `${e.clientY - rect.top - size / 2}px`;

      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

    });

  });

  /* ==========================================
     TYPING EFFECT HERO TITLE
     ========================================== */

  const heroTitle =
    document.querySelector(".hero h1");

  if (heroTitle) {

    const text =
      heroTitle.innerText;

    heroTitle.innerText = "";

    let index = 0;

    const typeWriter = () => {

      if (index < text.length) {

        heroTitle.innerText +=
          text.charAt(index);

        index++;

        setTimeout(typeWriter, 80);

      }

    };

    setTimeout(typeWriter, 1200);

  }

  /* ==========================================
     FLOATING SOCIAL ICONS
     ========================================== */

  const socialIcons =
    document.querySelectorAll(
      ".floating-social a"
    );

  socialIcons.forEach((icon, index) => {

    icon.style.animation =
      `float 3s ease-in-out infinite`;

    icon.style.animationDelay =
      `${index * 0.2}s`;

  });

  /* ==========================================
     CONTACT FORM VALIDATION
     ========================================== */

  const form =
    document.querySelector("form");

  if (form) {

    form.addEventListener(
      "submit",
      function (e) {

        e.preventDefault();

        const inputs =
          form.querySelectorAll(
            "input, textarea"
          );

        let valid = true;

        inputs.forEach(input => {

          if (
            input.value.trim() === ""
          ) {

            valid = false;

            input.style.borderColor =
              "#ff3b30";

          } else {

            input.style.borderColor =
              "#2563eb";

          }

        });

        if (valid) {

          alert(
            "Thank you! Your message has been submitted."
          );

          form.reset();

        }

      }
    );

  }

  /* ==========================================
     MOUSE FOLLOW GLOW
     ========================================== */

  const glow =
    document.createElement("div");

  glow.classList.add("cursor-glow");

  document.body.appendChild(glow);

  document.addEventListener(
    "mousemove",
    (e) => {

      glow.style.left =
        e.clientX + "px";

      glow.style.top =
        e.clientY + "px";

    }
  );

  /* ==========================================
     PRELOADING IMAGES
     ========================================== */

  const images =
    document.querySelectorAll("img");

  images.forEach(img => {

    const preload =
      new Image();

    preload.src = img.src;

  });

  /* ==========================================
     SMOOTH ANCHOR LINKS
     ========================================== */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(anchor => {

      anchor.addEventListener(
        "click",
        function (e) {

          e.preventDefault();

          const target =
            document.querySelector(
              this.getAttribute("href")
            );

          if (target) {

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    });

});

/* ==========================================
   FLOATING ICON ANIMATION
   ========================================== */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes float {
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(-10px);
}
}

.cursor-glow{
position:fixed;
width:250px;
height:250px;
border-radius:50%;
background:
radial-gradient(
circle,
rgba(37,99,235,.15),
transparent 70%
);
pointer-events:none;
transform:translate(-50%,-50%);
z-index:-1;
}

.ripple{
position:absolute;
border-radius:50%;
background:rgba(255,255,255,.4);
transform:scale(0);
animation:ripple .6s linear;
pointer-events:none;
}

@keyframes ripple{
to{
transform:scale(4);
opacity:0;
}
}

.active-link{
color:#2563eb !important;
}

button,
.btn-primary,
.btn-secondary{
position:relative;
overflow:hidden;
}

`;

document.head.appendChild(style);