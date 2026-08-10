const formularioRegistro = document.getElementById("formRegistro");

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", function (e) {

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

        const existe = usuarios.find(usuario => usuario.correo === correo);

        if (existe) {

            alert("Ese correo ya está registrado.");

            return;

        }

        usuarios.push({

            nombre,
            correo,
            password

        });

        guardarUsuarios(usuarios);

        alert("Registro exitoso.");

        window.location.href = "index.html";

    });

}