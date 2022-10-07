

class Producto {
    constructor (id, imagen, nombre, descripcion, precio, cantidad) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
}
}

let suma = (a,b,c) => a + b + c
let resta = (a,b) => a - b
let iva = x => x * 0.21


let descuentoEfectivo = 100
let envio = 150


const inputBusqueda = document.getElementById("inputBusqueda")
const botonInput = document.getElementById("botonInput")
    


const productos = [];
productos.push({id: 1,imagen:"../img/tienda/atrapasuenos.jpg", nombre:"Tapiz circular macramé y telar", precio: "$" + 2400});
productos.push({id: 2,imagen:"../img/tienda//macramepluma.jpg", nombre:"Tapiz plumas macrame", precio: "$" + 1800});
productos.push({id: 3,imagen:"../img/tienda/tapizmacrame2.jpg", nombre:"Tapiz macrame flecos", precio: "$" + 2100});
productos.push({id: 4,imagen:"../img/tienda/tapiztelar.jpg", nombre:"Tapiz telar combinado", precio: "$" + 2300});
productos.push({id: 5,imagen:"../img/tienda/macrameplumas.jpg", nombre:"Tapiz plumas", precio: "$" + 2100});
productos.push({id: 6,imagen:"../img/tienda/ceramicacuadrado.jpg", nombre:"Platos hondos cuadrados", precio:"$" + 1100});
productos.push({id: 7,imagen:"../img/tienda/ceramicabowl.jpg", nombre:"Bowls y plato color salpicado", precio:"$" + 1300});
productos.push({id: 8,imagen:"../img/tienda/macramesouvenir.jpg", nombre:"Souvenirs macramé", precio:"CONSULTAR"});



productos.shift()
    
console.log(productos);


let filtrar = productos.filter(Producto => Producto.precio < 1500);
console.log(filtrar);

//Interactuar con HTML

const comprarProducto = (producto) => {
  let buscarProducto = carrito.find(item => item.id === producto.id)
  if (buscarProducto !== undefined) {
   buscarProducto.precio = buscarProducto.precio + producto.precio
    buscarProducto.cantidad = buscarProducto.cantidad + 1
  } else {
     carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
      cantidad: 1
    })
  }
}

localStorage.setItem("carrito", JSON.stringify(productos));

let contenedor = document.getElementById("contenedor");
let carrito = []
productos.forEach(producto => {
  let item = document.createElement("div");
  item.innerHTML = `
  <div class="card">
    <img src=${producto.imagen}>
    <p>${producto.nombre}</p>
    <h4>${producto.precio}</h4>
   <button id=${producto.id} class= "button">Agregar al carrito</button>
    </div>
  `;
  
 contenedor.append(item);
  
 const boton = document.getElementById(producto.id)
  boton.addEventListener("click", () => comprarProducto(producto))
});

const verCarrito = document.getElementById("carrito")
verCarrito?.addEventListener("click", () => console.log(verCarrito))



const buscarProducto = (input) =>{
  console.log(input);
  let productoBuscado = productos.find(producto => producto.nombre.includes(input))
  console.log(productoBuscado);
  inputBusqueda.value = ``
}

botonInput.addEventListener("click", () =>console.log(inputBusqueda.value))


const botonVaciar = document.getElementById("vaciarCarrito");

verCarrito?.addEventListener("click",() => console.log(carrito))
verCarrito?.addEventListener("click",() => localStorage.setItem("carrito", JSON.stringify(carrito)))
botonVaciar.addEventListener("click", () => localStorage.clear(carrito))