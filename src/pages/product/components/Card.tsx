import { Link } from "react-router-dom";
import { IProduct } from "../types";
import { SquarePlus } from "lucide-react";

interface ICardProps {
  product: IProduct;
}

const Card: React.FC<ICardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="w-full bg-white shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src={`http://localhost:3001/uploads/${product.productImageUrl}`}
          alt={product.productName}
          // className="w-full h-60 object-cover rounded-t-xl"
          className="w-full h-60 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3">
          <span className="text-gray-400 uppercase text-xs block">
            {product.Category.categoryName}
          </span>
          <p className="text-lg font-bold text-black truncate capitalize">
            {product.productName}
          </p>
          <div className="flex items-center mt-2">
            <p className="text-lg font-semibold text-black">
              $ {product.productPrice}
            </p>
            <del>
              <p className="text-sm text-gray-600 ml-2">${product.discount}</p>
            </del>
            <div className="ml-auto">
              <SquarePlus />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
