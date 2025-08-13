# Daily challenge: Old MacDonald’s Farm

# Step 1: Create the Farm Class
from email.mime import text


class Farm:
    # Step 2: Implement the __init__ Method
    def __init__(self,farm_name):
        self.farm_name = farm_name
        self.animals = {}
    # Step 3: Implement the add_animal Method
    def add_animal(self,animal_type,count=1):
        if animal_type not in self.animals:
            self.animals[animal_type] = count
        self.animals[animal_type] += count
    
# Step 4: Implement the get_info Method
    def get_info(self):
        text = f"Welcome to {self.farm_name} farm! , we have "
        for animal, count in self.animals.items():
            text += f"{count} {animal}(s), E-I-E-I-O! "
        text = text.rstrip(", ") + "."
        return text
    def get_animal_types (self):
        result= print(sorted(list(self.animals.keys())))
        return result
    def get_short_info(self):
    # Filter les animaux li count dyalhom > 1
        filtered_animals = [f"{count} {animal}s" for animal, count in self.animals.items() if count > 1]

    # Build l-text
        if filtered_animals:
           text = f"{self.farm_name} farm has " + ", ".join(filtered_animals) + "."
        else:
           text = f"{self.farm_name} farm has no animals with more than one count."

        print(text)
        return text



# Example usage step5
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep', 3)
macdonald.add_animal('sheep', 3)
macdonald.add_animal('sheep', 1)
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

# Bonus: Expand The Farm
# look at the class
macdonald.get_animal_types()
# Step 7: Implement the get_short_info Method
# look at the class
macdonald.get_short_info()
