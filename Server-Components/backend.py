from flask import Flask, request, render_template, jsonify
import base64
import cv2
import numpy as np
from keras.models import model_from_json
from flask_cors import CORS
from datetime import datetime
import os
import json


# Load the CNN model architecture from JSON file
with open('Model/FacialEmotionModel.json', 'r') as json_file:
    loaded_model_json = json_file.read()

# Create the CNN model from the loaded architecture
loaded_model = model_from_json(loaded_model_json)

# Load the weights into the model
loaded_model.load_weights('Model/FacialEmotionModel.h5')

# Compile the loaded model
loaded_model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

app = Flask(__name__)
# CORS(app, origins=["http://127.0.0.1:5500"])

# Define the folder for uploaded images
UPLOAD_FOLDER = 'Image_Uploads'

# Create the folder for uploaded images if it doesn't exist
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@app.route('/api/capture_image', methods=['POST'])
def faceRecognition():
    return render_template('FR.html')

# Define a REST API endpoint for receiving captured images
# @app.route('/api/capture_image', methods=['POST'])
# def capture_image():
#     try:
#         # Get the image data from the request
#         image_data = request.get_data()
#         print('Image data received:', image_data)

#         # Decode the image data from base64
#         decoded_data = base64.b64decode(image_data)
#         img = cv2.imdecode(np.fromstring(decoded_data, np.uint8), cv2.IMREAD_UNCHANGED)

#         # Save the image to disk
#         filename = datetime.now().strftime('%Y%m%d%H%M%S') + '.png'
#         filepath = os.path.join(UPLOAD_FOLDER, filename)
#         print('Saving image to:', filepath)
#         cv2.imwrite(filepath, img)

#         # Preprocess the image for input to the model
#         preprocessed_image = preprocess_image(img)

#         # Use the model to predict the emotion in the image
#         emotion = predict_emotion(preprocessed_image)
#         print('Predicted emotion:', emotion)

#         # Encode the processed image as a base64 string
#         encoded_image = encode_image(preprocessed_image)

#         # Return the predicted emotion and encoded image as a JSON response
#         return jsonify({'emotion': emotion, 'encoded_image': encoded_image})

#     except Exception as e:
#         print('Error:', str(e))
#         return jsonify({'status': 'error', 'message': str(e)})

# Define a REST API endpoint for the home page
@app.route('/')
def home():
    return render_template('FR.html')

@app.route('/upload', methods=['POST'])
def capture_image():
    try:

        data = request.get_json()
        image_data = data['image']

        # Get the image data from the request
        # image_data = request.get_data()
        # print('Image data received:', image_data)
        print('Image data received:')

        # Decode the image data from base64
        decoded_data = base64.b64decode(image_data.split(',')[1])
        img = cv2.imdecode(np.fromstring(decoded_data, np.uint8), cv2.IMREAD_UNCHANGED)

        # Save the image to disk
        # filename = datetime.now().strftime('%Y%m%d%H%M%S') + '.png'
        filename = 'capture.png'
        save_path = os.path.join('Image_Uploads', filename)
        # filepath = os.path.join('Image_Uploads', filename)
        print('Saving image to:', save_path)
        cv2.imwrite(save_path, img)

        # Preprocess the image for input to the model
        preprocessed_image = preprocess_image(img)

        # Use the model to predict the emotion in the image
        emotion = predict_emotion(preprocessed_image)
        print('Predicted emotion:', emotion)

        # Encode the processed image as a base64 string
        # encoded_image = encode_image(preprocessed_image)

        # Return the predicted emotion and encoded image as a JSON response
        return jsonify({'emotion': emotion})

    except Exception as e:
        print('Error:', str(e))
        return jsonify({'status': 'error', 'message': str(e)})

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

if __name__ == '__main__':
    # Run the Flask app on port 5000
    app.run(port=4000, debug=True)



