import random as rm


randemgetal = rm.randint(1,5)
# print(randemgetal)
while True:
    gok = int(input("kies een getal tussen 1 en 5\n"))
    if (randemgetal == gok):
        print("goed gedaan het casino wacht op je!")
        break
    else : 
        print("je zou beter je geld aan mij geven slechte gokker")
        print("probeer opnieuw")