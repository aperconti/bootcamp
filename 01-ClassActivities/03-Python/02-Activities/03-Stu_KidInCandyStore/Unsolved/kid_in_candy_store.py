# The list of candies to print to the screen
candyList = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit", "Swedish Fish", "Skittles", "Hershey Bar", "Starbursts", "M&Ms"]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print out options
for i in range(len(candyList)):
    print("[" + str(i) + "] " + candyList[i])

answer = "yes"

while answer == "yes":

    print("Which candy would you like to bring home?")
    selected = input("input the number of candy you would like to bring home:")
    candy_cart.append(candyList[int(selected)])
    answer = input("Would you like to take anymore goodies home?('yes' or 'no')")
print("look I brought")
for candy in candy_cart:
    print(candy + " home for the movie night!")
