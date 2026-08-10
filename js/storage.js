// ================================
// LOCAL STORAGE
// ================================

// Obtener todos los usuarios
function obtenerUsuarios() {

    return JSON.parse(localStorage.getItem("usuarios")) || [];

}

// Guardar todos los usuarios
function guardarUsuarios(usuarios) {

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

}

// Guardar sesión
function guardarSesion(usuario) {

    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

}

// Obtener sesión
function obtenerSesion() {

    return JSON.parse(localStorage.getItem("usuarioActivo"));

}

// Cerrar sesión
function cerrarSesion() {

    localStorage.removeItem("usuarioActivo");

}