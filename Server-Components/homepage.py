from flask import Flask, flash, render_template, url_for, redirect, request, session

import sqlite3

app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('HomePage.html')

if __name__ == '__main__':
    app.run(port=4000, debug=True)