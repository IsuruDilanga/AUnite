from flask import Flask, session, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def music():
    return render_template('music.html')

@app.route('/CMusic')
def CMusic():
    return render_template('CMusic.html')

@app.route('/KMusic')
def KMusic():
    return render_template('KMusic.html')

@app.route('/OMusic')
def OMusic():
    return render_template('OMusic.html')


if __name__ == '__main__':
    app.run(port = 4000, debug=True)