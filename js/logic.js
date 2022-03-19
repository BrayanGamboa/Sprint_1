const valorPC = Number(820000);
let descuento = 0;
let numeroComputadores = 0;
let valorBruto = 0;
let porcentaje = 0;
let valorPagar = 0;
function obtenerDatos() {
  //Estoy capturando el valor del input
  numeroComputadores = Number(document.getElementById("cantidad").value);
  //Me aseguro que el número sea positivo, lo convierto
  if (numeroComputadores < 0) {
    numeroComputadores = numeroComputadores * -1;
    alert("Ya hemos hecho la conversión a un número positivo");
  }
  //Calculo el valor bruto o neto
  valorBruto = Number(numeroComputadores * valorPC);
  valorCompra.value = `$ ${valorBruto}`;

  //Calculo el valor de descuento
  if (valorBruto < 1640000) {
    porcentaje = Number(0);
    valorDescuento.value = `Descuento del ${porcentaje}%`;
    mensajeDescuento.value = `El descuento aplicado fue de: ${
      porcentaje * 100
    }%`;
  } else if (valorBruto >= 1640000 && valorBruto <= 3280000) {
    porcentaje = Number(0.15);
    descuento = Number(valorBruto * porcentaje);
    valorDescuento.value = `$ ${descuento}`;
    mensajeDescuento.value = `El descuento aplicado fue de: ${
      porcentaje * 100
    }%`;
  } else if (valorBruto > 3280000 && valorBruto <= 6560000) {
    porcentaje = Number(0.25);
    descuento = Number(valorBruto * porcentaje);
    valorDescuento.value = `$ ${descuento}`;
    mensajeDescuento.value = `El descuento aplicado fue de: ${
      porcentaje * 100
    }%`;
  } else if (valorBruto > 6560000 && valorBruto <= 9840000) {
    porcentaje = Number(0.35);
    descuento = Number(valorBruto * porcentaje);
    valorDescuento.value = `$ ${descuento}`;
    mensajeDescuento.value = `El descuento aplicado fue de: ${
      porcentaje * 100
    }%`;
  } else if (valorBruto > 9840000) {
    porcentaje = Number(0);
    valorDescuento.value = `Descuento del ${porcentaje}%`;
    mensajeDescuento.value = `El descuento aplicado fue de: ${
      porcentaje * 100
    }%`;
  }

  //Calculo el valor total
  if (valorBruto > 9840000) {
    valorTotal.value = valorBruto;
  } else {
    valorPagar = Number(valorBruto - descuento);
    valorTotal.value = `$ ${valorPagar}`;
  }
}

function alerta() {
  swal(
    "¡Ofrecemos disculpas!",
    "Próximamente tendremos más variedad de productos.",
    "success"
  );
}
