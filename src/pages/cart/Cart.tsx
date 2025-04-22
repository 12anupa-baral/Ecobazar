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
      console.log("cartItems", response.data.data);
    } catch (error) {
      console.error("Error fetching cart items", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
    

  return (
    <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
      <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
        My Shopping Cart
      </h1>
      <div className="flex items-start mt-8 gap-6">
        <div className="bg-white p-4 w-[800px] rounded-xl">
          <table className="w-full bg-white rounded-xl">
            <thead>
              <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-[14px] tracking-wide">
                <th className="text-left px-2 py-2">Product</th>
                <th className="px-2 py-2">price</th>
                <th className="px-2 py-2">Quantity</th>
                <th className="px-2 py-2">Subtotal</th>
                <th className="w-7 px-2 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cart, id) => (
                <tr key={id} className="text-center">
                  <td className="px-2 py-2 text-left align-top">
                    <img
                      src={`http://localhost:3001/uploads/${cart?.Product?.productImageUrl}`}
                      alt={cart?.Product?.productName}
                      className="w-[100px] mr-2 inline-block h-[100px]"
                    />

                    <span>{cart?.Product?.productName}</span>
                  </td>
                  <td className="px-2 py-2">${cart?.Product?.productPrice}</td>
                  <td className="p-2  bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
                    <Plus
                      className="size-4 cursor-pointer"
                      onClick={() => handleQuantityChange("increment")}
                    />

                    <span className="w-10 text-center text-[#191919] text-base font-normal leading-normal">
                      {cart?.quantity}
                    </span>
                    <Minus
                      className="size-4 cursor-pointer"
                      onClick={() => handleQuantityChange("decrement")}
                    />
                  </td>
                  <td className="px-2 py-2">
                    ${(cart?.Product?.productPrice * cart?.quantity).toFixed(2)}
                  </td>
                  <td className="px-2 py-2">
                    {/* Delete Icon */}
                    <Delete className="size-4 text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="border-t border-gray-400">
                <td className="px-2 py-2" col-span="3">
                  <Link
                    to="/products"
                    className="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-[16px]"
                  >
                    Return to shop
                  </Link>
                </td>
                <td className="px-2 py-2" col-span="2">
                  <button className="px-8 py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-[16px]">
                    Update Cart
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="w-[424px] bg-white rounded-lg p-6">
          <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
            Cart Total
          </h2>
          <div className="w-[376px] py-3 justify-between items-center flex">
            <span className="text-[#4c4c4c] text-base font-normal leading-normal">
              Total:
            </span>
            <span className="text-[#191919] text-base font-semibold leading-tight">
              $84.00
            </span>
          </div>
          <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
            <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
              Shipping:
            </span>
            <span className="text-[#191919] text-sm font-medium leading-[21px]">
              Free
            </span>
          </div>
          <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
            <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
              Subtotal:
            </span>
            <span className="text-[#191919] text-sm font-medium leading-[21px]">
              $84.00
            </span>
          </div>
          <button className="w-[376px] text-white mt-5 px-10 py-4 bg-[#00b206] rounded-[44px] gap-4 text-base font-semibold leading-tight">
            Proceed to checkout
          </button>
        </div>
      </div>
      <div className="mt-6 p-5 w-[800px] bg-white rounded-lg border border-[#e6e6e6] justify-start items-center gap-6 inline-flex">
        <h3 className="text-[#191919] w-1/4 text-xl font-medium classNameName leading-[30px]">
          Coupon Code
        </h3>
        <div className="w-full border border-[#e6e6e6]">
          <input
            placeholder="Enter code"
            type="text"
            className="w-2/3 px-6 py-3.5 outline-none bg-white rounded-[46px] text-[#999999] text-base font-normal leading-normal"
          />
          <button className="px-10 py-4 bg-[#333333] rounded-[43px] text-white text-base font-semibold leading-tight">
            Apply Coupon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
