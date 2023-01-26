# 3.Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 despues debe calcular 
# el factorial de este numero e imprimirlo en pantalla.
    
numer= int(input("Ingresar un valor entero entre 10 y 15 ")) 
numer= numer +1
factor=1
if(numer >15 or numer<10):
    print("Ingresar un valor valido")  
else:
    for i in range (1,numer):
        factor=i*factor 
    print(factor)