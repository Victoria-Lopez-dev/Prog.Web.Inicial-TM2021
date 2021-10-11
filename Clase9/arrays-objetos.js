let alumn1="Pablo";
let alumn2="Julia";
let alumn3="Matias";
let alumn4="Ana";


let array =[alumn1,alumn2,alumn3,alumn4];

// indice   0 1 2 3 4    5             6     7            
let numero=[1,2,3,4,56,alumn4,"hjshdfkjshd",array,3];


console.log(numero[5]);

console.log(numero.length); //8

numero.push(true)

console.log(numero)

numero.pop();

console.log(numero)



let alumnos =[
    "Lopez",    //indice 0
    "Gomez",    //indice 1
    "Perez",    //indice 2
    "Lopez"    //indice 3
];

//par acceder al valor : nombreDelArray[indice]
alumnos[1]



//OBJETOS


// definimos "caracteristicas de ese objeto" y podemos guardarlo el variables.
let taza={
//escribimos el key o clave : value o valor
    material:"ceramica",
    color:"azul",
    altura: 20
};

let otraTaza={
    
    color:"rojo",
    altura: 15,
    material: "plastico"
};

let alumno={
    apellido:"Lopez",
    nombre:"Maria",
    edad:18,
    presente:true
}


//para acceder al valor de esa caracteristica:

//Opcion 1 (la mas utilizada)
taza.material;

//Opcion 2 (no tan utilizada)
taza[material];

//LOS COMBINAMOS!!!!



//ARRAY de OBJETOS
let alumnos=[
    {
        apellido:"Lopez",
        nombre:"Maria",
        presente:" "
    },
    {
        apellido:"Gomez",
        nombre:"Juan",
        presente:""
    },
    {
        apellido:"Perez",
        nombre:"Ana",
        presente:""
    },
    {
        apellido:"Lopez",
        nombre:"Jose",
        presente:""
    }

];

//Si quiero acceder al valor de nombre de; 3er objeto de mi lista:

alumnos[2].nombre   //"Ana"
