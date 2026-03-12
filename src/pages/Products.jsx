import { useEffect, useState } from "react";
import "../styles/products.css";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    const addToCart = (product) => {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart");
    };

    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
    }

    return (

        <div className="products-container">

            <h1>Product Listing</h1>

            <div className="product-grid">

                {products.map((product) => (

                    <div key={product.id} className="product-card">

                        <img src={product.image} alt={product.title} />

                        <h3>{product.title}</h3>

                        <p className="price">${product.price}</p>

                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}