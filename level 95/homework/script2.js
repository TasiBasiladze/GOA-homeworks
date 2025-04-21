const ch1 = document.getElementById("ch1");
const ch2 = document.getElementById("ch2");
const ch3 = document.getElementById("ch3");

const saved = localStorage.getItem("libraryBooks");
const books = saved ? JSON.parse(saved) : [];

books.forEach(book => {
    ch1.innerHTML += `<p>${book.title}</p>`;
    ch2.innerHTML += `<p>${book.author}</p>`;
    ch3.innerHTML += `<p>${book.year}</p>`;
});