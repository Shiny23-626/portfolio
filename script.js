window.onload = () => {

  // =========================
  // PARTICLES BACKGROUND
  // =========================

  tsParticles.load("particles-js", {

    background: {
      color: {
        value: "transparent"
      }
    },

    fpsLimit: 60,

    interactivity: {

      events: {

        onHover: {
          enable: true,
          mode: "grab"
        },

        onClick: {
          enable: true,
          mode: "push"
        },

        resize: true
      },

      modes: {

        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        },

        push: {
          quantity: 4
        }

      }

    },

    particles: {

      color: {
        value: ["#38bdf8", "#818cf8", "#7c3aed"]
      },

      links: {
        color: "#38bdf8",
        distance: 120,
        enable: true,
        opacity: 0.2,
        width: 1
      },

      collisions: {
        enable: false
      },

      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 1,
        straight: false
      },

      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 70
      },

      opacity: {
        value: 0.5
      },

      shape: {
        type: "circle"
      },

      size: {
        value: {
          min: 1,
          max: 4
        }
      }

    },

    detectRetina: true

  });


  // =========================
  // SCROLL ANIMATION
  // =========================

  const fadeElements = document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .contact-card, .edu-card"
  );

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },

    {
      threshold: 0.2
    }

  );

  fadeElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

  });


  // =========================
  // PARALLAX EFFECT
  // =========================

  document.addEventListener("mousemove", (e) => {

    const blur1 = document.querySelector(".blur1");
    const blur2 = document.querySelector(".blur2");

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    blur1.style.transform =
      `translate(${x * 30}px, ${y * 30}px)`;

    blur2.style.transform =
      `translate(-${x * 30}px, -${y * 30}px)`;

  });


  // =========================
  // TYPING EFFECT
  // =========================

  const roles = [
    "Data Scientist",
    "ML Engineer",
    "AI Engineer",
    "Deep Learning Enthusiast"
  ];

  let roleIndex = 0;
  let charIndex = 0;

  const typingElement = document.getElementById("typing-text");

  function typeEffect() {

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

      typingElement.innerHTML +=
        roles[roleIndex].charAt(charIndex);

      charIndex++;

      setTimeout(typeEffect, 100);

    } else {

      setTimeout(eraseEffect, 1500);

    }

  }

  function eraseEffect() {

    if (charIndex > 0) {

      typingElement.innerHTML =
        roles[roleIndex].substring(0, charIndex - 1);

      charIndex--;

      setTimeout(eraseEffect, 50);

    } else {

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }

      setTimeout(typeEffect, 300);

    }

  }

  typeEffect();


  // =========================
  // ACTIVE NAVBAR LINK
  // =========================

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 200) {

        current = section.getAttribute("id");

      }

    });

    navLinks.forEach((a) => {

      a.classList.remove("active");

      if (a.getAttribute("href") === "#" + current) {

        a.classList.add("active");

      }

    });

  });


  // =========================
  // GLOW EFFECT ON BUTTONS
  // =========================

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

      btn.style.boxShadow =
        "0 0 25px rgba(56,189,248,0.6)";

    });

    btn.addEventListener("mouseleave", () => {

      btn.style.boxShadow = "none";

    });

  });

};
tsParticles.load("particles-js", {

  background: {
    color: {
      value: "#050816"
    }
  },

  fpsLimit: 120,

  particles: {

    number: {
      value: 90,
      density: {
        enable: true,
        area: 900
      }
    },

    color: {
      value: ["#38bdf8", "#7c3aed"]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.6
    },

    size: {
      value: { min: 1, max: 4 }
    },

    links: {
      enable: true,
      distance: 140,
      color: "#38bdf8",
      opacity: 0.15,
      width: 1
    },

    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: {
        default: "bounce"
      }
    }

  },

  interactivity: {

    events: {

      onHover: {
        enable: true,
        mode: "grab"
      },

      onClick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {

      grab: {
        distance: 180,
        links: {
          opacity: 0.5
        }
      },

      push: {
        quantity: 4
      }
    }
  },

  detectRetina: true
});