// Tenemos un li de productos
// Arreglo de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];


const listaProductos = document.getElementById("lista-de-productos");
const inputBusqueda = document.getElementById("inputBusqueda");
const botonFiltrar = document.getElementById("botonFiltrar");


const crearProducto = (producto) => {
  const d = document.createElement("div");
  d.classList.add("producto");

  const ti = document.createElement("p");
  ti.classList.add
  ti.textContent = producto.nombre;
  
  const imagen = document.createElement("img");
  imagen.setAttribute();

  d.appendChild(ti);
  d.appendChild(imagen);

  listaProductos.appendChild(d);
};

// Función para mostrar productos filtrados o todos los productos
const mostrarProductos = (productos) => {
  listaProductos.innerHTML = ''; 
  productos.forEach crearProducto(producto));
};

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);

// Evento de filtrado al hacer clic en el botón
botonFiltrar.onclick = function() {
  const texto = inputBusqueda.value.toLowerCase(); // Convertimos a minúsculas para una búsqueda más flexible
  const productosFiltrados = productos.filter
    producto.tipo.includes(texto) || producto.color.includes(texto)
  );
  mostrarProductos(productosFiltrados); // Mostrar productos filtrados
};