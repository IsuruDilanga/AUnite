

from flask import Flask, flash, render_template, url_for, redirect, request, session

from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
from flask import Flask, request, render_template, jsonify
import base64
import cv2
import numpy as np
from keras.models import model_from_json
from flask_cors import CORS
from datetime import datetime
import os
import json


import sqlite3

with open('Server_Components/Model/FacialEmotionModel.json', 'r') as json_file:
    loaded_model_json = json_file.read()


# Create the CNN model from the loaded architecture
loaded_model = model_from_json(loaded_model_json)

# Load the weights into the model
loaded_model.load_weights('Server_Components/Model/FacialEmotionModel.h5')

# Compile the loaded model
loaded_model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

app = Flask(__name__)

UPLOAD_FOLDER = 'Image_Uploads'

# Create the folder for uploaded images if it doesn't exist
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///AUnite.db'
db = SQLAlchemy(app)
app.config['SECRET_KEY'] = 'thisisasecretkey'

@app.route('/')
def loginpage():
    return render_template('login.html')

@app.route('/', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('SELECT * FROM user WHERE email=? AND password=?',(email, password))
    row = c.fetchone()

    if row:
        c1 = conn.cursor()
        c1.execute('SELECT email, password, fullname, number, dob, english, etiquette FROM user WHERE email=? AND password=?',(email, password))
        # c1.execute('SELECT email, password, fullname, number, dob, English, Etiquette, total FROM user WHERE email=? AND password=?',(email, password))
        
        row1 = c1.fetchone()
        email, password, fullname, number, dob, english, etiquette = row1
        # email, password, fullname, number, dob, English, Etiquette, total = row1
        # print("fullname="+fullname)

        session['fullname'] = fullname
        session['email'] = email
        session['number'] = number
        session['dob'] = dob
        session['english'] = english
        session['etiquette'] = etiquette
        # session['English'] = English
        # session['Etiquette'] = Etiquette
        # session['total'] = total
        return redirect('/home')
    else:
        flash("Enter details are wrong! Please check again")
        return redirect('/')

    return render_template('login.html')


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

    conn = sqlite3.connect('AUnite.db')
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
    
@app.route('/home')
def home():
    fullname = session.get('fullname')
    email = session.get('email')
    # total = str(session.get('total'))

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('SELECT english, etiquette FROM user WHERE email=?',(email, ))
    row = c.fetchone()
    english, etiquette= row
    
    total = english + etiquette

    c1 = conn.cursor()

    c1.execute('UPDATE user SET total = ? WHERE email= ?', (total, email))
    conn.commit()

    total = str(total)

    return render_template('HomePage.html', fullname=fullname, total=total)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/FR')
def faceRecognition():
    return render_template('FR.html')

@app.route('/upload', methods=['POST'])
def capture_image():
    try:

        data = request.get_json()
        image_data = data['image']

        print('Image data received:')

        decoded_data = base64.b64decode(image_data.split(',')[1])
        img = cv2.imdecode(np.fromstring(decoded_data, np.uint8), cv2.IMREAD_UNCHANGED)

        filename = 'capture.png'
        save_path = os.path.join('Image_Uploads', filename)
        print('Saving image to:', save_path)
        cv2.imwrite(save_path, img)

        preprocessed_image = preprocess_image(img)

        # Use the model to predict the emotion in the image
        emotion = predict_emotion(preprocessed_image)
        print('Predicted emotion:', emotion)

        session['emotion'] = emotion

        return jsonify({'emotion': emotion})

    except Exception as e:
        print('Error:', str(e))
        return jsonify({'status': 'error', 'message': str(e)})

@app.route('/EQ')
def eq():
    # emotion = session.pop('emotion', None)
    emotion = session.get('emotion')

    emotionalId = ""

    if emotion == "happy":
        emotionalId = "1"
    elif emotion == "happy":
        emotionalId == "2"
    elif emotion == "neutral":
        emotionalId == "3"
    elif emotion == "sad":
        emotionalId == "4"
    else:
        emotionalId = "5"

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('SELECT EQWording, shortMotivationVideo FROM eqtable WHERE EmotionalId = ?', (emotionalId))
    data = c.fetchall()

    result = [{'EQWording': row[0], 'ShortMotivationVideo':row[1]} for row in data]

    print(result)
    return render_template('EQ.html', data=json.dumps(result))

# Define a helper function to decode a base64-encoded image and convert it to a numpy array
def decode_image(base64_string):
    imgdata = base64.b64decode(base64_string)
    img = cv2.imdecode(np.frombuffer(imgdata, np.uint8), cv2.IMREAD_COLOR)
    return img

# Define a helper function to encode a numpy array as a base64 string
def encode_image(preprocessed_image):
    retval, buffer = cv2.imencode('.png', preprocessed_image)
    encoded_image = base64.b64encode(buffer).decode('utf-8')
    return encoded_image

# Define a helper function to preprocess an image for input to the model
def preprocess_image(image):
    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Resize the image to 48x48 pixels
    resized = cv2.resize(gray, (48, 48), interpolation=cv2.INTER_AREA)

    # Reshape the image to a 4D tensor with shape (1, 48, 48, 1)
    reshaped = resized.reshape((1, 48, 48, 1))

    # Normalize the pixel values to be between 0 and 1
    normalized = reshaped / 255.0

    return normalized

# Define a helper function to use the model to predict the emotion in an image
def predict_emotion(image):
    # Use the model to make a prediction on the image
    prediction = loaded_model.predict(image)

    # Get the index of the predicted emotion (0 = angry, 1 = disgust, 2 = fear, 3 = happy, 4 = sad, 5 = surprise, 6 = neutral)
    emotion_index = np.argmax(prediction)

    # Map the emotion index to a string label
    if emotion_index == 0:
        return 'angry'
    elif emotion_index == 1:
        return 'disgust'
    elif emotion_index == 2:
        return 'fear'
    elif emotion_index == 3:
        return 'happy'
    elif emotion_index == 4:
        return 'sad'
    elif emotion_index == 5:
        return 'surprise'
    elif emotion_index == 6:
        return 'neutral'

@app.route('/meetTeam')
def meetTeam():
    return render_template('MeetTeam.html')

@app.route('/entertainments')
def entertainment():
    return render_template('Entertainment.html')

@app.route('/userProfile')
def userProfile():
    fullname = session.get('fullname')
    # fullname = session.pop('fullname', None)
    print(fullname)
    email = session.get('email')
    number = session.get('number')
    dob = session.get('dob')

    return render_template('profile.html', fullname=fullname, email=email, number=number, dob=dob)

@app.route('/game')
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

@app.route('/snake')
def snake():
    return render_template('snake.html')

@app.route('/tic')
def tic():
    return render_template('ticTacToe.html')

@app.route('/flight')
def flight():
    return render_template('flight.html')

@app.route('/education')
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

@app.route('/goodManner', methods=['POST'])
def goodMannerMarks():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)

    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET etiquette = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('Etiquette/GoodManners.html')

