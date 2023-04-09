document.addEventListener('DOMContentLoaded', function() {

const formulario = document.getElementById("mi-formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;
  const email = document.getElementById("email").value;

  const usuarioObj = {
    usuario: usuario,
    contraseña: contraseña,
    email: email
  };

  // Guardar los datos en localStorage
  localStorage.setItem("usuario", JSON.stringify(usuarioObj));

  alert("Usuario registrado con éxito");

  // Redirigir al usuario a la página de login
  window.location.href = "./micuenta.html";


  // Borrar los campos del formulario
  formulario.reset();
});

});