const express=require('express');
const app=express();
const data= require('./data');
const utils = require('./utils.json');
const validador = require('validator');

app.use(express.json());

// peticion GET pedidos
//request  req lo que trae en el pedido
//response res  lo que le devuelvo o respondo al pedido

app.get('/',(req,res)=>{

    let info=data.productos[1];
    res.send(info)
});

app.get('/welcome',(req,res)=>{
 
    res.send("<h1>Bienvenido</h1>");
   
});

app.get('/welcome/:dato',(req,res)=>{

    let dato=req.params.dato;
   console.log(validador.isEmail(dato));
    res.send("Bienvenido!")
});

app.get('/home',(req,res)=>{
    res.send("Contactos")
});


//peticion POST
//recibe informacion y hace cosas con eso

app.post('/home',(req,res)=>{
    let inf= req.body;
    console.log(typeof(inf));
    utils.push(inf);
    console.log(utils);
    res.send(utils);
});



app.listen(3000,()=>{
    console.log("Server esta corriendo por el puerto 3000");
});

/*
si un JSON nos figura de la siguiente forma:
`[
    { 
    "nombre":"Victoria",
    "apellido":"Lopez"

    },
    {
        "nombre":"Juan",
        "apellido":"Perez"
    }

]`
*/
//en caso que no les tome o no reconosca lo enviado, hay que sacarle las comillas al JSON usando:
// JSON.parse(utils) funcion que le saca esas comillitas y se puede usar como un array de objetos

//console.log(utils[0])
