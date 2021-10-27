const saludo =(nombre)=>{
    console.log("Hola "+nombre)
};

const sumar =(num1,num2)=>{
    console.log( num1 +num2)
}

if (usuario =="victoria") {
    if(password =="L123"){

        console.log("puede ingresar")
    }
} else {
    console.log("Usuario incorrecto")
}

usuario =="victoria" ? password =="L123"? console.log("puede ingresar") : console.log("password incorrecto") :console.log("Usuario incorrecto");

module.exports={    // podamos requerirlo o usarlo en otros archivos
    saludo,
    sumar
} 