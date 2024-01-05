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
