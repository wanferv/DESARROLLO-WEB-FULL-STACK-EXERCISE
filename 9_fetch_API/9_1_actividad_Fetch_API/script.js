// Referencia al elemento UL donde se mostrará la lista de publicaciones
const publicacionesLista = document.getElementById("publicaciones");

// Función para obtener y mostrar publicaciones
async function cargarPublicaciones() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const publicaciones = await response.json();

    publicaciones.forEach((publicacion) => {
      // Crear elementos para cada publicación
      const li = document.createElement("li");
      const titulo = document.createElement("h3");
      const autor = document.createElement("p");

      // Asignar contenido
      titulo.textContent = publicacion.title;
      autor.textContent = `Autor ID: ${publicacion.userId}`;

      // Añadir elementos al LI
      li.appendChild(titulo);
      li.appendChild(autor);

      // Añadir LI a la lista
      publicacionesLista.appendChild(li);
    });

    // Ocultar mensaje de carga
    document.querySelector("p").style.display = "none";
  } catch (error) {
    console.error("Error al cargar las publicaciones:", error);

    // Mostrar mensaje de error
    publicacionesLista.innerHTML = `<li style="color: red;">Error al cargar los datos. Intente de nuevo más tarde.</li>`;
  }
}

// Llamar a la función para cargar publicaciones
cargarPublicaciones();
