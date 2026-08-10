// ==========================================
// RESERVA FÁCIL
// ARCHIVO: confirmacion.js
// ==========================================

// ================================
// VERIFICAR SESIÓN
// ================================

const usuario = obtenerSesion();

if (!usuario) {

    window.location.href = "index.html";

}

// ================================
// OBTENER RESERVA
// ================================

const reserva = JSON.parse(
    localStorage.getItem("reservaActual")
);

if (!reserva) {

    window.location.href = "inicio.html";

}

// ================================
// MOSTRAR DATOS
// ================================

document.getElementById("restaurante").textContent =
    reserva.restaurante;

document.getElementById("mesa").textContent =
    "Mesa " + reserva.mesa;

document.getElementById("fecha").textContent =
    reserva.fecha;

document.getElementById("hora").textContent =
    reserva.hora;

// ================================
// MOSTRAR PERSONAS
// ================================

const detalle = document.querySelector(".detalle");

const fila = document.createElement("div");

fila.className = "fila";

fila.innerHTML = `

<span>Personas</span>

<strong>${reserva.personas}</strong>

`;

detalle.appendChild(fila);

// ================================
// FECHA DE CREACIÓN
// ================================

const fila2 = document.createElement("div");

fila2.className = "fila";

fila2.innerHTML = `

<span>Reservada el</span>

<strong>${reserva.fechaRegistro}</strong>

`;

detalle.appendChild(fila2);

// ================================
// BOTÓN
// ================================

document
.getElementById("volverInicio")
.addEventListener("click", () => {

    localStorage.removeItem("reservaActual");

    window.location.href = "inicio.html";

});