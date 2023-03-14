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
    return render_template('Etiquette/AgeGroupEtiquette.html')

@app.route('/english')
def english():
    return render_template('English/AgeGroupEnglish.html')


@app.route('/goodManner')
def goodManner():
    return render_template('Etiquette/GoodManners.html')


@app.route('/socialManner')
def socialManner():
    return render_template('Etiquette/SocialManners.html')


@app.route('/tableManner')
def tableManner():
    return render_template('Etiquette/TableManners.html')

@app.route('/alphabet')
def alphabet():
    return render_template('English/Alphabet.html')

@app.route('/animals')
def animals():
    return render_template('English/Animals.html')

@app.route('/colours')
def colours():
    return render_template('English/Colours.html')

@app.route('/fruits')
def fruits():
    return render_template('English/Fruits.html')

@app.route('/numbers')
def numbers():
    return render_template('English/Numbers.html')

@app.route('/vegetables')
def vegetables():
    return render_template('English/Vegetables.html')

if __name__ == '__main__':
    app.run(port=4000, debug=True)