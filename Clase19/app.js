const express= require('express');
const app= express();
const mysql= require('mysql2');

const dataBase={
    host:'localhost',
    user:'root',
    database:'curso',

}

const pedido='SELECT * FROM alumnos WHERE id=1 ';

const connection= mysql.createConnection(dataBase);


app.use(express.json());

app.get('/',(req,res)=>{
    connection.query(pedido,(error,data)=>{

        if(error){
            console.log(error)
        }else{
            console.log(data)
        }
    })
    res.send("Bienvenido")
});

app.get('/home',(req,res)=>{
    connection.query('SELECT * FROM alumnos',(error,data)=>{

        if(error){
            console.log(error)
        }else{
           res.send(data)
        }
    })
    
});

app.post('/ingresar',(req,res)=>{
    const {nombre,apellido,edad}= req.body;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    connection.query('INSERT INTO alumnos (nombre,apellido,edad)VALUES (?,?,?)',[nombre,apellido,edad],(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.send("Recibido!")
        }

    })
    //console.log(nombre)
   
});


app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000")
});


