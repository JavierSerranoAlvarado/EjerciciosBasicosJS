
function precioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const cupones = [
    {
    id : 'ML20',
    discount : 20
    },
    {
        id: "ML150",
        discount: 50
    },
    {
        id: "OpenBox",
        discount: 80
    }

]




// coenctar con HTML 

function calcularDescuento(){
    const precioBox = document.getElementById('precio');
    const descuentoBox = document.getElementById('descuento');
    
    const numPrecio = parseInt(precioBox.value);
    const numDescuento = parseInt(descuentoBox.value);
    const precioFinal = precioConDescuento(numPrecio, numDescuento);
    console.log(precioFinal);
    const resultadoP = document.getElementById('resultadoDescuento');
    resultadoP.innerText = "El precio final es de $" + precioFinal;
    console.log(numPrecio);
}

function calcularPrecioConCupon(){
    const cupon = document.getElementById("cupon");
    const cuponValor = cupon.value;

    const precio = document.getElementById("precio");
    const precioValor = parseInt(precio.value);

    const cuponExiste = function(cuponValidando){
        return cuponValidando.id === cuponValor;
    }

    const usuarioCupon = cupones.find(cuponExiste);

    if(!usuarioCupon){
        alert("No existe ese cupon");
    } 
    else{
        const descuento = usuarioCupon.discount;
        const precioFinal = precioConDescuento(precioValor, descuento);

        const resultadoP = document.getElementById('resultadoDescuento');

        resultadoP.innerText = "El precio final es de $" + precioFinal +
        " Usaste el cupon : " + usuarioCupon.id;
    }

}