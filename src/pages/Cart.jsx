import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";

export default function Cart() {

  const { cart, increaseQty, decreaseQty, removeItem, cartTotal } = useCart();

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Your Cart
        </h1>

        {cart.length === 0 && (
          <p className="text-gray-600">Cart is empty</p>
        )}

        <div className="flex flex-col gap-4">

          {cart.map((item) => (

            <CartItem
              key={item.id}
              item={item}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />

          ))}

        </div>

        {cart.length > 0 && (

          <div className="mt-6 text-right">

            <h2 className="text-xl font-bold">
              Total: ${cartTotal.toFixed(2)}
            </h2>

          </div>

        )}

      </div>

    </div>
  );
}