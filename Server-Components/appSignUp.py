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

@app.route('/signup')
def signupPage():
    return render_template('SignUp.html')

@app.route('/signup', methods=['POST'])
def signup():
    fullname = request.form['fullname']
    email = request.form['email']
    number = request.form['mobile']
    dob = request.form['dob']
    password = request.form['pass']
    gender = ""

    if(request.form['gender'] == 'male'):
        gender = 'male'
    elif(request.form['gender'] == 'female'):
        gender = 'female'
    elif(request.form['gender'] == 'NA'):
        gender = 'Not preferred'

    conn = sqlite3.connect('userData.db')
    c1 = conn.cursor()

    c1.execute('SELECT email FROM user')
    rows1 = c1.fetchall()

    emailHas = True
    
    emails = [row1[0] for row1 in rows1]

    for eachEmail in emails:
        if eachEmail == email:
            emailHas = False
            flash("The Email Address is already Registered")
            return redirect('/signup')

    if emailHas:
        c1.execute("INSERT INTO user (email, password, fullname, number, dob, gender) VALUES (?, ?, ?, ?, ?, ?)", (email, password, fullname, number, dob, gender))
        conn.commit()
        return render_template('login.html')

    return render_template('SignUp.html')


if __name__ == '__main__':
    app.run(port=4000, debug=True)
