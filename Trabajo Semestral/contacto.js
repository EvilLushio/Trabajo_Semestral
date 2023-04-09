document.addEventListener('DOMContentLoaded', function() {

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const tipoConsulta = document.getElementById("tipoConsulta").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const recibirAvisos = document.getElementById("recibirAvisos").checked;

  if (nombre === "" || email === "" || telefono === "" || tipoConsulta === "" || mensaje === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un email válido.");
    return;
  }

  const telefonoRegex = /^[0-9]{9}$/;
  if (!telefonoRegex.test(telefono)) {
    alert("Por favor, ingrese un teléfono válido.");
    return;
  }

  // Envío de formulario
  formulario.submit();
});

});