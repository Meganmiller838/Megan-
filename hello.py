"""_summary_ Allow the user to enter fahrenheit and we will display that 
value in celsius
Programmer: Megan Miller
Date: 11/4/23
"""

print("Fahrenheit Calculator")
fah = int(input("Enter the fahrenheit"))
cel = (fah - 32) * 5/9
print("The Celsius is", cel)
