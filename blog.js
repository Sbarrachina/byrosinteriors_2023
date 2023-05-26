// Obtener elementos del DOM
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Función para desplazar el slider hacia la izquierda
const slideToLeft = () => {
  const slideWidth = slider.querySelector('.slide').offsetWidth;
  slider.scrollLeft -= slideWidth;
};

// Función para desplazar el slider hacia la derecha
const slideToRight = () => {
  const slideWidth = slider.querySelector('.slide').offsetWidth;
  slider.scrollLeft += slideWidth;
};

// Agregar eventos a los botones de navegación
prevButton.addEventListener('click', slideToLeft);
nextButton.addEventListener('click', slideToRight);
``

// new letter funciones

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
  
    // Obtén el valor del campo de correo electrónico
    var email = document.getElementById('emailInput').value;
  
    // Aquí puedes realizar una petición AJAX para enviar los datos del formulario a tu servidor
  
    // Limpiar el campo de correo electrónico después del envío exitoso
    document.getElementById('emailInput').value = '';
  
    // Mostrar un mensaje de confirmación
    alert('Gracias por suscribirte a nuestra newsletter!');
  });
  

