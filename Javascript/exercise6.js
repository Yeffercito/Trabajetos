let num1,num2 
num1= parseFloat(prompt("Ingresar el primer numero "))  
num2= parseFloat(prompt("Ingresar el segundo numero "))    
num4= Math.max(num1,num2) 
num3= Math.min(num1,num2) 

num5=num4%num3 
num6=num4/num3
if(Number.isInteger(num5)== false)
{alert("No son multiplos")}
else{
    alert("Si son multiplos") 
    console.log("El numero "+num4 +" es multiplo de "+num3)
}