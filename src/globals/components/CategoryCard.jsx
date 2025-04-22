import React from 'react'
import { Link } from 'react-router-dom';
const CategoryCard = ({ categoryName }) => {
  return (
    <Link to="#">
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            // src={categoryName?.imgurl}
            src="/Assets/BG.png"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl "
          />
        </a>
        <div className="font-[20px] text-black py-6">{categoryName?.categoryName}</div>
      </div>
    </Link>
  );
}

export default CategoryCard


