let numero= "3";

//operadores de comparacion
//triple igual
/*
if (numero ===3) {//fijo el valor (true) y se fijo el tipo de dato string y number (false)
    console.log("el numero vale 3")
}else{
    console.log("no es el numero que necesito")
}

//doble igual

if (numero ==3) {//se fija solo en el valor, no en el tipo de dato.
    console.log("el numero vale 3")
}

//distinto simple 

if(numero != 5){ //si el contendio /valor es distinto a 5
    console.log("Hice algo")
}

//distinto doble 
if(numero !== "5"){ //si el valor y el tipo de valor es distinto a string 5
    console.log("Hice otra cosa")
}


//Mayor - menor -menor o mayor igual.

if(5>numero){
    console.log("Hice algo")
}

if(4<numero){
    console.log("Hice otra cosa")
}

if(4<= numero){
    console.log("Hice otra cosa")
};

if(5>= numero){
    console.log("Hice otra cosa")
}

*/
/*
            //  3   3
function suma(num1,num2) {
    let datos =10;

    if(num1>5){ //true   
       datos= num1+1;
    }else{//false
            //3 =8
        datos=num1 +5;
    }
                //8   3
    let resta =datos - num2;
    return resta ;
};

console.log(suma(6,2))

*/

/*
let semaforoRojo= true;

if (semaforoRojo == true ) {
    console.log("detengase")
} else {
    console.log("siga")
}

*/



function colorSemaforo(color) {
    if(color === "rojo"){
        return  console.log("detengase")
    }else{
        if(color ==="amarillo"){
              console.log("precaucion casi es rojo")
        }else{
            if(color == "verde"){
                  console.log("siga" )
            }else{
                  console.log("no existe ese color en el semaforo")
            }
            
        }

    }
    let colorAuto ="Verde"
     
    return colorAuto;
}


function colorSemaforoMejorado(color) {
    if(color === "rojo"){
        console.log("detengase")
    }
    if(color == "amarillo"){
        console.log("precaucion casi es rojo")
    }
    if(color == "verde"){
        console.log("siga")
    }

    //return "No me interesa el color,hago cosas paralelas"
}

colorSemaforoMejorado("verde")



let edadUsuario = prompt("Ingrese su edad");

function permiso(edad) {
    if (edad <18) {
        console.log("No puede entrar,es menor")
    } else {
        if(edad>=18 && edad<50){
            console.log("Pasa a la pista de los menores de 50")
        }else{
            console.log("tenes acceso a la pista de mayores de 50")
        }

    }
}


 
//usando el OR ||
function comprarRopa(cupon,billetera,local) {

    if( cupon == true || billetera >0 || billeteraJuan >0 ){ //que se cumpla alguna de las opciones 
        console.log("puedo comprar cosas")
    }
};

            //false         true  false
comprarRopa("soy un cupon",4000, "abierto") //puede entrar por que 1 como minimo es verdadero




//usando el AND &&

function comprarRopa2(cupon,billetera,local) {
        //true       y     true        y   true      recien ahi podes entrar a ejecutar lo que tengo en el if
        if( cupon == true && billetera > 0 && local =="abierto"){ //que se cumpla ambas de las opciones 
        console.log("puedo comprar cosas")
        }else{
            console.log("no puedo comprar")
        }

};

        //         false    true    true
comprarRopa2("soy un cupon",4000, "abierto") // no puede entrar porque 1 de ellos es falso



let cupon = true;
let billetera= 40000;
let local ="abierto";

let lista =[cupon,billetera,loca,"hola",8798465,false]