
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchLink() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  }

  return (
    <>
      <button onClick={fetchLink}>View all products</button>

      {products.length > 0 &&
        products.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
    </>
  );
}

export default App;
