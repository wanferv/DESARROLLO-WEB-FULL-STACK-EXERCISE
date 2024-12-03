// Seleccionar el botón y la caja
let boton = document.getElementById("cambiarEstilo");
let caja = document.getElementById("caja");

// Añadir un evento 'click' al botón
boton.addEventListener("click", function() {
    // Cambiar el color de fondo de la caja
    caja.style.backgroundColor = caja.style.backgroundColor === "lightblue" ? "salmon" : "lightblue";
 /*
    if (caja.style.backgroundColor === "lightblue" ){
        caja.style.backgroundColor =  "salmon"
    }else {
        caja.style.backgroundColor =  "lightblue"  
    }
        */
});
