import { useState, useEffect } from "react";

export default function useCart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

  }, []);

  const updateCart = (newCart) => {

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (id) => {

    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    updateCart(updated);
  };

  const decreaseQty = (id) => {

    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    updateCart(updated);
  };

  const removeItem = (id) => {

    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const cartTotal = cart.reduce((total, item) => {

    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;

    return total + price * qty;

  }, 0);

  return {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    cartTotal
  };
}