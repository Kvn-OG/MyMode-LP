// Botão Menu Mobile
document.addEventListener('DOMContentLoaded', function(){
  const btnMobile = document.getElementById('btn_mobile');
  const menuMobile = document.getElementById('mobile_menu');

  btnMobile.addEventListener('click', ()=> {
    menuMobile.classList.toggle('active');
  });
  // Animações com ScrollReveal
  ScrollReveal().reveal('#solucoes', {
    origin: 'bottom',
    distance: '50px',
    duration: 1500,
    easing: 'ease-in-out',
    reset: false
  });

  ScrollReveal().reveal('.video-desktop', {
    origin: 'left',
    distance: '50px',
    duration: 1500,
    easing: 'ease-in-out',
    reset: false
  });

  const sliderItems = document.getElementById('slider-items');
  const logos = Array.from(sliderItems.children);

  logos.forEach(logos =>{
    const clone = logos.cloneNode(true);
    sliderItems.appendChild(logos);
  });
})

// Carrossel de Logos
const carousel = document.getElementById('carouselSingle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

// Scroll suave com Offset para navbar fixa
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      const offset = 80;
  
      if (targetElement) {
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
});
