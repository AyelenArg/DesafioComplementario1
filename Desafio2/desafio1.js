//Vinculado a tienda.html

class Producto {constructor (info) {
    this.img = info.imagen
    this.nombreProducto = info.nombre;
    this.descripcion = info.descripcion;
    this.precio = info.precio;
    this.cantidad = info.cantidad;
}
}

const suma = (a,b,c) => a + b + c
const resta = (a,b) => a - b
const iva = x => x * 0.21

let precioProducto1 = 2500
let precioProducto2 = 1800
let precioProducto3 = 2100
let precioProducto4 = 2300
let descuentoEfectivo = 100
let envio = 150


    
let producto1 = new Producto ({
    id: 1,
    imagen: "...",
    nombre:"Tapiz macrame", 
    descripcion:"Circular de macrame y telar", 
    precio: precioProducto1,
    cantidad: 5,})
    console.log(producto1);
let precioFinalProducto1 = resta(suma(precioProducto1, iva(precioProducto1), envio), descuentoEfectivo);
console.log("Precio final $ "+ precioFinalProducto1);


let producto2= new Producto ({
    id: 2,
    imagen: "...",
    nombre: "Tapiz", 
    descripcion: "Pluma macrame", 
    precio: precioProducto2,
    cantidad: 6});

    console.log(producto2);
    let precioFinalProducto2 = resta(suma(precioProducto2, iva(precioProducto2), envio), descuentoEfectivo);
    console.log("Precio final $ "+precioFinalProducto2);


let producto3= new Producto ({
    id: 3,
    imagen: "...",
    nombre: "Tapiz", 
    descripcion: "Macrame con flecos", 
    precio: precioProducto3,
    cantidad: 2});
    console.log(producto3);
    let precioFinalProducto3 = resta(suma(precioProducto3, iva(precioProducto3), envio), descuentoEfectivo);
    console.log("Precio final $ "+precioFinalProducto3);


let producto4= new Producto ({
    id: 4,
    imagen: "...",
    nombre: "Tapiz", 
    descripcion: "Telar combinado", 
    precio: precioProducto4,
    cantidad: 1});      
    
    console.log(producto4);
    let precioFinalProducto4 = resta(suma(precioProducto4, iva(precioProducto4), envio), descuentoEfectivo);
    console.log("Precio final $ "+precioFinalProducto4);






