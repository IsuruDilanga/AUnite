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

var marks = sessionStorage.getItem('english')
marks = parseInt(marks);
var Ani = [];

document.getElementById("Cat").addEventListener("click", () => {
  if (checkAlph("Cat", Ani)) {
    marksAdd(0.70);
  }
  audio1.play();
});

document.getElementById("Dog").addEventListener("click", () => {
  if (checkAlph("Dog", Ani)) {
    marksAdd(0.70);
  }
  audio2.play();
});

document.getElementById("Rabbit").addEventListener("click", () => {
  if (checkAlph("Rabbit", Ani)) {
    marksAdd(0.70);
  }
  audio3.play();
});

document.getElementById("Elephant").addEventListener("click", () => {
  if (checkAlph("Elephant", Ani)) {
    marksAdd(0.70);
  }
  audio4.play();
});

document.getElementById("Zebra").addEventListener("click", () => {
  if (checkAlph("Zebra", Ani)) {
    marksAdd(0.70);
  }
  audio5.play();
});

document.getElementById("Giraffe").addEventListener("click", () => {
  if (checkAlph("Giraffe", Ani)) {
    marksAdd(0.70);
  }
  audio6.play();
});

document.getElementById("Lion").addEventListener("click", () => {
  if (checkAlph("Lion", Ani)) {
    marksAdd(0.70);
  }
  audio7.play();
});

document.getElementById("Tiger").addEventListener("click", () => {
  if (checkAlph("Tiger", Ani)) {
    marksAdd(0.70);
  }
  audio8.play();
});

document.getElementById("Sheep").addEventListener("click", () => {
  if (checkAlph("Sheep", Ani)) {
    marksAdd(0.70);
  }
  audio9.play();
});

document.getElementById("Goat").addEventListener("click", () => {
  if (checkAlph("Goat", Ani)) {
    marksAdd(0.70);
  }
  audio10.play();
});

document.getElementById("Donkey").addEventListener("click", () => {
  if (checkAlph("Donkey", Ani)) {
    marksAdd(0.70);
  }
  audio11.play();
});

document.getElementById("Cow").addEventListener("click", () => {
  if (checkAlph("Cow", Ani)) {
    marksAdd(1.34);
  }
  audio12.play();
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
  fetch('/numbers', {
    method: 'POST',
    body: JSON.stringify({marks}),
    headers: {'Content-type': 'application/json'},
  })

  sessionStorage.setItem('english', marks) // sessionStorage.setItem('english', marks.toFixed(2))
}