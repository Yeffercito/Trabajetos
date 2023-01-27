// diseñar un algoritmo con diagrama de flujo de datos y pseudocodigo
// que permita registrar un inventario de celulares de las siguientes
// marcas:samsung,iphone,xiaomi,motorola,huawei,oppo.
// el algoritmo debe permitir descontar del inventario los equipos vendidos segun su marca
// y actualizar la cantidad de telefonos disponibles, ademas debe calcular el total de dinero recaudado por las ventas

let cant_samsung = 0;
let cant_iphone = 0;
let cant_xiaomi = 0;
let cant_motorola = 0;
let cant_huawei = 0;
let cant_appo = 0;
let cont_samsung = 0;
let cont_iphone = 0;
let cont_xiaomi = 0;
let cont_motorola = 0;
let cont_huawei = 0;
let cont_appo = 0; 
let vent_samsung = 0;
let vent_iphone = 0;
let vent_xiaomi = 0;
let vent_motorola = 0;
let vent_huawei = 0;
let vent_appo = 0;
let vender = 0;
let ingreso = 0;
let cantidad; 
console.log("Los precios de los celulares son: \n Samsung: 100 \n Iphone:200 \n Xiaomi:150 \n Motorola:125 \n Huawei:100 \n Appo:50 ")
do {
  ingreso = parseInt(
    prompt(
      "Ingrese \n'1' Si actualizar la cantidad de telefonos disponibles \n'2' Para vender algun telefono \n'0' Para ver cual fue la venta"
    )
  );
  switch (ingreso) {
    case 1:
      do {
        cantidad = parseInt(
          prompt(
            "Ingrese \n'1' Para actualizar cantidad de telefonos samsung \n'2' Para actualizar cantidad de telefonos iphone" +
              " \n'3' Para actualizar cantidad de telefonos xiaomi \n'4' Para actualizar cantidad de telefonos motorola " +
              "\n'5' Para actualizar cantidad de telefonos  huawei \n'6' Para actualizar cantidad de telefonos appo \n'0' Para dejar de actualizar"
          )
        );
        switch (cantidad) {
          case 1:
            do {
              cant_samsung = parseInt(
                prompt("Ingresar cantidad actualizada de samsungs "+"\nActualmente tenemos "+cant_samsung )
              );
              if (cant_samsung < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              }
            } while (cant_samsung < 0);

            break;
          case 2:
            do {
              cant_iphone = parseInt(
                prompt("Ingresar cantidad actualizada de iphone "+"\nActualmente tenemos "+cant_iphone)
              );
              if (cant_iphone < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              }
            } while (cant_iphone < 0);
            break;
          case 3:
            do {
              cant_xiaomi = parseInt(
                prompt("Ingresar cantidad actualizada de Xiaomi "+"\nActualmente tenemos "+cant_xiaomi)
              );
              if (cant_xiaomi < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              }
            } while (cant_xiaomi < 0);
            break;
          case 4:
            do {
              cant_motorola = parseInt(
                prompt("Ingresar cantidad actualizada de motorola "+"\nActualmente tenemos "+cant_motorola)
              );
              if (cant_motorola < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              }
            } while (cant_motorola < 0);
            break;
          case 5:
            do {
              cant_huawei = parseInt(
                prompt("Ingresar cantidad actualizada de Huawei "+"\nActualmente tenemos "+cant_huawei)
              );
              if (cant_huawei < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              }
            } while (cant_huawei < 0);
            break;
          case 6:
            do {
              cant_appo = parseInt(
                prompt("Ingresar cantidad actualizada de Appo "+"\nActualmente tenemos "+cant_appo)
              );
              if (cant_appo < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              }
            } while (cant_appo < 0);
            break;
          case 0:
            console.log("Ha dejado de actualizar");
            break;
          default:
            console.log("Ingrese algo dentro de la lista");
        }
      } while (cantidad);

      break;
    case 2:
      do {
        vender = parseInt(
          prompt(
            "Ingrese \n'1' Para vender cantidad de telefonos samsung \n'2' Para vender cantidad de telefonos iphone" +
              " \n'3' Para vender cantidad de telefonos xiaomi \n'4' Para vender cantidad de telefonos motorola " +
              "\n'5' Para vender cantidad de telefonos  huawei \n'6' Para vender cantidad de telefonos appo \n'0' Para dejar de vender"
          )
        );
        switch (vender) {
          case 1:
            do {
              vent_samsung = parseInt(
                prompt(
                  "Ingresar cantidad vendida de samsungs " +
                    "\n Tenemos la cantidad de " +
                    cant_samsung
                )
              );
              if (vent_samsung < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              } else {
                if (cant_samsung === 0) {
                  console.log(
                    "Nos hemos quedados sin celulares de esta marca, venta no realizada"
                  );
                } else {
                  if (vent_samsung > cant_samsung) {
                    console.log("No tenemos esa cantidad en el inventario");
                  }
                }
              }
            } while (vent_samsung < 0 || vent_samsung > cant_samsung);
            cont_samsung = cont_samsung + vent_samsung;
            cant_samsung = cant_samsung - vent_samsung;

            break;
          case 2:
            do {
              vent_iphone = parseInt(
                prompt(
                  "Ingresar cantidad vendida de iphone " +
                    "\n Tenemos la cantidad de " +
                    cant_iphone
                )
              );
              if (vent_iphone < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              } else {
                if (cant_iphone === 0) {
                  console.log(
                    "Nos hemos quedados sin celulares de esta marca, venta no realizada"
                  );
                } else {
                  if (vent_iphone > cant_iphone) {
                    console.log("No tenemos esa cantidad en el inventario");
                  }
                }
              }
            } while (vent_iphone < 0 || vent_iphone > cant_iphone);
            cont_ = cont_iphone + vent_iphone;
            cant_ = cant_iphone - vent_iphone;

            break;

          case 3:
            do {
              vent_xiaomi = parseInt(
                prompt(
                  "Ingresar cantidad vendida de xiaomi " +
                    "\n Tenemos la cantidad de " +
                    cant_xiaomi
                )
              );
              if (vent_xiaomi < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              } else {
                if (cant_xiaomi === 0) {
                  console.log(
                    "Nos hemos quedados sin celulares de esta marca, venta no realizada"
                  );
                } else {
                  if (vent_xiaomi > cant_xiaomi) {
                    console.log("No tenemos esa cantidad en el inventario");
                  }
                }
              }
            } while (vent_xiaomi < 0 || vent_xiaomi > cant_xiaomi);
            cont_xiaomi = cont_xiaomi + vent_xiaomi;
            cant_xiaomi = cant_xiaomi - vent_xiaomi;

            break;

          case 4:
            do {
              vent_motorola = parseInt(
                prompt(
                  "Ingresar cantidad vendida de motorola" +
                    "\n Tenemos la cantidad de " +
                    cant_motorola
                )
              );
              if (vent_motorola < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              } else {
                if (cant_motorola === 0) {
                  console.log(
                    "Nos hemos quedados sin celulares de esta marca, venta no realizada"
                  );
                } else {
                  if (vent_motorola > cant_motorola) {
                    console.log("No tenemos esa cantidad en el inventario");
                  }
                }
              }
            } while (vent_motorola < 0 || vent_motorola > cant_motorola);
            cont_motorola = cont_motorola + vent_motorola;
            cant_motorola = cant_motorola - vent_motorola;

            break;

          case 5:
            do {
              vent_huawei = parseInt(
                prompt(
                  "Ingresar cantidad vendida de huawei" +
                    "\n Tenemos la cantidad de " +
                    cant_huawei
                )
              );
              if (vent_huawei < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              } else {
                if (cant_huawei === 0) {
                  console.log(
                    "Nos hemos quedados sin celulares de esta marca, venta no realizada"
                  );
                } else {
                  if (vent_huawei > cant_huawei) {
                    console.log("No tenemos esa cantidad en el inventario");
                  }
                }
              }
            } while (vent_huawei < 0 || vent_huawei > cant_huawei);
            cont_huawei = cont_huawei + vent_huawei;
            cant_huawei = cant_huawei - vent_huawei;

            break;

          case 6:
            do {
              vent_appo = parseInt(
                prompt(
                  "Ingresar cantidad vendida de appo" +
                    "\n Tenemos la cantidad de " +
                    cant_appo
                )
              );
              if (vent_appo < 0) {
                console.log("Ingrese un valor superior o igual a cero");
              } else {
                if (cant_appo === 0) {
                  console.log(
                    "Nos hemos quedados sin celulares de esta marca, venta no realizada"
                  );
                } else {
                  if (vent_appo > cant_appo) {
                    console.log("No tenemos esa cantidad en el inventario");
                  }
                }
              }
            } while (vent_appo < 0 || vent_appo > cant_appo);
            cont_appo = cont_appo + vent_appo;
            cant_appo = cant_appo - vent_appo;

            break;

          case 0:
            console.log("Ha dejado de vender");
            break;
          default:
            console.log("Ingrese algo dentro de la lista");
        }
      } while (vender != 0);
  }
} while (ingreso != 0); 

let total= cont_samsung*100 + cont_iphone*200 + cont_xiaomi*150 +cont_motorola*125 +cont_huawei*100 +cont_appo*50 
console.log("El total de la venta es de $"+ total); 
