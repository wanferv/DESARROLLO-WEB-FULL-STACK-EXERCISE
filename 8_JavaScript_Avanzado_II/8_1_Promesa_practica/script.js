// Datos del usuario
const datosUsuario = { nombre: "Andrea", edad: 24 };

// Configuración de la aplicación
const configuracionApp = { tema: "Oscuro", notificaciones: true };

// Referencias a elementos del DOM
const boton = document.getElementById("mostrarPerfil");
const resultado = document.getElementById("resultado");

// Función para mostrar el perfil completo
boton.addEventListener("click", () => {
    // Combinar los objetos usando spread
    const perfilCompleto = { ...datosUsuario, ...configuracionApp };

    // Extraer propiedades con destructuring
    const { nombre, edad, tema, notificaciones } = perfilCompleto;

    // Mostrar el perfil en el DOM
    resultado.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Tema:</strong> ${tema}</p>
        <p><strong>Notificaciones:</strong> ${notificaciones ? "Activadas" : "Desactivadas"}</p>
    `;
});
