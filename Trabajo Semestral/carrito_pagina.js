$(document).ready(function() {
  // Verificar si hay productos guardados en el carrito
  if (localStorage.getItem('carrito') !== null) {
    // Obtener los productos guardados en el carrito
    var productos = JSON.parse(localStorage.getItem('carrito'));
    // Mostrar los productos en la tabla
    mostrarProductos(productos);
    // Actualizar el total
    actualizarTotal(productos);
  } else {
    // Si no hay productos guardados, inicializar la variable productos como un array vacío
    var productos = [];
  }
});

  // Función para mostrar los productos guardados en el carrito en una tabla
  function mostrarProductos(productos) {
    // Obtener la referencia a la tabla
    var table = $('#cuerpo-tabla');
    // Limpiar la tabla
    table.empty();
    // Recorrer los productos y agregarlos a la tabla
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      // Crear una nueva fila en la tabla
      var fila = $('<tr></tr>');
      // Agregar las celdas a la fila
      var nombre = $('<td></td>').text(producto.nombre);
      fila.append(nombre);
      var cantidad = $('<td></td>').text(producto.cantidad);
      fila.append(cantidad);
      var precio = $('<td></td>').text(producto.precio);
      fila.append(precio);
      // Agregar la fila a la tabla
      table.append(fila);
    }
  }

  // Función para actualizar el total de la compra
  function actualizarTotal(productos) {
    // Obtener la referencia al elemento del total
    var totalElemento = $('#total');
    // Calcular el total
    var total = 0;
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      total += producto.cantidad * producto.precio;
    }
    // Actualizar el elemento del total
    totalElemento.text(total);
  }

  function vaciarCarrito() {
    // Preguntar al usuario si está seguro de que desea vaciar el carrito
    if (confirm("¿Está seguro de que desea vaciar el carrito?")) {
      // Eliminar los elementos del LocalStorage
      localStorage.removeItem('carrito');
      // Obtener la referencia a la tabla
      var table = $('#cuerpo-tabla');
      // Limpiar la tabla
      table.empty();
      // Actualizar el total a cero
      actualizarTotal(0);
    }
  }

  // Función para pagar los productos en el carrito
  function pagar() {
    // Verificar si hay productos guardados en el carrito
    if (localStorage.getItem('carrito') !== null) {
      // Obtener los productos guardados en el carrito
      var productos = JSON.parse(localStorage.getItem('carrito'));
      // Calcular el total
      var total = 0;
      for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        total += producto.cantidad * producto.precio;
      }
      // Pedir al usuario que ingrese los datos de pago
      var datosPago = prompt("Ingrese los datos de pago");
      // Verificar si se ingresaron los datos de pago
      if (datosPago !== null && datosPago !== '') {
        // Mostrar mensaje de confirmación de pago
        alert("Pago confirmado por un total de $" + total + " con los datos de pago: " + datosPago);
      // Vaciar el carrito
      vaciarCarrito();
    } else {
      // Mostrar mensaje de rechazo de pago
      alert("Pago rechazado");
    }
  } else {
    // Si no hay productos guardados, mostrar mensaje de error
    alert("No hay productos en el carrito");
  }
}
