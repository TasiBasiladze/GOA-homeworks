const form = document.getElementById("form");
let arr = [];
let bool = true;
let i = 1

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const pass = form.elements.pass.value;
    if (arr.length === 0){
        localStorage.setItem("users", JSON.stringify([]));
    }
    const arr1 = JSON.parse(localStorage.getItem("users"));
    arr.push([name, email, pass]);
    arr1.push([name, email, pass]);
    localStorage.setItem(`user${i}`, JSON.stringify(arr1))
    i++;
})