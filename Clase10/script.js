
// indice           0   1      2 
let listaCompra =[3500,4000,3800]
/*
listaCompra[1]  // 4000 

/*                 0               1               2           3   
//let productos=[{/*productos},{/*productos},{/*productos*//*},{/*productos/},]*/
//function sumaTotal() {
    //la suma del total*/
//}
/*/

function name(params) {
    //lo que queremos que haga

    return //nos devuelva algo 
}

sumaTotal()
//agregando al final
                        //  0    1    2   3
listaCompra.push(2000)  //[3500,4000,3800,2000]

//Agregando adelante
                          //  0    1    2   3
listaCompra.unshift(2000) //[2000,3500,4000,3800]

                          //  0    1    2   3   4
listaCompra.unshift(1500)//[1500,2000,3500,4000,3800]


//Sacar valores
//el ultimo

listaCompra.pop() //[3500,4000,3800]  --> [3500,4000]

//el primero
listaCompra.shif()//[3500,4000,3800]  --> [4000,3800]

// 0     1    2    3    4
//[1500,2000,3500,4000,3800]

listaCompra.splice(2,1)// saca los 3500

listaCompra.splice(3,2) // saca 4000 y el 3800

listaCompra.splice(2,1,"hola")//saca 1 y lo modifica [1500,2000,"hola",4000,3800]

//  *///                0       1           2      3        4   ...    30       31
let listaAlumnos=['Carlos','Matias',"Julia",'Yael','Sergio','...','Lucila','Carlos']

//buscando a Lucila

let buscarAlumna=listaAlumnos.indexOf("Lucila");// --> el indice es 30

// indexOf() siempre devuelve un numero que es el indice, la posicion 
let alumnaLucila=listaAlumnos[buscarAlumna];

//otra forma


let ObtenerAlumnaLucila=listaAlumnos[listaAlumnos.indexOf("Lucila")]



//funcion

let alumnos=['Carlos','Matias',"Julia",'Yael','Sergio','Lucila','Carlos']

function decirDatoEIndice(parametro) {
    console.log(alumnos.indexOf(parametro))
    console.log(alumnos[alumnos.indexOf(parametro)])
   console.log(typeof(alumnos[5]) )    
}

//decirDatoEIndice('Carlos')
//por consola me va a mostrar:  0 , 'Carlos' , string

//              array       array   number  bool
let otraLista=[listaCompra,alumnos,7897897,true];


//OBJETOS


//caracteristicas y valores


// persona 
//edad 27
//nombre "Maria"
//apellido "Perez"
/*
let persona={
    nombre:"Maria",
    edad:27,
    unApeliido:"Perez"
}

persona.unApeliido // --> "Perez"

persona[unApeliido] //-->"Perez"

*/
//let listaCompra =[3500,4000,3800]

let nuevaListaCompra=[producto1,producto2,producto3]

nuevaListaCompra[0].precio // 3500
nuevaListaCompra[1].precio // 4000
nuevaListaCompra[2].precio //3800

nuevaListaCompra[0].talles //["S","M","L"]

let producto1={
    categoria:"ropa",
    nombre:"remera",
    marca:'nike',
    precio:3500,
    talles:["S","M","L"]
}

let producto2={
    categoria:"ropa",
    nombre:"camiseta",
    marca:'montagne',
    precio:4000
}

let producto3={
    categoria:"zapatilla",
    nombre:"zapatilla deportiva",
    marca:'adidas',
    precio:3800
}


producto2.talles=["S","M","L"];


// USAR FUNCIONES PROPIAS DE JS (NATIVAS)



//CREARLAS NOSOTROS