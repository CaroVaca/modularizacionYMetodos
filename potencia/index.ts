//Potencias
//realice un programa que devielva la potencia de un numero
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("Enviar");

function potenciaNumero(base: number, exponente: number): number {
  let numero: number = 1;
  if (exponente === 0) {
    return 1;
  } else {
    for (let i = 1; i <= exponente; i++) {
      numero = numero * base;
    }
    return numero;
  }
}
rotulo1.innerHTML = "ingrese Base: ";
rotulo2.innerHTML = "ingrese Exponente: ";

btnEnviar?.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let exponente: number = Number(dato2.value);
  console.log("La potencia es = " + potenciaNumero(base, exponente));
});
