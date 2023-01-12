let definitiva= parseFloat(prompt("Ingresar Su nota definitiva"))  

if(Number.isFinite(definitiva) === false) 
{alert("No es un numero valido")} 
else{
 
if(definitiva > 20 || definitiva < 1 )
{alert("Ingresar una nota valida")}
else
if(definitiva>= 19 && definitiva<=20 ) 
{
console.log("Su nota es A")
} 
else 
{if(definitiva>= 16 && definitiva<=18.9) 
{console.log("Su nota es de B")
 }
 else
{if(definitiva>= 13 && definitiva<=15.9)
{console.log("Su nota es de C")} 
 else
 {if(definitiva>= 10 && definitiva<=12.9)
  {console.log("Su nota es de D")}
  else
 {if(definitiva>= 1 && definitiva<=9.9)
 {console.log("Su nota es de E")}}} }} 
}