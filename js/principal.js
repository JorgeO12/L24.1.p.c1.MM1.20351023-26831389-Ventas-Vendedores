/**
 * Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)
Cantidad de ventas que fueron por 100$ o menos: 1
Cantidad de ventas mayores a 100$: 3
Monto total de las ventas: 520$ 

 */

import  Cl_Ventas  from "./Cl_ventas.js";
import  Cl_vendedores  from "./Cl_vendedores.js";

let vv = new Cl_vendedores
let v1 = new Cl_vendedores("Mary", 150);
let v2 = new Cl_vendedores("José", 135);
let v3 = new Cl_vendedores("Carlos", 160);
let v4 = new Cl_vendedores("Pedro", 75);
let v = new Cl_Ventas();
v.procesar(v1);
v.procesar(v2);
v.procesar(v3);
v.procesar(v4); 


let salida = document.getElementById("salida");
salida.innerHTML = `
Ventas menores a 100$: ${v.vntMenores} 
<br>Ventas mayores a 100$: ${v.vntMayores} 
<br>Monto total de las ventas: ${v.ventatotal}$ 
`;  

