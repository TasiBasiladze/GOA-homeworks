const advices = document.getElementById("advices");
fetch("https://api.adviceslip.com/advice")
    .then(response => {
        return response.json()
    })
    .then(res => {
        advices.innerHTML = `
            <p style="text-align: center; letter-spacing: 4px; color: rgb(83, 255, 169)">ADVICE #${res.slip.id}</p>
            <p style="text-align: center; margin-top: 20px; font-size: 23px; color: rgb(207, 228, 233);">"${res.slip.advice}"</p>
        `
    })
    .catch(err => {
        advices.innerHTML = `<p>No advice found. Try again!</p>`
        console.log(err);
    })