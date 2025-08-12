#   Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
result =dict(zip(keys,values))
print(result)

#  Exercise 2 : Cinemax #2
age_user=int(input("tap your aage :"))
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
res=0
for values in family.values() :
    if values < 3 :
        print("your ticket is free")
        res+=values
    elif values >= 3 and values <= 12:
        print("the ticket is $10")
        res+=values
    elif   values > 12:
        print("the ticket is $15")
        res+=values

print(res)
#  bonus 
family_dictionary={}
for i in range  (1,4):
    key_input=input("tap a key :")
    value_input= input("tap a value :")
    family_dictionary[key_input]= value_input
print (family_dictionary)

#  Exercise 3: Zara

brand={"name": "Zara",
"creation_date": 1975, 
"creator_name": "Amancio Ortega Gaona", 
"type_of_clothes": ["men", "women", "children", "home"],
"international_competitors": ["Gap", "H&M", "Benetton"],
"number_stores": 7000, 
"major_color":{"France": "blue", 
    "Spain": "red", 
    "US": "pink, green"}
    
}
print(brand["type_of_clothes"])
brand["country_creation"]= "Spain"
print(brand)
for keys in brand.keys() :
    if keys == "international_competitors":
        if brand[keys]=="":
            brand.update({"international_competitors":"the store Desigual"})
            break
        
print (brand)
brand.pop("creation_date",None)
lat_competitors=brand["international_competitors"][-1]
print(lat_competitors)

major_color_us=brand["major_color"]["US"]
print(', '.join(major_color_us))

length=len(brand)
keys=[keys for keys in brand.keys()]
print(keys)


more_on_zara = {"creation_date": 1975,"number_stores": 10000}
brand.update(more_on_zara)
print(brand)

print(brand["number_stores"])
"""tbdl ry lvalue""" 


# Exercise 4 : Some Geography

def describe_city(city,country="morocco"):
    print(f"{city} is in {country}")
describe_city("Rabat")


# Exercise 5 : Random

def Random_numbers(num):
    if num > 100 :
        print ("choose a number between 1 and 100")
    number_rand= range(1,101)
    if number_rand==num :
        print('nadi jbtiha las9a')
        number_rand= range(1,101)
    else:
        print("3yan 3yan 3awd")
Random_numbers(2)

# Exercise 6 : Let’s create some personalized shirts !


import random 


def make_shirt(size,text="I love Python” by default"):
    cut_text=text[0:size]
    print (f"The size of the shirt is {size} and the text is {text}")
make_shirt(4,"oumaima")
make_shirt(4)
make_shirt(size=4,text="message")

# Exercise 7 : Temperature Advice
def get_random_temp(season):
    lower=10
    upper=20
    res=random.randint(lower,upper)
    return  float(res)
def main():
    season=input("type in a season :")
    month=int(input("type in a month :"))
    season=""
    if month==1:
        season=="January"
    elif month==2:
        season=="fab"
    elif month==3:
        season=="March"
    elif month==4:
        season=="April"
    elif month==5:
        season=="may"
    elif month==12:
        season=="jun"
    elif month==6:
        season=="july"
    elif month==7:
        season=="august"
    elif month==8:
        season=="september"
    elif month==9:
        season=="octobre"
    elif month==10:
        season=="novembre"
    elif month==11:
        season=="dec"
   
    
    number_temp = get_random_temp(season)
    print (f"The temperature right now is {number_temp} degrees Celsius.")
    if number_temp < 0:
        print('Brrr, that’s freezing! Wear some extra layers today')
    elif number_temp > 0 and number_temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif number_temp >= 16 and number_temp < 23:
        print("mssg")
    elif number_temp > 23 and number_temp < 32:
        print("mssg")
    elif number_temp >= 32  and number_temp < 40:
        print("mssg")

main()

# Exercise 8 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_methode():
    counter=0
    for i in data :
        question=i["question"]
        print(question)
        user_answer=input("your inswer here please :")
        if user_answer.lower() == i["answer"].lower():
              print (" great!!")
        else:
              print('no you are wrong ! ')
              print (i["answer"])
              counter +=1
              if counter ==3 :
                  print("try again ")
                  break

ask_methode()