var marks = sessionStorage.getItem('etiquette')
marks = parseInt(marks);
var social = [];

document.getElementById("Greet").addEventListener("click", () => {
    if (checkAlph("Greet", social)) {
        marksAdd(1.5);
    }
    console.log("click");
});

document.getElementById("Share").addEventListener("click", () => {
    if (checkAlph("Share", social)) {
        marksAdd(1.5);
    }
});

document.getElementById("Listen").addEventListener("click", () => {
    if (checkAlph("Listen", social)) {
        marksAdd(1.5);
    }
});

document.getElementById("Eye").addEventListener("click", () => {
    if (checkAlph("Eye", social)) {
        marksAdd(1.5);
    }
});

document.getElementById("Respect").addEventListener("click", () => {
    if (checkAlph("Respect", social)) {
        marksAdd(1.5);
    }
});

document.getElementById("Empathy").addEventListener("click", () => {
    if (checkAlph("Empathy", social)) {
        marksAdd(1.5);
    }    
});

document.getElementById("Cooperate").addEventListener("click", () => {
    if (checkAlph("Cooperate", social)) {
        marksAdd(1.5);
    }   
});

document.getElementById("Help").addEventListener("click", () => {
    if (checkAlph("Help", social)) {
        marksAdd(1.5);
    }    
});

document.getElementById("Friendly").addEventListener("click", () => {
    if (checkAlph("Friendly", social)) {
        marksAdd(1.5);
    }   
});

document.getElementById("Knock").addEventListener("click", () => {
    if (checkAlph("Knock", social)) {
        marksAdd(1.5);
    }   
});

document.getElementById("Yell").addEventListener("click", () => {
    if (checkAlph("Yell", social)) {
        marksAdd(1.5);
    }    
});

document.getElementById("Push").addEventListener("click", () => {
    if (checkAlph("Push", social)) {
        marksAdd(0.50);
    }    
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
    fetch('/socialManner', {
      method: 'POST',
      body: JSON.stringify({marks}),
      headers: {'Content-type': 'application/json'},
    })
  
    sessionStorage.setItem('etiquette', marks) // sessionStorage.setItem('english', marks.toFixed(2))
}