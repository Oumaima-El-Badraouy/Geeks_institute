from flask import Flask, render_template, request, redirect, url_for, flash
import psycopg2
import os

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'dev_secret')

# Database connection
def connect_to_db():
    conn = psycopg2.connect(
        host=os.getenv('PGHOST'),
        database=os.getenv('PGDATABASE'),
        user=os.getenv('PGUSER'),
        password=os.getenv('PGPASSWORD'),
        sslmode=os.getenv('PGSSLMODE'),
        channel_binding=os.getenv('PGCHANNELBINDING')
    )
    return conn

# ------------------- Routes -------------------

# Menu - show all items
@app.route('/menu')
def menu():
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Menu_Items ORDER BY item_id ASC")
    items = cursor.fetchall()
    conn.close()
    return render_template('menu.html', items=items)

# Add item
@app.route('/add', methods=['GET', 'POST'])
def add_item():
    if request.method == 'POST':
        name = request.form.get('name')
        price = request.form.get('price')
        if not name or not price:
            flash("Name and Price are required!", "red")
            return redirect(url_for('add_item'))
        conn = connect_to_db()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Menu_Items (name, price) VALUES (%s, %s)", (name, price))
        conn.commit()
        conn.close()
        flash(f"Item '{name}' added successfully!", "green")
        return redirect(url_for('menu'))
    return render_template('add_item.html')

# Delete item
@app.route('/delete/<int:item_id>', methods=['POST'])
def delete_item(item_id):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM Menu_Items WHERE item_id=%s", (item_id,))
    conn.commit()
    conn.close()
    flash(f"Item deleted successfully!", "red")
    return redirect(url_for('menu'))

# Update item
@app.route('/update/<int:item_id>', methods=['GET', 'POST'])
def update_item(item_id):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Menu_Items WHERE item_id=%s", (item_id,))
    item = cursor.fetchone()

    if request.method == 'POST':
        name = request.form.get('name')
        price = request.form.get('price')
        if not name or not price:
            flash("Name and Price are required!", "red")
            return redirect(url_for('update_item', item_id=item_id))
        cursor.execute("UPDATE Menu_Items SET name=%s, price=%s WHERE item_id=%s", (name, price, item_id))
        conn.commit()
        conn.close()
        flash(f"Item '{name}' updated successfully!", "blue")
        return redirect(url_for('menu'))

    conn.close()
    return render_template('update_item.html', item=item)


if __name__ == '__main__':
    app.run(debug=True)
