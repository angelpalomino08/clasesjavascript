// ejercicio 1
//if ("0") {
//    alert ( "hello")
//}
//ejercicio 2

/*let respuesta = prompt("cual es el nombre oficial de JavaScript");

if (respuesta == ECMAScript) {
    alert ("correcto")
} else {
    alert ( "no lo sabes?  ¡ECMAScript!")
}*/

//ejercicio 3 

/*let numero = prompt("inserta un número");

if ( numero == "0" ) {
    alert("0")
} else if (numero < 0) {
    alert("-1")
} else  if(numero > 0 ) {
    alert("1")
} else {
    alert("no se registro número")
} */

/* let result = (a + b < 4) ? "debajo" :
                "encima" ;

 */

let login = prompt("que cargo ocupas", " ");

let message = (login == "empleado") ? "hola" :
              (login == "director") ? "felicidades" :
              (login == " ") ? "sin sesión" :
              " " ;
  
alert (message);