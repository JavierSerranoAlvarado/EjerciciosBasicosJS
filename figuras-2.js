
//Codigo del cuadrado
console.group("cuadrado");

// function perimetroCuadrado(lado){
//     return lado * 4;
// } 

const perimetroCuadrado = (lado) => lado * 4;

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Codigo del triangulo 

console.group("triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;

}
console.groupEnd();

//Codigo del circulo
console.group("circulo");

/* const PI = 3.1416; 2 opcion */
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function areaCirculo(radio) {
    return PI * (radio * radio);

}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

console.groupEnd();

//Aqui se interactua con el HTML

//Funciones de Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("cuadradoLadoA");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("cuadradoLadoA");
    const valor = input.value;

    const area = areaCuadrado(valor);
    alert(area);
}

//Funciones del Triangulo
function calcularPerimetroTriangulo() {
    const ladoA = parseInt((document.getElementById("trianguloA")).value);
    const ladoB = parseInt((document.getElementById("trianguloB")).value);
    const base = parseInt((document.getElementById("trianguloBase")).value);

    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const altura = parseInt((document.getElementById("trianguloAltura")).value);
    const base = parseInt((document.getElementById("trianguloBase")).value);

    const area = areaTriangulo(base, altura)
    alert(area);
}

function calcularAlturaTriangulo() {
    const ladoA = parseInt((document.getElementById("trianguloA").value));
    const ladoB = parseInt((document.getElementById("trianguloB").value));
    const base = parseInt((document.getElementById("trianguloBase").value));

    if ((ladoA == ladoB) && (base != ladoA)) {
        altura = Math.sqrt((ladoA ** 2) - ((base ** 2) / 4));
        alert(altura);
    }
    else {
        alert("No es un triangulo isoceles");
    }
}

//funciones del circulo
function calcularPerimetroCirculo() {
    const radio = parseInt((document.getElementById("circuloRadio")).value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = parseInt((document.getElementById("circuloRadio")).value);
    const area = areaCirculo(radio);
    alert(area);
}