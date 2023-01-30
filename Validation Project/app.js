var passwordField = document.getElementById("password");
var passError = document.getElementById("pass-error")

var emailField = document.getElementById("email");
var emailError = document.getElementById("email-error")

var rePass = document.getElementById("repassword");
var rePassError = document.getElementById("repass-error")

var options = document.getElementsByName("gender");
function handleForm(event) {
    event.preventDefault();
    var email = document.forms["frm"]["email"].value;
    var password = document.forms["frm"]["password"].value;
    var repassword = document.forms["frm"]["repassword"].value;
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        emailField.classList.add("border-red-500")
        emailError.classList.remove("hidden")
    }
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        passwordField.classList.add("border-red-500")
        passError.classList.remove("hidden")
        return false;
    }
    if(repassword !== password){
        rePass.classList.add("border-red-500")
        rePassError.classList.remove("hidden")
    }

}