@app.route('/socialManner')
def socialMannerMarks():
    return render_template('Etiquette/SocialManners.html')

@app.route('/socialManner', methods=['POST'])
def socialManner():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)

    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET etiquette = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('Etiquette/SocialManners.html')


@app.route('/tableManner')
def tableManner():
    return render_template('Etiquette/TableManners.html')

@app.route('/tableManner', methods=['POST'])
def tableMannerMarks():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)

    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET etiquette = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('Etiquette/TableManners.html')

@app.route('/alphabet')
def alphabet():
    return render_template('English/Alphabet.html')

@app.route('/alphabet', methods=['POST'])
def alphabetMarks():

    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)
    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET english = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    # print(intValue)
    return render_template('English/Alphabet.html')


@app.route('/animals')
def animals():
    return render_template('English/Animals.html')

@app.route('/animals', methods=['POST'])
def animalsMarks():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)
    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET english = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('English/Animals.html')

@app.route('/colours')
def colours():
    return render_template('English/Colours.html')

@app.route('/colours', methods=['POST'])
def coloursMarks():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)
    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET english = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('English/Colours.html')

@app.route('/fruits')
def fruits():
    return render_template('English/Fruits.html')

@app.route('/fruits', methods=['POST'])
def fruitsMarks():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)
    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET english = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('English/Fruits.html')

@app.route('/numbers')
def numbers():
    return render_template('English/Numbers.html')

@app.route('/numbers', methods=['POST'])
def numbersMarks():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)
    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET english = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('English/Numbers.html')

@app.route('/vegetables')
def vegetables():
    return render_template('English/Vegetables.html')

@app.route('/vegetables', methods=['POST'])
def vegetablesMarks():
    data = request.get_json()
    intValue = data['marks']
    intValueF = "%.2f" % intValue
    print(intValueF)
    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('UPDATE user SET english = ? WHERE email= ?', (intValueF, email))
    conn.commit()
    return render_template('English/Vegetables.html')

@app.route('/progress')
def progress():
    fullname = session.get('fullname')
    email = session.get('email')

    conn = sqlite3.connect('AUnite.db')
    c = conn.cursor()

    c.execute('SELECT email, fullname, english, etiquette, total FROM user WHERE email=?',(email, ))
    row = c.fetchone()
    email, fullname, english, etiquette, total = row

    ## Read here sql and assign english value 
    # english = str(session.get('english'))
    # etiquette = str(session.get('etiquette'))
    
    print("english = " , english)
    print("etiquette = " , etiquette)
    
    return render_template('Progress.html', fullname=fullname, email=email, english=english, etiquette=etiquette)

@app.route('/aboutUs')
def aboutUs():
    return render_template('AboutUs.html')

@app.route('/music')
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
    app.run(port=4000, debug=True, host='0.0.0.0')
