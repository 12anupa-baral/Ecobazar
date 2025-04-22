import React from 'react'
import Shipping from '../../../public/icons/Shipping';
import Support from '../../../public/icons/Support';
import Payment from '../../../public/icons/Payment';
import MoneyBack from '../../../public/icons/MoneyBack';

const Services = () => {
  return (
    <div className="w-[1320px] p-10 bg-white rounded-lg shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] inline-flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <Shipping/>
        <div className="inline-flex flex-col justify-center items-start gap-2">
          <div className="w-64 justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-tight">
            Free Shipping
          </div>
          <div className="w-64 justify-start text-neutral-400 text-sm font-normal font-['Poppins'] leading-tight">
            Free shipping on all your order
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
       <Support/>
        <div className="inline-flex flex-col justify-center items-start gap-2">
          <div className="w-64 justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-tight">
            Customer Support 24/7
          </div>
          <div className="w-64 justify-start text-neutral-400 text-sm font-normal font-['Poppins'] leading-tight">
            Instant access to Support
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
      <Payment/>
        <div className="inline-flex flex-col justify-center items-start gap-2">
          <div className="w-64 justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-tight">
            100% Secure Payment
          </div>
          <div className="w-64 justify-start text-neutral-400 text-sm font-normal font-['Poppins'] leading-tight">
            We ensure your money is save
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <MoneyBack/>
        <div className="inline-flex flex-col justify-center items-start gap-2">
          <div className="w-64 justify-start text-zinc-900 text-base font-semibold font-['Poppins'] leading-tight">
            Money-Back Guarantee
          </div>
          <div className="w-64 justify-start text-neutral-400 text-sm font-normal font-['Poppins'] leading-tight">
            30 Days Money-Back Guarantee
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services