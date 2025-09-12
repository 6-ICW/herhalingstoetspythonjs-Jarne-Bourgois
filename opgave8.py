

def rekenmachine(x , y , operator):
    if operator == "+":
        return x + y
    elif operator == "-":
        return x - y
    elif operator == "*":
        return x * y
    elif operator == "/":
        return x / y
    else:
        print(" je hebt iets fouts gedaan")

print(rekenmachine(2,4,"/"))