// Botão Menu Mobile
$(document).ready(function() {
    $('#btn_mobile').on('click', function(){
        $('#mobile_menu').toggleClass('active');
    });
});

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
      const offset = 80; // altura da sua navbar (ajuste se for diferente)
  
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