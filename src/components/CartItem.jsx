export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem
}) {

  const subtotal = (Number(item.price) || 0) * (Number(item.quantity) || 1);

  return (

    <div className="flex gap-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded p-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain"
      />

      <div className="flex flex-col flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">Price: ${item.price}</p>
        <div className="flex items-center gap-3 mt-2">

          <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>

        </div>

        <p className="mt-2 font-semibold">
          Subtotal: ${subtotal.toFixed(2)}
        </p>

        <button onClick={() => removeItem(item.id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded w-fit"
        >
          Remove
        </button>
      </div>
    </div>
  );
}