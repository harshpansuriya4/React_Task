export default function ProductCard({ product, addToCart }) {

  return (

    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg p-4 flex flex-col items-center">

      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-3"
      />

      <h3 className="text-sm font-semibold text-center mb-2">
        {product.title}
      </h3>

      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>

    </div>

  );
}