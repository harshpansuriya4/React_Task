import { useState, useEffect } from "react";
import "../styles/cart.css";

export default function Cart() {

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
        const updated = cart.map(item => {
            if (item.id === id) {
                item.quantity += 1;
            }
            return item;
        });

        updateCart(updated);
    };

    const decreaseQty = (id) => {
        const updated = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });

        updateCart(updated);
    };

    const removeItem = (id) => {
        const updated = cart.filter(item => item.id !== id);
        updateCart(updated);
    };

    const cartTotal = cart.reduce((total, item) => {
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 1;

        return total + price * qty;
    }, 0);

    return (

        <div className="cart-container">

            <h1>Your Cart</h1>

            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map(item => {

                const subtotal = (Number(item.price) || 0) * (Number(item.quantity) || 1);

                return (

                    <div key={item.id} className="cart-item">

                        <img src={item.image} alt={item.title} />

                        <div className="cart-info">

                            <h3>{item.title}</h3>

                            <p>Price: ${item.price}</p>

                            <div className="qty">

                                <button onClick={() => decreaseQty(item.id)}>-</button>

                                <span>{item.quantity}</span>

                                <button onClick={() => increaseQty(item.id)}>+</button>

                            </div>

                            <p>Subtotal: ${subtotal.toFixed(2)}</p>

                            <button
                                className="remove"
                                onClick={() => removeItem(item.id)}
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                );

            })}

            <div className="cart-total">
                <h2>Total: ${cartTotal.toFixed(2)}</h2>
            </div>

        </div>

    );
}