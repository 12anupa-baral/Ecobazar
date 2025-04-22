import { useEffect } from "react"
import Navbar from "../../globals/components/Navbar"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchProduct } from "../../store/productSlice"
import { useNavigate, useParams } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { setQuantity } from "../../store/quantitySlice";
import axios from "axios";

function SingleProduct() {
  const { id } = useParams();
  const { product } = useAppSelector((store) => store.products);
  const { quantity } = useAppSelector((store) => store.quantity);

  const dispatch = useAppDispatch();
  useEffect(() => {
    id && dispatch(fetchProduct(id));
  }, []);
  const navigate = useNavigate();

  const handleCart = async () => {
    const token = localStorage.getItem("tokenHoYo");
    if (!token) {
      console.error("No token found. Please login.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3001/api/cart",
        {
          productId: id,
          quantity,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type == "increment") {
      dispatch(setQuantity(quantity + 1));
    } else if (type == "decrement" && quantity > 1) {
      dispatch(setQuantity(quantity - 1));
    }
  };

  console.log("quantity", quantity);

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:3001/uploads/${product?.productImageUrl}`}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <td className="p-2  bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
                  <Plus
                    className={`size-4 cursor-pointer ${
                      quantity >= product?.productTotalStock
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => handleQuantityChange("increment")}
                  />

                  <span className="w-10 text-center text-[#191919] text-base font-normal leading-normal">
                    {quantity}
                  </span>
                  <Minus
                    className="size-4 cursor-pointer"
                    onClick={() => handleQuantityChange("decrement")}
                  />
                </td>

                <div className="w-1/2 px-2">
                  {/* <Link to="/cart"> */}
                  <button
                    onClick={handleCart}
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                  {/* </Link> */}
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product?.productName}
              </h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product?.productPrice}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability( In Stock )
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product?.productTotalStock}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Category: {product?.Category?.categoryName}
                </span>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product?.productDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct