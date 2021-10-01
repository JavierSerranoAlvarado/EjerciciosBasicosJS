let mediana;
const $inputArray = document.querySelector('#numArray');
const $btnEnviar = document.querySelector('#enviar');
const $resultado = document.querySelector('#resultado');


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
        return `El array ordenado es [ ${listas} ] <br/>La mediana es ${mediana}`;
    } else{
        mediana = listas[mitadLista];
        return `El array ordenado es [ ${listas}  ] <br/> La mediana es ${mediana}`;
    }

}

/*/////////////////////////////////////////////////////////
Conectar con HTML 
////////////////////////////////////////// */

$btnEnviar.addEventListener('click', () => {
    const arrayNum = $inputArray.value.split(',')
    $resultado.innerHTML = calcularMediana(arrayNum)
})