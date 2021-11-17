const express= require('express');
const databaseConnection=require('../../config/database');
/* hacer el ruteo, decir el recorrido que tiene que hacer al recibir una peticion*/

const routes=express.Router();

routes.get("/",(req,res)=>{

    /*hablandole a la DB , pidiendo la informacion que guardo*/
    databaseConnection.query('SELECT * FROM categorias',(error,data)=>{
        if(error){
            console.log(error)
        }else{

           /*mande esa informacion al archivo index para mostrarlo en el sitio*/
            res.render('pages/index',{
                data
            }) 
        }
    });

});

module.exports= routes;