import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300">
            Suman Food and Beverages offers the finest dining experience with
            pure and delightful food.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-gray-300 space-y-2">
            <li>
              <Link to="/main" className="hover:text-gray-100 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/main/about" className="hover:text-gray-100 transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/main/contact" className="hover:text-gray-100 transition duration-300">Contact</Link>
            </li>
            <li>
              <a href="/main/menu" className="hover:text-gray-100 transition duration-300">Menu</a>
            </li>
            <li>
              <a href="/main/faq" className="hover:text-gray-100 transition duration-300">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition duration-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400">
          &copy; 2024 Suman Food and Beverages. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
