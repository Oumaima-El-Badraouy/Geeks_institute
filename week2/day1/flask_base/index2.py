from flask import Flask, jsonify, request
import psycopg2
app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    database="students_db",
    user="postgres",
    password="0000"
)
cursor = conn.cursor()
# get methods
students = [
    {"id": 1, "name": "Oumaima", "age": 20},
    {"id": 2, "name": "Sara", "age": 21},
]
@app.route('/', methods=['POST'])
def index():
    return jsonify({"message":f"hello {students[1]['name']}"})

# post request.get_json
@app.route('/post',methods=["POST"])
def post():
    data = request.get_json()
    name = data['name']
    return jsonify({"message": f"hello {name}"})
@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    data = request.json 
    new_name = "{ouma}"
    query = f"UPDATE study SET name = '{new_name}' WHERE id = {student_id}"
    cursor.execute(query)
    conn.commit()
    return jsonify({"message": f"Student {student_id} updated successfully!"})

@app.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    cursor.execute("SELECT * FROM study WHERE id=%s", (student_id,))
    student = cursor.fetchone()
    if not student:
        return jsonify({"error": "Student not found"}), 404
    cursor.execute("DELETE FROM study WHERE id=%s", (student_id,))
    conn.commit()
    return jsonify({"message": f"Student {student_id} deleted successfully!"}), 200



if __name__ == '__main__':
     app.run(debug=True,port=5000)
 