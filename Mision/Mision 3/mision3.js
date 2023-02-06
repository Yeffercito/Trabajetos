let numero = 0;
let nombre = "";
let nombres = [];
let codigo = 00;
let codigos = [];
let a = 1;
let nivel = 0;
let niveles = [];
let ingreso = 0;
let y = {};
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let promedio = 0;
let promedios = [];
let sum_prom = 0;
let cambio = 0;
let cambio1 = 0;
let cambio2 = 0;
let valid = 0;
let valid1 = 0;

function crearObjeto(nombr, cod, niv, prom) {
  return {
    Nombre: nombr,
    Codigo: cod,
    Nivel: niv,
    Promedio: prom,
  };
}

do {
  ingreso = parseInt(
    prompt(
      "Ingrese el numero dentro de '': \n'1' Definir cantidad de estudiantes \n'2' Registrar datos de estudiantes " +
        "\n'3' Mostrar listado de estudiantes \n'4' Registrar notas de estudiantes \n'5' Imprimir notas de estudiantes \n'0' Salir  "
    )
  );
  switch (ingreso) {
    case 1:
      if (numero != 0) {
        do {
          cambio = parseInt(
            prompt(
              "¿Seguro que quiere cambiar de numero de estudiantes?\n(Todos los valores dados se perderan)" +
                "\nIngrese: \n'1' para cambiar \n '2' para proseguir con la misma cantidad"
            )
          );
          if (cambio === 1) {
            do {
              numero = parseInt(prompt("Ingrese la cantidad de estudiantes"));
              if (numero <= 0 || isNaN(numero)) {
                console.log("Ingrese un valor superior a cero");
              }
            } while (numero <= 0 || isNaN(numero));
            console.log(
              "Su cantidad de estudiantes se ha cambiado a " + numero
            );
            nombres = [];
            codigos = [];
            niveles = [];
            promedios = [];
          } else if (cambio === 2)
            console.log("Su cantidad de estudiantes no se ha cambiado");
        } while (cambio > 2 || cambio < 1);
      } else {
        do {
          numero = parseInt(prompt("Ingrese la cantidad de estudiantes"));
          if (numero <= 0 || isNaN(numero)) {
            console.log("Ingrese un valor superior o igual a cero");
          }
        } while (numero <= 0 || isNaN(numero));
      }

      break;
    case 2:
      valid = 0;
      if (numero == 0) {
        alert("No hay estudiantes");
      } else {
        if (numero === nombres.length) {
          do {
            cambio1 = parseInt(
              prompt(
                "¿Seguro que quiere volver a registrar los datos de los estudiantes?\n(Todos los valores dados se perderan)" +
                  "\nIngrese: \n'1' para volver a registrar \n '2' para proseguir con los mismos datos"
              )
            );
            if (cambio1 === 1) {
              console.log("Proceda a cambiar los datos del estudiante ");
              nombres = [];
              codigos = [];
              niveles = [];
            } else if (cambio1 === 2) {
              console.log("Sus datos siguen intactos");
              valid = 1;
            }
          } while (cambio1 > 2 || cambio1 < 1);
        }

        if (valid == 0) {
          for (let i = 0; i < numero; i++) {
            nombre = prompt("Ingrese su nombre");
            nombres.push(nombre);
            do {
              a = 1;
              codigo = prompt(
                "Ingrese su codigo " +
                  nombre +
                  ", (recuerde que es de 2 digitos)"
              );
              if (codigo.length < 2 || codigo.length > 2 || isNaN(codigo)) {
                console.log("Ingrese un valor de dos digitos");
              }
              if (codigos.length > 0) {
                codigos.forEach((e) => {
                  if (e === codigo) {
                    alert("Su codigo esta repetido, Ingrese otro ");
                    a = 0;
                  }
                });
              } else {
                codigos.push(codigo);
              }
            } while (
              codigo.length < 2 ||
              codigo.length > 2 ||
              isNaN(codigo) ||
              a === 0
            );
            do {
              nivel = parseInt(
                prompt(
                  "Ingrese \n '1'si su nivel es 'Beginner'\n'2'si su nivel es 'junior'\n'3'si su nivel es 'senior'"
                )
              );
              if (nivel === 1) {
                niveles.push("Beginner");
              } else if (nivel === 2) {
                niveles.push("Junior");
              } else if (nivel === 3) {
                niveles.push("Senior");
              } else {
                nivel = 0;
              }
            } while (nivel == 0);
          }
        }
      }

      break;
    case 3:
      if (numero == 0) {
        alert("No se ha ingresado una cantidad de estudiantes");
      } else {
        for (let i = 0; i < numero; i++) {
          y = crearObjeto(nombres[i], codigos[i], niveles[i], promedios[i]);
          console.log(y);
        }
      }
      break;
    case 4:
      valid1 = 0;
      if (numero == 0) {
        alert("No se ha ingresado una cantidad de estudiantes");
      } else {
        if (numero === promedios.length) {
          do {
            cambio2 = parseInt(
              prompt(
                "¿Seguro que quiere volver a registrar las notas de los estudiantes?\n(Todos los valores dados se perderan)" +
                  "\nIngrese: \n'1' para volver a registrar \n '2' para proseguir con los mismos datos"
              )
            );
            if (cambio2 === 1) {
              console.log("Proceda a cambiar los datos del estudiante ");
              promedios = [];
            } else if (cambio2 === 2) {
              console.log("Sus datos siguen intactos");
              valid = 1;
            }
          } while (cambio2 > 2 || cambio2 < 1);
        }
        if (valid == 0 && numero == nombres.length) {
          for (let i = 0; i < numero; i++) {
            do {
              nota1 = parseFloat(
                prompt("Ingrese la primera nota de " + nombres[i])
              );
              if (nota1 < 0 || nota1 > 5 || isNaN(nota1)) {
                console.log(
                  "Ingrese un valor superior a cero y menor que cinco"
                );
              }
            } while (nota1 < 0 || nota1 > 5 || isNaN(nota1));
            do {
              nota2 = parseFloat(
                prompt("Ingrese la segunda nota de " + nombres[i])
              );
              if (nota2 < 0 || nota2 > 5 || isNaN(nota2)) {
                console.log(
                  "Ingrese un valor superior a cero y menor que cinco"
                );
              }
            } while (nota2 < 0 || nota2 > 5 || isNaN(nota2));
            do {
              nota3 = parseFloat(
                prompt("Ingrese la tercera nota de " + nombres[i])
              );
              if (nota3 < 0 || nota3 > 5 || isNaN(nota3)) {
                console.log(
                  "Ingrese un valor superior a cero y menor que cinco"
                );
              }
            } while (nota3 < 0 || nota3 > 5 || isNaN(nota3));
            promedio = (nota1 + nota2 + nota3) / 3;
            promedios.push(promedio);
          }
        } else if (!(numero == nombres.length)) {
          alert("No se han resgitrado datos de los estudiantes");
        }
      }
      break;
    case 5:
      if (numero == 0) {
        alert("No se ha ingresado una cantidad de estudiantes");
      } else {
        for (let i = 0; i < numero; i++) {
          if (promedios[i] >= 3.5) {
            console.log(
              "El estudiante " +
                nombres[i] +
                " aprobo con un promedio de: " +
                promedio
            );
          } else {
            console.log(
              "El estudiante " +
                nombres[i] +
                " reprobo con un promedio de: " +
                promedio
            );
          }
        }

        promedios.forEach((e) => {
          sum_prom = e + sum_prom;
        });
        let prom = sum_prom / promedios.length;
        if (prom >= 3.5) {
          console.log(
            "Los estudiantes del curso 'aprobaron' con un promedio de: " + prom
          );
        } else {
          console.log(
            "Los estudiantes del curso 'reprobaron' con un promedio de: " + prom
          );
        }
      }
      break;
    case 0:
      console.log("Se ha salido del menu");
      break;
    default:
      alert("No esta en la lista");
      break;
  }
} while (ingreso != 0);
