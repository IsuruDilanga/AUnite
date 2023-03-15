var total = document.getElementById("total").value;
// sessionStorage.setItem('total', total)

let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
    profileMenu.classList.toggle("open-menu");

}

precentage = total+"%";
let view = document.getElementById('myBar');
view.style.width= precentage;

view.innerHTML = precentage;
