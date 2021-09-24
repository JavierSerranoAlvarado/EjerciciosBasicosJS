const lista = [
    100,
    200,
    300,
    400,
    600
]



function calcularPromedio(lista) {
     let sumaLista = 0;
/*
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
 */

/* for(let numero of lista){
    sumaLista += numero;
} */

 sumaLista = lista.reduce(function(valorAcumulado=0, acumulador) {
    return valorAcumulado += acumulador;
})

    const promedio = sumaLista / lista.length;
    return promedio;

}