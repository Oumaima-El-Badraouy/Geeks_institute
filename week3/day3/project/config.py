import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-oumaima')
    SQLALCHEMY_DATABASE_URI =  os.getenv('DATABASE_URL', 'postgresql://postgres:0000@localhost:5432/Events')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

