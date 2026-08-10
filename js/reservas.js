// ==========================================
// RESERVA FÁCIL
// ARCHIVO: reservas.js
// ==========================================

// ================================
// VERIFICAR SESIÓN
// ================================

const usuario = obtenerSesion();

if (!usuario) {

    window.location.href = "index.html";

}

// ================================
// CONTENEDOR
// ================================

const listaReservas =
    document.getElementById("listaReservas");

// ================================
// OBTENER RESERVAS
// ================================

let reservas =
    JSON.parse(localStorage.getItem("reservas")) || [];

// ================================
// FILTRAR POR USUARIO
// ================================

reservas = reservas.filter(reserva =>

    reserva.usuario === usuario.correo

);

// ================================
// ORDENAR (MÁS RECIENTES PRIMERO)
// ================================

reservas.reverse();

// ================================
// SIN RESERVAS
// ================================

if (reservas.length === 0) {

    listaReservas.innerHTML = `

    <div class="sinReservas">

        <h2>No tienes reservas</h2>

        <p>

            Cuando realices una reserva aparecerá aquí.

        </p>

    </div>

    `;

}

// ================================
// MOSTRAR RESERVAS
// ================================

else{

    reservas.forEach(reserva =>{

        listaReservas.innerHTML += `

        <div class="cardReserva">

            <h2>

                🍽 ${reserva.restaurante}

            </h2>

            <p>

                📅 <strong>Fecha:</strong>

                ${reserva.fecha}

            </p>

            <p>

                🕒 <strong>Hora:</strong>

                ${reserva.hora}

            </p>

            <p>

                👥 <strong>Personas:</strong>

                ${reserva.personas}

            </p>

            <p>

                🪑 <strong>Mesa:</strong>

                ${reserva.mesa}

            </p>

            <p>

                📌 <strong>Reservada el:</strong>

                ${reserva.fechaRegistro}

            </p>

        </div>

        `;

    });

}