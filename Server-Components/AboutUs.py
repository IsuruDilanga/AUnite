from flask import Flask, flash, render_template, url_for, redirect, request, session

app = Flask(__name__,template_folder='template')

@app.route('/')
def Home():
    return render_template('AboutUs.html')

if __name__ == '__main__':
    app.run(port=4000, debug=True)