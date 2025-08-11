
# ST3MLT FHAD EXERCICE CHATGPT


from datetime import date

birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
day, month, year = birthdate.split("/")
day = int(day)
month = int(month)
year_user = int(year)

time_now = date.today()
age = time_now.year - year_user

# Optionnel: ajuster l'âge si la date d'anniversaire n'est pas encore passée cette année
if (time_now.month, time_now.day) < (month, day):
    age -= 1

print(f"Your age is: {age}")

# Afficher le gâteau avec un nombre de "i" égal à l'âge (limité pour éviter un gros dessin)
limit = min(age, 20)  # éviter trop de 'i' si âge élevé

print(f"""    ___{'i' * limit}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
""")
