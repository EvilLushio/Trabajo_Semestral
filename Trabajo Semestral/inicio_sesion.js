document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("mi-formulario");
    
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById("usuario");
      const passwordInput = document.getElementById("contraseña");
  
      const storedUser = JSON.parse(localStorage.getItem("usuario"));
  
      if (storedUser && storedUser.usuario === usernameInput.value && storedUser.contraseña === passwordInput.value) {
        alert("Inicio de sesión exitoso!");
        // Redirigir al usuario a la página de inicio
        window.location.href = "./index.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
        usernameInput.value = "";
        passwordInput.value = "";
      }

    });
  });
  