/* const lista = [1, 2, 3, 1, 1, 1, 2, 2, 3, 3, 3, 3,3, 4, 5, 1, 2];

const arrayContado = {};

lista.map(function (elemento) {

    if (arrayContado[elemento]) {
        arrayContado[elemento] += 1;
    }else {
    arrayContado[elemento] = 1;
    }
}
);

const nuevoArray = Object.entries(arrayContado).sort(function (numIncremento, numNuevo) {
    return numIncremento[1] - numNuevo[1]
});

const moda = nuevoArray[nuevoArray.length-1];
console.log(`La moda es ${moda[0]} se repite ${moda[1]} veces`);

 */
function calcularModa(array) {

    const nuevoArray = {};

    array.map(function (elemento) {
        if (nuevoArray[elemento]) {
            nuevoArray[elemento] += 1;
        } else {
            nuevoArray[elemento] = 1;
        }
    });
    const arrayObjeto = Object.entries(nuevoArray);

    arrayObjeto.sort(function (acumulador, nuevo){ return acumulador[1]-nuevo[1]});
   
    const moda = arrayObjeto[arrayObjeto.length-1];

    console.log(`La moda es ${moda[0]}`);

}