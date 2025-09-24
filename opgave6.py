import random as rm


randomgetal = rm.randint(1,5)  #random ipv randem 
# print(randemgetal)
while True:
    gok = int(input("kies een getal tussen 1 en 5\n"))
    if (randomgetal == gok):
        print("goed gedaan het casino wacht op je!")
        break
    else : 
        print("je zou beter je geld aan mij geven slechte gokker")
        print("probeer opnieuw")