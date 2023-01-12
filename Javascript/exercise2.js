let num1,num2 
num1= parseFloat(prompt("Ingresar el numero de la base en centimetros"))  
if(num1 < 0) 
{alert("Ingrese un valor positivo")}
else{
num2= parseFloat(prompt("Ingresar el numero de la altura en centimetros"))    
if(num2 < 0) 
{alert("Ingrese un valor positivo")}
else{
if(num1 == num2 ) 
{alert("El numero  de la base y la altura son iguales")} 
else{
if(num1> 5 && num2 > 4)
{num3=(num1*num2)/2 
console.log("El area es de "+num3)} 
else{
    num3=(num1*2)+10 
    console.log("El valor es de "+num3)
}
}  
} 
}