// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para guardar los nombres ingresados
let listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    listaDeAmigos.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaDeAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const amigos = [...listaDeAmigos];
    const sorteados = [...listaDeAmigos];

    // Reordenar hasta que ningún nombre coincida en la misma posición
    let intentos = 100;
    do {
        for (let i = sorteados.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
        }
        intentos--;
    } while (!esSorteoValido(amigos, sorteados) && intentos > 0);

    if (intentos === 0) {
        alert("No se pudo generar un sorteo válido, intenta nuevamente.");
        return;
    }

    mostrarResultado(amigos, sorteados);
}

function esSorteoValido(amigos, sorteados) {
    return amigos.every((nombre, idx) => nombre !== sorteados[idx]);
}

function mostrarResultado(amigos, sorteados) {
    const ul = document.getElementById("resultado");
    ul.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${amigos[i]} → ${sorteados[i]}`;
        ul.appendChild(li);
    }
}
