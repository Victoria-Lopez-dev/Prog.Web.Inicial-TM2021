let alumnos=[
    {
        apellido:"Lopez",
        nombre:"Maria",
        presente:" "
    },
    {
        apellido:"Gomez",
        suNombre:"Juan",
        presente:""
    },
    {
        apellido:"Perez",
        presente:"",
        nombre:"Ana",
    },
    {
        apellido:"Lopez",
        nombre:"Jose",
        presente:""
    }

];

function nombrar() {
    alumnos.forEach((elemento)=>{
       console.log("Este alumno/e/a" + elemento.apellido + " " + elemento.nombre) 
    });
};

function ponerPresente() {
    alumnos.forEach((chicha)=>{
        chicha.presente = true;
    })
    console.log(alumnos)
};


let arrayNumeros=[1,2,3,4,5,6,8,9];
let nuevoArray=[];

function cambioDeDato() {
//      al arrayNumeros para cada uno de sus componentes    
   let muestra= arrayNumeros.forEach((num)=>{

    arrayNumeros[arrayNumeros.indexOf(num)]= num+10

    });
    console.log(arrayNumeros)
  
};



function nuevaLista() {
    //      al arrayNumeros para cada uno de sus componentes    
        arrayNumeros.forEach((num)=>{
    //     que a cada componente del array (num) le sume 10 y lo sume a un nuevo array.

          nuevoArray.push(num + 10);
    
        });
        console.log(arrayNumeros);
        console.log(nuevoArray);
    };

    function sumar() {
       let resultado= arrayNumeros.forEach((el)=>{
           let par=el * 2;
           console.log(el+10+ par) 
        })
        console.log(arrayNumeros)
       
    }

    function suma() {
       let resultado =arrayNumeros.map((el)=>{
           let num=el+10;
           return num
        });
        return resultado
    };
    
   function buscarNum() {
      let resultado= arrayNumeros.filter((el)=>{ el> 5 });
       console.log(resultado)
   } 




