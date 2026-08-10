// ================================
// VERIFICAR SESIÓN
// ================================

const usuario = obtenerSesion();

if (!usuario) {

    window.location.href = "index.html";

}


// ================================
// SALUDO
// ================================

const nombreUsuario = document.getElementById("nombreUsuario");

const hora = new Date().getHours();

let saludo = "Hola";

if (hora >= 6 && hora < 12) {

    saludo = "Buenos días";

} else if (hora >= 12 && hora < 19) {

    saludo = "Buenas tardes";

} else {

    saludo = "Buenas noches";

}

nombreUsuario.textContent = `${saludo}, ${usuario.nombre} 👋`;


// ================================
// RESTAURANTES
// ================================

const restaurantes = [

    {
        id: 1,
        nombre: "La Toscana",
        categoria: "Comida Italiana",
        calificacion: "4.8",
        ubicacion: "Monterrey, N.L.",
        imagen: "assets/img/restaurante.jpeg"
    },

    {
        id: 2,
        nombre: "Sushi House",
        categoria: "Comida Japonesa",
        calificacion: "4.7",
        ubicacion: "San Pedro",
        imagen: "assets/img/restaurante.jpeg"
    },

    {
        id: 3,
        nombre: "Burger Grill",
        categoria: "Hamburguesas",
        calificacion: "4.9",
        ubicacion: "Guadalupe",
        imagen: "assets/img/restaurante.jpeg"
    },

    {
        id: 4,
        nombre: "El Ranchero",
        categoria: "Comida Mexicana",
        calificacion: "4.6",
        ubicacion: "Apodaca",
        imagen: "assets/img/restaurante.jpeg"
    },

    {
        id: 5,
        nombre: "Asador Norte",
        categoria: "Cortes Premium",
        calificacion: "4.9",
        ubicacion: "San Nicolás",
        imagen: "assets/img/restaurante.jpeg"
    },

    {
        id: 6,
        nombre: "Café Central",
        categoria: "Cafetería",
        calificacion: "4.8",
        ubicacion: "Centro de Monterrey",
        imagen: "assets/img/restaurante.jpeg"
    }

];


// ================================
// GENERAR TARJETAS
// ================================

const contenedor = document.getElementById("contenedorRestaurantes");

contenedor.innerHTML = "";

restaurantes.forEach(restaurante => {

    contenedor.innerHTML += `

        <div class="card">

            <img src="${restaurante.imagen}" alt="${restaurante.nombre}">

            <div class="info">

                <div class="top-info">

                    <span class="tipo">
                        ${restaurante.categoria}
                    </span>

                    <span class="rating">
                        ⭐ ${restaurante.calificacion}
                    </span>

                </div>

                <h3>${restaurante.nombre}</h3>

                <p class="ubicacion">
                    📍 ${restaurante.ubicacion}
                </p>

                <button
                    class="reservar"
                    data-id="${restaurante.id}">

                    Reservar mesa

                </button>

            </div>

        </div>

    `;

});


// ================================
// RESERVAR
// ================================

const botones = document.querySelectorAll(".reservar");

botones.forEach(boton => {

    boton.addEventListener("click", function () {

        const id = Number(this.dataset.id);

        const restaurante = restaurantes.find(r => r.id === id);

        localStorage.setItem(
            "restauranteSeleccionado",
            JSON.stringify(restaurante)
        );

        window.location.href = "detalle-restaurante.html";

    });

});


// ================================
// CERRAR SESIÓN
// ================================

const botonCerrarSesion = document.getElementById("cerrarSesion");

botonCerrarSesion.addEventListener("click", function () {

    cerrarSesion();

    window.location.href = "index.html";

});