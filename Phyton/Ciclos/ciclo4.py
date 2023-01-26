# 4. Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

# 	1. Sumar 2 numeros
# 	2. Restar 3 numeros
# 	3. Multiplicar 2 numeros
# 	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
# 	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.

menu= int(input("Ingresar: \n1. Sumar 2 numeros \n2. Restar 3 numeros \n3. Multiplicar 2 numeros\n4. Dividir 2 numeros     ( el divisor debe ser diferente de 0 )  \n0. Salir de la calculadora \n"))
while(menu !=0):
    if(menu is 1): 
        num1=float(input("Ingresar primer numero ")) 
        num2=float(input("Ingresar segundo numero ")) 
        suma=str(num1+num2) 
        print("La suma es de "+suma) 
        menu=5
    elif(menu is 2): 
        num1=float(input("Ingresar primer numero a restar ") )
        num2=float(input("Ingresar segundo numero a restar ") )
        num3=float(input("Ingresar tercer numero a restar ") )
        resta=str(num1-num2-num3) 
        print("La resta de de "+resta)
        menu=5
    elif(menu is 3): 
        num1=float(input("Ingresar primer numero a multiplicar ") )
        num2=float(input("Ingresar segundo numero a multiplicar ") )
        multiplicacion=str(num1*num2) 
        print("La multiplicacion es de "+multiplicacion)  
        menu=5
    elif(menu is 4): 
        num1=float(input("Ingresar el dividendo ")) 
        num2=float(input("Ingresar el divisor diferente a cero ") )
        if(num2 == 0): 
            print("Zrry compa, divisor igual a cero ")  
            menu=4
        else: 
            division=num1/num2
            print("La division es de "+str(division))   
            menu=5
    elif(menu is 5): 
        menu= int(input("Ingresar: \n1. Sumar 2 numeros \n2. Restar 3 numeros \n3. Multiplicar 2 numeros\n4. Dividir 2 numeros ( el divisor debe ser diferente de 0 )  \n0. Salir de la calculadora \n"))
    else:
        print("El numero ingresado no esta dentro de la lista.") 
        menu= int(input("Ingresar: \n1. Sumar 2 numeros \n2. Restar 3 numeros \n3. Multiplicar 2 numeros\n4. Dividir 2 numeros ( el divisor debe ser diferente de 0 )  \n0. Salir de la calculadora \n"))  
print("Ha salido de la calculadora3000")