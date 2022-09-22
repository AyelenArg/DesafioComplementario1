

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

const productos = [
        { id: 4, nombre: "Tapiz telar combinado", precio:"$" + 2300},
        { id: 1, nombre: "Tapiz circular", precio:"$" + 2500},
        { id: 2, nombre: "Tapiz pluma macrame", precio:"$" + 1800},
        { id: 3, nombre: "Tapiz macrame flecos", precio:"$" + 2100},
    ];
  
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
let encontrar =productos.find(Producto => Producto.nombre === "")
while (busqueda != "ESC") {
    switch (busqueda) {
      case "tapiz circular":
        alert("tapiz circular, $2500, 5 en stock ");
        break;
      case "tapiz pluma":
        alert("Tapiz pluma macrame, $1800, 6 en stock");
        break;
        case "macrame flecos":
        alert("Macrame con flecos, $2100, 2 en stock");
        break;
        case "tapiz telar combinado":
        alert("Tapiz en telar combinado, $2300, 1 en stock");
        break;
        case "platos":
        alert("Platos cuadrados, $1100, 8 en stock");
        break;
     default:
        break;
        
    }
    busqueda = prompt("Ingrese el nombre del producto");
  }


let filtrar = productos.filter(Producto => Producto.precio < 1500);
console.log(filtrar);







