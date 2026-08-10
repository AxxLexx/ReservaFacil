// ================================
// VERIFICAR SESIÓN
// ================================

const usuario = obtenerSesion();

if (!usuario) {

    window.location.href = "index.html";

}

// ================================
// DATOS DEL USUARIO
// ================================

document.getElementById("nombre").textContent = usuario.nombre;

document.getElementById("correo").textContent = usuario.correo;

// ================================
// CONTAR RESERVAS
// ================================

const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

const reservasUsuario = reservas.filter(reserva =>
    reserva.usuario === usuario.correo
);

document.getElementById("totalReservas").textContent =
reservasUsuario.length;

// ================================
// CERRAR SESIÓN
// ================================

document.getElementById("cerrarSesion").addEventListener("click", () => {

    cerrarSesion();

    window.location.href = "index.html";

});