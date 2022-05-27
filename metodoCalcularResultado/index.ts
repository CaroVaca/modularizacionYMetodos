// Dibujar Guiones utilizando parametros como dibujarGuinesN
let btnCalcular = document.getElementById("calcular");
let dibujarGuiones = (guiones: number) => {
  let linea: string = "-";
  for (let i: number = 0; i <= guiones; i++) {
    linea = linea + "-";
  }
  console.log(linea);
};

let calcularResultado = (
  numero1: number,
  numero2: number,
  opcionMenu: number
): number => {
  let resultado: number = 0;
  if (opcionMenu === 1) {
    resultado = numero1 + numero2;
  } else if (opcionMenu === 2) {
    resultado = numero1 - numero2;
  }
  return resultado;
};

btnCalcular.addEventListener("click", () => {
  let total: number = calcularResultado(
    Number(numero1.value),
    Number(numero2.value),
    Number(operacion.value)
  );

  dibujarGuiones(40);
  console.log("El resultado es: ", total);
  dibujarGuiones(40);
});
