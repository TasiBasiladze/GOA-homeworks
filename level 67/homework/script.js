const button = document.getElementById("button");
const mail = document.getElementById("email");
const validation = document.getElementById("valid");
const parent = document.getElementById("parent");
const parent2 = document.getElementById("parent2");
function isValidGmail(email) {
    const gmailRegex = /^[a-zA-Z0-9]+([._][a-zA-Z0-9]+)*@gmail\.com$/;
    return gmailRegex.test(email);
}
button.addEventListener("click", function(){
    if(isValidGmail(mail.value)){
        parent.style.display = "none";
        parent2.style.display = "block";
    } else{
        mail.style.backgroundColor = "rgb(255, 232, 230)";
        mail.style.border = "solid 1px rgb(212, 99, 93)";
        validation.style.display = "block";
        mail.style.color = "rgb(212, 99, 93)"
    }
})