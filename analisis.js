//Helpers
const esPar = function (lista) {
    return lista.length % 2 == 0;
}

//Funcion promedio
function promedio(array) {
    const suma = array.reduce((anterior, nuevo) => anterior += nuevo);
    const longitud = array.length;
    const promedio = suma / longitud;
    return promedio;
}

//function alinear arrayContado
function alinearArray(array){
    const salariosPais = array.map((elementos) => elementos.salario);
    const alinearSalarios = salariosPais.sort((nuevoItem, anteriorItem) => nuevoItem - anteriorItem);
    return alinearSalarios;

}

//Funcion Mediana
function verMediana(listaPais) {

    const salariosAlineados = alinearArray(listaPais);

    const mitadSalarios = parseInt(salariosAlineados.length / 2);

    if (esPar(listaPais)) {
        const salario1 = salariosAlineados[mitadSalarios - 1];
        const salario2 = salariosAlineados[mitadSalarios];

        const mediana = promedio([salario1, salario2]);

        return mediana;

    } else {
        const mediana = salariosAlineados[mitadSalarios];

        return mediana;
    }

}

//ver top 10
//slice

function top10(listaPais){
    const salariosAlineados = alinearArray(listaPais);

    const empiezaSlice = (salariosAlineados.length * 90 ) / 100;
    const espaciosSlice = salariosAlineados.length - empiezaSlice;
    const salariosTop10 = salariosAlineados.splice(empiezaSlice, espaciosSlice);

    return salariosTop10;
}



