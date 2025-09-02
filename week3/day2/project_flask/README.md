
##  README.md

````markdown
#  Flask DVD Rental CRUD App

##  Description
Ce projet est une petite application web développée avec **Flask** et **PostgreSQL**.  
Il permet de gérer la table `film` de la base de données **dvdrental** en offrant les fonctionnalités suivantes :

- Afficher une liste de films (limite 20 films par défaut)
- Ajouter un film (title + description)
- Modifier un film existant
- Supprimer un film
-  Rechercher un film par titre (search bar intégrée)

---

##  Technologies utilisées
- [Python 3.x](https://www.python.org/)  
- [Flask](https://flask.palletsprojects.com/)  
- [PostgreSQL](https://www.postgresql.org/)  
- [psycopg2](https://www.psycopg.org/docs/) (driver PostgreSQL pour Python)  
- HTML / Jinja2 Templates  

---

##  Installation & Exécution

### 1 Cloner le projet
```bash
git clone https://github.com/username/flask-dvdrental.git
cd flask-dvdrental
````

### Créer un environnement virtuel

```bash
python -m venv venv
source venv/bin/activate    # Linux / Mac
venv\Scripts\activate       # Windows
```

### Installer les dépendances

```bash
pip install flask psycopg2
```

### Configurer la connexion PostgreSQL

Dans le fichier `app.py`, adapter la fonction `get_db_connection()` avec vos paramètres PostgreSQL :

```python
def get_db_connection():
    conn = psycopg2.connect(
        host='localhost',
        database='dvdrental',
        user='postgres',
        password='0000'   # votre mot de passe PostgreSQL
    )
    return conn
```

### Lancer l’application

```bash
python app.py
```

 Par défaut, l’application tourne sur **[http://127.0.0.1:5000/](http://127.0.0.1:5000/)**

---

##  Pages principales

### `/` (Home)

* Affiche la liste des films (20 premiers)
* Formulaire de recherche (par titre)

### `/add`

* Ajouter un film

### `/edit/<film_id>`

* Modifier un film existant

### `/delete/<film_id>`

* Supprimer un film

---

## Structure du projet

```
flask-dvdrental/
│── app.py                # Fichier principal Flask
│── templates/
│   ├── films.html         # Page affichage + recherche
│   ├── add_film.html      # Formulaire ajout
│   ├── edit_film.html     # Formulaire modification
│── README.md              # Documentation
```


