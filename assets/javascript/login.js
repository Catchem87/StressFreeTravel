const btnLoginSubmit = document.getElementById("login-submit")

function login(){
    loginFirstName = first_name.value
    loginLastName = last_name.value
    loginEmail = email.value

    localStorage.setItem("First Name", loginFirstName);
    localStorage.setItem("Last Name", loginLastName);
    localStorage.setItem("Email", loginEmail);
}


$('#login-submit').on('click', function(e){
    e.preventDefault();
    login();
    window.location = "index.html"
});



