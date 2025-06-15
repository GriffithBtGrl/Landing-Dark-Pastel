//== MENU BUGER == 
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

function toggleNav() {
  nav.classList.toggle("active");
}

burger.addEventListener("click", toggleNav);
burger.addEventListener("keypress", (e) => {
  if (e.key === ' ' || e.key === 'Enter') toggleNav();
});


//== SLIDE ==
const slides = document.getElementById('slides');
const slideItems = slides.querySelectorAll('img');
let index = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${index * (100 + 2)}%)`; // 👈 100% + 2% del gap aproximado
}

function nextSlide() {
  index = (index + 1) % slideItems.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slideItems.length) % slideItems.length;
  updateSlide();
}

// Automático cada 6 segundos
let slideInterval = setInterval(nextSlide, 6000);

// Botones manuales
document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
document.getElementById('prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 6000);
}




//== FORMULARIO EmailJS ==
(function () {
  emailjs.init("Q3XsOAiEKNt06MIcu");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = this;
    const messageBox = document.getElementById("form-message");

    emailjs.sendForm("service_c6nohop", "template_3p1z35c", form).then(
      () => {
        messageBox.textContent = "Mensaje enviado con éxito ✅";
        form.reset();
        messageBox.style.color = "lightgreen";
      },
      (err) => {
        messageBox.textContent = "Ocurrió un error al enviar el mensaje 😢";
        messageBox.style.color = "tomato";
      }
    );
  });


