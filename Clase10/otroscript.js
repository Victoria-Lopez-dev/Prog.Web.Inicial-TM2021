let listaCompra =[3500,4000,3800];

let producto1={
    categoria:"ropa",
    nombre:"remera",
    marca:'nike',
    precio:3500,
    talles:["S","M","L"]
};

let producto2={
    categoria:"ropa",
    nombre:"camiseta",
    marca:'montagne',
    precio:4000
};

let producto3={
    categoria:"zapatilla",
    nombre:"zapatilla deportiva",
    marca:'adidas',
    precio:3800
};

let nuevaListaCompra=[producto1,producto2,producto3];

console.log(nuevaListaCompra[0].precio); // 3500
console.log(nuevaListaCompra[1].precio); // 4000
console.log(nuevaListaCompra[2].precio) ;//3800

nuevaListaCompra[0].talles; //["S","M","L"]

producto1.color=["rojo","verde","azul"]; //agregando una propiedad
producto1.precio=4500;// modificando una el valor de una propiedad
producto1.nombre // obteniendo el valor de la propiedad
producto2.talles=["S","M","L"];


// USAR FUNCIONES PROPIAS DE JS (NATIVAS)

nuevaListaCompra.forEach((elemento)=>{
    console.log(elemento.nombre)
    elemento.categoria = "otra categoria"
});

//let listaCompra =[3500,4000,3800,5000];

listaCompra.forEach((costo)=>{
    console.log(costo)
      //3800  
    if(costo> 3900){
        console.log("Sos muy grande")
    }else{
        console.log("no sos tan grande")
    }
});

console.log(nuevaListaCompra.find((el)=> el.nombre === "camiseta"))
//{   categoria:"ropa",
//nombre:"camiseta",
//marca:'montagne',
//precio:4000
//}

let filtrado= listaCompra.filter((pepe ) => {pepe <3900});

let unTercerArray = nuevaListaCompra.map((comp)=>{
    comp.marca =" nueva marca"
});
//nuevaListaCompra
//unTercerArray 
//[3500,3800]

//CREARLAS NOSOTROS
//let listaCompra =[3500,4000,3800,5000]; 

for (costo of listaCompra) {
    console.log(costo)
    //3800  
  if(costo> 3900){
      console.log("Sos muy grande")
  }else{
      console.log("no sos tan grande")
  }
}

//otra forma 
//     arranque en 0    la condicion    que luego de ejecutar sume 1 al contador
for (let i = 0; i < 2; i++) {
    console.log(costo)
    //3800  
  if(costo> 3900){
      console.log("Sos muy grande")
  }else{
      console.log("no sos tan grande")
  }
    
}

let array=[{producto:"hdsjh",cant:123},{producto:"hdsjh",cant:123}];

function actualizarStock(array) {
    for (item of array) {
        item.cant= item.cant -1;
    }
}
let stock=[{producto:"hdsjh",cant:123},{producto:"hdsjh",cant:123}];

function parteDelDia() {
    for(item of stock){
        if(item.cant < 5){
            console.log("Ojo que queda poco producto")
        }
    }
        
};

function descuento() {
   let paraDescontar= array.filter((el)=>el.categoria == "ropa");
   for (dato of paraDescontar) {
       dato.precio = dato.precio * 0.2
   }
}


//While 
//let listaCompra =[3500,4000,3800,5000]; 

   let contador =0; // contar las vueltas
while(listaCompra.length<4 && contador== 2){

    console.log(listaCompra[contador]);//que me imprima por consola el item
    contador++// que le sume 1 al contador
}

//1er vuelta
//listaCompra[0]   3500
//contador= 0+1 = 1

//2da vuelta
//vuelta 1< 4
//listaCompra[1]  4000
//contador =1 +1   2

//4ta vuelta
//contador = 2 sale del bucle


