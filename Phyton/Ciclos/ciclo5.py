def entero(cadena): 
    try: 
        int(cadena)
        return True 
    except ValueError:
        return False 
    

while True: 
    num= input("Ingrese un numero entero positivo")   
    if (not entero(num) ):    
        print('Ingrese un valor entero')  

    else: 
        if(int(num)<100): 
            print("Ingrese un numero positivo mayor a 100")
        else: 
            break
print(2)
print(3)
print(5)
print(7)
for i in range (2,int(num)):
    if(int(i)%2 != 0):
        if(int(i)%3 != 0):
            if(int(i)%5 != 0):
                if(int(i)%7 != 0):
                    print(i)