// Simular una operación asíncrona para obtener datos de un usuario
const cargarPerfil = new Promise((resolve, reject) => {
    const exito = true; // Cambia a false para probar el manejo de errores
    console.log("Cargando perfil...");
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
    }, 2000); // Simula una espera de 2 segundos
});

// Manejo de la promesa
cargarPerfil
    .then((perfil) => {
        console.log(`¡Perfil cargado con éxito!`);
        console.log(`Nombre: ${perfil.nombre}, Ciudad: ${perfil.ciudad}, Instagram: ${perfil.instagram}`);
    })
    .catch((error) => console.error(error))
    .finally(() => console.log("Operación finalizada."));
