const databaseConnection=require('../../config/database');


const renderHome = (req,res)=>{

    /*hablandole a la DB , pidiendo la informacion que guardo*/

    databaseConnection.query('SELECT * FROM categorias',(error,info)=>{
        if(error){
            console.log(error)
        }else{

           /*mande esa informacion al archivo index para mostrarlo en el sitio*/
            res.render('pages/index',{
                data:info
            }) 
        }
    });

};

const getAllProducts =(req,res)=>{


    databaseConnection.query('SELECT * FROM productos',(error,data)=>{
        if(error){
            console.log(error)
        }else{

             res.render('pages/productos',{
                  data
                 })
        }

    })
  
};


module.exports= {
    renderHome,
    getAllProducts
};