let nombres = [];

function agregarNombre() {
  let nombre = document.getElementById("ingresar").value;

  if (nombre !== "") {
    nombres.push(nombre);
    document.getElementById("ingresar").value = "";
    actualizarLista();

  } else {
    alert("Por favor ingresa un nombre válido.");
  }
}

function borrarlista(){
    nombres = [];
    actualizarLista();
}

function actualizarLista() {
  let contenedor = document.getElementById("mostraNombre");
  contenedor.innerHTML = "<h2>Mostrar</h2>";
  let lista = document.createElement("ul");

  nombres.forEach(function(nombre) { 
    let elementoLista = document.createElement("li");
    elementoLista.textContent = nombre;

    lista.appendChild(elementoLista);
  });
  contenedor.appendChild(lista);

    let btnBorrar= document.getElementById("borrarNombres");
    btnBorrar.addEventListener("click", borrarlista);
}


document.getElementById("ingresarNombre").addEventListener("click", agregarNombre);