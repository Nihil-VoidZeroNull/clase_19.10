'user strict';
/*---------------DEFINITION_SECTION----------------*/

// Estructura basica de cada producto:
const productoBase = {
  id: 0,
  nombre: "",
  precio: 0.0,
  cantidad: 0,
  venta: 0.0,
  actualizarPrecio: function(nuevoPrecio, masItems) {
    this.precio = nuevoPrecio;
    this.cantidad = masItems;
  },
  calcularVenta: function() {
    this.venta = this.cantidad * this.precio;
    // console.log('venta: ' + this.venta);
  }
};
// Esteuctura del Carrito de compras:
const carritoDeCompras = {
  productos: [],
  totalArticulos: 0,
  montoTotal: 0.0,
  impuestos: 0.0,
  totalAPagar: 0.0,
  agregarProducto: function(idProducto, nombreProducto, precioUnitario, cantidadComprada) {
    const nuevoProducto = Object.create(productoBase);
    nuevoProducto.id = idProducto;
    nuevoProducto.nombre = nombreProducto;
    nuevoProducto.precio = precioUnitario;
    nuevoProducto.cantidad = cantidadComprada;
    nuevoProducto.calcularVenta();
    // console.log(nuevoProducto.venta);
    this.productos.push(nuevoProducto);
  },
  calcularTotalArticulosMontoTotal: function() {
    let size = this.productos.length;
    // console.log(size);
    for (let i = 0; i < size; i++) {
      const {cantidad, venta} = this.productos[i];
      // console.log(cantidad);
      this.totalArticulos += cantidad;
      this.montoTotal += venta;
    };
    // console.log('Items: ' + this.totalArticulos);
    // console.log(this.montoTotal);
  },
  calcularImpuestos: function(iva) {
    let impuesto = iva / 100;
    // console.log(impuesto)
    this.impuestos = this.montoTotal * impuesto;
    // console.log(this.impuestos);
  },
  calcularTotalAPagar: function() {
    this.totalAPagar = this.montoTotal + this.impuestos;
  },
  mostrarCompraPorConsola: function() {
    let size = this.productos.length;
    for (let i = 0; i < size; i++) {
      const { id, nombre, precio, cantidad, venta } = this.productos[i];
      console.log(id + ' | ' + nombre + ' : ' + cantidad + ' | ' + precio + ' | ' + venta);
    };
    console.log('Monto Total: ' + this.montoTotal);
    console.log('Iva 16%  ----- ' + this.impuestos);
    console.log('-----------------');
    console.log('Items comprados: ' + this.totalArticulos);
   
  },
  removerProducto: function(idProducto) {
    // falta añadir casos de uso, tipo cuantos elementos va a quitar, y si son todos elimine el producto directamente
    this.productos = this.productos.filter(producto => producto.id !== idProducto)
  },
  vaciarCarrito: function() {
    this.productos = 0;
  }
};
let iva = 16;

/*--------------INSTANTIATE_SECTION----------------*/
carritoDeCompras.agregarProducto(0, 'Papelon', 2.4, 10);
carritoDeCompras.agregarProducto(1, 'Yuca', 1.5
, 5);
// carritoDeCompras.vaciarCarrito();
if (carritoDeCompras.productos.length > 0) {
  carritoDeCompras.productos[1].actualizarPrecio(5, 20)
  carritoDeCompras.productos[1].calcularVenta();
} else {
    console.log("No hay productos en el carrito.");
};

carritoDeCompras.calcularTotalArticulosMontoTotal();
carritoDeCompras.calcularImpuestos(iva);
carritoDeCompras.calcularTotalAPagar();

carritoDeCompras.removerProducto(0);
//carritoDeCompras.vaciarCarrito();
/*-----------------RENDER_SECTION------------------*/
if (carritoDeCompras.productos.length > 0) {
  carritoDeCompras.mostrarCompraPorConsola()
} else {
    console.log("No hay productos en el carrito.");
};
