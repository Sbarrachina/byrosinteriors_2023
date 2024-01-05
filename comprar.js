// Encuentra los elementos necesarios
var modal = document.getElementById("checkout-modal");
var btnOpenModal = document.querySelectorAll(".open-modal-btn");
var span = document.getElementsByClassName("close")[0];

// Itera sobre todos los botones "Comprar" y agrega el evento
btnOpenModal.forEach(function(btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  };
});

// Cierra la ventana modal al hacer clic en la "X"
span.onclick = function() {
  modal.style.display = "none";
};

// Cierra la ventana modal al hacer clic fuera de ella
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
