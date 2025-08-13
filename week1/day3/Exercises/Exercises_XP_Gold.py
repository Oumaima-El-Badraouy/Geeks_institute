# Exercise 1 : Geometry
# Instructions
class Circle :
    def __init__(self,radius=1.0):
        self.radius=radius
    def perimeter(self):
        return 2 * 3.14 * self.radius
    def area(self):
        return 3.14 *(self.radius **2)
    def __str__(self):
        return f"Circle with radius: {self.radius} and perimeter is :{self.perimeter()} and area is :{self.area()}"
# ndirou test
c1=Circle(5)
print(c1)

# Exercise 2 : Custom List Class
import random
class MyList :
    def __init__(self,letters):
        self.letters = letters
    def reversed_list(self):
        return self.letters[::-1]
    def sorted_list(self):
        return sorted(self.letters)
    def create_list(self):
        res=[random.randint(1,100) for letter in range(len(self.letters))  ]
        return res
object1=MyList(['a','b','c'])
print(object1.reversed_list())
print(object1.sorted_list())
print(object1.create_list())


# Exercise 3 : Restaurant Menu Manager
# qst1 mdrtch file jdid bach n3tk url wahd
class MenuManager:
    def __init__(self):
        self.menu = [
            {'name': "Soup", 'price': 10, 'spice': "B", 'gluten': False},
            {'name': "Hamburger", 'price': 15, 'spice': "A", 'gluten': True},
            {'name': "Salad", 'price': 18, 'spice': "A", 'gluten': False},
            {'name': "French Fries", 'price': 5, 'spice': "C", 'gluten': False},
            {'name': "Beef bourguignon", 'price': 25, 'spice': "B", 'gluten': True}
        ]

    def add_item(self, name, price, spice, gluten):
        self.menu.append({
            'name': name,
            'price': price,
            'spice': spice,
            'gluten': gluten
        })
        return self.menu  

    def update_item(self, name, price, spice, gluten):
        for item in self.menu:
            if item['name'] == name:
                item['price'] = price
                item['spice'] = spice
                item['gluten'] = gluten
                return f"{name} updated successfully"
        return f"{name} not found in the menu"

    def remove_item(self, name):
        for item in self.menu:
            if item['name'] == name:
                self.menu.remove(item)
                return f"{name} removed successfully"
        return f"{name} not found in the menu"

object1 = MenuManager()

print(object1.add_item("Pizza", 12, "A", True))
print(object1.update_item("Pizza", 14, "A", True))
print(object1.remove_item("Pizza"))
