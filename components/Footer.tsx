import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      {/* Footer Main Content */}
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Delivering exceptional value and experiences. Join us on our journey to serve you better.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Learn More
          </button>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            <strong>Postal Address:</strong><br />
            PO Box 8000, Baulkham Hills, NSW 2153
          </p>
          <p className="text-gray-400 leading-relaxed">
            <strong>Street Address:</strong><br />
            1 Woolworths Way, Bella Vista, NSW 2153
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-wrap gap-2">
            {['Home', 'About Us', 'Careers', 'Privacy Policy', 'Contact Us'].map((link, index) => (
              <Link key={index} href={`/${link.toLowerCase().replace(' ', '-')}`}>
                <span className="text-gray-400 hover:text-white text-sm font-medium transition">
                  {link}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Acknowledgment Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-10 border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row items-center md:items-start text-gray-400">
          <div className="mr-4 flex-shrink-0">
            <img src="/care_deeply.svg" alt="Acknowledgment Icon" className="w-12 h-12" />
          </div>
          <div className="text-center md:text-left max-w-3xl">
            <p className="mb-4">
              We acknowledge the Traditional Owners of the lands where we operate and pay respects to Elders past, present, and emerging. Their wisdom and connection to the land inspire us every day.
            </p>
            <Link href="#" className="text-blue-400 underline hover:text-blue-300 transition">
              Learn more about our commitment to reconciliation
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto px-6 lg:px-16 text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Woolworths Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
