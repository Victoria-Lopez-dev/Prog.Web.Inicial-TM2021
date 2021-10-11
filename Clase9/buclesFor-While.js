let alumnos=[
    {
        apellido:"Lopez",
        nombre:"Maria",        //0
        presente:"ausente"
    },
    {
        apellido:"Gomez",
        suNombre:"Juan",        //1
        presente:""
    },
    {
        apellido:"Perez",
        presente:"",            //2
        nombre:"Ana",
    },
    {
        apellido:"Lopez",
        nombre:"Jose",          //3
        presente:true
    }

];


//dos formas de hacer el bucle for

//Primer forma => la tradicional

/* ejecuta           condicion             ejecuta 
    al inicio                             al final                               */     
for (let index = 0; index < array.length; index++) {

    const element = array[index];

}

//USANDO NUESTRO ARRAY DE OBJETOS

//      contador inicia    menor al total           sumale 1 
//       en 0              de com.de la lista       al contador
for (   let i = 0;       i < alumnos.length        ;   i++) {
    
    alumnos[i].presente=true;
};
//COMO EJECUTA EL NAVEGADOR?
// alumnos.lenght = 4
/*
1ra vuelta = i vale 0 entonces
alumnos[0].presente = true;

2da vuelta = i vale 1 entonces
alumnos[1].presente=true;
     .
    .
5ta vuelta = i vale 4
se pregunta si se cumple la condicion  4< alumnos.length y como no se cumple "corta" la secuencia y deja de ejecutar el "for"
*/

//Segunda forma => la mas simple
/*
    ref a c/item          palabra      nombre del
    de mi array         recervada          array    */ 
for( alumno                   of        alumnos){

    alumno.presente=true;
};

//APLIQUEMOS AL EJEMPLO DEL ARRAY alumnos para cambiar el valor de la key 'presente':

//OPCION 1: con for of    

    //usando if/else
    function cambiarAPresente() {
        for( alumno of alumnos){
            if(alumno.presente=== " "){
                alumno.presente=true;
            }else{
                if(alumno.presente=== true){
                    alumno.presente = false;
                }else{
                    alumno.presente = " ";
                }
            }
        
        };
        return alumnos
    };

 //usando solo if  
    function cambiarAPresente() {
        for( alumno of alumnos){
            if(alumno.presente=== " " ){
                alumno.presente=true;
            }
            if(alumno.presente=== true){
                alumno.presente = false;
            }
        if(alumno.presente=== false || alumno.presente == "ausente"){
                alumno.presente = " ";
            }
        
        
        };
        return alumnos
    };

//OPCION 2 con for tradicional

    function cambiarAPresente() {
        for( let i=0;alumnos.length>i;i++){
            if(alumnos[i].presente=== " "){
                alumnos[i].presente=true;
            }else{
                if(alumnos[i].presente=== true){
                    alumnos[i].presente = false;
                }else{
                    alumnos[i].presente = " ";
                }
            }
        
        };
        return alumnos
    };



//Estructura While

/* Similar al for.
Lo que le vamos a decir es que ejecute lo que se encuentra entre las llaves mientras se cumpla esa condicion 
*/
while (clima != "luvioso") {
    //vamos a salir a pasear
}




//USANDO TODO ESTO EN UN EJEMPLO COTIDIANO

//Tengo una lista de pedidos que hiso un cliente en mi sitio

let pedido=[
    {
        categoria:"sushi",
        tipo:"con camaron",
        precio:250
    },
    {
        categoria:"wok",
        tipo:"cde pollo",
        precio:1000
    }
];


//como necesito saber el total de dinero que lleva puedo:

//Usar el for para sacar la suma total de lo que lleva

function sumaTotal(pedido) {
    let total=0;
    for(item of pedido){
        console.log(item.precio)
        total=total + item.precio
    }
    return total
}

//o puedo aplicar el While para sacar la suma total de lo que lleva


//WHILE  mientras cumpla esa condicion hace lo que esta entre las llaves

function otraFormaDeSumar(){
    let total=0;
    let cont=0;
   while (pedido.length < 3) {  //mientras el largo del array pedido sea menor a 3
        total=total + pedido[cont].precio;
        cont=cont+1  // o cont++
    } 
}
