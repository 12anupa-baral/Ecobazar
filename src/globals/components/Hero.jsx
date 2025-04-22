import { ArrowBigLeft, ArrowRight } from "lucide-react";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center xl:justify-between">
      {/* Banner 1 */}
      <div className="w-full xl:w-[872px] h-[600px] relative bg-cover bg-center rounded-[10px] bg-[url('/Assets/Bannar_Big.png')]">
        <div className="absolute left-[60px] top-[155px] flex flex-col gap-7">
          <h1 className="text-white text-5xl font-semibold leading-[57.6px] font-['Poppins']">
            Fresh & Healthy
            <br />
            Organic Food
          </h1>

          <div className="flex gap-3 items-start">
            <div className="w-0.5 h-16 bg-green-300" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-white text-xl font-medium font-['Poppins']">
                  Sale up to
                </span>
                <span className="px-3 py-1 bg-amber-500 rounded-[5px] text-white text-xl font-semibold font-['Poppins']">
                  30% OFF
                </span>
              </div>
              <p className="text-white text-sm opacity-80 font-normal font-['Poppins']">
                Free shipping on all your order.
              </p>
            </div>
          </div>

        <Button/>
        </div>
      </div>

      {/* Right Side Banners */}
      <div className="flex flex-col justify-between gap-4">
        {/* Banner 2 */}
        <div className="w-96 h-72 relative rounded-[10px] bg-cover bg-center bg-[url('/Assets/BG.png')]">
          <div className="absolute left-8 top-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-zinc-900 text-sm font-medium uppercase tracking-wide font-['Poppins']">
                Summer Sale
              </div>
              <div className="text-zinc-900 text-3xl font-semibold font-['Poppins']">
                75% OFF
              </div>
              <p className="text-stone-500 text-sm font-normal font-['Poppins']">
                Only Fruit & Vegetable
              </p>
            </div>

            <button className="rounded-[43px] flex items-center gap-3 group">
              <span className="text-softPrimary text-base font-semibold font-['Poppins']">
                Shop Now
              </span>
              <ArrowRight className="text-softPrimary" />
            </button>
          </div>
        </div>

        {/* Banner 3 */}
        <div className="w-96 h-72 relative rounded-[10px] bg-cover bg-center bg-[url('/Assets/Bannar.png')]">
          <div className="absolute inset-0 bg-green-950/80 rounded-[10px]" />
          <div className="absolute left-10 top-16 flex flex-col items-center gap-8 z-10">
            <div className="text-center flex flex-col gap-3">
              <div className="text-white text-sm font-medium uppercase tracking-wide font-['Poppins']">
                Best Deal
              </div>
              <div className="text-white text-3xl font-semibold font-['Poppins'] w-80 leading-10">
                Special Products Deal of the Month
              </div>
            </div>

            <button className="rounded-[43px] flex items-center gap-3 group">
              <span className="text-softPrimary text-base font-semibold font-['Poppins']">
                Shop Now
              </span>
              <ArrowRight className="text-softPrimary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
