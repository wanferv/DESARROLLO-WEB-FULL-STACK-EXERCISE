// Referencia al contenedor de comentarios
const comentariosDiv = document.getElementById("comentarios");

// Función para cargar comentarios desde la API
async function cargarComentarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();

    // Limitar a los primeros 5 comentarios
    const comentarios = data.slice(0, 10);

    // Limpiar mensaje de carga
    comentariosDiv.innerHTML = "";

    // Crear elementos dinámicos para cada comentario
    comentarios.forEach((comment) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        <small>Por: ${comment.email}</small>
      `;
      comentariosDiv.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar los comentarios:", error);
    comentariosDiv.innerHTML = "<p style='color: red;'>No se pudieron cargar los comentarios.</p>";
  }
}

// Llamar a la función para cargar comentarios
cargarComentarios();
