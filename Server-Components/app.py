from flask import Flask, flash, render_template, url_for, redirect, request

from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt

import sqlite3

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userData.db'
db = SQLAlchemy(app)
app.config['SECRET_KEY'] = 'thisisasecretkey'

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    conn = sqlite3.connect('userData.db')
    c = conn.cursor()

    c.execute('SELECT * FROM user WHERE email=? AND password=?',(email, password))
    row = c.fetchone()

    if row:
        return render_template('mainPage.html')
    else:
        flash("Enter details are wrong! Please check again")
        return redirect('/')

    return render_template('login.html')

if __name__ == '__main__':
    app.run(port=4000, debug=True)