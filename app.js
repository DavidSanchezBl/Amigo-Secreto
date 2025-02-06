// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

let nombres = [];

function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }
    const nombreSorteado = nombres[Math.floor(Math.random() * nombres.length)];
    resultadoSorteo.innerHTML = `<li>El amigo secreto sorteado es: ${nombreSorteado}</li>`;
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}
