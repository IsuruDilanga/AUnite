var marks = sessionStorage.getItem('etiquette')
marks = parseInt(marks);
var good = [];

document.getElementById("Clean").addEventListener("click", () => {
    if (checkAlph("Clean", good)) {
        marksAdd(1.5);
    }
    console.log("click");
});

document.getElementById("Please").addEventListener("click", () => {
    if (checkAlph("Please", good)) {
        marksAdd(1.5);
    }
});

document.getElementById("Welcome").addEventListener("click", () => {
    if (checkAlph("Welcome", good)) {
        marksAdd(1.5);
    }
});

document.getElementById("Kind").addEventListener("click", () => {
    if (checkAlph("Kind", good)) {
        marksAdd(1.5);
    }
});

document.getElementById("Sorry").addEventListener("click", () => {
    if (checkAlph("Sorry", good)) {
        marksAdd(1.5);
    }
});

document.getElementById("ThankYou").addEventListener("click", () => {
    if (checkAlph("ThankYou", good)) {
        marksAdd(1.5);
    }    
});

document.getElementById("NeverLie").addEventListener("click", () => {
    if (checkAlph("NeverLie", good)) {
        marksAdd(1.5);
    }   
});

document.getElementById("FollowRules").addEventListener("click", () => {
    if (checkAlph("FollowRules", good)) {
        marksAdd(1.5);
    }    
});

document.getElementById("Hello").addEventListener("click", () => {
    if (checkAlph("Hello", good)) {
        marksAdd(1.5);
    }   
});

document.getElementById("Bye").addEventListener("click", () => {
    if (checkAlph("Bye", good)) {
        marksAdd(1.5);
    }   
});

document.getElementById("Morning").addEventListener("click", () => {
    if (checkAlph("Morning", good)) {
        marksAdd(1.5);
    }    
});

document.getElementById("Smile").addEventListener("click", () => {
    if (checkAlph("Smile", good)) {
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
    fetch('/goodManner', {
      method: 'POST',
      body: JSON.stringify({marks}),
      headers: {'Content-type': 'application/json'},
    })
  
    sessionStorage.setItem('etiquette', marks) // sessionStorage.setItem('english', marks.toFixed(2))
}