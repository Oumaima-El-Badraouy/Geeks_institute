# Exercise 1: Birthday Look-up
import random 
birthdays={"ahmed":"2005/12/08","ahed":"2005/12/08","med":"2005/12/08","ff":"2005/12/08","pp":"2005/12/08"}
print("You can look up the birthdays of the people in the list!")
print(birthdays.keys())
persons_name =input("enter your name :")
if persons_name not in birthdays.keys():
    print("Sorry, we don’t have the birthday information for person's name")
else :
    print(f"your birthday is {birthdays[persons_name]}")


# Exercise 2: Birthdays Advanced(dakhl m3a exercise 1)
# Exercise 3: Sum
user_number=int(input('enter a number'))
print(user_number+pow(user_number,2)+pow(user_number,3)+pow(user_number,4))

# Exercise 4: Double Dice
import random
def throw_dice():
    return random.randint(1, 6)
def throw_until_doubles():
    count = 0
    while True:
        count += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        if dice1 == dice2:
            return count
def main():
    results = [] 
    for _ in range(100):
        throws = throw_until_doubles()
        results.append(throws)
    total_throws = sum(results)
    average_throws = total_throws / len(results)
    print(f"Nombre total de lancers pour obtenir 100 doubles : {total_throws}")
    print(f"Moyenne de lancers pour obtenir un double : {average_throws:.2f}")
if __name__ == "__main__":
    main()
