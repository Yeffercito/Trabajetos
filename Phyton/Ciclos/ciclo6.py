# 6. Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios de la siguiente manera:

# 	1. Si el precio es mayor a $100 el 10%
# 	2. Si el precio es mayor a $100 y menor a $200 el 20%
# 	3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante ingresar la cantidad de productos y el precio de cada uno. El algoritmo
# tambien debe imprimir en pantalla el calculo de los descuentos.

def entero(cadena): 
    try: 
        int(cadena)
        return True 
    except ValueError:
        return False 

while True: 
    precio= input("Ingrese un numero entero positivo")   
    if (not entero(precio) ):    
        print('Ingrese un valor entero')  

    else: 
        if(int(precio)<0): 
            print("Ingrese un numero positivo mayor que 0")
        else: 
            break
            
if (int(precio)>=100):  
    total= int(precio) - int(precio)*0.1
    print("El valor total es de "+str(total))
elif (int(precio)<100 or int(precio)>200): 
    total= int(precio)- int(precio)*0.2
    print("El valor total es de "+str(total))
elif (int(precio)<=200):      
    total= int(precio) - int(precio)*0.25
    print("El valor total es de "+str(total)) 
    