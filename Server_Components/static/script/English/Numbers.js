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
const audio27 = document.getElementById("audio27");
const audio28 = document.getElementById("audio28");
const audio29 = document.getElementById("audio29");
const audio30 = document.getElementById("audio30");
const audio31 = document.getElementById("audio31");
const audio32 = document.getElementById("audio32");
const audio33 = document.getElementById("audio33");
const audio34 = document.getElementById("audio34");
const audio35 = document.getElementById("audio35");
const audio36 = document.getElementById("audio36");
const audio37 = document.getElementById("audio37");
const audio38 = document.getElementById("audio38");
const audio39 = document.getElementById("audio39");
const audio40 = document.getElementById("audio40");

var marks = sessionStorage.getItem('english')
marks = parseInt(marks);
var Numbs = [];

document.getElementById("One").addEventListener("click", () => {
  if (checkAlph("One", Numbs)) {
    marksAdd(0.20);
  }
  audio1.play();
});

document.getElementById("Two").addEventListener("click", () => {
  if (checkAlph("Two", Numbs)) {
    marksAdd(0.20);
  }
  audio2.play();
});

document.getElementById("Three").addEventListener("click", () => {
  if (checkAlph("Three", Numbs)) {
    marksAdd(0.20);
  }
  audio3.play();
});

document.getElementById("Four").addEventListener("click", () => {
  if (checkAlph("Four", Numbs)) {
    marksAdd(0.20);
  }
  audio4.play();
});

document.getElementById("Five").addEventListener("click", () => {
  if (checkAlph("Five", Numbs)) {
    marksAdd(0.20);
  }
  audio5.play();
});

document.getElementById("Six").addEventListener("click", () => {
  if (checkAlph("Six", Numbs)) {
    marksAdd(0.20);
  }
  audio6.play();
});

document.getElementById("Seven").addEventListener("click", () => {
  if (checkAlph("Seven", Numbs)) {
    marksAdd(0.20);
  }
  audio7.play();
});

document.getElementById("Eight").addEventListener("click", () => {
  if (checkAlph("Eight", Numbs)) {
    marksAdd(0.20);
  }
  audio8.play();
});

document.getElementById("Nine").addEventListener("click", () => {
  if (checkAlph("Nine", Numbs)) {
    marksAdd(0.20);
  }
  audio9.play();
});

document.getElementById("Ten").addEventListener("click", () => {
  if (checkAlph("Ten", Numbs)) {
    marksAdd(0.20);
  }
  audio10.play();
});

document.getElementById("Eleven").addEventListener("click", () => {
  if (checkAlph("Eleven", Numbs)) {
    marksAdd(0.20);
  }
  audio11.play();
});

document.getElementById("Twelve").addEventListener("click", () => {
  if (checkAlph("Twelve", Numbs)) {
    marksAdd(0.20);
  }
  audio12.play();
});

document.getElementById("Thirteen").addEventListener("click", () => {
  if (checkAlph("Thirteen", Numbs)) {
    marksAdd(0.20);
  }
  audio13.play();
});

document.getElementById("Fourteen").addEventListener("click", () => {
  if (checkAlph("Fourteen", Numbs)) {
    marksAdd(0.20);
  }
  audio14.play();
});

document.getElementById("Fifteen").addEventListener("click", () => {
  if (checkAlph("Fifteen", Numbs)) {
    marksAdd(0.20);
  }
  audio15.play();
});

document.getElementById("Sixteen").addEventListener("click", () => {
  if (checkAlph("Sixteen", Numbs)) {
    marksAdd(0.20);
  }
  audio16.play();
});

document.getElementById("Seventeen").addEventListener("click", () => {
  if (checkAlph("Seventeen", Numbs)) {
    marksAdd(0.20);
  }
  audio17.play();
});

document.getElementById("Eighteen").addEventListener("click", () => {
  if (checkAlph("Eighteen", Numbs)) {
    marksAdd(0.20);
  }
  audio18.play();
});

document.getElementById("Nineteen").addEventListener("click", () => {
  if (checkAlph("Nineteen", Numbs)) {
    marksAdd(0.20);
  }
  audio19.play();
});

