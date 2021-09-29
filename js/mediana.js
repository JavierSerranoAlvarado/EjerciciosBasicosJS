let mediana;

function esPar(numeroLista){
    if(numeroLista % 2 == 0){
        return true;
    } else{
        return false;
    }
}

function calcularMediana(listas){
    listas.sort(function (primer, segundo) {return primer-segundo});
    console.log(listas);

    const mitadLista = parseInt(listas.length / 2 );


    if(esPar(listas.length)){
        const dosElementos = [
            listas[mitadLista-1],
            listas[mitadLista]
        ]
        mediana = (dosElementos.reduce(function (incremento = 0, nuevo) {return incremento + nuevo}) ) / 2;
        alert("La mediana es "+ mediana);
    } else{
        mediana = listas[mitadLista];
        alert("La mediana es " + mediana);
    }

}