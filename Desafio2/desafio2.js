const productos = [
    { id: 1, nombre: "Tapiz circular", precio: 2500,},
    { id: 2, nombre: "Tapiz pluma macrame", precio: 1800,},
    { id: 3, nombre: "Tapiz macrame flecos", precio: 2100,},
    { id: 4, nombre: "Tapiz telar combinado", precio: 2300,},
];
productos.push({id: 5, nombre:"Tapiz plumas varias", precio: 2100});
productos.push({id: 6, nombre:"Platos cuadrados", precio: 1100});

productos.shift()

console.log(productos);