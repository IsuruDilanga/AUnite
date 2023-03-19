var marks = sessionStorage.getItem('etiquette')
marks = parseInt(marks);
var table = [];

document.getElementById("Hands").addEventListener("click", () => {
    if (checkAlph("Hands", table)) {
        marksAdd(1.4);
    }
    console.log("click");
});

document.getElementById("Plate").addEventListener("click", () => {
    if (checkAlph("Plate", table)) {
        marksAdd(1.4);
    }
});

document.getElementById("Mouth").addEventListener("click", () => {
    if (checkAlph("Mouth", table)) {
        marksAdd(1.4);
    }
});

document.getElementById("healthy").addEventListener("click", () => {
    if (checkAlph("healthy", table)) {
        marksAdd(1.4);
    }
});

document.getElementById("Sit").addEventListener("click", () => {
    if (checkAlph("Sit", table)) {
        marksAdd(1.4);
    }
});

document.getElementById("junk").addEventListener("click", () => {
    if (checkAlph("junk", table)) {
        marksAdd(1.4);
    }    
});

document.getElementById("time").addEventListener("click", () => {
    if (checkAlph("time", table)) {
        marksAdd(1.4);
    }   
});

document.getElementById("Stand").addEventListener("click", () => {
    if (checkAlph("Stand", table)) {
        marksAdd(1.4);
    }    
});

document.getElementById("No").addEventListener("click", () => {
    if (checkAlph("No", table)) {
        marksAdd(1.4);
    }   
});

document.getElementById("Balance").addEventListener("click", () => {
    if (checkAlph("Balance", table)) {
        marksAdd(1.4);
    }   
});

document.getElementById("Munch").addEventListener("click", () => {
    if (checkAlph("Munch", table)) {
        marksAdd(1.4);
    }    
});

document.getElementById("Overeat").addEventListener("click", () => {
    if (checkAlph("Overeat", table)) {
        marksAdd(0.6);
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