"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PawPrint } from "lucide-react"; // icons
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full ">
      <div className="max-w-[1640px] mx-auto px-8 flex items-center justify-between py-3 border-b border-gray-200">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/navbar/logo.png"
            alt="Logo"
            width={125}
            height={100}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-primary font-medium">
            Home
          </Link>
          <Link href="/" className=" font-medium">
            About Us
          </Link>
          <Link href="/" className=" font-medium">
            Learn
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-primary font-medium ">
              <span>Adoption</span>
              <span className="text-xs"><IoIosArrowDown /></span>
            </button>
            <div className="border-t-2 border-primary absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg lg:rounded-xl z-50 min-w-[200px] transition-all duration-200 ease-out">
              <div className="pt-2">
                <Link href="/adoptionapplication" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                  Adoption Application
                </Link>
                <Link href="/fosterapplication" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                  Foster Application
                </Link>
              </div>
            </div>
          </div>
          
          
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-primary font-medium">
              <span>Contact</span>
              <span className="text-xs"><IoIosArrowDown /></span>
            </button>
            <div className="border-t-2 border-primary absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50 min-w-[200px] transition-all duration-200 ease-out">
              <div className="pt-2">
                <Link href="/volunteer_application" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                Volunteer Application
                </Link>
                <Link href="/volunteer_calendar" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                Volunteer Calendar
                </Link>
                <Link href="/volunteer_calendar" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                Other Links
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-primary font-medium">
              <span>Donate</span>
              <span className="text-xs"><IoIosArrowDown /></span>
            </button>
            <div className="border-t-2 border-primary absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50 min-w-[200px] transition-all duration-200 ease-out">
              <div className="pt-2">
                <Link href="/donate" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                  One-Time Donations
                </Link>
                <Link href="/venmo" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                  Venmo
                </Link>
                <Link href="/paypal" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                  Paypal
                </Link>
                <Link href="/cash_app" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">
                  Cash App
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Adopt Button */}
        <div className="hidden md:block">
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-sky-600 transition"
          >
            {/* <PawPrint className="w-4 h-4" /> */}
            <Image
              src="/images/navbar/paw.png"
              alt="Logo"
              width={20}
              height={20}
              className="h-auto w-auto"
            />
            Adopt Here
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="px-8 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-primary font-medium">
              Home
            </Link>
            <Link href="/about" className="font-medium">About Us</Link>
            <Link href="/learn" className="font-medium">Learn</Link>
            
            {/* Mobile Adoption Dropdown */}
            <div className="ml-4 space-y-2">
              <Link href="/adoptionapplication" className="block text-gray-600 hover:text-primary">
                Adoption Application
              </Link>
              <Link href="/fosterapplication" className="block text-gray-600 hover:text-primary">
                Foster Application
              </Link>
            </div>
            
            {/* Mobile Contact Dropdown */}
            <div className="ml-4 space-y-2">
              <Link href="/faq" className="block text-gray-600 hover:text-primary">
                FAQ
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-primary">
                Contact Us
              </Link>
            </div>
            
            {/* Mobile Donate Dropdown */}
            <div className="ml-4 space-y-2">
              <Link href="/donate" className="block text-gray-600 hover:text-primary">
                Make a Donation
              </Link>
              <Link href="/volunteer" className="block text-gray-600 hover:text-primary">
                Volunteer
              </Link>
            </div>
            
            <Link
              href="/adopt"
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-md font-medium hover:bg-sky-600 transition"
            >
              <Image
                src="/images/navbar/paw.png"
                alt="Logo"
                width={20}
                height={20}
                className="h-auto w-auto"
              />
              Adopt Here
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
