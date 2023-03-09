let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
  profileMenu.classList.toggle("open-menu");
}

precentage = "20%";
let view = document.getElementById('myBar');
view.style.width= precentage;

view.innerHTML = precentage;
