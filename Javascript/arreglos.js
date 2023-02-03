let ingresar=0
let num_ing=0
let num_num=0
let cont_fam=0
let cont_dat=0   
let cont=0
let num=0
let numero=0
let suma=0
const nom=[]  
const paren=[] 
const eda=[]
const pes=[] 
const niv_pes=[]
let nombre="" 
let parentesco=""
let edad=0 
let peso=0
let result=0

function crearObjeto(nombr,parent,ed,im,pe) {
  return {
    Nombre: nombr,
    Parentesco: parent,
    Edad: ed,
    IMC: im, 
    Nivel_de_peso: pe
  };
}
do{
ingresar=parseInt(prompt("Ingresar \n'1' Para ingresar familiares \n'2'Para ingresar datos necesarios para los calculos" 
+"\n'3' Para mostrar los resultados \n'0' Para salir del menu"))  
switch(ingresar){
case 0: 
console.log("Se ha salido del menu");  
break   
case 1:  
do {
    numero = parseInt(
      prompt("Ingresar cantidad de familiares "+"\nActualmente tenemos "+suma)
    );
    if (numero <= 0 || isNaN(numero)) {
      alert("Ingrese un valor superior  a cero");
    }
  } while (numero < 0|| isNaN(numero)); 
  suma = suma+numero 
  for(let i=0;i<numero;i++){ 
    do {
        nombre=prompt("Ingresar nombre de su familiar") 
        if (!isNaN(nombre)) {
          alert("Ingrese el nombre con letras");
        } 
      } while (!isNaN(nombre)); 
    do {
      parentesco=prompt("Cual es su parentesco familiar con "+nombre)
      if (!isNaN(parentesco)) {
        alert("Ingrese el nombre con letras");
      } 
    } while (!isNaN(parentesco));   
    do {
        edad = parseInt(
            prompt("Cual es la edad de "+nombre)  
        );
        if (edad <= 0 || isNaN(edad)) {
          alert("Ingrese un valor superior  a cero");
        }
      } while (numero < 0|| isNaN(edad));  
    if(edad <20){
        alert("El calculo del IMC es para mayores de 20 años \n Por lo tanto prosiga al siguiente familiar")

    }

    nom.push(nombre)
    paren.push(parentesco)  
    eda.push(edad)  
  } 
  if(num_ing==1){
    numero=num_num+numero
  }  
  num_ing=ingresar
  num_num=numero 
  console.log(suma-numero);
break
case 2:  
for(let i=(suma-numero);i<suma;i++){  
console.log(nom); 
console.log(pes);
    if(edad[i]<20){
        console.log(`El siguiente era ${nom[i]} pero no tiene la edad suficiente`); 
        pes.push("No esta en el rango")
    } 
    else{
        do {
            peso = parseFloat(
                prompt("Cual es el peso de "+nom[i]+ " en Kilo gramos")  
            );
            if (peso <= 0 || isNaN(peso)) {
              alert("Ingrese un valor superior  a cero");
            }
          } while (peso < 0|| isNaN(peso));  
          do {
            estatu = parseFloat(
                prompt("Cual es la estatura de "+nom[i]+ " en Metros")  
            );
            if (estatu <= 0 || isNaN(estatu)) {
              alert("Ingrese un valor superior  a cero");
            }
          } while (estatu < 0|| isNaN(estatu));  
         result=peso/Math.pow(estatu, 2); 
         pes.push(result)
    } 
    cont++
} 

break
case 3: 
for(let i=0;i<suma;i++){
switch(pes[i]){
  case pes[i]<18.5:
    niv_pes.push("Bajo peso")
    break
  case pes[i]>=18.5 && pes[i]<=24.9:
    niv_pes[i].push("Normal")  
  break  
  case pes[i]>=18.5 && pes[i]<=24.9:
    niv_pes[i].push("Sobrepeso")  
  break  
  case pes[i]>=25 && pes[i]<=28.9:
    niv_pes[i].push("obeso I")  
  break  
  case pes[i]>35 :
    niv_pes[i].push("obeso II")  
  break  
 default: 
 niv_pes.push("No entra en la categoria")
} 
crearObjeto(nom[i],paren[i],eda[i],pes[i],niv_pes[i])
} 
const nom=[]  
const paren=[] 
const eda=[]
const pes=[] 
const niv_pes=[]
break
default: 
alert("No esta en la lista"); 
break
}
}while(ingresar!=0)


