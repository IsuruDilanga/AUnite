var second = document.getElementById("secondAge");
var third = document.getElementById("thirdAge");


var age = sessionStorage.getItem('Age');
console.log(age);

if (age == "5-7"){
    second.style.display = "none";
    third.style.display = "none";
} 

if (age == "7-10"){
    third.style.display = "none";
}