import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState(""); 

  async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  }

  async function addProduct(e) {
    e.preventDefault();
    const newProduct = { name };

    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      fetchProducts(); 
      setName(""); 
    }
  }

  return (
    <>
      <button onClick={fetchProducts}>View all products</button>

      <form onSubmit={addProduct}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {products.length > 0 &&
        products.map((product, index) => (
          <div key={index}>
            <p>{product.name}</p>
          </div>
        ))}
    </>
  );
}

export default App;