var video = document.querySelector("#video");
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var startbutton = document.querySelector("#startbutton");
var capturebutton = document.querySelector("#capturebutton");
var emotionDisplay = document.querySelector("#emotion-display");

// Attach the webcam stream to the video element
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
    console.log("Webcam stream attached to video element.");
  })
  .catch(function(err) {
    console.log("Error accessing camera: " + err.message);
  });

// When the grant camera access button is clicked, show the webcam feed in the black box
startbutton.addEventListener("click", function(event) {
  video.style.display = "block";
  console.log("Webcam feed displayed.");
});

// When the capture image button is clicked, capture the image and send it to the backend
capturebutton.addEventListener("click", function(event) {
  // Hide the webcam feed
  video.style.display = "none";
  console.log("Webcam feed hidden.");

  // Draw the current frame from the webcam onto the canvas
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  
  // canvas.getContext("2d").drawImage(video,0,0, canvas.width, canvas.height);
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  console.log("Canvas updated with current webcam frame.");

  const imageData = canvas.toDataURL('image/png');
  fetch('/upload', {
    method: 'POST',
    body: JSON.stringify({ image:imageData }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then(data => {
      // Display the predicted emotion on the web page
      emotionDisplay.textContent = "Predicted emotion: " + data.emotion;
      console.log("Emotion prediction received from backend: " + data.emotion);
  })
  .catch(error => console.error(error));
  }, "image/png");

  console.log("Image data sent to backend.");

  console.log(image_data_url);

  // Get the image data from the canvas as a blob
  // canvas.toBlob(function(blob) {
  //   // Send the captured image to the backend Flask API
  //   var formData = new FormData();
  //   formData.append("image_data", blob, "image.png");

  //   fetch('/upload', {
  //     method: "POST",
  //     body: formData
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     // Display the predicted emotion on the web page
  //     emotionDisplay.textContent = "Predicted emotion: " + data.emotion;
  //     console.log("Emotion prediction received from backend: " + data.emotion);
  //   })
  //   .catch(error => console.error(error));
  // }, "image/png");
  // console.log("Image data sent to backend.");
// });






