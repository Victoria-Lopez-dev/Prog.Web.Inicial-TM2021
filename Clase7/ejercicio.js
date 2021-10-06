//Ejercicio 1
/*
let nombre="Juan";
const apellido="Perez";

nombre =3;
apellido="Gomez";

console.log(nombre);
console.log(apellido);

*/
/*

let data="hola ";


function suma(num1,num2) {

    data= num1 +num2+ 500;
    return data
}
console.log(data)
console.log(suma(2,3))
console.log(data)

*/
//Ejercicio 2

//forma tradicional
//variable global -- puedo usarla en todo mi archivo
/*let unValor=500;

function sumaProductos(prod1,prod2,prod3,prod4,prod5) {
    //variable local -- solo vive en mi funcion.
    let otroValor=200;
    let resultado =prod1 + prod2 + prod3 + prod4 + prod5;
    console.log(resultado)
    return resultado
    
};

let otroResultado =() =>{

    return sumaProductos(100,200,50,30,20) + 10;
};

console.log(otroResultado());

//funcion flecha

let sumaProductos2 = (prod1,prod2,prod3,prod4,prod5)=>{
    return prod1 + prod2 + prod3 + prod4 + prod5
}
*/
//invocarla

//console.log(sumaProductos(100,200,50,30,30))
//console.log(sumaProductos2(100,200,50,30,30))

//Ejercicio 3

//definimos
//funcion tradicional

function valorIVA(prod1,prod2,prod3,prod4,prod5) {
     
    return sumaProductos2(prod1,prod2,prod3,prod4,prod5)*0.21;
        // sumaProductos2(10,100,300,200,200)*0.21
};

//funcion flecha

let valorIVA2 = (prod1,prod2,prod3,prod4,prod5)=>{
    let resultadoIVA= sumaProductos2(prod1,prod2,prod3,prod4,prod5)*0.21;
    return resultadoIVA;
};

//invocamos
//console.log(valorIVA(10,100,300,200,200))
//console.log(valorIVA2(10,100,300,200,200))

//Ejercicio 4
/*
//una forma
function saludo() {
    let nombre= prompt("Ingrese su nombre");
    let apellido= prompt("Ingrese su apellido");
    alert("Buenos dias "+nombre + " " +apellido +"!")
};

console.log(saludo());

/////////////


//otra forma
let nombre1= prompt("Ingrese su nombre");
let apellido1= prompt("Ingrese su apellido");

function saludo2(nombre,apellido) {
    alert("Buenos dias "+nombre + " " +apellido +"!")
};


saludo2(nombre1,apellido1);

/////////////

//otra forma
let nombre1= prompt("Ingrese su nombre");
let apellido1= prompt("Ingrese su apellido");


function saludo3(nombre,apellido) {

    return "Buenos dias "+nombre + " " +apellido +"!"
};

console.log(saludo3(nombre1,apellido1));
*/

//Ejercicio 5

function edad() {
    let nacimiento= prompt("ingrese el año en que nacio");//devuelve string .
    let parsear =parseInt(nacimiento); //lo paso a number
    let edadActual = 2021 - parsear;//Nan o un valor 

    return edadActual; //numero correspondiente
}
