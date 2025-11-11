import React from 'react';
import Link from 'next/link';

const AboutUsSection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white/5 dark:bg-gray-800/5 backdrop-blur-md shadow-xl border border-white/20 dark:border-gray-700/20 rounded-3xl mx-auto max-w-screen-xl my-10">
      <div className="relative max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-grilli-gold mb-10 font-forum">About ELOQO.CO</h2>

        {/* Company Identity */}
        <div className="mb-10 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Identity</h3>
          <p className="mb-2"><strong>Brand Name:</strong> ELOQO.CO</p>
          <p className="mb-2"><strong>Tagline:</strong> Jelas dan Kuat (Clear and Persuasive)</p>
          <p className="mb-2"><strong>Founded:</strong> May 16, 2025</p>
          <p className="mb-2"><strong>Mission:</strong> Helping school and campus events, etc.</p>
          <p className="mb-2"><strong>Email:</strong> eloqoco2025@gmail.com</p>
          <p className="mb-2"><strong>Contact:</strong> +62 878-7156-3774</p>
          <p className="mb-2"><strong>Social Media:</strong> @eloqo.co</p>
          <p className="mb-2"><strong>Address:</strong> Sukapura, Jalan Mangga Dua No. 16 RT03/02</p>
        </div>

        {/* Vision & Mission */}
        <div className="mb-10 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Vision & Mission</h3>
          <p className="mb-2"><strong>Vision:</strong> To become a leading and trusted local snack brand, and a strategic partner in supporting events through sponsorship collaborations, positively impacting students and the creative industry.</p>
          <p className="mb-2"><strong>Mission:</strong></p>
          <ul className="list-disc list-inside mx-auto w-fit text-left">
            <li>Presenting quality snack products with consistent taste and innovation.</li>
            <li>Building mutually beneficial sponsorship collaborations with various parties.</li>
            <li>Supporting the growth of the creative economy through collaborations and social activities.</li>
            <li>Maintaining brand taste, quality, and vibes to be loved by all circles.</li>
          </ul>
        </div>

        {/* Company Background */}
        <div className="mb-10 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Company Background</h3>
          <p className="mb-2">Founded by Fredrick Daniel & Calvin Rachman Fachrezy.</p>
          <p className="mb-2">Our services and products can be ordered and communicated through our website.</p>
        </div>

        {/* Key Advantages */}
        <div className="mb-10 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Key Advantages</h3>
          <p className="mb-2">ELOQO Chips are 100gr per pack and ELOQO Cookies are 4pcs per pack, while other products typically offer 60gr chips and 2pcs cookies per pack at the same price point.</p>
        </div>

        {/* Company Values */}
        <div className="mb-10 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Company Values</h3>
          <ul className="list-disc list-inside mx-auto w-fit text-left">
            <li><strong>Quality:</strong> We are committed to delivering products of the highest quality, ensuring delicious taste and freshness in every bite.</li>
            <li><strong>Innovation:</strong> We continuously explore new flavors and product concepts to keep our offerings exciting and relevant to our customers.</li>
            <li><strong>Integrity:</strong> We operate with honesty and transparency in all our dealings, building trust with our customers, partners, and community.</li>
            <li><strong>Collaboration:</strong> We believe in the power of partnership, fostering mutually beneficial relationships with event organizers, students, and creative industries.</li>
            <li><strong>Community Impact:</strong> We strive to make a positive difference in society by supporting local initiatives and contributing to the growth of the creative economy.</li>
          </ul>
        </div>

        {/* Portfolio */}
        <div className="mb-10 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Portfolio</h3>
          <p className="mb-2">Check out our collaborations on Instagram: <Link href="https://www.instagram.com/eloqo.co" target="_blank" rel="noopener noreferrer" className="text-grilli-gold hover:underline">@eloqo.co</Link></p>
          {/* Placeholder for video links */}
          <p className="text-sm italic text-gray-500 dark:text-gray-400">
            (Insert links to collaboration videos here)
          </p>
        </div>

        {/* Partners */}
        <div className="mb-10 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Partners</h3>
          <p className="mb-2">We are proud to partner with:</p>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {/* Placeholder for partner logos */}
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Cilok Logo</span>
            </div>
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Mang Butong Logo</span>
            </div>
            {/* Add more partner logos as needed */}
          </div>
          <p className="mt-5 text-sm italic text-gray-500 dark:text-gray-400">
            (Insert social media links for partners here, e.g., ciloksetanmangbutong)
          </p>
        </div>

        {/* Contact Order */}
        <div className="text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Order Now</h3>
          <p className="text-lg">Contact us for orders: <a href="tel:+6287871563774" className="text-grilli-gold hover:underline">+62 878-7156-3774</a></p>
        </div>

      </div>
    </div>
  );
};

export default AboutUsSection;
