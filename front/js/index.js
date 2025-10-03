/*

//codigo JS
document.writeln("Hola mundo en JS");
document.getElementById("mensaje1").innerText = "mensaje 1";
document.getElementById("mensaje2").innerText = "mensaje 2";
document.getElementById("mensaje3").innerText = "mensaje 3";

const Mifecha = new Date();
document.getElementById("fecha").innerText = "Hoy es " + Mifecha.toLocaleDateString();
//pa deci hola
Saludo();
Adios();
function Saludo() {
    alert("hola crack");
}
//pa deci adio
function Adios() {
    alert("hola adió");
}
var Numero1 = 54;
var Numero2 = 23;
var resultado = Numero1 + Numero2;
if (resultado > 150) {
    document.getElementById("resultado").innerText = "Resultado superior a 150.";
    console.log("Resultado es " . resultado);
} else {

    document.getElementById("resultado").innerText = "Resultado inferior a 150.";


}
document.getElementById("resultado").innertext = resultado;
*/
let nombre = "Fernando";
let apellido1 = "Collantes";
let apellido2 = "Gomez";

const PI = 3.14;

console.log(nombre);
console.log(apellido1);
console.log(apellido2);
console.log(PI);


//concatenar con +
let saludo = "Bienvenido " + nombre;
console.log(saludo);
//concatenar con ` ${var} `
let nombre2 = "Carlos";
console.log(`Hola ${nombre2}, encantado ${apellido1} sabes que es ${PI}?`);

let edad=24;
let temp = -6;
let decimal= 1.34;

let activo = true;
let noActivo = false;
milog(activo);


/*
let edad = 15;
Miedad();
function Miedad() {

    for (var i; i < 5; i++) {
        console.log(edad = i);
    }
    console.log(edad);

}
console.log(edad);


*/

let frutas = ["manzana", "pera", "uva"];
milog(frutas);

milog(frutas[2]);

let alumno = {
    nombre:"Carlos",
    apellido1:"Basulto",
    apellido2:"Pardo",
    edad: 45,
    estudios:"Ingeniero Informatico"
    
}
milog(alumno);


saludar();
saludar(nombre);
saludar(nombre,apellido1)



document.writeln("Hola mundo");

//modificar el dom:
document.getElementById("mensaje").innerText = "Bienvenido, " + nombre;