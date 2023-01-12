/*10.Crea un algoritmo que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las siguientes operaciones:
	
	A. Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero
	   mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones 
	   anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
	
	B. Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor 
	   inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado” */
       let num1,num2 
       num1= parseFloat(prompt("Ingresar diametro de la rueda"))  
       num2= parseFloat(prompt("Ingresar el grosor en metros de la rueda"))     
       
       if(num1 <= 0.8){
           alert("La rueda es para un vehiculo pequeño")
       } 
       else {
           if(num1 <= 1.4 && num1 > 0.8){
               alert("La rueda es para un vehiculo mediano")
           } 
           else{
               if(num1 > 1.4) 
               {alert("La rueda es para un vehiculo grande")}
           }
       }
       
       if((num1 > 1.4 && num2 < 0.4)||(num1 <= 1.4 && num1 > 0.8 && num2< 0.25))
       {alert("El grosor de esta rueda es inferior al recomendado")} 
       