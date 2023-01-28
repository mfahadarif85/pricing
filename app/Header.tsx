import React from "react";

const Header = () => {
  return (
    <section className='h-96 bg-header-bg text-center'>
      <div className='relative top-20'>
        <p className='text-5xl font-extrabold text-pricing-txt'>
          Simple pricing for your business
        </p>
        <p className='mt-4 text-2xl font-medium text-pricing-txt opacity-80'>
          Plans that are carefully crafted to suit your business
        </p>
      </div>
    </section>
  );
};

export default Header;
