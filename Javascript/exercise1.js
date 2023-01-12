let num1,num2,num3 
num1= parseFloat(prompt("Ingresar primer numero"))
if(Number.isInteger(num1) === false) 
{alert("No es un numero valido")} 
else{

num2= parseFloat(prompt("Ingresar segundo numero"))  
if(Number.isInteger(num2) === false) 
{alert("No es un numero valido")}
else{ 
if(num1 == num2) 
{alert("El primero numero y el segundo son iguales")} 
else{
num3= parseFloat(prompt("Ingresar tercer numero"))   
if(Number.isInteger(num3) === false) 
{alert("No es un numero valido")}  
else{
if(num1 == num3)
{alert("El primer numero y el tercero son iguales")}     
if(num2 == num3)
{alert("El segundo numero y el tercero soniguales")} 
console.log("El numero mayor es: "+Math.max(num1,num2,num3) ) 
console.log("El numero menor es: "+Math.min(num1,num2,num3) )
}
}
}
}