from flask import Flask, jsonify, request

app = Flask(__name__)


students = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 20,
        "gender": "male",
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "age": 21,
        "gender": "female",
    },
    {
        "id": 3,
        "name": "Jim Doe",
        "email": "jim.doe@example.com",
        "age": 22,
        "gender": "male",
    },
    {
        "id": 4,
        "name": "Jill Doe",
        "email": "jill.doe@example.com",
        "age": 23,
        "gender": "female",
    },
    {
        "id": 5,
        "name": "Jack Doe",
        "email": "jack.doe@example.com",
        "age": 24,
        "gender": "male",
    }
]


@app.route('/<student_name>', methods=['POST'])
def index(student_name):
    return jsonify({"message": f"Hello, {student_name}!"})



@app.route('/students', methods=['GET'])
def get_students():
    try:
        try:
            page = int(request.args.get('page', 1))
            limit = int(request.args.get('limit', 10))
        except ValueError:
            return jsonify({"message": "Invalid page or limit"}), 400

        start = (page - 1) * limit
        end = start + limit

        return jsonify({"students": students[start:end]})
    except Exception as e:
        return jsonify({"message": "Something went wrong", "error": str(e)}), 400


@app.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    # found_student = None

    # for student in students:
    #     if student['id'] == student_id:
    #         found_student = student
    #         break

    found_student = next(
        (student for student in students if student['id'] == student_id), None)

    print("found_student", found_student)

    if not found_student:
        return jsonify({"message": "Student not found"}), 404

    return jsonify({"student": found_student})


@app.route('/students', methods=['POST'])
def create_student():
    name = request.json.get('name', "")
    email = request.json.get('email', "")
    age = request.json.get('age', None)
    gender = request.json.get('gender', "")

    new_student = {
        "id": max(student['id'] for student in students) + 1,
        "name": name,
        "email": email,
        "age": age,
        "gender": gender
    }

    students.append(new_student)

    return jsonify({"students": new_student})


@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    found_student = next(
        (student for student in students if student['id'] == student_id), None)

    if not found_student:
        return jsonify({"message": "Student not found"}), 404

    found_student['name'] = request.json.get('name', found_student['name'])
    found_student['email'] = request.json.get('email', found_student['email'])
    found_student['age'] = request.json.get('age', found_student['age'])
    found_student['gender'] = request.json.get(
        'gender', found_student['gender'])

    return jsonify({"students": found_student})


@app.route('/students/<int:student_id>', methods=["DELETE"])
def delete_student(student_id):
    found_student = next(
        (student for student in students if student['id'] == student_id), None)

    if not found_student:
        return jsonify({"message": "Student not found"}), 404

    students.remove(found_student)

    return jsonify({"message": "Student deleted", "students": students})


@app.errorhandler(404)
def not_found(error):
    return jsonify({"message": "Not found", "error": str(error)}), 404


@app.errorhandler(Exception)
def exception_handler(error):
    return jsonify({"message": "Not found", "error": str(error)}), 404


if __name__ == '__main__':
    app.run(debug=True, port=5001)
