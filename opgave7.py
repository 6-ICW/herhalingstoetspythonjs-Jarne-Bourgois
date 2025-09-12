


while True:
    try:
        invoer = int(input("geef een positief getal in!\n"))
        if invoer >=1 :
            print("goed gedaan")
            break
        else:
            print("probeer opnieuw")
    except ValueError:
        print("hoe moeilijk ist vo een getal op te schrijven")