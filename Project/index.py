from flask import Flask, render_template, request, redirect, url_for, flash
from database.index import connect_to_db
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.secret_key = os.getenv('SECRET_KEY')


@app.route('/', methods=['GET'])
def index():
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', movies=[])

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM movies")
    movies = cursor.fetchall()

    return render_template('index.html', movies=movies)


@app.route('/movies/<int:id>', methods=['GET'])
def movie_detail(id):
    conn = connect_to_db()
    if not conn:
        return render_template('movie_detail.html', movie=None)

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM movies WHERE id = %s", (id,))
    movie = cursor.fetchone()
    return render_template('movie_detail.html', movie=movie)


@app.route('/create', methods=['POST', 'GET'])
def create():
    if request.method == 'POST':
        payload = {
            'title': request.form.get('title', 'no title'),
            'description': request.form.get('description', 'no description'),
            'rating': request.form.get('rating', 0),
            'year': request.form.get('year', 0),
            'genre': request.form.get('genre', 'no genre')
        }

        for key, value in payload.items():
            if not value:
                flash(f'{key} is required', 'red')
                flash(f'Please fill in all fields', 'red')
                return render_template('create.html')

        conn = connect_to_db()
        if not conn:
            return render_template('create.html', error='Failed to connect to database')

        cursor = conn.cursor()
        cursor.execute("INSERT INTO movies (title, description, rating, year, genre) VALUES (%s, %s, %s, %s, %s)",
                       (payload['title'], payload['description'], payload['rating'], payload['year'], payload['genre']))
        conn.commit()
        conn.close()

        flash(f'Movie created successfully', 'blue')
        return redirect(url_for('index'))

    return render_template('create.html')


@app.route('/edit/<int:id>', methods=['POST', 'GET'])
def edit(id):
    conn = connect_to_db()
    if not conn:
        return render_template('edit.html', movie=None)

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM movies WHERE id = %s", (id,))
    movie = cursor.fetchone()

    if request.method == 'POST':
        title = request.form.get('title', 'no title')
        description = request.form.get('description', 'no description')
        rating = request.form.get('rating', 0)
        year = request.form.get('year', 0)
        genre = request.form.get('genre', 'no genre')

        cursor.execute("UPDATE movies SET title = %s, description = %s, rating = %s, year = %s, genre = %s WHERE id = %s",
                       (title, description, rating, year, genre, id))
        conn.commit()
        conn.close()

        flash(f'Movie updated successfully', 'blue')
        return redirect(url_for('movie_detail', id=id))

    return render_template('edit.html', movie=movie)


@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    conn = connect_to_db()
    if not conn:
        return redirect(url_for('index'))

    cursor = conn.cursor()
    cursor.execute("DELETE FROM movies WHERE id = %s", (id,))
    conn.commit()
    conn.close()

    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True, port=5001)
