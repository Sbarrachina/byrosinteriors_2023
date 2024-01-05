// Encuentra los elementos necesarios
var modal = document.getElementById("checkout-modal");
var btnOpenModal = document.querySelectorAll(".open-modal-btn");
var span = document.getElementsByClassName("close")[0];
var modalTitle = document.getElementById("modal-title");
var productNameSpan = document.getElementById("product-name");

// Itera sobre todos los botones "Comprar" y agrega el evento
btnOpenModal.forEach(function (btn) {
  btn.onclick = function () {
    // Obtiene el nombre del producto del botón clicado
    var productName = btn.getAttribute("data-product-name");

    // Actualiza el título y el nombre del producto en el modal
    modalTitle.innerText = "Checkout - " + productName;
    productNameSpan.innerText = productName;

    // Muestra la ventana modal
    modal.style.display = "block";
  };
});

// Cierra la ventana modal al hacer clic en la "X"
span.onclick = function () {
  modal.style.display = "none";
};

// Cierra la ventana modal al hacer clic fuera de ella
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//  regalos 

// Encuentra los elementos necesarios
var enviarRegaloBtn = document.getElementById("enviar-regalo-btn");
var regaloForm = document.getElementById("regalo-form");

// Agrega un evento al botón de enviar regalo
enviarRegaloBtn.onclick = function () {
  // Obtén la información del formulario de regalo
  var nombreDestinatario = document.getElementById("nombre-regalo").value;
  var mensajeDestinatario = document.getElementById("mensaje-regalo").value;

  // Puedes hacer lo que quieras con esta información, por ejemplo, enviarla a un servidor
  console.log("Nombre del destinatario:", nombreDestinatario);
  console.log("Mensaje para el destinatario:", mensajeDestinatario);

  // Puedes también cerrar el formulario de regalo, si lo prefieres
  regaloForm.reset();
};



