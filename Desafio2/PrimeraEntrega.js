

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

    
    
let producto1 = new Producto (1, "...", "Tapiz macrame", "Circular de macrame y telar", 2500, 5)
let producto2 = new Producto (2, "...", "Tapiz", "Pluma macrame", 1800, 6);
let producto3 = new Producto (3, "...", "Tapiz", "Macrame con flecos", 2100, 2);
let producto4 = new Producto (4, "...", "Tapiz", "Telar combinado", 2300,1); 
    
alert(
          "Bienvenido a Revuelta Deco"
        )

const productos = [];
productos.push({id: 1, nombre:"Tapiz macrame", precio: "$" + 2500});
productos.push({id: 2, nombre:"Tapiz plumas macrame", precio: "$" + 1800});
productos.push({id: 3, nombre:"Tapiz macrame flecos", precio: "$" + 2100});
productos.push({id: 4, nombre:"Tapiz telar combinado", precio: "$" + 2300});
productos.push({id: 5, nombre:"Tapiz plumas varias", precio: "$" + 2100});
productos.push({id: 6, nombre:"Platos cuadrados", precio:"$" + 1100});
    
    productos.shift()
    
    console.log(productos);


let tienda = prompt("Quiere ver nuestros productos en stock?")


    productos.forEach((Producto =>{
    alert( `nombre: ${Producto.nombre};
            precio: ${Producto.precio};
            `);
}))

let busqueda = prompt("Ingrese el nombre del producto")
let productoEncontrado = productos.find(Producto => Producto.nombre.toLowerCase() === busqueda)
while (busqueda != "ESC") {
    switch (busqueda) {
      case "tapiz macrame":
        alert(productoEncontrado.nombre,  productoEncontrado.precio);
        break;
      case "tapiz plumas":
        alert(productoEncontrado.nombre + productoEncontrado.precio);
        break;
        case "tapiz macrame flecos":
        alert(productoEncontrado.nombre + productoEncontrado.precio);
        break;
        case "tapiz telar combinado":
        alert(productoEncontrado.nombre + productoEncontrado.precio);
        break;
        case "platos cuadrados":
        alert(productoEncontrado.nombre + productoEncontrado.precio);
        break;
     default:
      alert(`producto no encontrado`)
        break;
        
    }
    busqueda = prompt("Ingrese el nombre del producto");
  }


let filtrar = productos.filter(Producto => Producto.precio < 1500);
console.log(filtrar);




//Interactuar con HTML
let contenedor = document.getElementById("contenedor");


productos.forEach((producto) => {
  let item = document.createElement("div");
  item.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <img src="../img/tienda/atrapasuenos.jpg" alt="atrapasueño id="foto" style="width:160px; height:200px;"/>
    <p>Producto: ${producto.nombre}</p>
    <h3>${producto.precio}</h3>
  `;
  contenedor.append(item);
});

let titulo = document.getElementById("tienda");
saludo.innerHTML = "Bienvenido a la tienda virtual"


