from flask import Flask, request, render_template,redirect,url_for
import os
import psycopg2
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class FilmForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    submit = SubmitField('Submit')

app=Flask(__name__)
def get_db_connection():
    conn=psycopg2.connect(
         host=os.getenv('DB_HOST'),
        database=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD')
    )
    return conn
@app.route('/', methods=['GET'])
def films():
    page = request.args.get('page', 1, type=int)
    per_page = 6
    offset = (page - 1) * per_page

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT COUNT(*) FROM film")
    total_films = cur.fetchone()[0]

    cur.execute(
        "SELECT film_id, title, description FROM film ORDER BY film_id ASC LIMIT %s OFFSET %s",
        (per_page, offset)
    )
    films = cur.fetchall()
    cur.close()
    conn.close()

    total_pages = (total_films + per_page - 1)

    return render_template('films.html', films=films, page=per_page, total_pages=total_pages)
@app.route('/stats')
def stats():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        SELECT l.name, COUNT(f.film_id) 
        FROM film f 
        JOIN language l ON f.language_id = l.language_id
        GROUP BY l.name
    """)
    data = cur.fetchall()
    cur.close()
    conn.close()
    return render_template('stats.html', data=data)

@app.route('/add', methods=["GET", "POST"])
def add_film():
    form = FilmForm()
    if form.validate_on_submit():
            title = form.title.data
            description = form.description.data

            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute(
            "INSERT INTO film (title, description, language_id) VALUES (%s, %s, 1)",
            (title, description)
        )
            conn.commit()
            cur.close()
            conn.close()
            return redirect(url_for('films'))

    return render_template("add_film.html")

@app.route('/edit/<int:film_id>', methods=["GET", "POST"])
def edit_film(film_id):
    conn = get_db_connection()
    cur = conn.cursor()

    if request.method == "POST":
        title = request.form['title']
        description = request.form['description']
        cur.execute("UPDATE film SET title=%s, description=%s WHERE film_id=%s",
                    (title, description, film_id))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for('films'))

    cur.execute("SELECT film_id, title, description FROM film WHERE film_id=%s", (film_id,))
    film = cur.fetchone()
    cur.close()
    conn.close()
    return render_template("edit_film.html", film=film)

@app.route('/delete/<int:film_id>')
def delete_film(film_id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM film WHERE film_id=%s", (film_id,))
    conn.commit()
    cur.close()
    conn.close()
    return redirect(url_for('films'))
# cur.execute("TRUNCATE TABLE film RESTART IDENTITY;")
@app.route('/search', methods=["GET", "POST"])
def search():
    films = []
    if request.method == "POST":
        keyword = request.form['keyword']
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT film_id, title, description FROM film WHERE title ILIKE %s",
                    ('%' + keyword + '%',))
        films = cur.fetchall()
        cur.close()
        conn.close()
    return render_template("films.html", films=films)


if __name__ == '__main__':
    app.run(debug=True, port=5000)