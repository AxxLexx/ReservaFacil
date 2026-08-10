// ==========================================
// RESERVA FÁCIL
// ARCHIVO: detalle-restaurante.js
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

// ================================
// INFORMACIÓN DE LOS RESTAURANTES
// ================================

const informacion = {

    "La Toscana": {

        tipo: "Italiana",

        descripcion:
        "La Toscana ofrece auténtica comida italiana elaborada con ingredientes frescos. Es ideal para cenas familiares, reuniones y celebraciones especiales."

    },

    "Mr. Pampas": {

        tipo: "Brasileña",

        descripcion:
        "Restaurante tipo espadas brasileñas con una amplia variedad de cortes de carne, barra de ensaladas y ambiente elegante."

    },

    "Los Arcos": {

        tipo: "Mexicana",

        descripcion:
        "Especialistas en comida mexicana tradicional con platillos típicos y un ambiente familiar."

    },

    "Sushi Roll": {

        tipo: "Japonesa",

        descripcion:
        "Disfruta de una gran variedad de sushi, ramen y platillos orientales preparados al momento."

    }

};

// ================================
// MOSTRAR INFORMACIÓN
// ================================

document.getElementById("nombreRestaurante").textContent =
    restaurante.nombre;

if (informacion[restaurante.nombre]) {

    document.getElementById("tipoComida").textContent =
        informacion[restaurante.nombre].tipo;

    document.getElementById("descripcion").textContent =
        informacion[restaurante.nombre].descripcion;

}

// ================================
// BOTÓN REGRESAR
// ================================

document
.getElementById("volver")
.addEventListener("click", () => {

    window.location.href = "inicio.html";

});

// ================================
// BOTÓN RESERVAR
// ================================

document
.getElementById("reservar")
.addEventListener("click", () => {

    window.location.href = "seleccionar-mesa.html";

});