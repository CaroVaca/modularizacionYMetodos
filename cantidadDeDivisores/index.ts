// Implemente un metodo llamado cantidadDeDivisores
// que reciba un numero entero y devuelva la cantidad de divisores
let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("Enviar");

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}
function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}

btnEnviar.addEventListener("click", () => {
  rotulo.innerHTML = "Ingrese un número: ";
  let numero: number = Number(dato.value);
  let numDivisores: number = cantidadDeDivisores(numero);
  console.log("El número", numero, "tiene ", numDivisores, "divisores.");
});
