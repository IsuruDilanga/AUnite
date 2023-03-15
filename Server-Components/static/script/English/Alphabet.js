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
const audio24 = document.getElementById("audio24");
const audio25 = document.getElementById("audio25");
const audio26 = document.getElementById("audio26");

var marks = sessionStorage.getItem('english')
marks = parseInt(marks);
var alph = [];
// var marks = 0;

document.getElementById("A").addEventListener("click", () => {
  if (checkAlph("A", alph)) {
    marksAdd(0.31);
  }
  audio1.play();
});

document.getElementById("B").addEventListener("click", () => {
  if (checkAlph("B", alph)) {
    marksAdd(0.31);
  }
  audio2.play();
});

document.getElementById("C").addEventListener("click", () => {
  if (checkAlph("C", alph)) {
    marksAdd(0.31);
  }
  audio3.play();
});

document.getElementById("D").addEventListener("click", () => {
  if (checkAlph("D", alph)) {
    marksAdd(0.31);
  }
  audio4.play();
});

document.getElementById("E").addEventListener("click", () => {
  if (checkAlph("E", alph)) {
    marksAdd(0.31);
  }
  audio5.play();
});

document.getElementById("F").addEventListener("click", () => {
  if (checkAlph("F", alph)) {
    marksAdd(0.31);
  }
  audio6.play();
});

document.getElementById("G").addEventListener("click", () => {
  if (checkAlph("G", alph)) {
    marksAdd(0.31);
  }
  audio7.play();
});

document.getElementById("H").addEventListener("click", () => {
  if (checkAlph("H", alph)) {
    marksAdd(0.31);
  }
  audio8.play();
});

document.getElementById("I").addEventListener("click", () => {
  if (checkAlph("I", alph)) {
    marksAdd(0.31);
  }
  audio9.play();
});

document.getElementById("J").addEventListener("click", () => {
  if (checkAlph("J", alph)) {
    marksAdd(0.31);
  }
  audio10.play();
});

document.getElementById("K").addEventListener("click", () => {
  if (checkAlph("K", alph)) {
    marksAdd(0.31);
  }
  audio11.play();
});

document.getElementById("L").addEventListener("click", () => {
  if (checkAlph("L", alph)) {
    marksAdd(0.31);
  }
  audio12.play();
});

document.getElementById("M").addEventListener("click", () => {
  if (checkAlph("M", alph)) {
    marksAdd(0.31);
  }
  audio13.play();
});

document.getElementById("N").addEventListener("click", () => {
  if (checkAlph("N", alph)) {
    marksAdd(0.31);
  }
  audio14.play();
});

document.getElementById("O").addEventListener("click", () => {
  if (checkAlph("O", alph)) {
    marksAdd(0.31);
  }
  audio15.play();
});

document.getElementById("P").addEventListener("click", () => {
  if (checkAlph("P", alph)) {
    marksAdd(0.31);
  }
  audio16.play();
});

document.getElementById("Q").addEventListener("click", () => {
  if (checkAlph("Q", alph)) {
    marksAdd(0.31);
  }
  audio17.play();
});

document.getElementById("R").addEventListener("click", () => {
  if (checkAlph("R", alph)) {
    marksAdd(0.31);
  }
  audio18.play();
});

document.getElementById("S").addEventListener("click", () => {
  if (checkAlph("S", alph)) {
    marksAdd(0.31);
  }
  audio19.play();
});

document.getElementById("T").addEventListener("click", () => {
  if (checkAlph("T", alph)) {
    marksAdd(0.31);
  }
  audio20.play();
});

document.getElementById("U").addEventListener("click", () =>{
  if (checkAlph("U", alph)) {
    marksAdd(0.31);
  }
  audio21.play();
});

document.getElementById("V").addEventListener("click", () => {
  if (checkAlph("V", alph)) {
    marksAdd(0.31);
  }
  audio22.play();
});

document.getElementById("W").addEventListener("click", () => {
  if (checkAlph("W", alph)) {
    marksAdd(0.31);
  }
  audio23.play();
});

document.getElementById("X").addEventListener("click", () => {
  if (checkAlph("X", alph)) {
    marksAdd(0.31);
  }
  audio24.play();
});

document.getElementById("Y").addEventListener("click", () => {
  if (checkAlph("Y", alph)) {
    marksAdd(0.31);
  }
  audio25.play();
});

document.getElementById("Z").addEventListener("click", () => {
  if (checkAlph("Z", alph)) {
    marksAdd(0.55);
  };
  audio26.play();
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

// Create function and add
function marksAdd(x){
  marks += x;
  
  console.log(marks.toFixed(2))
  fetch('/alphabet', {
    method: 'POST',
    body: JSON.stringify({marks}),
    headers: {'Content-type': 'application/json'},
  })

  sessionStorage.setItem('english', marks)
  // sessionStorage.setItem('english', marks.toFixed(2))
}

