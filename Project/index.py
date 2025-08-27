from flask import Flask, render_template, request, redirect, url_for, flash
from database.index import connect_to_db
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')


@app.route('/', methods=['GET', 'POST'])
def index():
    page = request.args.get('page', 1, type=int)
    per_page = 6
    offset = (page - 1) * per_page
    conn = connect_to_db()
    cursor = conn.cursor()

    search_query = request.args.get('q', '')  
    
    if search_query:
        cursor.execute("""
            SELECT * FROM property
            WHERE title ILIKE %s OR location ILIKE %s
            ORDER BY property_id ASC
            LIMIT %s OFFSET %s
        """, ('%' + search_query + '%', '%' + search_query + '%', per_page, offset))
    else:
        cursor.execute("SELECT * FROM property ORDER BY property_id ASC LIMIT %s OFFSET %s", (per_page, offset))

    properties = cursor.fetchall()
    conn.close()
    return render_template('index.html', properties=properties, search_query=search_query)



@app.route('/property/<int:id>')
def property_detail(id):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM property WHERE property_id=%s", (id,))
    property_item = cursor.fetchone()
    conn.close()
    return render_template('property_detail.html', property=property_item)


@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        payload = {
            'title': request.form.get('title'),
            'description': request.form.get('description'),
            'price': request.form.get('price'),
            'location': request.form.get('location'),
            'property_type': request.form.get('property_type'),
            'year_built': request.form.get('year_built')
        }

        for key, value in payload.items():
            if not value:
                flash(f'{key} is required', 'red')
                return render_template('create.html')

        conn = connect_to_db()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO property(title, description, price, location, property_type, year_built)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (payload['title'], payload['description'], payload['price'], payload['location'], payload['property_type'], payload['year_built']))
        conn.commit()
        conn.close()
        flash('Property created successfully', 'blue')
        return redirect(url_for('index'))

    return render_template('create.html')


@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM property WHERE property_id=%s", (id,))
    property_item = cursor.fetchone()

    if request.method == 'POST':
        title = request.form.get('title')
        description = request.form.get('description')
        price = request.form.get('price')
        location = request.form.get('location')
        property_type = request.form.get('property_type')
        year_built = request.form.get('year_built')
        year_built = int(year_built) if year_built else None


        cursor.execute("""
            UPDATE property
            SET title=%s, description=%s, price=%s, location=%s, property_type=%s, year_built=%s
            WHERE property_id=%s
        """, (title, description, price, location, property_type, year_built, id))
        conn.commit()
        conn.close()
        flash('Property updated successfully', 'blue')
        return redirect(url_for('property_detail', id=id))

    conn.close()
    return render_template('edit.html', property=property_item)


@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM property WHERE property_id=%s", (id,))
    conn.commit()
    conn.close()
    flash('Property deleted successfully', 'red')
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True, port=5001)
