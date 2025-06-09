function Product({ productInfo }) {
    return (
        <div>
            <img src={productInfo.img} alt="product" />
            <h1>{productInfo.title}</h1>
            <h3>{productInfo.description}</h3>
            <p>{productInfo.price}</p>
            <button>Buy</button>
        </div>
    );
}


export default Product