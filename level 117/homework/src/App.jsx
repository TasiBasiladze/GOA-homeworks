import { useState } from "react";

const fetchData = async (book) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${book}`);
        const result = await response.json();
        console.log(result.items);
        return result.items;
    } catch (error) {
        console.log(error);
    }
}

const App = () => {
    const [booksList, setBooksList] = useState([]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetchData(e.target.book.value);
            setBooksList(result);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="book" required />
                <button>Search</button>
            </form>
            <section>
                <h1>Books List</h1>
                {
                    booksList.map(curValue => {
                        return (
                            <div key={curValue.id}>
                                <img src={curValue.volumeInfo.imageLinks?.smallThumbnail} />
                                <h3>{curValue.volumeInfo.title}</h3>
                                <p>{curValue.volumeInfo.description}</p>
                            </div>
                        );
                    })
                }
            </section>
        </main>
    );
}

export default App;