// ================================
// VERIFICAR SESIÓN
// ================================

const usuario = obtenerSesion();

if (!usuario) {

    window.location.href = "index.html";

}

// ================================
// OBTENER RESERVAS
// ================================

const lista = document.getElementById("listaReservas");

const reservas =
JSON.parse(localStorage.getItem("reservas")) || [];

const reservasUsuario =
reservas.filter(r => r.usuario === usuario.correo);

// ================================
// SIN RESERVAS
// ================================

if (reservasUsuario.length === 0) {

    lista.innerHTML = `

        <div class="sinReservas">

            <i class="fa-solid fa-calendar-xmark"></i>

            <h2>No tienes reservas</h2>

            <p>Haz tu primera reservación.</p>

        </div>

    `;

}

// ================================
// MOSTRAR RESERVAS
// ================================

else{

    reservasUsuario.forEach(reserva =>{

        lista.innerHTML +=`

        <div class="cardReserva">

            <h3>

                ${reserva.restaurante}

            </h3>

            <p>

                📅 ${reserva.fecha}

            </p>

            <p>

                🕒 ${reserva.hora}

            </p>

            <p>

                👥 ${reserva.personas} personas

            </p>

            <p>

                🪑 Mesa ${reserva.mesa}

            </p>

        </div>

        `;

    });

}