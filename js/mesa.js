// ==========================================
// RESERVA FÁCIL
// ARCHIVO: mesa.js
// PARTE 1
// ==========================================

// ================================
// VERIFICAR SESIÓN
// ================================

const usuario = obtenerSesion();

if (!usuario) {

    window.location.href = "index.html";

}

// ================================
// OBTENER RESTAURANTE
// ================================

const restaurante = JSON.parse(
    localStorage.getItem("restauranteSeleccionado")
);

if (!restaurante) {

    window.location.href = "inicio.html";

}

document.getElementById("nombreRestaurante").textContent =
    restaurante.nombre;

// ================================
// BOTÓN VOLVER
// ================================

document.getElementById("volver").addEventListener("click", () => {

    window.location.href = "inicio.html";

});

// ================================
// FECHA MÍNIMA
// ================================

const inputFecha = document.getElementById("fecha");

const hoy = new Date().toISOString().split("T")[0];

inputFecha.min = hoy;

// ================================
// MESAS
// ================================

const mesas = [

    { numero: 1, capacidad: 2 },
    { numero: 2, capacidad: 2 },
    { numero: 3, capacidad: 4 },
    { numero: 4, capacidad: 4 },
    { numero: 5, capacidad: 6 },
    { numero: 6, capacidad: 6 },
    { numero: 7, capacidad: 2 },
    { numero: 8, capacidad: 4 },
    { numero: 9, capacidad: 4 },
    { numero: 10, capacidad: 6 },
    { numero: 11, capacidad: 8 },
    { numero: 12, capacidad: 8 }

];

// ================================
// VARIABLES
// ================================

let mesaSeleccionada = null;

const contenedor =
    document.getElementById("contenedorMesas");

// ================================
// PINTAR MESAS
// ================================

function pintarMesas() {

    contenedor.innerHTML = "";

    const reservas =
        JSON.parse(localStorage.getItem("reservas")) || [];

    const personas =
        Number(document.getElementById("personas").value);

    const fecha =
        document.getElementById("fecha").value;

    const hora =
        document.getElementById("hora").value;

    let disponibles = 0;

    mesas.forEach(mesa => {

        const reservada = reservas.some(reserva =>

            reserva.restaurante === restaurante.nombre &&
            reserva.fecha === fecha &&
            reserva.hora === hora &&
            Number(reserva.mesa) === mesa.numero

        );

        const sinCapacidad =
            personas > 0 &&
            personas > mesa.capacidad;

        let estado = "Disponible";
        let clase = "disponible";
        let puedeSeleccionar = true;

        if (reservada) {

            estado = "Reservada";
            clase = "ocupada";
            puedeSeleccionar = false;

        }

        else if (sinCapacidad) {

            estado = "Sin capacidad";
            clase = "sinCapacidad";
            puedeSeleccionar = false;

        }

        else{

            disponibles++;

        }

        contenedor.innerHTML += `

        <div
            class="mesa ${clase}"
            data-numero="${mesa.numero}"
            data-seleccionable="${puedeSeleccionar}">

            <h4>🍽 Mesa ${mesa.numero}</h4>

            <p class="capacidad">

                👥 ${mesa.capacidad} personas

            </p>

            <p class="estado">

                ${estado}

            </p>

        </div>

        `;

    });

    agregarEventosMesas();

    validarFormulario();

}

// ================================
// EVENTOS DE LAS MESAS
// ================================

function agregarEventosMesas() {

    const tarjetas = document.querySelectorAll(".mesa");

    tarjetas.forEach(tarjeta => {

        tarjeta.addEventListener("click", () => {

            if (tarjeta.dataset.seleccionable !== "true") {

                return;

            }

            document.querySelectorAll(".mesa").forEach(m => {

                m.classList.remove("seleccionada");

            });

            tarjeta.classList.add("seleccionada");

            mesaSeleccionada = Number(
                tarjeta.dataset.numero
            );

            validarFormulario();

        });

    });

}

// ================================
// VALIDAR FORMULARIO
// ================================

function validarFormulario() {

    const fecha =
        document.getElementById("fecha").value;

    const hora =
        document.getElementById("hora").value;

    const personas =
        document.getElementById("personas").value;

    const boton =
        document.getElementById("confirmar");

    boton.disabled = !(

        fecha &&
        hora &&
        personas &&
        mesaSeleccionada

    );

}

// ================================
// ACTUALIZAR MESAS CUANDO CAMBIAN
// LOS DATOS DE LA RESERVA
// ================================

document.getElementById("fecha")
.addEventListener("change", () => {

    mesaSeleccionada = null;

    pintarMesas();

});

document.getElementById("hora")
.addEventListener("change", () => {

    mesaSeleccionada = null;

    pintarMesas();

});

document.getElementById("personas")
.addEventListener("change", () => {

    mesaSeleccionada = null;

    pintarMesas();

});

// ================================
// CONFIRMAR RESERVA
// ================================

document.getElementById("confirmar")
.addEventListener("click", () => {

    const reserva = {

        restaurante: restaurante.nombre,

        fecha:
            document.getElementById("fecha").value,

        hora:
            document.getElementById("hora").value,

        personas:
            document.getElementById("personas").value,

        mesa:
            mesaSeleccionada,

        usuario:
            usuario.correo,

        fechaRegistro:
            new Date().toLocaleString()

    };

    let reservas =
        JSON.parse(localStorage.getItem("reservas")) || [];

    // Verificar nuevamente por seguridad
    const existe = reservas.some(r =>

        r.restaurante === reserva.restaurante &&
        r.fecha === reserva.fecha &&
        r.hora === reserva.hora &&
        Number(r.mesa) === Number(reserva.mesa)

    );

    if (existe) {

        alert("Esta mesa ya fue reservada para esa fecha y horario.");

        pintarMesas();

        return;

    }

    reservas.push(reserva);

    localStorage.setItem(

        "reservas",

        JSON.stringify(reservas)

    );

    localStorage.setItem(

        "reservaActual",

        JSON.stringify(reserva)

    );

    window.location.href = "confirmacion.html";

});

// ================================
// CONTADOR DE MESAS DISPONIBLES
// ================================

function actualizarContador() {

    let disponibles = 0;

    document.querySelectorAll(".mesa").forEach(mesa => {

        if (mesa.dataset.seleccionable === "true") {

            disponibles++;

        }

    });

    let contador = document.getElementById("contadorMesas");

    if (!contador) {

        contador = document.createElement("p");

        contador.id = "contadorMesas";

        contador.style.textAlign = "center";
        contador.style.marginBottom = "20px";
        contador.style.fontWeight = "bold";
        contador.style.color = "#8E1F1F";

        const titulo = document.querySelector(".tituloMesas");

        titulo.insertAdjacentElement("afterend", contador);

    }

    contador.textContent =
        `${disponibles} de ${mesas.length} mesas disponibles`;

}

// ================================
// REDEFINIR PINTAR MESAS PARA
// ACTUALIZAR CONTADOR
// ================================

const pintarOriginal = pintarMesas;

pintarMesas = function () {

    pintarOriginal();

    actualizarContador();

};

// ================================
// INICIO
// ================================

pintarMesas();