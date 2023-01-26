# 2.Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. Estos numeros serviran para definir un intervalo. 
# La funcion del algoritmo sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m].

numero= int(input("Ingresar un numero entero "))
numero1=int(input("Ingresar el segundo valor "))       
con1=(max(numero,numero1))
con2=(min(numero,numero1))  -1
suma=0
print("En el rango entre "+str(con2+1)+" y "+str(con1) )

for i in range(con2,con1): 
    con2=con2 +1
    if(con2%2 == 0):  
        suma= con2 + suma 
print("La suma es de: "+str(suma))