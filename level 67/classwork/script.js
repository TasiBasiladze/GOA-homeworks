const form = document.getElementById("form");
const btn = document.getElementById("submit");
const radio1 = document.getElementById("option1");
const radio2 = document.getElementById("option2");
const checkbox = document.getElementById("checkbox");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = form.elements.name;
    const lastname = form.elements.lastname;
    const email = form.elements.email;
    const message = form.elements.message;

    let isValid = true;

    if (name.value === "") {
        name.style.borderColor = "red";
        isValid = false;
    } else {
        name.style.borderColor = "black";
    }

    if (lastname.value === "") {
        lastname.style.borderColor = "red";
        isValid = false;
    } else {
        lastname.style.borderColor = "black";
    }

    if (email.value === "") {
        email.style.borderColor = "red";
        isValid = false;
    } else {
        email.style.borderColor = "black";
    }

    if (message.value === "") {
        message.style.borderColor = "red";
        isValid = false;
    } else {
        message.style.borderColor = "black";
    }

    if (isValid && checkbox.checked && (radio1.checked || radio2.checked)) {
        alert("Thanks for completeing the form! We will be in touch soon");
    }
});
