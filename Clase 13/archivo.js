const data = require('./utils');//saludo , sumar
const validador =require('validator') // busca el paquete validator dentro de mis node_modules


console.log("hola");

data.saludo("Victoria");

data.sumar(5,4)



console.log(validador.isCreditCard('45'))
if(validador.isCreditCard('45')==false){
    console.log("Tarjeta ingresada incorrecta")
}else{
    console.log("Tarjeta valida")
}

console.log("Hay cambios")
console.log(validador.isEmail("bcbcbc@gmail.com"))

//Eventos: esperabamos a que pasara algo para poder ejecutar otras tareas.

//addEventListener ('click',()=>{ boton.classList.add("Rosa")})



