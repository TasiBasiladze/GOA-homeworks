const form = document.getElementById("registrationForm");
const box = document.getElementById("agree")
form.addEventListener("submit", function(e){
    e.preventDefault();

    if (box.checked) {
        console.log(form.elements.name.value);
        console.log(form.elements.email.value);
        console.log(form.elements.password.value);
        console.log(form.elements.gender.value);
        console.log(form.elements.agree.value);
        form.reset()
        alert("Registration was succsesful!")
    } else {
        alert("You have to agree with our rules for succcesful registration")
    }
})


    
