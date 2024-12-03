// Obtener elementos del DOM
const formulario = document.getElementById("formulario");
const mensajeDiv = document.getElementById("mensaje");

// Agregar evento al formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar recargar la página

  // Obtener valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value;
  const ciudad = document.getElementById("ciudad").value;

  // Crear mensaje personalizado
  const mensaje = `¡Bienvenido, ${nombre}! Nos alegra que estés visitando nuestra hermosa ciudad de ${ciudad}.`;

  // Mostrar el mensaje en el contenedor
  mensajeDiv.innerHTML = `<p>${mensaje}</p>`;
});