class Library {
    constructor(title, author, year, read = false) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.read = read;
    }
}
  
  const books = [
    new Library("Little Prince", "Frances Hodgson Burnett", 1905, false),
    new Library("They Both Die at the End", "Adam Silvera", 2017, false),
    new Library("If Cats Disappeared from the World", "Genki Kawamura", 2016, false),
    new Library("A Walk To Remember", "Nicholas Sparks", 1999, false),
    new Library("451 fahrenheit", "Ray Bradbury", 1953, false)
];
  
for (let i = 0; i < books.length; i++) {
    const button = document.getElementById(`b${i + 1}`);
    const remove = document.getElementById(`r${i + 1}`);
    const book = books[i];
    
    if (button) {
      button.addEventListener("click", () => {
        const saved = localStorage.getItem("libraryBooks");
        const library = saved ? JSON.parse(saved) : [];
        const alreadyExists = library.some(b => b.title === book.title);
        if (!alreadyExists) {
          library.push(book);
          localStorage.setItem("libraryBooks", JSON.stringify(library));
          alert(`You added "${book.title}" to your library!`);
        } else {
          alert(`"${book.title}" is already in your library.`);
        }
      });
    }
  
    if (remove) {
      remove.addEventListener("click", () => {
        let library = localStorage.getItem("libraryBooks") ? JSON.parse(localStorage.getItem("libraryBooks")) : [];
        const alreadyExists = library.some(b => b.title === book.title);
        if(alreadyExists){
            library = library.filter(b => b.title !== book.title);
            localStorage.setItem("libraryBooks", JSON.stringify(library));
            alert(`You removed "${book.title}" from your library.`);
        } else{
            alert(`You don't have "${book.title} in your library"`)
        }
      });
    }
}