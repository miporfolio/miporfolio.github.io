<<<<<<< HEAD
// Obtén una referencia al elemento input y al párrafo donde mostrarás el valor
const inputElement = document.getElementById("miInput");
const resultadoElement = document.getElementById("resultado");

// Agrega un escuchador de eventos al input para detectar cambios
inputElement.addEventListener("input", function() {
  // Cuando el usuario escriba algo en el input, actualiza el contenido del párrafo
  resultadoElement.textContent = "Texto ingresado: " + inputElement.value;
});

=======
// Obtén una referencia al elemento input y al párrafo donde mostrarás el valor
const inputElement = document.getElementById("miInput");
const resultadoElement = document.getElementById("resultado");

// Agrega un escuchador de eventos al input para detectar cambios
inputElement.addEventListener("input", function() {
  // Cuando el usuario escriba algo en el input, actualiza el contenido del párrafo
  resultadoElement.textContent = "Texto ingresado: " + inputElement.value;
});

>>>>>>> 989d27d9957fd5b350d7d4d31a70ed3f4c9f7f3c
