// Referencia al botón y al div donde se mostrará el resultado
const boton = document.getElementById("cargarPerfil");
const resultado = document.getElementById("resultado");

// Función para simular la carga de un perfil usando una promesa
const cargarPerfil = () => {
    return new Promise((resolve, reject) => {
        const exito = true; // Cambia a false para probar el manejo de errores
        resultado.innerHTML = "Cargando perfil...";
        setTimeout(() => {
            if (exito) {
                resolve({
                    nombre: "Sofía",
                    ciudad: "Bogotá",
                    instagram: "@sofia20"
                });
            } else {
                reject("Error al cargar el perfil.");
            }
        }, 2000);
    });
};

// Manejo del clic en el botón
boton.addEventListener("click", () => {
    cargarPerfil()
        .then((perfil) => {
            resultado.innerHTML = `
                <p><strong>Perfil cargado:</strong></p>
                <p>Nombre: ${perfil.nombre}</p>
                <p>Ciudad: ${perfil.ciudad}</p>
                <p>Instagram: ${perfil.instagram}</p>
            `;
        })
        .catch((error) => {
            resultado.innerHTML = `<p style="color: red;">${error}</p>`;
        })
        .finally(() => {
            console.log("Operación finalizada.");
        });
});
