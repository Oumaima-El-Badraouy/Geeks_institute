import psycopg2
from menu_item import MenuItem

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect(
            host="localhost",
            database="restaurant_db",
            user="your_user",
            password="your_password"
        )
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name=%s", (name,))
        result = cur.fetchone()
        cur.close()
        conn.close()
        if result:
            return MenuItem(result[0], result[1])
        return None

    @classmethod
    def all_items(cls):
        conn = psycopg2.connect(
            host="localhost",
            database="restaurant_db",
            user="your_user",
            password="your_password"
        )
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items")
        results = cur.fetchall()
        cur.close()
        conn.close()
        return [MenuItem(name, price) for name, price in results]
