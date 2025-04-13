const form = document.getElementById("form");
let arr = [];
let bool = true;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const pass = form.elements.pass.value;

    if (arr.length === 0){
        localStorage.setItem("users", JSON.stringify([]));
    }

    const arr1 = JSON.parse(localStorage.getItem("users"));
    for (let i of arr1){
        if (email === i[1]){
            bool = false
        }
    }

    if (bool){
        arr.push([name, email, pass]);
        arr1.push([name, email, pass]);
        localStorage.setItem("users", JSON.stringify(arr1))
    }
    else{
        console.log("Account with this email was already created");
        bool = true
    }
})