import requests
import psycopg2
import random
def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="countries_db",
        user="your_user",
        password="your_password"
    )
def add_country_to_db(name, capital, flag, subregion, population):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)",
        (name, capital, flag, subregion, population)
    )
    conn.commit()
    cur.close()
    conn.close()
def fetch_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print("Error fetching countries.")
        return []
def main():
    countries_data = fetch_countries()
    random_countries = random.sample(countries_data, 10)
    for country in random_countries:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", [None])[0] if country.get("capital") else None
        flag = country.get("flags", {}).get("png", None)
        subregion = country.get("subregion", None)
        population = country.get("population", 0)

        add_country_to_db(name, capital, flag, subregion, population)
        print(f"Added {name} to the database.")

if __name__ == "__main__":
    main()
