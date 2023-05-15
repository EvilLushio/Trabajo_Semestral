// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
  // Verificar si ya hay productos guardados en el carrito
  if (localStorage.getItem('carrito') !== null) {
    // Obtener los productos guardados en el carrito
    var productos = JSON.parse(localStorage.getItem('carrito'));
  } else {
    // Si no hay productos guardados, inicializar la variable productos como un array vacío
    var productos = [];
  }

  // Buscar si el producto ya está en el carrito
  var index = -1;
  $.each(productos, function(i, item) {
    if (item.nombre === nombre) {
      index = i;
      return false;
    }
  });

  // Si el producto ya está en el carrito, incrementar su cantidad en uno
  if (index !== -1) {
    productos[index].cantidad += 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con cantidad 1
    productos.push({nombre: nombre, precio: precio, cantidad: 1});
  }

  // Guardar los productos en el carrito en el localStorage
  localStorage.setItem('carrito', JSON.stringify(productos));
}
