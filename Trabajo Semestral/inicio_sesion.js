$(document).ready(function() {
  const loginForm = $("#mi-formulario");
  
  loginForm.submit(function(event) {
    event.preventDefault();

    const usernameInput = $("#usuario");
    const passwordInput = $("#contraseña");

    const storedUser = JSON.parse(localStorage.getItem("usuario"));

    if (storedUser && storedUser.usuario === usernameInput.val() && storedUser.contraseña === passwordInput.val()) {
      alert("Inicio de sesión exitoso!");
      // Redirigir al usuario a la página de inicio
      window.location.href = "./index.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
      usernameInput.val("");
      passwordInput.val("");
    }
  });
});
