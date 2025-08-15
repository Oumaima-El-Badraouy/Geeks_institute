import random
# Exercise 1 : Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
  pass
sara_pets = Pets([Bengal("Bengal", 2), Chartreux("Chartreux", 3), Siamese("Siamese", 1)])
for i in sara_pets.animals:
    print(i.walk())
        
        
        
# Exercise 2 : Dogs
class Dog :
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return self.weight/self.age*10
    def fight(self, other_dog):
        if self.run_speed() > other_dog.run_speed():
            return f'{self.name} wins the fight'
        return f'{other_dog.name} wins the fight'
object2 = Dog("Dog", 5, 30)
object2 = Dog("Dog2", 10, 20)
print(object2.bark())
print(object2.run_speed())
print(object2.fight(Dog("Other Dog 3", 4, 25)))

# Exercise 3 : Dogs Domesticated

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False ):
        super().__init__(name, age, weight)
        self.trained  = trained 

    def train(self):
        self.trained = True
        return super().bark()
# object3 = PetDog("PetDog", 3, 25)
# print(object3.bark())
    def play(self,*args):
        return  f'{", ".join(args)} all play together'
    def do_a_trick(self):
       phrases=[
           f'{self.name} does a barrel roll',
           f'{self.name} stands on his back legs',
           f'{self.name} shakes your hand',
           f'{self.name} plays dead',
       ]
       return random.choice(phrases)
# Exercise 4 : Family
class Family:
    def __init__(self, members,last_name):
        self.members = members
        self.last_name = last_name
    def born(self, **child):
        self.members.append(child)
        return f"{child['name']} {self.last_name} is born congratulation "
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return f"{name} not found in the family"
    def family_presentation(self):
        for member in self.members:
            print(f"{member['name']} {self.last_name}, {member['age']} years old")
object4 = Family([{'name': 'John', 'age': 40}, {'name': 'Jane', 'age': 38}], 'Doe')
object4.born(name='Alice', age=0)
object4.family_presentation()


# Exercise 5 : TheIncredibles Family
class TheIncrediblesFamily(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)
    def use_power(self,last_name):
        for member in self.members:
            if member['name'] == last_name:
                try:
                   super().use_power(last_name)
                except KeyError:
                    return f"Member {last_name} not found"
        return f"{last_name} is not a member of the family"
    def incredible_presentation(self):
        return f'Here is our powerful family: {super().family_presentation()}'
members_data = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
     'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
]
incredibles_family = TheIncredibles("Incredibles", members_data)
incredibles_family.incredible_presentation()
incredibles_family.use_power("Michael")

incredibles_family.born(
    name='Baby Jack', age=1, gender='Male', is_child=True,
    power='Unknown Power', incredible_name='JackJack'
)
incredibles_family.incredible_presentation()