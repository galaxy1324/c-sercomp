const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const textoElemento = document.getElementById("texto");

// Cambiar el texto cada 3 segundos
const textos = ["Calidad","Servicio","Exportación", "Explora nuestros servicios" ,"Bienvenidos a nuestra página"];
let index = 0;

setInterval(() => {
    textoElemento.textContent = textos[index]; // Cambia el contenido del texto
    index = (index + 1) % textos.length; // Avanza al siguiente texto en el arreglo
}, 3000); // Cambia cada 3 segundos

const carouselTrack = document.querySelector('.carousel-track');

// Clonar los elementos iniciales para un efecto infinito
const clones = [...carouselTrack.children].map(child => child.cloneNode(true));
clones.forEach(clone => carouselTrack.appendChild(clone));
