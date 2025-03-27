const parent = document.getElementById("parent");
const parent2 = document.getElementById("parent2");
fetch("https://fakestoreapi.com/products/2")
    .then((response) => {
        return response.json()
    })
    .then((res) => {
        parent.innerHTML = `
            <p>Title: ${res.title}</p>
            <p>Price: ${res.price}</p>
            <p>Description: ${res.description}</p>
            <img src="${res.image}" width=200/>
        `
    })

    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json()
    })
    .then((res) => {
        res.forEach(product => {
                parent2.innerHTML += `
                <p>Title: ${product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: ${product.description}</p>
                <img src="${product.image}" width=200/>
            `
        
        })
    })