# 1. Haga la sucesion de Fibonacci 
fibo=1 
cont=1 
cont1=0

numero= int(input("Ingresar cantidad de la secuencia "))
print(cont) 
print(fibo)
for i in range(2,numero): 
    cont1=fibo
    fibo=cont+fibo  
    print(fibo)  
    cont=cont1