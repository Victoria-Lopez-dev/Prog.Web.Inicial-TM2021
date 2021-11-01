const express= require('express');
const app= express();
const path = require('path');

app.use(express.json());

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/contacto',(req,res)=>{
    res.render('./pages/contacto');
});

app.listen(3000,()=>{
    console.log("Corriendo en el puerto 3000")
});