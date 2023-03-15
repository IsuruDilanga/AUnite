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
const audio17 = document.getElementById("audio17");
const audio18 = document.getElementById("audio18");
const audio19 = document.getElementById("audio19");
const audio20 = document.getElementById("audio20");
const audio21 = document.getElementById("audio21");
const audio22 = document.getElementById("audio22");
const audio23 = document.getElementById("audio23");

var marks = sessionStorage.getItem('english')
marks = parseInt(marks);
var Fruits = [];

document.getElementById("Apple").addEventListener("click", () => {
  if (checkAlph("Apple", Fruits)) {
    marksAdd(0.37);
  }
  audio1.play();
});

document.getElementById("Avocado").addEventListener("click", () => {
  if (checkAlph("Avocado", Fruits)) {
    marksAdd(0.37);
  }
  audio2.play();
});

document.getElementById("Banana").addEventListener("click", () => {
  if (checkAlph("Banana", Fruits)) {
    marksAdd(0.37);
  }
  audio3.play();
});

document.getElementById("Blueberry").addEventListener("click", () => {
  if (checkAlph("Blueberry", Fruits)) {
    marksAdd(0.37);
  }
  audio4.play();
});

document.getElementById("Cherry").addEventListener("click", () => {
  if (checkAlph("Cherry", Fruits)) {
    marksAdd(0.37);
  }
  audio5.play();
});

document.getElementById("Dragon Fruit").addEventListener("click", () => {
  if (checkAlph("Dragon Fruit", Fruits)) {
    marksAdd(0.37);
  }
  audio6.play();
});

document.getElementById("Durian").addEventListener("click", () => {
  if (checkAlph("Durian", Fruits)) {
    marksAdd(0.37);
  }
  audio7.play();
});

document.getElementById("Grape").addEventListener("click", () => {
  if (checkAlph("Grape", Fruits)) {
    marksAdd(0.37);
  }
  audio8.play();
});

document.getElementById("Guava").addEventListener("click", () => {
  if (checkAlph("Guava", Fruits)) {
    marksAdd(0.37);
  }
  audio9.play();
});

document.getElementById("Kiwi").addEventListener("click", () => {
  if (checkAlph("Kiwi", Fruits)) {
    marksAdd(0.37);
  }
  audio10.play();
});

document.getElementById("Lemon").addEventListener("click", () => {
  if (checkAlph("Lemon", Fruits)) {
    marksAdd(0.37);
  }
  audio11.play();
});

document.getElementById("Mango").addEventListener("click", () => {
  if (checkAlph("Mango", Fruits)) {
    marksAdd(0.37);
  }
  audio12.play();
});

document.getElementById("Mangosteen").addEventListener("click", () => {
  if (checkAlph("Mangosteen", Fruits)) {
    marksAdd(0.37);
  }
  audio13.play();
});

document.getElementById("Orange").addEventListener("click", () => {
  if (checkAlph("Orange", Fruits)) {
    marksAdd(0.37);
  }
  audio14.play();
});

document.getElementById("Papaya").addEventListener("click", () => {
  if (checkAlph("Papaya", Fruits)) {
    marksAdd(0.37);
  }
  audio15.play();
});

document.getElementById("Peach").addEventListener("click", () => {
  if (checkAlph("Peach", Fruits)) {
    marksAdd(0.37);
  }
  audio16.play();
});

document.getElementById("Pineapple").addEventListener("click", () => {
  if (checkAlph("Pineapple", Fruits)) {
    marksAdd(0.37);
  }
  audio17.play();
});

document.getElementById("Pomegranate").addEventListener("click", () => {
  if (checkAlph("Pomegranate", Fruits)) {
    marksAdd(0.37);
  }
  audio18.play();
});

document.getElementById("Rambutan").addEventListener("click", () => {
  if (checkAlph("Rambutan", Fruits)) {
    marksAdd(0.37);
  }
  audio19.play();
});

document.getElementById("Raspberry").addEventListener("click", () => {
  if (checkAlph("Raspberry", Fruits)) {
    marksAdd(0.37);
  }
  audio.play();
});

document.getElementById("Star Fruit").addEventListener("click", () => {
  if (checkAlph("Star Fruit", Fruits)) {
    marksAdd(0.37);
  }
  audio21.play();
});

document.getElementById("Strawberry").addEventListener("click", () => {
  if (checkAlph("Strawberry", Fruits)) {
    marksAdd(0.37);
  }
  audio22.play();
});

document.getElementById("Watermelon").addEventListener("click", () => {
  if (checkAlph("Watermelon", Fruits)) {
    marksAdd(0.20);
  }
  audio23.play();
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
  fetch('/fruits', {
    method: 'POST',
    body: JSON.stringify({marks}),
    headers: {'Content-type': 'application/json'},
  })

  sessionStorage.setItem('english', marks) // sessionStorage.setItem('english', marks.toFixed(2))
}

