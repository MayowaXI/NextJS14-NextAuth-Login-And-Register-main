import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About us</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            We are on a mission to deliver the best in convenience, value, and quality for our customers.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-2">
            Learn more
          </button>
        </div>
        
        {/* Postal Address */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Postal Address</h3>
          <p className="text-gray-400 leading-relaxed">PO Box 8000<br />Baulkham Hills<br />NSW 2153</p>
        </div>

        {/* Privacy Office */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Privacy Office</h3>
          <p className="text-gray-400 leading-relaxed">PO Box 8000<br />Baulkham Hills<br />NSW 2153</p>
        </div>

        {/* Street Address */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Street Address</h3>
          <p className="text-gray-400 leading-relaxed">1 Woolworths Way<br />Bella Vista<br />NSW 2153</p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Phone</h3>
          <p className="text-gray-400 leading-relaxed">1300 908 631</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-10 flex flex-wrap justify-center gap-4 text-center">
        {["Home", "About Us", "Investors", "Media", "Privacy", "Careers", "Contact Us"].map((link, index) => (
          <Link key={index} href={`/${link.toLowerCase().replace(" ", "")}`}>
            <span className="text-gray-400 hover:text-white text-sm font-medium cursor-pointer">
              {link}
            </span>
          </Link>
        ))}
      </div>

      {/* Acknowledgement Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-10 border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row items-center md:items-start text-gray-400 space-y-4 md:space-y-0">
          <div className="mr-4 flex-shrink-0">
            <img src="/care_deeply.svg" alt="Acknowledgement Icon" className="w-12 h-12" />
          </div>
          <div className="text-center md:text-left max-w-3xl">
            <p className="mb-4">
              Woolworths Group acknowledges the many Traditional Owners of the lands on which we operate, and pays respect to their Elders past and present. We recognize their strengths and enduring connection to lands, waters, and skies as the Custodians of the oldest continuing cultures on the planet.
            </p>
            <p>Woolworths Group supports the invitation set out in the Uluru Statement from the Heart to walk together with Aboriginal and Torres Strait Islander peoples. We are committed to actively contributing to Australia&aposs reconciliation journey through listening and learning.
            </p>       
            <a href="#" className="text-blue-400 underline mt-4 inline-block">Read more about our commitment to reconciliation</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 lg:px-16 text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Woolworths Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
