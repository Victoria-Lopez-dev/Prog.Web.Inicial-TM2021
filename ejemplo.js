/*
base de datos con productos()


desde mi sitio (de venta de ropa)

1 persona ----> 1 remeras 1 zapatillas 


SELECT nombre,stock FROM productos WHERE nombre="remeras" AND nombre ="zapatillas"


remeras 40, zapatillas, 60

UPDATE productos SET stock=39 WHERE nombre="remeras";
UPDATE productos SET stock=59 WHERE nombre="zapatillas";


2 persona ----> 1 zapatos  1 zapatillas 


SELECT nombre,stock FROM productos WHERE nombre="zapatos" AND nombre ="zapatillas"


zapatos 4, zapatillas, 59

UPDATE productos SET stock=3 WHERE nombre="zapatos";
UPDATE productos SET stock=58 WHERE nombre="zapatillas";

------//-----

SELECT nombre FROM productos WHERE stock<20;

SELECT nombre FROM productos WHERE promo = true AND stock<20;


 --------

 SELECT * FROM productos 
 if()else()
*/