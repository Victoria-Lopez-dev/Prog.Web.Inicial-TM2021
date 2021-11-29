const express= require('express');

/* hacer el ruteo, decir el recorrido que tiene que hacer al recibir una peticion*/

const routes=express.Router();

const {
    renderHome,
    getAllProducts
} =require('../controllers/tiendaControllers')




routes.get("/",renderHome);


routes.get("/productos",getAllProducts);

module.exports= routes;