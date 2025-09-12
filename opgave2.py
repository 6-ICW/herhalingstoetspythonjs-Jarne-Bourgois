
try:
    leeftijd = int(input("hoe oud ben je ?\n"))
except ValueError:
    print("hoe moelijk ist voor een cijfer in te vullen")
if (leeftijd >= 18):
    print("je ziet meerder jarig")
else:
    print("vertrekt uit men winkel")