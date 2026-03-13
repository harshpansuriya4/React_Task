import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

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

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart");
  };

  if (loading) return <Loader />;

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Product Listing
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />

          ))}

        </div>

      </div>

    </div>

  );
}