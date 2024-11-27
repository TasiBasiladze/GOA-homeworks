const form = document.getElementById("form1");
form.addEventListener("click", function(e){
    e.preventDefault()
    console.log(form.elements.name.value);
})