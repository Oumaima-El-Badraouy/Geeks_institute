# Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
    def call_oldest_cat(self):
        return oldest_cat([cat1, cat2, cat3])
# qst1
cat1=Cat("Whiskers", 3)
cat2=Cat("Tom", 8)
cat3=Cat("Felix", 2)
# qst 2
# def oldest_cat(cats):
#     oldest_cat=cat1.age
#     for i in range(1,4):
#         if cat2.age > oldest_cat:
#             oldest_cat=cat2.age
#         elif cat3.age > oldest_cat:
#             oldest_cat=cat3.age
#     return oldest_cat
# qst3
def oldest_cat(cats):
    oldest_cat=cats[0]
    for i in range(len(cats)):
        if cats[i].age > oldest_cat.age:
            oldest_cat=cats[i]
    printext=print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
    return printext
oldest_cat([cat1, cat2, cat3])






# Exercise 2 : Dogs
# qst1
class Dog:
      # qst2
    def __init__(self,name,height):
        self.name = name
        self.height = height
  #  qst3
    def bark(self):
        text=print(f"{self.name} goes woof!")
        return text
    #  qst4
    def jump(self):
        return print(f"{self.name} jumps {self.height *2} cm high!")
   #  qst5
davids_dog = Dog("Rex", 50)

   #  qst6
print(f" your dog name is {davids_dog.name} and it have a {davids_dog.height} cm height.")
davids_dog.bark()
davids_dog.jump()
    #  qst7
sarahs_dog = Dog("Teacup", 20)
# qst8
print(f" your dog name is {sarahs_dog.name} and it have a {sarahs_dog.height} cm height.")
sarahs_dog.bark()
sarahs_dog.jump()
# qst9
if sarahs_dog.height < davids_dog.height:
    print(f"{sarahs_dog.name} is smaller than {davids_dog.name}.")
else :
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")
    
    
# Exercise 3 : Who’s the song producer?
# qst1
class Song :
    # qst2
    def __init__(self,lyrics):
        self.lyrics = lyrics
    # qst3
    def sing_me_a_song (self):
        for line in self.lyrics:
            text = print(f"{line}\n")
        return text
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


# Exercise 4 : Afternoon at the Zoo
# qst1
class Zoo:
# qst2
    def __init__ (self,zoo_name,animals):
        self.zoo_name = zoo_name
        self.animals = animals
        # qst3
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        
    # qst4
    def get_animals(self):
        return self.animals

    # qst5
    def sell_animal (self,animal_sold):
          if animal_sold  in self.animals:
                self.animals.remove(animal_sold)
                return animal_sold

          
          return None
    # qst6
    def sort_animals(self):
        self.animals.sort()
    def get_groups(self):
        groups = {}
        for animal in self.animals:
            key = animal[0].upper()
            if key not in groups:
                groups[key] = []
            groups[key].append(animal)
        return groups
        


Zoo1= Zoo("New York Zoo", [])
Zoo1.add_animal("Lion")
Zoo1.add_animal("Tiger")
Zoo1.add_animal("Lemur")
Zoo1.sell_animal("Lion")
Zoo1.sort_animals()
Zoo1.get_animals()