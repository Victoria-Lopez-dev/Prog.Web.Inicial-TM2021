//Tipo de datos 
/*
    Strings ->caracteres.Entre comillas simples o dobles 
    Numbers ->numeros
    booleans -> false, true 


"Juan", "HOla soy un corto corto texto.", "En la clase hay mas de 30 alumnxs ";
'Juan';

23478; 1235; 22;

false , true;

*/

let nombre = "Juan";

let dni = 38888774;

const apellido ="Perez";

let casa=false ;



let UnNumero=  "2";

let otroNumero = 2;



nombre = "Valeria";

casa ="rustica";

otroNumero= 888.88;


/*
console.log(dni);
console.log("HOla soy una consola")
*/

//definimos maquinaDePan
/*
function maquinaDePan(ingredientes) {
    // cocinar esos igredientes 
    return //pan
}

maquinaDePan(mezclaDePan)// me devuelve el pan listo
maquinaDePan(mezclaDeTorta)//devuelve la torta lista 

*/

/* opcion 1*///definiendo las funciones
function suma1(num1,num2) {
     
    return num1 + num2
    //resultado
};

let suma2 = (num1,num2) =>{
    return num1 + num2
};


/* opcion 2

function suma2(num1,num2) {

   let resultado = num1 + num2 //sume los dos numeros
     
    return resultado
    //resultado
};
*/


//invocandolas- ejecutandolas
//console.log(suma1("2",3));
suma2(2,3);
suma2(10,20);
suma2(otroNumero,3);


//  FUNCIONES NATIVAS

//prompt siempre devuelve Strings.

//paseInt/parseFloat lo transforma a Number.

//let alerta= alert("ALERTAA!!!!");
let dato = prompt("Ingrese un numero");

let OtroDato = parseFloat(prompt("Ingrese otro numero"));

//"2" -> 2 number = dato

//"Valeria" -> NaN =OtroDato

console.log(suma2(dato,OtroDato));
console.log(typeof(dato));
console.log(typeof(OtroDato))

//para transformar algo en string

console.log(OtroDato.toString())


function muestra() {
    return 5+2
}

let muestra = () =>{

}
console.log(muestra());


