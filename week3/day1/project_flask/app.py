from flask import Flask, request, render_template,redirect,url_for
import os
import psycopg2
app=Flask(__name__)
def get_db_connection():
    conn=psycopg2.connect(
         host=os.getenv('DB_HOST'),
        database=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD')
    )
    return conn
@app.route('/',methods=['GET'])
def films():
    conn=get_db_connection()
    curs=conn.cursor()
    curs.execute("SELECT film_id, title, description FROM film  order by film_id asc LIMIT 20")
    films=curs.fetchall()
    curs.close()
    conn.close()
    return render_template('films.html', films=films)

@app.route('/add', methods=["GET", "POST"])
def add_film():
    if request.method == "POST":
        title = request.form['title']
        description = request.form['description']

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