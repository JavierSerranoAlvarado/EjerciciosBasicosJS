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

const multProm = promedios.map(function (valores) {
    return valores.examenes * valores.valor;
});
const sumMulProm = multProm.reduce(function (acumulador = 0, nuevo) { return acumulador + nuevo });


const valores = promedios.map(function (nuevo) { return nuevo.valor; })
const sumaValor = valores.reduce(function (acumulador, nuevo) {
    return acumulador + nuevo;
});

const promedioFinal = sumMulProm / sumaValor;