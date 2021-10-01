//Helpers
const esPar = function (lista) {
  return lista.length % 2 == 0;
};

//Funcion promedio
function promedio(array) {
  const suma = array.reduce((anterior, nuevo) => (anterior += nuevo));
  const longitud = array.length;
  const promedio = suma / longitud;
  return promedio;
}

//function alinear arrayContado
function alinearArray(array) {
  const salariosPais = array.map((elementos) => elementos.salario);
  console.log(salariosPais);
  const alinearSalarios = salariosPais.sort(
    (nuevoItem, anteriorItem) => nuevoItem - anteriorItem
  );
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

/* function top10(listaPais){
    const salariosAlineados = listaPais.sort((nuev,old) => nuev.salario - old.salario);

    const empiezaSlice = (salariosAlineados.length * 90 ) / 100;
    const espaciosSlice = salariosAlineados.length - empiezaSlice;
    const salariosTop10 = salariosAlineados.splice(empiezaSlice, espaciosSlice);

    return salariosTop10;
}
 */

const top10 = (listaPais) => {
  return new Promise((resolve, reject) => {
    if (listaPais.length != 0) {
      const salariosAlineados = listaPais.sort(
        (nuev, old) => nuev.salario - old.salario
      );

      const empiezaSlice = (salariosAlineados.length * 90) / 100;
      const finalSlice = salariosAlineados.length;
      const salariosTop10 = salariosAlineados.slice(empiezaSlice, finalSlice);
      setTimeout(() => resolve(salariosTop10), 2000);
    } else {
      reject(new Error("Error Test"));
    }
  });
};

/*/////////////////////////////////////////
Conectar con HTML
/////////////////////////////////////////  */

const $btnAgregar = document.querySelector("#btnAgregar");
const $btnAnalizar = document.querySelector("#btnAnalizar");
const $btnEjemploAnalizar = document.querySelector("#btnEjemploAnalizar");
const $btnReiniciar = document.querySelector("#btnReiniciar");
const $btnEjemploTop = document.querySelector("#btnEjemploTop");
const $btnTop10 = document.querySelector("#btnTop10");

const $array = document.querySelector("#array");
const $resultado = document.querySelector("#resultado");
const $contarArray = document.querySelector("#contarArray");

const mostrarElementos = (lista, dondePoner) => {
  lista.forEach((elemento) => {
    dondePoner.innerHTML += `<p>Persona: ${elemento.nombre} - Salario ${elemento.salario} </p>`;
  });
};

$btnAgregar.addEventListener("click", () => {
  const $inputNombre = document.querySelector("#inputNombre");
  const $inputSalario = document.querySelector("#inputSalario");
  const nombre = $inputNombre.value;
  const salario = parseInt($inputSalario.value);

  if (!isNaN(salario) && nombre != "") {
    pais.push({ nombre: nombre, salario: salario });
    $array.innerHTML = ``;
    $contarArray.innerHTML = "";
    ``;
    $resultado.innerHTML = ``;
    $inputNombre.value = ``;
    $inputSalario.value = ``;

    mostrarElementos(pais, $array);
  } else {
    alert("No ingresaste valores adecuados");
  }
});

$btnAnalizar.addEventListener("click", () => {
  $resultado.innerHTML = ``;
  $contarArray.innerHTML = "";
  $array.innerHTML = ``;
  mostrarElementos(pais, $array);

  if (pais.length >= 3) {
    $resultado.innerHTML = `<p>La mediana es ${verMediana(pais)}</p>`;
  } else {
    $resultado.innerHTML = `<p>No hay suficientes salarios para revisar</p>`;
  }
});

$btnEjemploAnalizar.addEventListener("click", () => {
    $resultado.innerHTML = ``;
    $contarArray.innerHTML = "";
    $array.innerHTML = ``;
    mostrarElementos(mexico, $array);
  
    if (mexico.length >= 3) {
      $resultado.innerHTML = `<p>La mediana es ${verMediana(mexico)}</p>`;
    } else {
      $resultado.innerHTML = `<p>No hay suficientes salarios para revisar</p>`;
    }
  });
  

$btnReiniciar.addEventListener("click", () => {
  $resultado.innerHTML = ``;
  $contarArray.innerHTML = "";
  $array.innerHTML = ``;
  pais = [];
});

$btnTop10.addEventListener("click", async () => {
  try {
    $array.innerHTML = ``;
    $resultado.innerHTML = ``;

    if (pais.length >= 3) {
      mostrarElementos(pais, $array);

      $contarArray.innerHTML = "Calculando...";

      const verTop10 = await top10(pais);

      $contarArray.innerHTML = `<p>Top 10 de ${pais.length} personas analizadas </p>`;
      console.log(verTop10);

      mostrarElementos(verTop10, $resultado);
      $resultado.innerHTML += `<p>La mediana es ${verMediana(pais)}</p>`;
    } else {
      $resultado.innerHTML = `<p>No hay suficientes salarios para revisar</p>`;
    }
  } catch (err) {
    console.error(err);
  }
});

$btnEjemploTop.addEventListener("click", async () => {
  try {
    $array.innerHTML = ``;
    $resultado.innerHTML = ``;

    mostrarElementos(mexico, $array);

    $contarArray.innerHTML = "Calculando...";

    const verTop10 = await top10(mexico);

    $contarArray.innerHTML = `<p>Top 10 de ${mexico.length} personas analizadas </p>`;
    console.log(verTop10);

    mostrarElementos(verTop10, $resultado);
  } catch (err) {
    console.error(err);
  }
});
