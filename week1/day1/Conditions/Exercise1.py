number=input("Enter a number between 1 and 100:")
if int(number) < 1 or int(number) > 100:
    print("Please enter a valid number between 1 and 100.")
else:
    if  int(number)%3==0:
        print("Fizz")
    elif int(number)%5==0:
        print("Buzz")
    elif int(number)%3==0 and int(number)%5==0:
        print("FizzBuzz")
    else:
        print("The number is", number)