from flask import Flask, session, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def games():
    return render_template('game.html')

@app.route('/MGL1')
def mgl1():
    return render_template('MGlevel1.html')

@app.route('/MGL2')
def mgl2():
    return render_template('MGlevel2.html')

@app.route('/MGL3')
def mgl3():
    return render_template('MGlevel3.html')

if __name__ == '__main__':
    app.run(port = 3000, debug=True)