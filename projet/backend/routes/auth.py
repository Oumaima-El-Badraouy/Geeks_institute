from flask import Flask, request, jsonify
from falsk_sqlalchemy import SQLAlchemy
app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =False
db=SQLAlchemy(app)
class User(db.Model):
    '__tablename__'='users'
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100),nullable=False,unique=True)
    email=db.Column(db.String(100),nullable=False,unique=True)
    password=db.Column(db.String(100),nullable=False)
with app.app_context():
    db.create_all()
@app.route('/register',methods=['POST'])
def register():
    data=request.get_json()
    new_user=User(name=data['name'],email=data['email'],password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message':'User registered successfully!'}),201