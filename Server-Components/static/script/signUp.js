function verifyPassword(){
    let pw = document.getElementById("pass").value;
    let rpw = document.getElementById("repass").value;

    if(pw != rpw){
        document.getElementById("message").innerHTML = "Passwords do not match!";
        return false;
    } else {
        return true;
    }
}
