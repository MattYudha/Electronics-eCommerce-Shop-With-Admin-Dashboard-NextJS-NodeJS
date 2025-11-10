'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import SimpleSlider from './SimpleSlider';
import Link from 'next/link';
import { CiCalendar } from 'react-icons/ci'; // For the "Book A Table" icon
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'; // For slider arrows

// Custom Arrow Components for react-slick
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="slider-btn prev absolute z-10 text-yellow-500 border border-yellow-500 w-[45px] h-[45px] grid place-items-center top-1/2 -translate-y-1/2 left-8 transform rotate-45 transition-all duration-200 hover:bg-yellow-500 hover:text-black"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <IoChevronBack size={24} className="transform -rotate-45" />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="slider-btn next absolute z-10 text-yellow-500 border border-yellow-500 w-[45px] h-[45px] grid place-items-center top-1/2 -translate-y-1/2 right-8 transform rotate-45 transition-all duration-200 hover:bg-yellow-500 hover:text-black"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <IoChevronForward size={24} className="transform -rotate-45" />
    </button>
  );
};


// Konten untuk setiap slide, meniru grilli
const slides = [
  {
    bgImage: '/images/hero-slider-1.jpg', // Pastikan gambar ini ada di /public
    subtitle: 'Tradational & Hygine',
    title: 'For the love of <br/> delicious food',
    text: 'Come with family & feel the joy of mouthwatering food',
    buttonText: 'View Our Menu',
    buttonLink: '/shop',
  },
  {
    bgImage: '/images/hero-slider-2.jpg', // Pastikan gambar ini ada di /public
    subtitle: 'Delightful Experience',
    title: 'Flavors Inspired by <br/> the Seasons',
    text: 'Come with family & feel the joy of mouthwatering food',
    buttonText: 'View Our Menu',
    buttonLink: '/shop',
  },
  {
    bgImage: '/images/hero-slider-3.jpg', // Pastikan gambar ini ada di /public
    subtitle: 'Amazing & Delicious',
    title: 'Where every flavor <br/> tells a story',
    text: 'Come with family & feel the joy of mouthwatering food',
    buttonText: 'View Our Menu',
    buttonLink: '/shop',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-51px)] min-h-[700px] overflow-hidden">
      <SimpleSlider
        dots={false} // Grilli doesn't show dots on hero slider
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        pauseOnHover={true}
        fade={true}
        arrows={true} // Grilli has arrows
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[calc(100vh-51px)] min-h-[700px] w-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-115 animate-smoothScale"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Overlay gelap agar teks terbaca */}
              <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Konten Teks (di tengah) */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
              <p className="text-lg md:text-2xl font-['DM Sans'] text-yellow-500 uppercase tracking-widest mb-4 animate-sliderReveal"
                 style={{ animationDelay: '500ms' }}>
                {slide.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Forum'] uppercase leading-tight mb-6 animate-sliderReveal"
                  style={{ animationDelay: '1000ms' }}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
              ></h1>
              <p className="text-base md:text-lg text-gray-300 max-w-lg mb-8 animate-sliderReveal"
                 style={{ animationDelay: '1500ms' }}>
                {slide.text}
              </p>
              <Link href={slide.buttonLink} className="btn btn-primary animate-sliderReveal" style={{ animationDelay: '2000ms' }}>
                <span className="text text-1">{slide.buttonText}</span>
                <span className="text text-2" aria-hidden="true">{slide.buttonText}</span>
              </Link>
            </div>
          </div>
        ))}
      </SimpleSlider>

      {/* Book A Table Button (Grilli style) */}
      <Link href="#featured-products" className="hero-btn has-after absolute bottom-10 right-10 z-20 bg-yellow-500 w-[66px] h-[66px] rounded-full flex flex-col items-center justify-center p-1">
        <CiCalendar size={24} className="text-black mb-0.5" />
        <span className="text-black font-bold uppercase text-[0.6rem] text-center leading-tight">Book A Table</span>
      </Link>
    </section>
  );
};

export default Hero;
