// app/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-8 flex-1 flex justify-center items-center">
      <div className="container mx-auto px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Column */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            {/* Brand & Description */}
            <h2 className="text-2xl font-bold">SSMS.com</h2>
            <p className="mt-2 max-w-sm">
              Simplify daily school operations with our intuitive platform
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg">
                Subscribe to our news letter
              </h3>
              <p className="text-sm text-white/90 mt-1 max-w-xs">
                Stay up to date with the latest news, announcement and article
              </p>
              <form className="mt-3 flex flex-col sm:flex-row items-start sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-auto flex-1 px-3 py-2 rounded-l-md text-gray-700 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-2 sm:mt-0 sm:ml-0 bg-white text-orange-600 px-4 py-2 rounded-r-md font-medium hover:bg-gray-100"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex flex-wrap md:w-2/3 justify-between">
            {/* Quick Links */}
            <div className="w-1/2 sm:w-auto mb-6 md:mb-0">
              <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#benefit" className="hover:underline">
                    Benefit
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-1/2 sm:w-auto mb-6 md:mb-0">
              <h3 className="font-semibold text-lg mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#newsletter" className="hover:underline">
                    News-letter
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="w-full sm:w-auto">
              <h3 className="font-semibold text-lg mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#terms" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#settings" className="hover:underline">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white/25 pt-4 flex flex-col md:flex-row items-center md:justify-between">
          <p className="text-sm text-center md:text-left">
            © 2025 SMSS, All Rights Reserved
          </p>
          {/* If you have social icons or other items, place them here */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            {/* Example placeholder links/icons */}
            <a href="#" aria-label="Facebook" className="hover:text-gray-200">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Your icon path */}
                <path d="M18.896 2H5.104C3.944 2 3 2.944 3 4.104v13.792C3 19.056 3.944 20 5.104 20h13.792C20.056 20 21 19.056 21 17.896V4.104C21 2.944 20.056 2 18.896 2zM17 8h-2c-.734 0-1 .266-1 1v2h3l-.5 3H14v7h-3v-7H9v-3h2V9c0-2.24 1.16-3.5 3.5-3.5H17V8z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-200">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Your icon path */}
                <path d="M24 4.557c-.883.392-1.83.656-2.828.775a4.932 4.932 0 002.164-2.724..."></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-200">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Your icon path */}
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76..."></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
