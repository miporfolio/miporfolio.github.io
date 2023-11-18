
// Obtén una referencia al elemento input y al párrafo donde mostrarás el valor
const inputElement = document.getElementById("miInput");
const resultadoElement = document.getElementById("resultado");

// Agrega un escuchador de eventos al input para detectar cambios
inputElement.addEventListener("input", function() {
  // Cuando el usuario escriba algo en el input, actualiza el contenido del párrafo
  resultadoElement.textContent = "Texto ingresado: " + inputElement.value;
});
