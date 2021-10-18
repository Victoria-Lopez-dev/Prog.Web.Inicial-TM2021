let titulo=document.querySelector("#titulo");
//obtengo por id a mi unico elemento
document.querySelector("#titulo");

//accedemos a las propiedades de nuestro elemento - nodo
//obtengo el primer elemento h1 que tenga el html
document.querySelector("h1");

//obtengo un array con todo los <p> de mi html.
document.querySelectorAll("p")


document.querySelector("h1").classList.add("otroColor");

document.querySelector("h1").classList.remove("colorRosa");
//agrega si no esta, saca si no esta
document.querySelector("p").classList.toggle("otroColor");


//accedo a un elemento y le modifico o agrego atributos.

//document.querySelector("img").setAttribute("style","display:none")

//otras formas de acceder a elementos del html
document.getElementById("titulo");
document.querySelector("#titulo");

document.getElementsByClassName("texto2");
document.querySelector(".texto2");

document.getElementsByTagName("h1");
document.querySelector("h1");

/*setInterval(()=>{
    console.log("hola")
},3000)*/

//alert("Inicia sesion")
setTimeout(()=>{
    document.querySelector("#texto3").classList.remove("texto")
document.querySelector("#texto3").classList.add("colorRosa")
},2000);


function name(params) {
    Math.sqrt(4)
};


let textoPrueba= document.querySelector("p");
let unDato= "soy un dato";

function cambiaTexto(params) {
    textoPrueba.innerText= params  //cambia el contenido de una etiqueta p
};

function datosNuevos(dato1,callback) {
    let datos= dato1 + ' '+ "es el nuevo dato" //let datos=unDato + ' '+ "es el nuevo dato"
    callback(datos) //cambiaTexto(datos)
};

datosNuevos(unDato,cambiaTexto) 




/*
    haga click y que luego de eso yo por medio de JS pueda hacer el cambio que necesito.
    
*/
/*
reemplaza dato1 por unDato
reemplazar cambiaTexto por callback

*/
/*

funcion que pida informacion a una fuente externa y que como callback ejecute una funcion que le cambie el contenido a una etiqueta.
*/


let usuarioIngresado= prompt("ingrese su usuario");
//la info del usuario va a estar en una DB (base de datos);

//primero valla y busque a los usuarios
//cuando traiga los usuarios del a DB  filtre (filter()) si esta el usuario ingresado y luego que lo deje entrar .
function acceder(usuarioIngresado) {
    //busque la informacion del usuario va a estar en una DB (base de datos);
  let encuentraUsuario= usuarios.filter((usuario)=>{ usuario == usuarioIngresado})//para ,, no tengo la lista de usuarios. ERRO!!
  if(encuentraUsuario){
      //puede ingresar
    }

    

};

//para que funcione

function acceder(usuarioIngresado,callback) {
  //busque la informacion del usuario va a estar en una DB (base de datos);
  
    //callback(params)
}


function filtarUsuario(usuarios) {
    usuarios.filter((usuario)=>{ usuario == usuarioIngresado })
    if(encuentraUsuario){
        //puede ingresar
      }
}















