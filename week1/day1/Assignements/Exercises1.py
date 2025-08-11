# Exercise 1 : Hello World
from itertools import count
from numpy import power

for i in range(1,5):
    print("Hello World")
    
# Exercise 2 : Some Math
num=power(99,3)*8
print(num)
# Exercise 3 : What’s your name ?
name=input("What is your name ?")
print("Hello", name)
# Exercise 4 : Tall enough to ride a roller coaster
height= input("enter height in centimeters:")
if int(height) > 145:
    print("you're tall enough to ride")
else:
    print("you need to grow some more to ride")

# Exercise 5 : Favorite Numbers
my_fav_numbers ={3, 7, 9, 11, 13}
my_fav_numbers.add(17)
my_fav_numbers.add(7)
my_fav_numbers.remove(17)
friend_fav_numbers ={4, 8, 12, 16}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# Exercise 6: Tuple
    # yes it's  possible
#  Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.append("Apples")
num_of_apples = basket.count("Apples")
basket.clear()
print(basket)
# Exercise 8 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
count=0
for i in sandwich_orders:
    if i == "Pastrami sandwich":
        count += 1
        if count > 1:
           sandwich_orders.remove(i)
   
print("The sandwich orders are:", sandwich_orders)