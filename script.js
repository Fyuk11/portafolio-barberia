document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    toggle.classList.toggle('active');
  });
});

AOS.init({
  duration: 800, // duración de la animación en ms
  easing: 'ease-in-out', // tipo de easing para suavizar animaciones
  once: true, // que la animación solo ocurra una vez (no se repita al hacer scroll arriba/abajo)
});




document.addEventListener('DOMContentLoaded', () => {
  /* --- menu hamburguesa (ya tenías) --- */
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('show');
      toggle.classList.toggle('active');
    });
  }

  /* --- HERO SLIDER --- */
  const heroSection = document.querySelector('.hero');
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const nextBtn = document.querySelector('.hero-next');
  const prevBtn = document.querySelector('.hero-prev');
  let current = 0;
  const INTERVAL = 5000;
  let timer = null;

  function showSlide(i) {
    if (!slides.length) return;
    slides.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, INTERVAL);
  }
  function stopAutoplay() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  // init
  showSlide(current);
  startAutoplay();

  // controles
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

  // pausa al hover/focus (mejora UX)
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
    heroSection.addEventListener('focusin', stopAutoplay);
    heroSection.addEventListener('focusout', startAutoplay);
  }

  /* --- Inicializar AOS de forma segura --- */
  function initAOS() {
    if (window.AOS) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }
  // Si AOS ya cargó
  if (window.AOS) {
    initAOS();
  } else {
    // si la librería se carga después, inicializamos al cargar ventana
    window.addEventListener('load', initAOS);
  }
});


document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_gefkpcq",     // ID del servicio
        "template_wtrsqfi",    // ID de la plantilla
        this,                  // El formulario (this = el form)
        "r0xK3YifZxW6x3M8D"    // Public key
    )
    .then(() => {
        alert("Mensaje enviado con éxito ✅");
        this.reset();
    })
    .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Hubo un error al enviar el mensaje ❌");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    scrollToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
