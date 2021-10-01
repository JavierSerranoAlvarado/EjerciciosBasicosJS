const promedios = [
    {
        examenes: 1,
        valor: 2
    },
    {
        examenes: 4,
        valor: 1
    },
    {
        examenes: 2,
        valor: 5
    },
];

function promedioPonderado(listas) {
    const multProm = listas.map(function (valores) {
        return valores.examenes * valores.valor;
    });

    const sumMulProm = multProm.reduce(function (acumulador = 0, nuevo) { return acumulador + nuevo });


    const valores = promedios.map(function (nuevo) { return nuevo.valor; })

    const sumaValor = valores.reduce(function (acumulador, nuevo) {
        return acumulador + nuevo;
    });

    const promedioFinal = sumMulProm / sumaValor;
    return promedioFinal;

}

/* const multProm = promedios.map(function (valores) {
    return valores.examenes * valores.valor;
});
const sumMulProm = multProm.reduce(function (acumulador = 0, nuevo) { return acumulador + nuevo });


const valores = promedios.map(function (nuevo) { return nuevo.valor; })
const sumaValor = valores.reduce(function (acumulador, nuevo) {
    return acumulador + nuevo;
});

const promedioFinal = sumMulProm / sumaValor; */

/* ///////////////////////////////////////
Conectar con HTML
////////////////////////////////// */

const $btnAgregar = document.querySelector('#btnAgregar');
const $btnPromedio = document.querySelector('#btnPromedio');
const $btnReiniciar = document.querySelector('#btnReiniciar');
const $array = document.querySelector(`#array`);
const $resultado = document.querySelector('#resultado');
let arrayPromedio = [];

$btnAgregar.addEventListener('click', () => {
    const $inputExamenes = document.querySelector('#examenes');
    const $inputValor = document.querySelector('#valor');
    const examenes = parseInt($inputExamenes.value);
    const valor = parseInt($inputValor.value);

    (!isNaN(valor) && !isNaN(examenes))
        ? arrayPromedio.push({ examenes: examenes, valor: valor })
        : alert("No metiste numeros");

    $array.innerHTML = ``;
    $inputValor.value = ``;
    $inputExamenes.value = ``;
    arrayPromedio.forEach((elemento) => {
        $array.innerHTML += `Examenes: ${elemento.examenes} - Valor ${elemento.valor} <br/>`
    });


});

$btnPromedio.addEventListener('click', () => {
    (arrayPromedio.length != 0)
    ? $resultado.innerHTML = `El promedio ponderado es ${promedioPonderado(arrayPromedio)}`
    : $resultado.innerHTML = 'No has agregado ni un valor';

});

$btnReiniciar.addEventListener('click', () => {
    $array.innerHTML = ``;
    $resultado.innerHTML = ``;
    arrayPromedio = [];
})