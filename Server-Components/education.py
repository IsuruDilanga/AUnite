from flask import Flask, flash, render_template, url_for, redirect, request

import sqlite3

app = Flask(__name__)

@app.route('/')
def education():
    return render_template('Education.html')

@app.route('/maths1')
def maths1():
    return render_template('Maths/AgeGroupMaths1/AgeGroupMaths1.html')

@app.route('/maths2')
def maths2():
    return render_template('Maths/AgeGroupMaths2/AgeGroupMaths3.html')

@app.route('/maths3')
def maths3():
    return render_template('Maths/AgeGroupMaths3/AgeGroupMaths4.html')

@app.route('/etiquette')
def etiquette():
    return render_template('Etiquette/AgeGroup/AgeGroupEtiquette.html')


@app.route('/goodManner')
def goodManner():
    return render_template('Etiquette/GoodManners/GoodManners.html')


@app.route('/socialManner')
def socialManner():
    return render_template('Etiquette/SocialManners/SocialManners.html')


@app.route('/tableManner')
def tableManner():
    return render_template('Etiquette/TableManners/TableManners.html')

if __name__ == '__main__':
    app.run(port=4000, debug=True)