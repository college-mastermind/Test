import React from "react";
import "./footer.css";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 md:pt-36 md:pb-44 text-white">
          <div className="lg:col-span-2 space-y-2 md:space-y-3">
            <h1 className="font-bold text-lg mb-4">Quick Link</h1>
            <p className="hover:opacity-80 cursor-pointer">Home</p>
            <p className="hover:opacity-80 cursor-pointer">About Us</p>
            <p className="hover:opacity-80 cursor-pointer">Grades</p>
          </div>

          <div className="lg:col-span-3 space-y-2 md:space-y-3">
            <h1 className="font-bold text-lg mb-4">Grades</h1>
            <p className="hover:opacity-80 cursor-pointer">Elementary</p>
            <p className="hover:opacity-80 cursor-pointer">Middle School</p>
            <p className="hover:opacity-80 cursor-pointer">High School</p>
            <p className="hover:opacity-80 cursor-pointer">College/Adult</p>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h1 className="font-bold text-lg mb-4">Subjects</h1>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="space-y-2 md:space-y-3">
                <p className="hover:opacity-80 cursor-pointer">Math</p>
                <p className="hover:opacity-80 cursor-pointer">English</p>
                <p className="hover:opacity-80 cursor-pointer">Science</p>
                <p className="hover:opacity-80 cursor-pointer">History</p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <p className="hover:opacity-80 cursor-pointer">
                  Foreign Language
                </p>
                <p className="hover:opacity-80 cursor-pointer">AP Classes</p>
                <p className="hover:opacity-80 cursor-pointer">IB Classes</p>
                <p className="hover:opacity-80 cursor-pointer">Test Prep</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h1 className="font-bold text-lg mb-4">
              Subscribe to Our Newsletter
            </h1>
            <div className="relative max-w-[300px] mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-opacity-80 py-2 pr-10"
              />
              <ChevronRightIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5 text-white" />
            </div>
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:opacity-80"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:opacity-80"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:opacity-80"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:opacity-80"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white opacity-50" />
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end py-4 text-white text-sm">
          <div className="text-center sm:text-right space-x-4">
            <span className="hover:opacity-80 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:opacity-80 cursor-pointer">Legal Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
