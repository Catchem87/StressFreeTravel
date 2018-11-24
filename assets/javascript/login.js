
function login(){
    loginFirstName = first_name.value
    loginLastName = last_name.value
    loginEmail = email.value

    localStorage.setItem("First Name", loginFirstName);
    localStorage.setItem("Last Name", loginLastName);
    localStorage.setItem("Email", loginEmail);
}

const btnLoginSubmit = document.getElementById("loginSubmit")

btnLoginSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    login();
    window.location = "index.html"
});



