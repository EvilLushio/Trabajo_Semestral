$(document).ready(function() {
  // Validación de formulario
  $("#mi-formulario").submit(function(event) {
    if (this.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.classList.add('was-validated');
    
    // Si el formulario es válido, guardar los datos en localStorage
    if (this.checkValidity() === true) {
      const usuario = $("#usuario").val();
      const contraseña = $("#contraseña").val();
      const email = $("#email").val();
      
      const userData = {
        usuario: usuario,
        contraseña: contraseña,
        email: email
      };
      
      localStorage.setItem("usuario", JSON.stringify(userData));
    }
  });

  // Validación de usuario
  $("#usuario").blur(function() {
    if ($(this).val().length < 4) {
      $(this).removeClass('is-valid').addClass('is-invalid');
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
    }
  });

  // Validación de contraseña
  $("#contraseña").blur(function() {
    if ($(this).val().length < 6) {
      $(this).removeClass('is-valid').addClass('is-invalid');
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
    }
  });

  // Validación de correo electrónico
  $("#email").blur(function() {
    const regex = /^\S+@\S+\.\S+$/;
    if (regex.test($(this).val())) {
      $(this).removeClass('is-invalid').addClass('is-valid');
    } else {
      $(this).removeClass('is-valid').addClass('is-invalid');
    }
  });
});
