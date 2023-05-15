$(document).ready(function() {
  // cuando se envía el formulario
  $('#formulario').submit(function(e) {
    e.preventDefault(); // previene el envío del formulario
    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var telefono = $('#telefono').val();
    var tipoConsulta = $('#tipoConsulta').val();
    var mensaje = $('#mensaje').val();
    var recibirAvisos = $('#recibirAvisos').is(':checked');

    // validación del nombre
    if (nombre.length < 2) {
      $('#mensaje-error').html('El nombre debe tener al menos 2 caracteres');
      return;
    }

    // validación del correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $('#mensaje-error').html('Debe ingresar un correo electrónico válido');
      return;
    }

    // validación del teléfono
    if (isNaN(telefono) || telefono.length != 9) {
      $('#mensaje-error').html('Debe ingresar un número de teléfono válido (9 dígitos)');
      return;
    }

    // validación del tipo de consulta
    if (tipoConsulta == '') {
      $('#mensaje-error').html('Debe seleccionar un tipo de consulta');
      return;
    }

    // validación del mensaje
    if (mensaje.length < 10) {
      $('#mensaje-error').html('El mensaje debe tener al menos 10 caracteres');
      return;
    }

    // si llegamos hasta aquí, el formulario es válido
    // aquí puedes enviar el formulario o mostrar un mensaje de éxito
    $('#mensaje-exito').html('Formulario enviado correctamente');

    // limpiar los campos del formulario
    $('#nombre').val('');
    $('#email').val('');
    $('#telefono').val('');
    $('#tipoConsulta').val('');
    $('#mensaje').val('');
    $('#recibirAvisos').prop('checked', false);
  });
});
