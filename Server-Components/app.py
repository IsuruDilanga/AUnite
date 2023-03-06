from flask import Flask, flash, render_template, url_for, redirect, request, jsonify

from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
import json

import sqlite3

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///EQData.db'
db = SQLAlchemy(app)
app.config['SECRET_KEY'] = 'thisisasecretkey'


# @app.route('/')
# def EQ():
#     return render_template('EQ.html')

@app.route('/')
def EQpage():

    emotionalId= "2"
    conn = sqlite3.connect('EQData.db')
    c = conn.cursor()

    c.execute('SELECT EQWording, shortMotivationVideo FROM eqtable WHERE EmotionalId = ?', (emotionalId))
    data = c.fetchall()

    result = [{'EQWording': row[0], 'ShortMotivationVideo':row[1]} for row in data]

    print(result)
    return render_template('EQ.html', data=json.dumps(result))
    # return render_template('EQ.html')

if __name__ == '__main__':
    app.run(port=4000 ,debug=True)