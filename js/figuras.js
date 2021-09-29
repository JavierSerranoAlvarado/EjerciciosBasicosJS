
//Codigo del cuadrado
console.group("cuadrado");

let ladoCuadradoA = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadradoA} cm`);

let perimetroCuadrado= ladoCuadradoA * 4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`);

let areaCuadrado= ladoCuadradoA * ladoCuadradoA;
console.log(`El area del cuadrado es  ${areaCuadrado} cm^2`);
console.groupEnd();

//Codigo del triangulo 

console.group("triangulo");
let ladoTrianguloA = 6;
let ladoTrianguloB = 7;
let baseTriangulo = 4;
let alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden : ${ladoTrianguloA} cm, ${ladoTrianguloB} cm y ${baseTriangulo} cm `);

console.log(`La altura del triangulo es ${alturaTriangulo} cm`);

let perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + baseTriangulo;
console.log(`El perimetro del triangulo es ${perimetroTriangulo} cm`);

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`La area del triangulo es ${areaTriangulo} cm^2`)
console.groupEnd();

//Codigo del circulo
console.group("circulo");

/* const PI = 3.1416; 2 opcion */
const PI = Math.PI;
let radioCirculo = 4;
let diametroCirculo = radioCirculo * 2;
let areaCirculo = PI * (radioCirculo * radioCirculo);
let perimetroCirculo= diametroCirculo * PI;

console.log(`El radio del circulo es ${radioCirculo} cm`);
console.log(`El diametro del circulo es ${diametroCirculo} cm`);
console.log(`El perimetro del circulo es ${perimetroCirculo} cm`);
console.log(`El area del circulo es ${areaCirculo} cm^2`);

console.groupEnd();

