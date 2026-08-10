const formulario = document.getElementById("formLogin");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const correo = document.getElementById("correo").value.trim();

        const password = document.getElementById("password").value;

        const usuarios = obtenerUsuarios();

        const usuario = usuarios.find(usuario =>
            usuario.correo === correo &&
            usuario.password === password
        );

        if (!usuario) {

            alert("Correo o contraseña incorrectos.");

            return;

        }

        guardarSesion(usuario);

        window.location.href = "inicio.html";

    });

}