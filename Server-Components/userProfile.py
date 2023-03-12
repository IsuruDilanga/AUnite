from flask import Flask, flash, render_template, url_for, redirect, request

app = Flask(__name__)

@app.route('/userProfile')
def userProfile():
    return render_template('profile.html')

if __name__ == '__main__':
    app.run(port=4000, debug=True)