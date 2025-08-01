import { MapPinIcon, PhoneIcon, EnvelopeIcon, } from '@heroicons/react/24/outline';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12 px-6 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-dirtygreen">Bloom & Root</h3>
            <p className="text-gray-400">
              Bringing life and beauty to your home through carefully curated plants.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-dirtygreen">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-dirtygreen mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2" /> (123) 456-7890
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-4 h-4 mr-2" /> hello@bloomandroot.com
              </li>
              <li className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2" /> 123 Greenway Blvd, Portland
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-dirtygreen">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Bloom & Root. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}