/* 8.Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 
caso contrario mostrar false, utilizar el operador ternario. */ 

let num1,num2,num3,num5 
num1= parseFloat(prompt("Ingresar primer numero"))
if(Number.isInteger(num1) === false || num1 < 1 || num1 > 10) 
{alert("No es un numero valido")} 
else{


num2= parseFloat(prompt("Ingresar segundo numero"))  
if(Number.isInteger(num2) === false || num2 < 1 || num2 > 10) 
{alert("No es un numero valido")}
else{ 

num3= parseFloat(prompt("Ingresar tercer numero"))   
if(Number.isInteger(num3) === false || num3 < 1 || num3 > 10) 
{alert("No es un numero valido")}  
else{ 
    num4=(num1+num2+num3)/3   
    num5= "El promedio es de "+num4.toString()
    alert(num5)

    num4 < 5 ? alert("false") :alert ("true")
    
}
}
}