document.getElementById("Twenty").addEventListener("click", () => {
  if (checkAlph("Twenty", Numbs)) {
    marksAdd(0.20);
  }
  audio20.play();
});

document.getElementById("Twenty-one").addEventListener("click", () => {
  if (checkAlph("Twenty-one", Numbs)) {
    marksAdd(0.20);
  }
  audio21.play();
});
  
document.getElementById("Twenty-two").addEventListener("click", () => {
  if (checkAlph("Twenty-two", Numbs)) {
    marksAdd(0.20);
  }
  audio22.play();
});
  
document.getElementById("Twenty-three").addEventListener("click", () => {
  if (checkAlph("Twenty-three", Numbs)) {
    marksAdd(0.20);
  }
  audio23.play();
});
  
document.getElementById("Twenty-four").addEventListener("click", () => {
  if (checkAlph("Twenty-four", Numbs)) {
    marksAdd(0.20);
  }
  audio24.play();
});
  
document.getElementById("Twenty-five").addEventListener("click", () => {
  if (checkAlph("Twenty-five", Numbs)) {
    marksAdd(0.20);
  }
  audio25.play();
});
  
document.getElementById("Twenty-six").addEventListener("click", () => {
  if (checkAlph("Twenty-six", Numbs)) {
    marksAdd(0.54);
  }
  audio26.play();
});
  
document.getElementById("Twenty-seven").addEventListener("click", () => {
  if (checkAlph("Twenty-seven", Numbs)) {
    marksAdd(0.20);
  }
  audio27.play();
});
  
document.getElementById("Twenty-eight").addEventListener("click", () => {
  if (checkAlph("Twenty-eight", Numbs)) {
    marksAdd(0.20);
  }
  audio28.play();
});
  
document.getElementById("Twenty-nine").addEventListener("click", () => {
  if (checkAlph("Twenty-nine", Numbs)) {
    marksAdd(0.20);
  }
  audio29.play();
});
  
document.getElementById("Thirty").addEventListener("click", () => {
  if (checkAlph("Thirty", Numbs)) {
    marksAdd(0.20);
  }
  audio30.play();
});
  
document.getElementById("Thirty-one").addEventListener("click", () => {
  if (checkAlph("Thirty-one", Numbs)) {
    marksAdd(0.20);
  }
  audio31.play();
});
  
document.getElementById("Thirty-two").addEventListener("click", () => {
  if (checkAlph("Thirty-two", Numbs)) {
    marksAdd(0.20);
  }
  audio32.play();
});
  
document.getElementById("Thirty-three").addEventListener("click", () => {
  if (checkAlph("Thirty-three", Numbs)) {
    marksAdd(0.20);
  }
  audio33.play();
});
  
document.getElementById("Thirty-four").addEventListener("click", () => {
  if (checkAlph("Thirty-four", Numbs)) {
    marksAdd(0.20);
  }
  audio34.play();
});
  
document.getElementById("Thirty-five").addEventListener("click", () => {
  if (checkAlph("Thirty-five", Numbs)) {
    marksAdd(0.20);
  }
  audio35.play();
});
  
document.getElementById("Thirty-six").addEventListener("click", () => {
  if (checkAlph("Thirty-six", Numbs)) {
    marksAdd(0.20);
  }
  audio36.play();
});
  
document.getElementById("Thirty-seven").addEventListener("click", () => {
  if (checkAlph("Thirty-seven", Numbs)) {
    marksAdd(0.20);
  }
  audio37.play();
});
  
document.getElementById("Thirty-eight").addEventListener("click", () => {
  if (checkAlph("Thirty-eight", Numbs)) {
    marksAdd(0.20);
  }
  audio38.play();
});
  
document.getElementById("Thirty-nine").addEventListener("click", () => {
  if (checkAlph("Thirty-nine", Numbs)) {
    marksAdd(0.20);
  }
  audio39.play();
});
  
document.getElementById("Forty").addEventListener("click", () => {
  if (checkAlph("Forty", Numbs)) {
    marksAdd(0.20);
  }
  audio40.play();
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