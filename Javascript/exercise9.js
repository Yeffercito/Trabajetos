var num1 = parseFloat(prompt("Ingresar numero "));

if (Number.isInteger(num1) === false || num1 < 0) {
  alert("No es un numero valido");
} else {
  div = num1 / 2;
  x = true;
  if (Number.isInteger(div) === x) console.log("el numero es par");
  else console.log("el numero no es par");
}
