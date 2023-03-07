from flask import Flask, session, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def games():
    return render_template('game.html')

@app.route('/MGL1')
def mgl1():
    return render_template('MGlevel1.html')

if __name__ == '__main__':
    app.run(port = 3000, debug=True)