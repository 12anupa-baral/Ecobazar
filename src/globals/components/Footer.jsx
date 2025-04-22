import React from "react";
import Logo from "../../../public/icons/logo";
import { Lock } from "lucide-react";

const FooterColumn = ({ title, items }) => (
  <div className="flex flex-col justify-start items-start gap-5">
    <div className="text-white text-base font-medium font-['Poppins']">
      {title}
    </div>
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`text-sm font-normal font-['Poppins'] leading-tight ${
            item.active ? "text-white" : "text-neutral-400"
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="px-72 pt-14 bg-zinc-900 flex flex-col gap-14">
      {/* Brand and contact */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="text-white text-3xl font-medium font-['Poppins'] leading-9">
            Ecobazar
          </div>
        </div>
        <p className="w-80 text-zinc-500 text-sm font-normal font-['Poppins'] leading-tight">
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </p>
        <div className="flex items-center gap-4">
          <div className="py-1.5 px-2 bg-zinc-900 shadow-[0px_1.5px_0px_0px_rgba(32,181,38,1.00)] text-white text-sm font-medium font-['Poppins']">
            (219) 555-0114
          </div>
          <span className="text-zinc-500 text-base font-normal font-['Poppins']">
            or
          </span>
          <div className="py-1.5 px-2 bg-zinc-900 shadow-[0px_1.5px_0px_0px_rgba(32,181,38,1.00)] text-white text-sm font-medium font-['Poppins']">
            Proxy@gmail.com
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="flex gap-20 flex-wrap">
        <FooterColumn
          title="My Account"
          items={[
            { label: "My Account" },
            { label: "Order History" },
            { label: "Shoping Cart", active: true },
            { label: "Wishlist" },
          ]}
        />
        <FooterColumn
          title="Helps"
          items={[
            { label: "Contact" },
            { label: "Faqs" },
            { label: "Terms & Condition" },
            { label: "Privacy Policy" },
          ]}
        />
        <FooterColumn
          title="Proxy"
          items={[
            { label: "About" },
            { label: "Shop" },
            { label: "Product" },
            { label: "Track Order" },
          ]}
        />
        <FooterColumn
          title="Categories"
          items={[
            { label: "Fruit & Vegetables" },
            { label: "Meat & Fish" },
            { label: "Bread & Bakery" },
            { label: "Beauty & Health" },
          ]}
        />
      </div>

      {/* Bottom bar */}
      <div className="w-full py-6 bg-zinc-900 border-t border-zinc-800 flex justify-between items-center">
        <p className="text-zinc-500 text-sm font-normal font-['Poppins']">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>
        <div className="flex items-center gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-11 h-8 bg-zinc-900 rounded-md border border-zinc-800"
            />
          ))}
          <div className="w-16 h-8 bg-zinc-900 rounded-md border border-zinc-800" />
          <div className="flex items-center gap-1">
            {/* <div className="w-2.5 h-2.5 relative bg-zinc-900">
              <div className="w-2 h-[5px] absolute left-1.5 top-[5px] outline outline-1 outline-white" />
              <div className="w-1 h-1 absolute left-[3px] top-1 outline outline-1 outline-white" />
            </div> */}
            <Lock className="co"/>
            <span className="text-white text-xs font-normal font-['Poppins']">
              Secure
            </span>
          </div>
          <div className="w-16 text-center text-white text-xs font-semibold font-['Poppins']">
            Payment
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
