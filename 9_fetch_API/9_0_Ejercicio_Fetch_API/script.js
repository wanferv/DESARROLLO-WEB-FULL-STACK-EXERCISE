// Referencia al elemento UL donde se mostrará la lista de usuarios
const listaUsuarios = document.getElementById("usuarios");

// Función para obtener y mostrar usuarios
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // Crear elementos LI para cada usuario
    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      listaUsuarios.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error al cargar los usuarios:", error);

    // Mostrar un mensaje de error al usuario
    listaUsuarios.innerHTML = `<li style="color: red;">Error al cargar los datos. Intente de nuevo más tarde.</li>`;
  });
