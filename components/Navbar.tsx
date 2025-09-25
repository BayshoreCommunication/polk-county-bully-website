"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PawPrint } from "lucide-react"; // icons

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
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-primary">
              <span>Adoption</span>
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg">
              <Link href="/dogs" className="block px-4 py-2 hover:bg-gray-50">
                Dogs
              </Link>
              <Link href="/cats" className="block px-4 py-2 hover:bg-gray-50">
                Cats
              </Link>
            </div>
          </div>
          <Link href="/learn" className="hover:text-primary">
            Learn
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-primary">
              <span>Pages</span>
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg">
              <Link href="/faq" className="block px-4 py-2 hover:bg-gray-50">
                FAQ
              </Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-gray-50">
                Contact
              </Link>
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
            <Link href="/" className="text-primary">
              Home
            </Link>
            <Link href="/adoption">Adoption</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/about">About Us</Link>
            <Link href="/pages">Pages</Link>
            <Link
              href="/adopt"
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-md font-medium hover:bg-sky-600 transition"
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
        </div>
      )}
    </nav>
  );
}
