//task 3
let inp = document.getElementById("myForm");

inp.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(inp.elements.name.value);
    console.log(inp.elements.email.value);
    console.log(inp.elements.password.value);
    inp.reset()
})
