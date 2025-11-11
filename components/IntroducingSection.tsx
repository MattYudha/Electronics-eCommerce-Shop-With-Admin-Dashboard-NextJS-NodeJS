// *********************
// Role of the component: IntroducingSection with the text "Introducing Singitronic"
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************

import Link from 'next/link';
import React from 'react';

const IntroducingSection = () => {
  return (
    <div
      className="relative py-20 pt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl font-forum">
          INTRODUCING <span className="text-grilli-gold">ELOQO</span>
        </h2>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base font-dm-sans">
            Buy the latest electronics.
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base font-dm-sans">
            The best electronics for tech lovers.
          </p>
          <Link
            href="/shop"
            className="block font-bold px-10 py-4 text-xl w-fit mt-6 mx-auto
                       bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full text-white
                       hover:bg-white/30 hover:border-white/50 transition-all duration-300
                       max-md:text-lg max-md:px-8 max-md:py-3 max-sm:text-base max-sm:px-6 max-sm:py-2"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
