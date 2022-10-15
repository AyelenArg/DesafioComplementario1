class Producto {
    constructor (id, imagen, nombre, precio) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
}
}

let suma = (a,b,c) => a + b + c
let resta = (a,b) => a - b
let iva = x => x * 0.21


let descuentoEfectivo = 100
let envio = 150

const contenedor = document.getElementById("contenedor");
const inputBusqueda = document.getElementById("inputBusqueda")
const botonInput = document.getElementById("botonBusqueda")
    


const productos = [
{id: 1,imagen:"../img/tienda/atrapasuenos.jpg", nombre:"Tapiz circular macramé y telar", precio: "$" + 2400},
{id: 2,imagen:"../img/tienda//macramepluma.jpg", nombre:"Tapiz plumas macrame", precio: "$" + 1800},
{id: 3,imagen:"../img/tienda/tapizmacrame2.jpg", nombre:"Tapiz macrame flecos", precio: "$" + 2100},
{id: 4,imagen:"../img/tienda/tapiztelar.jpg", nombre:"Tapiz telar combinado", precio: "$" + 2300},
{id: 5,imagen:"../img/tienda/macrameplumas.jpg", nombre:"Tapiz plumas", precio: "$" + 2100},
{id: 6,imagen:"../img/tienda/ceramicacuadrado.jpg", nombre:"Platos hondos cuadrados", precio:"$" + 1100},
{id: 7,imagen:"../img/tienda/ceramicabowl.jpg", nombre:"Bowls y plato color salpicado", precio:"$" + 1300},
{id: 8,imagen:"../img/tienda/macramesouvenir.jpg", nombre:"Souvenirs macramé", precio:"CONSULTAR"},
];



productos.shift()
    
console.log(productos);


let filtrar = productos.filter(Producto => Producto.precio < 1500);
console.log(filtrar);

//Interactuar con HTML




let carrito = []
productos.forEach(producto => {
  const {id, imagen, nombre, precio} = producto;
  let productoRenderizado = document.createElement("div");
  productoRenderizado.innerHTML = `
  <div class="card">
    <img src=${imagen}>
    <p>${nombre}</p>
    <h4>${precio}</h4>
   <button id=${id} class= "button">Agregar al carrito</button>
    </div>
  `;
  
 contenedor.append(productoRenderizado);
  
 const boton = document.getElementById(producto.id)
  boton.addEventListener("click", () => {comprarProducto(producto)
  Swal.fire({
    position: 'center-top',
    icon: `success`,
    text: 'Producto agregado al carrito',
    width: 200,
    height: 100, 
    iconColor: "#d4bea97e",
    showConfirmButton: false,
    timer: 1500
  })})
});

const comprarProducto = (producto) => {
  const {id, imagen, nombre, precio} = producto;
  let buscarProducto = carrito.find(item => item.id === id)
  if (buscarProducto === undefined) {
        carrito.push({
      id: id,
      nombre: nombre,
      precio: precio,
      img: imagen,
      cantidad: 1,
    })
  } else {
buscarProducto.precio = buscarProducto.precio + precio
   buscarProducto.cantidad = buscarProducto.cantidad + 1
  }
}




localStorage.setItem("verCarrito", JSON.stringify(productos));
const verCarrito = document.getElementById("verCarrito")
verCarrito.addEventListener("click", () => console.log(carrito))



const buscarProducto = (input) =>{
  console.log(input);
  let productoBuscado = productos.find(producto => producto.nombre.includes(input))
  console.log(productoBuscado);
  inputBusqueda.value = ``
}

botonInput.addEventListener("click", () =>console.log(inputBusqueda.value))


const botonVaciar = document.getElementById("vaciarCarrito");

verCarrito.addEventListener("click",() => localStorage.setItem("carrito", JSON.stringify(carrito)))
botonVaciar.addEventListener("click", () => localStorage.clear(carrito))

carrito.length === 0 && console.log("el carrito esta vacio")

botonVaciar.addEventListener("click", () =>{
  carrito = JSON.parse(localStorage.getItem("carrito"));
  localStorage.clear("carrito");
  Swal.fire({
    position: 'center-top',
    icon: `success`,
    text: 'El carrito esta vacio!',
    width: 200,
    height: 100, 
    iconColor: "#d4bea97e",
    showConfirmButton: false,
    timer: 1500
  })
    });


