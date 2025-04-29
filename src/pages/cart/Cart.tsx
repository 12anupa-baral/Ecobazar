import axios from "axios";
import { Delete, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("tokenHoYo");
      const response = await axios.get("http://localhost:3001/api/cart", {
        headers: {
          Authorization: `${token}`,
        },
      });
      setCartItems(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching cart items", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleQuantityChange = (type: string) => {
    // Handle logic here
  };

  return (
    <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-[#191919] dark:text-white text-2xl sm:text-3xl font-semibold">
        My Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row items-start mt-8 gap-6">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3 bg-white p-4 rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-center border-b border-gray-400 text-[#7f7f7f] font-medium uppercase">
                <th className="text-left px-2 py-2">Product</th>
                <th className="px-2 py-2">Price</th>
                <th className="px-2 py-2">Quantity</th>
                <th className="px-2 py-2">Subtotal</th>
                <th className="px-2 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cart, id) => (
                <tr key={id} className="text-center border-b border-gray-200">
                  <td className="px-2 py-4 flex-1 sm:flex items-center gap-4">
                    <img
                      src={`http://localhost:3001/uploads/${cart?.Product?.productImageUrl}`}
                      alt={cart?.Product?.productName}
                      className="w-[80px] h-[80px] object-cover rounded"
                    />
                    <span>{cart?.Product?.productName}</span>
                  </td>
                  <td className="px-2 py-4">${cart?.Product?.productPrice}</td>
                  <td className="px-2 py-4">
                    <div className="flex items-center justify-center border border-gray-300 rounded-full w-fit px-4 py-1">
                      <Plus
                        className="size-4 cursor-pointer"
                        onClick={() => handleQuantityChange("increment")}
                      />
                      <span className="mx-3">{cart?.quantity}</span>
                      <Minus
                        className="size-4 cursor-pointer"
                        onClick={() => handleQuantityChange("decrement")}
                      />
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    ${(cart?.Product?.productPrice * cart?.quantity).toFixed(2)}
                  </td>
                  <td className="px-2 py-4">
                    <Delete className="size-4 text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-400">
                <td colSpan={3} className="py-4">
                  <Link
                    to="/products"
                    className="inline-block px-6 py-3 bg-gray-200 rounded-full text-sm font-semibold text-gray-700"
                  >
                    Return to Shop
                  </Link>
                </td>
                <td colSpan={2} className="py-4 text-right">
                  <button className="px-6 py-3 bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
                    Update Cart
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Right: Cart Summary */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg p-6">
          <h2 className="text-[#191919] mb-4 text-xl font-medium">
            Cart Total
          </h2>

          <div className="flex justify-between py-2">
            <span className="text-gray-600">Total:</span>
            <span className="font-semibold text-[#191919]">$84.00</span>
          </div>
          <div className="flex justify-between border-t py-2">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-medium text-[#191919]">Free</span>
          </div>
          <div className="flex justify-between border-t py-2">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium text-[#191919]">$84.00</span>
          </div>

          <button className="w-full text-white mt-5 px-6 py-3 bg-[#00b206] rounded-full text-base font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Coupon Code */}
      <div className="mt-6 bg-white rounded-lg border border-[#e6e6e6] p-5 flex flex-col lg:flex-row gap-4">
        <h3 className="text-[#191919] text-xl font-medium lg:w-1/4">
          Coupon Code
        </h3>
        <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-4">
          <input
            placeholder="Enter code"
            type="text"
            className="flex-1 px-4 py-3 rounded-full border text-sm outline-none"
          />
          <button className="px-6 py-3 bg-[#333333] rounded-full text-white text-sm font-semibold">
            Apply Coupon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
