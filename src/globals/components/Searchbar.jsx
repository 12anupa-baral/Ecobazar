import React from "react";
import Logo from "../../../public/icons/logo";
import { Heart, Search } from "lucide-react";
import ShoppingBag from "../../../public/icons/ShoppingBag";
import { Link } from "react-router-dom";

const Searchbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-6 md:px-16 bg-white relative">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2">
        <Logo />
        <span className="text-green-950 text-xl md:text-3xl font-medium font-poppins">
          Ecobazar
        </span>
      </Link>

      {/* Mobile Search Icon */}
      <div className="block md:hidden">
        <Search className="text-zinc-500" size={24} />
      </div>

      {/* Search Bar (visible on larger screens) */}
      <div className="hidden md:flex items-center w-full max-w-lg border border-neutral-200 rounded-md overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 w-full">
          <Search className="text-zinc-500" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-base text-zinc-500 font-normal font-poppins focus:outline-none"
          />
        </div>
        <button className="px-6 py-3.5 bg-primary text-white text-sm font-semibold font-poppins rounded-tr-md rounded-br-md">
          Search
        </button>
      </div>

      {/* Cart & Wishlist */}
      <div className="flex items-center gap-6 sm:gap-4">
        <Heart className="text-zinc-700" />

        <div className="w-px h-6 bg-stone-300 rotate-0" />

        <div className="flex items-center gap-3 sm:flex-col sm:gap-2">
          <div className="relative w-8 h-8">
            <ShoppingBag />
            <div className="absolute -top-1 -right-2 w-4 h-4 bg-hardPrimary text-white text-[10px] font-medium font-poppins rounded-full flex items-center justify-center outline outline-1 outline-white">
              2
            </div>
          </div>
          <div className="flex flex-col justify-start gap-1.5 sm:text-center">
            <span className="text-xs text-neutral-600 font-normal font-poppins">
              Shopping cart:
            </span>
            <span className="text-sm text-zinc-900 font-medium font-poppins">
              $57.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
