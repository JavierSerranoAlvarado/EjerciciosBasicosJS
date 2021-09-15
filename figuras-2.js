
//Codigo del cuadrado

// function perimetroCuadrado(lado){
//     return lado * 4;
// } 

const perimetroCuadrado = (lado) => lado * 4;

function areaCuadrado(lado) {
    return lado * lado;
}


//Codigo del triangulo 

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;

}

//Codigo del circulo

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
    const ladoA = document.getElementById("trianguloA");
    const ladoB = document.getElementById("trianguloB");
    const base = document.getElementById("trianguloBase");

    const valorA = parseInt(ladoA.value);
    const valorB = parseInt(ladoB.value);
    const valorBase = parseInt(base.value); 


    const perimetro = perimetroTriangulo(valorA, valorB, valorBase);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const altura = document.getElementById("trianguloAltura");
    const base = document.getElementById("trianguloBase");

    const valorAltura = parseInt(altura.value);
    const valorBase = parseInt(base.value);

    const area = areaTriangulo(valorBase, valorAltura)
    alert(area);
}

function calcularAlturaTriangulo() {
    const ladoA = document.getElementById("trianguloA");
    const ladoB = document.getElementById("trianguloB");
    const base = document.getElementById("trianguloBase");

    const valorLadoA = parseInt(ladoA.value);
    const valorLadoB = parseInt(ladoB.value);
    const valorBase = parseInt(base.value);

    if ( ( valorLadoA == valorLadoB ) && ( valorBase != valorLadoA ) ) {
        const altura = Math.sqrt((valorLadoA ** 2) - ((valorBase ** 2) / 4));
        alert(altura);
    }
    else {
        alert("No es un triangulo isoceles");
    }
}

//funciones del circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("circuloRadio");
    const valorRadio = parseInt(radio.value);
    const perimetro = perimetroCirculo(valorRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("circuloRadio");
    const valorRadio = parseInt(radio.value);
    const area = areaCirculo(valorRadio);
    alert(area);
}