//Multiplos
//Cree un metodo esMultiplo con 2 parametros que devuelva
// el valor logico verdadero o false segun si el primer numero
// que se indique como parametro sea multiplo del segundo
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("Enviar");

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 == 0;
}

rotulo1.innerHTML = "Indique el número a verificar: ";
rotulo2.innerHTML = "Indique el número múltiplo: ";

btnEnviar?.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  if (esMultiplo(numero1, numero2)) {
    console.log(numero1, "ES número múltiplo de ", numero2);
  } else {
    console.log(numero1, "NO es número múltiplo de ", numero2);
  }
});
