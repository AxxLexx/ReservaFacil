[login.js](https://github.com/user-attachments/files/30918277/login.js)
# Sprint 3 — Seguridad y calidad

## Objetivo

Mejorar la seguridad y calidad de ReservaFácil a partir de los hallazgos identificados durante las pruebas del Sprint 2.

## Historias de usuario

- HU-11 — Cancelar una reservación.
- HU-15 — Validar los datos ingresados.
- HU-16 — Proteger las credenciales de los usuarios.
- HU-13 — Consultar las reservaciones como administrador.
- HU-14 — Modificar o cancelar reservaciones como administrador.

## Hallazgos de seguridad a atender

- SEC-01 — Almacenamiento de credenciales en texto plano.
- SEC-02 — Almacenamiento de reservaciones en el cliente.

## Actividades

- Implementar protección de credenciales.
- Mejorar la validación de formularios.
- Validar los datos de las reservaciones.
- Revisar el control de acceso a las reservaciones.
- Implementar cancelación deconst formulario = document.getElementById("formLogin");

if (formulario) {

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault();

        const correo = document.getElementById("correo").value.trim();

        const password = document.getElementById("password").value;

        const usuarios = obtenerUsuarios();

        const usuario = usuarios.find(
            usuario => usuario.correo === correo
        );

        if (!usuario) {

            alert("Correo o contraseña incorrectos.");

            return;
        }

        // Compatibilidad con usuarios registrados antes de la actualización
        if (usuario.password && !usuario.passwordHash) {

            if (usuario.password !== password) {

                alert("Correo o contraseña incorrectos.");

                return;
            }

            // Migrar contraseña antigua a hash
            usuario.passwordHash = await generarHash(password);

            delete usuario.password;

            guardarUsuarios(usuarios);

            guardarSesion(usuario);

            window.location.href = "inicio.html";

            return;
        }

        // Validación de usuarios nuevos con contraseña protegida
        const passwordHash = await generarHash(password);

        if (usuario.passwordHash !== passwordHash) {

            alert("Correo o contraseña incorrectos.");

            return;
        }

        guardarSesion(usuario);

        window.location.href = "inicio.html";

    });

}
const formularioRegistro = document.getElementById("formRegistro");

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", async function (e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        const correo = document.getElementById("correo").value.trim();

        const password = document.getElementById("password").value;

        if (nombre === "" || correo === "" || password === "") {

            alert("Completa todos los campos.");

            return;
        }

        if (password.length < 6) {

            alert("La contraseña debe tener al menos 6 caracteres.");

            return;
        }

        const usuarios = obtenerUsuarios();

        const existe = usuarios.find(
            usuario => usuario.correo === correo
        );

        if (existe) {

            alert("Ese correo ya está registrado.");

            return;
        }

        // Generar hash de la contraseña
        const passwordHash = await generarHash(password);

        usuarios.push({

            nombre,
            correo,
            passwordHash

        });

        guardarUsuarios(usuarios);

        alert("Registro exitoso.");

        window.location.href = "index.html";

    });

}
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

// Generar hash SHA-256 de una contraseña
async function generarHash(password) {

    const encoder = new TextEncoder();
    const datos = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", datos);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

// Guardar sesión
function guardarSesion(usuario) {

    const usuarioSesion = {
        nombre: usuario.nombre,
        correo: usuario.correo
    };

    localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(usuarioSesion)
    );
}

// Obtener sesión
function obtenerSesion() {
    return JSON.parse(localStorage.getItem("usuarioActivo"));
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
} reservaciones.
- Ejecutar pruebas de seguridad.
- Ejecutar pruebas de regresión.
- Documentar las limitaciones de la arquitectura actual.

## Criterios de aceptación

- Las contraseñas no deben almacenarse directamente en texto plano.
- Los datos ingresados deben validarse antes de procesarse.
- Las reservaciones deben asociarse al usuario correspondiente.
- El sistema debe impedir datos de reservación inválidos.
- El usuario debe poder cancelar una reservación.
- Las funcionalidades existentes deben continuar funcionando después de las modificaciones.

## Entregable

Versión mejorada de ReservaFácil con controles adicionales de seguridad, validación de datos y pruebas de regresión.

[login.js](https://github.com/user-attachments/files/30918283/login.js)
[registro.js](https://github.com/user-attachments/files/30918284/registro.js)
[storage.js](https://github.com/user-attachments/files/30918285/storage.js)
