import React from "react";

const Pricing = () => {
  return (
    <section className='flex items-center justify-center'>
      <div className='h-80 w-1/3 rounded-lg bg-pricing-bg/[0.1] shadow-lg'>
        <div className='relative top-10'>
          <p className='text-center text-2xl font-extrabold'>Premiem PRO</p>
          <p className='mt-4 text-center text-6xl font-extrabold'>$329</p>
          <p className='mt-2 text-center text-lg font-medium'>
            billed just once
          </p>
        </div>
        <button className='relative top-20 left-14 h-12 w-72 rounded bg-button-bg text-center text-base font-bold text-pricing-txt'>
          Get Started
        </button>
      </div>
      <div className='item-center flex h-80 w-2/3 flex-col justify-center rounded-lg shadow-lg'>
        <div>
          <p>
            Access these features when you get this pricing package for your
            business
          </p>
          <p>International calling and messaging API</p>
          <p>Additional phone numbers</p>
          <p>Automated messages via Zapier</p>
          <p>24/7 support and consulting</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
