const $inputNumeros = document.querySelector('#numeros');
const $btnRevisar = document.querySelector('#btnRevisar');
const $btnReiniciar = document.querySelector('#btnReiniciar')
const $resultado = document.querySelector('#resultado');
const $numerosArray = document.querySelector('#arrayNum');
let arrayNum = []

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


/*/////////////////////////////////////////////////////////
Conectar con HTML
//////////////////////////////////*/

$btnRevisar.addEventListener('click', ()=>{
    arrayNum.push(parseInt($inputNumeros.value));
    $inputNumeros.value = '';
    $numerosArray.innerHTML = 
    `Numeros ingresados ${arrayNum.length} <br/>
    Numeros : ${arrayNum}`;
    resultado.textContent = `Promedio ${calcularPromedio(arrayNum)}`;
});

$btnReiniciar.addEventListener('click', () =>{
    arrayNum = [];
    $numerosArray.innerHTML = 
    `Numeros ingresados 0 <br/>
    Numeros : `;
    resultado.textContent = `Promedio 0`;
})
