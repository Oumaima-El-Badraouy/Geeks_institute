# Exercise 1: What is the Season
from random import random


your_month=int(input("Enter a month (1-12): "))
if your_month in [12, 1, 2]:
    print("It's Winter!")
elif your_month in [3, 4, 5]:
    print("It's Spring!")
elif your_month in [6, 7, 8]:
    print("It's Summer!")
elif your_month in [9, 10, 11]:
    print("It's Fall!")
else:
    print("Invalid month!")

# Exercise 2: For Loop
for i in range(1,21):
    print(i)
for i in range(1,21):
    if i % 2 == 0:
        print(i)
# Exercise 3: While Loop
while True:
    input_value = input("tap your name : ")
    if input_value == "Oumaima":
        break

# Exercise 4: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
for i in range(len(names)):
    input_name = input("Enter a name: ")
    if input_name == names[i]:
        print("index is ", i)
        break

# Exercise 5: Greatest Number
number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))
number3 = int(input("Enter the third number: "))
result=max(number1, number2, number3)
print("The greatest number is:", result)
# Exercise 6: Random number
input_number = int(input("Enter a number between 1 and 9: "))
win_times=0
lost_times=0
random_number = random(1,10)

if input_number == random_number:
    print("Winner")
    win_times += 1
else:
    print("Better luck next time")
    lost_times+=1
while True:
    random_number = random(1,10)
    input_number = ""
    if input_number != random_number:
        input_number = int(input("Enter a number between 1 and 9: "))
    else:
        break
    