
//Ejercicio 1


 let usuario = prompt("Ingresa tu nombre de usuario");

 while (usuario != "ESC") {
   switch (usuario) {
     case "Maria.1995":
       alert("Bienvenida Maria");
       break;
     case "Pedro.1987":
       alert("Bienvenido Pedro");
       break;
       case "Pablo.2003":
       alert("Bienvenido Pedro");
    default:
        alert ("Usuario no identificado")
       break;
   }
   usuario = prompt("Ingresa tu nombre de usuario");
 }




//Ejercicio 2

for(let mesa = 1; mesa <= 10; mesa ++){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido")
    let mensaje = `${nombre}  ${apellido} su mesa es la N° ${mesa}`
    alert(mensaje)
}