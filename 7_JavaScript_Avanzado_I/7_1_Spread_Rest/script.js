// Combinar arrays con spread
document.getElementById("combinarArrays").addEventListener("click", () => {
    const array1 = document.getElementById("array1").value.split(",");
    const array2 = document.getElementById("array2").value.split(",");
    const combinado = [...array1, ...array2];
    document.getElementById(
      "resultadoArrays"
    ).innerText = `Array combinado: ${combinado.join(", ")}`;
  });
  
  // Combinar objetos con spread
  document.getElementById("combinarObjetos").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const trabajo = document.getElementById("trabajo").value;
  
    const persona = { nombre, edad: parseInt(edad) };
    const empleo = { trabajo };
    const perfil = { ...persona, ...empleo };
  
    document.getElementById(
      "resultadoObjetos"
    ).innerText = `Perfil combinado: ${JSON.stringify(perfil)}`;
  });
  
  // Usar rest en una función
  document.getElementById("sumarNumeros").addEventListener("click", () => {
    const numeros = document
      .getElementById("numeros")
      .value.split(",")
      .map(Number);
    const suma = numeros.reduce((total, num) => total + num, 0);
    document.getElementById("resultadoSuma").innerText = `Suma total: ${suma}`;
  });