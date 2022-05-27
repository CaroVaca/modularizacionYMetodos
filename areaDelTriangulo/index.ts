//Realice un programa que devuelvas el area del triangulo

let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnCalcular = document.getElementById("calcular");

titulo1.innerHTML = "Ingrese base";
titulo2.innerHTML = "Ingrese altura";

btnCalcular.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);

  let calcularAreaTriangulo = (base: number, altura: number): number => {
    return (base * altura) / 2;
  };

  for (let i: number = 1; i <= 7; i++) {
    console.log("El area del triangulo", calcularAreaTriangulo(i, i * 2));
  }
});
