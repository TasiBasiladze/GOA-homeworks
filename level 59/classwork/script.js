const form = document.getElementById('form');
const submit = document.getElementById('submit');

submit.disabled = true;

submit.addEventListener('click', function(e){
    e.preventDefault();

    const name = form.elements.name;
    const email = form.elements.email;
    const password = form.elements.password;

    if (name.value == ""){
        name.style.borderColor = "red";
    } else {
        name.style.borderColor = "black";
    }

    if (email.value == ""){
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "black";
    }

    if (password.value == ""){
        password.style.borderColor = "red";
    } else {
        password.style.borderColor = "black";
    }
})

form.elements.terms.addEventListener('click', function(){
    if (form.elements.terms.checked){
        submit.disabled = false; 
     } else {
         submit.disabled = true;
     }
})