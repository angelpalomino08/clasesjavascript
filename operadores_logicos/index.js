//ejemplo 1
 
/*if (1 || 0) { //funciona como un string (true || false)
    alert ("valor verdadero")
} else {
    alert ("falso")
} */


//ejemplo 2

/*let hour = 9;

if (hour < 10 || hour > 18) { //podemos incluir mas valores
    alert ("La oficina esta cerrada.")
} */

//ejemplo 3 OR: te devolvera el primer valor verdadero

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCober";

// alert (firstName || lastName || nickName || "Anonymous") //SuperCober


//AND && te devolvera el primer valor falso
// alert(true && true); // true
// alert(false && true); // false
// alert(true && false); // false
// alert(false && false); // false


//ejercicio 1
//alert ( alert(1) || 2 ||alert(3) ); a alert lo lee como mensaje

//ejercicio 2

//alert ( alert(1) && alert(2) );

//ejercicio 3

//alert (null || 2 && 3 || 4 );

//ejercicio 4
/*
let edad = prompt("cual es tu edad")

if (13 < edad && edad < 91 ) {
    alert("esta dentro de los parametros");
} else { alert("intente denuevo")
 }*/

 let edad = prompt("cual es tu edad")

if (!(13 < edad) && edad < 91 ) {
    alert("esta dentro de los parametros");
} else { alert("intente denuevo")
}