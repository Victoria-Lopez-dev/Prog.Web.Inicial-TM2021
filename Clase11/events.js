let boton = document.querySelector(".desplegar");

let menu= document.querySelector("ul");

let otroBoton = document.querySelector("button");



otroBoton.addEventListener("click",()=>{

    console.log("Click!!!!");

    otroBoton.classList.toggle("rosa");
   alert(document.querySelector("input").value) 
});


boton.addEventListener("mouseover",()=>{
    menu.classList.toggle("plegar");
    boton.classList.toggle("colorRojo");
});

