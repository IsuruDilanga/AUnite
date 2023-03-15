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

var marks = sessionStorage.getItem('english')
marks = parseInt(marks);
var Color = [];

document.getElementById("Red").addEventListener("click", () => {
  if (checkAlph("Red", Color)) {
    marksAdd(0.76);
  }
  audio1.play();
});

document.getElementById("Green").addEventListener("click", () => {
  if (checkAlph("Green", Color)) {
    marksAdd(0.76);
  }
  audio2.play();
});

document.getElementById("Blue").addEventListener("click", () => {
  if (checkAlph("Blue", Color)) {
    marksAdd(0.76);
  }
  audio3.play();
});

document.getElementById("Yellow").addEventListener("click", () => {
  if (checkAlph("Yellow", Color)) {
    marksAdd(0.76);
  }
  audio4.play();
});

document.getElementById("Orange").addEventListener("click", () => {
  if (checkAlph("Orange", Color)) {
    marksAdd(0.76);
  }
  audio5.play();
});

document.getElementById("Black").addEventListener("click", () => {
  if (checkAlph("Black", Color)) {
    marksAdd(0.76);
  }
  audio6.play();
});

document.getElementById("White").addEventListener("click", () => {
  if (checkAlph("White", Color)) {
    marksAdd(0.76);
  }
  audio7.play();
});

document.getElementById("Brown").addEventListener("click", () => {
  if (checkAlph("Brown", Color)) {
    marksAdd(0.76);
  }
  audio8.play();
});

document.getElementById("Pink").addEventListener("click", () => {
  if (checkAlph("Pink", Color)) {
    marksAdd(0.76);
  }
  audio9.play();
});

document.getElementById("Purple").addEventListener("click", () => {
  if (checkAlph("Purple", Color)) {
    marksAdd(0.76);
  }
  audio10.play();
});

document.getElementById("Grey").addEventListener("click", () => {
  if (checkAlph("Grey", Color)) {
    marksAdd(0.74);
  }
  audio11.play();
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
  fetch('/colours', {
    method: 'POST',
    body: JSON.stringify({marks}),
    headers: {'Content-type': 'application/json'},
  })

  sessionStorage.setItem('english', marks)
}