const form = document.getElementById("form");
const libary = document.getElementById("libary");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.text.value;
    libary.innerHTML = '';
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`)
        .then(response => response.json())
        .then(res => {
            res.items.forEach(bookItem => {
                const book = bookItem.volumeInfo;
                libary.innerHTML += `
                    <p>title: ${book.title}</p>
                    <p>year: ${book.publishedDate}</p>
                    <p>description: ${book.description}</p>
                    <p>author: ${book.authors ? book.authors.join(", ") : "N/A"}</p>
                    <p>pages: ${book.pageCount ? book.pageCount : "N/A"}</p>
                    <p>photo: <img src="${book.imageLinks ? book.imageLinks.thumbnail : ''}" alt="Book Image"></p>
                `;
            });
        })
        .catch(error => {
            console.error("Error fetching books:", error);
            libary.innerHTML = "<p>Something went wrong.</p>";
        });
});
