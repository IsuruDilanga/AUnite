const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");
const audio9 = document.getElementById("audio9");
const audio10 = document.getElementById("audio10");
const audio11 = document.getElementById("audio11");
const audio12 = document.getElementById("audio12");
const audio13 = document.getElementById("audio13");
const audio14 = document.getElementById("audio14");
const audio15 = document.getElementById("audio15");
const audio16 = document.getElementById("audio16");

var marks = sessionStorage.getItem('english')
marks = parseInt(marks);
var Veg = [];

document.getElementById("Bell pepper").addEventListener("click", () => {
  
  if (checkAlph("Bell pepper", Veg)) {
    marksAdd(0.53);
  }
  audio1.play();
});

document.getElementById("Brinjal").addEventListener("click", () => {
  if (checkAlph("Brinjal", Veg)) {
    marksAdd(0.53);
  }
  audio2.play();
});

document.getElementById("Broccoli").addEventListener("click", () => {
  if (checkAlph("Broccoli", Veg)) {
    marksAdd(0.53);
  }
  audio3.play();
});

document.getElementById("Cabbage").addEventListener("click", () => {
  if (checkAlph("Cabbage", Veg)) {
    marksAdd(0.53);
  }
  audio4.play();
});

document.getElementById("Carrot").addEventListener("click", () => {
  if (checkAlph("Carrot", Veg)) {
    marksAdd(0.53);
  }
  audio5.play();
});

document.getElementById("Cauliflower").addEventListener("click", () => {
  if (checkAlph("Cauliflower", Veg)) {
    marksAdd(0.53);
  }
  audio6.play();
});

document.getElementById("Cucumber").addEventListener("click", () => {
  if (checkAlph("Cucumber", Veg)) {
    marksAdd(0.53);
  }
  audio7.play();
});

document.getElementById("Tomato").addEventListener("click", () => {
  if (checkAlph("Tomato", Veg)) {
    marksAdd(0.53);
  }
  audio8.play();
});

document.getElementById("Garlic").addEventListener("click", () => {
  if (checkAlph("Garlic", Veg)) {
    marksAdd(0.53);
  }
  audio9.play();
});

document.getElementById("Beans").addEventListener("click", () => {
  if (checkAlph("Beans", Veg)) {
    marksAdd(0.53);
  }
  audio10.play();
});

document.getElementById("Green peas").addEventListener("click", () => {
  if (checkAlph("Green peas", Veg)) {
    marksAdd(0.53);
  }
  audio11.play();
});

document.getElementById("Leek").addEventListener("click", () => {
  if (checkAlph("Leek", Veg)) {
    marksAdd(0.53);
  }
  audio12.play();
});

document.getElementById("Lettuce").addEventListener("click", () => {
  if (checkAlph("Lettuce", Veg)) {
    marksAdd(0.53);
  }
  audio13.play();
});

document.getElementById("Onion").addEventListener("click", () => {
  if (checkAlph("Onion", Veg)) {
    marksAdd(0.53);
  }
  audio14.play();
});

document.getElementById("Pumpkin").addEventListener("click", () => {
  if (checkAlph("Pumpkin", Veg)) {
    marksAdd(0.53);
  }
  audio15.play();
});

document.getElementById("Radish").addEventListener("click", () => {
  if (checkAlph("Radish", Veg)) {
    marksAdd(0.39);
  }
  audio16.play();
});

function checkAlph(name, alpha){
  let haveCharacter = true;
  
  for(i = 0; i < alpha.length; i++){
    if (alpha[i] == name) {
      haveCharacter = false;
    }
  }
  alpha.push(name);
  return haveCharacter;
}

function marksAdd(x){
  marks += x;
  
  console.log(marks.toFixed(2))
  fetch('/vegetables', {
    method: 'POST',
    body: JSON.stringify({marks}),
    headers: {'Content-type': 'application/json'},
  })

  sessionStorage.setItem('english', marks) // sessionStorage.setItem('english', marks.toFixed(2))
}
