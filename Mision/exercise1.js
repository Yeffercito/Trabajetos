do {
  var ingres = parseFloat(
    prompt(
      "Ingresar\n '1' para calcular la nota de un estudiante \n '2' para salir del menu  \n "
    )
  );
  switch (ingres) {
    case 1:
      let nota1 = parseFloat(prompt("Ingresar nota del primer examen \n "));
      if (nota1 < 0 || nota1 > 5) {
        alert("Ingrese un numero valido");
      } else {
        var nota2 = parseFloat(prompt("Ingresar nota del segundo examen \n"));
        if (nota2 < 0 || nota2 > 5) {
          alert("Ingrese un numero valido");
        } else {
          var nota3 = parseFloat(prompt("Ingresar nota del tercer examen \n"));
          if (nota3 < 0 || nota3 > 5) {
            alert("Ingrese un numero valido");
          } else {
            promedio = ((nota1 + nota2 + nota3) / 3) * 0.55;

            let nota4 = parseFloat(
              prompt("Ingresar nota del primer trabajo \n")
            );
            if (nota4 < 0 || nota4 > 5) {
              alert("Ingrese un numero valido");
            } else {
              var nota5 = parseFloat(
                prompt("Ingresar nota del segundo trabajo \n")
              );
              if (nota5 < 0 || nota5 > 5) {
                alert("Ingrese un numero valido");
              } else {
                promedio2 = ((nota4 + nota5) / 2) * 0.15;

                let nota6 = parseFloat(
                  prompt("Ingresar nota del trabajo final \n")
                );
                if (nota6 < 0 || nota6 > 5) {
                  alert("Ingrese un numero valido");
                } else {
                  promedio3 = nota6 * 0.2;
                  var nota7 = parseFloat(
                    prompt("Ingresar nota del segundo trabajo \n")
                  );
                  if (nota7 < 0 || nota7 > 5) {
                    alert("Ingrese un numero valido ");
                  } else {
                    promedio4 = nota7 * 0.1;
                    notafinal = (promedio + promedio2 + promedio3 + promedio4).toFixed(2);

                    switch (notafinal >= 0 || notafinal <= 5) {
                      case notafinal >= 4.7 && notafinal <= 5:
                        console.log(
                          "El estudiante paso la materia con una nota de " +
                            notafinal +
                            " Con un nivel superior"
                        );
                        break;
                      case notafinal >= 4.0 && notafinal <= 4.6:
                        console.log(
                          "El estudiante paso la materia con una nota de " +
                            notafinal +
                            " Con un nivel alto"
                        );
                        break;
                      case notafinal >= 3.0 && notafinal <= 3.9:
                        console.log(
                          "El estudiante paso la materia con una nota de " +
                            notafinal +
                            " Con un nivel basico"
                        );
                        break;
                      case notafinal >= 2.0 && notafinal <= 2.9:
                        console.log(
                          "El estudiante paso la materia con una nota de " +
                            notafinal +
                            " Con un nivel bajo"
                        );
                        break;
                      case notafinal >= 0 && notafinal <= 1.9:
                        console.log(
                          "El estudiante paso la materia con una nota de " +
                            notafinal +
                            " Con un nivel muy bajo"
                        );
                        break;
                      default:
                        console.log("error");
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    case 2:
      console.log("Se ha salido del menu");
      break;
    default:
      alert("No esta dentro del menu");
  }
} while (ingres != 2);
