// Referencias a los elementos del DOM
const buscarInput = document.getElementById("buscar");
const resultados = document.getElementById("resultados");

// Función para obtener y filtrar las publicaciones
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    buscarInput.addEventListener("input", () => {
      const query = buscarInput.value.toLowerCase();
      resultados.innerHTML = "";

      // Filtrar publicaciones basadas en la búsqueda
      const filtrados = data.filter((post) =>
        post.title.toLowerCase().includes(query)
      );

      // Mostrar publicaciones filtradas
      if (filtrados.length > 0) {
        filtrados.forEach((post) => {
          const li = document.createElement("li");
          li.textContent = post.title;
          resultados.appendChild(li);
        });
      } else {
        resultados.innerHTML = "<li>No se encontraron resultados.</li>";
      }
    });
  })
  .catch((error) => {
    console.error("Error al cargar las publicaciones:", error);
    resultados.innerHTML = "<li>Error al cargar las publicaciones.</li>";
  });
