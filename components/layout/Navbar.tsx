"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PawPrint } from "lucide-react"; // icons
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAdoption, setOpenAdoption] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const pathname = usePathname();

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

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-medium hover:text-primary transition-colors ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium hover:text-primary transition-colors ${
              pathname === "/about" ? "text-primary" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/learn"
            className={`font-medium hover:text-primary transition-colors ${
              pathname === "/learn" ? "text-primary" : ""
            }`}
          >
            Learn
          </Link>

          {/* Adoption Dropdown */}
          <div className="relative group">
            <Link
              href="/adoption"
              className={`flex items-center space-x-1 font-medium hover:text-primary transition-colors ${
                pathname === "/adoption" ? "text-primary" : ""
              }`}
            >
              <span>Adoption</span>
              <span className="text-xs">
                <IoIosArrowDown />
              </span>
            </Link>
            <div className="border-t-2 border-primary absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50 min-w-[200px] transition-all duration-200 ease-out">
              <div className="pt-2">
                <Link
                  href="https://petstablished.com/adoptions/personal-information?application_type=Adopt&donation_section=false&form_id=24575&form_type=generic&generic_form_id=24575&pet_id=715879&section=1&selected_pets=false"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  Adoption Application
                </Link>
                <Link
                  href="https://petstablished.com/adoptions/personal-information?application_type=Foster&donation_section=false&form_id=24574&form_type=generic&generic_form_id=24574&pet_id=715879&section=1&selected_pets=false"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  Foster Application
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Dropdown */}
          <div className="relative group">
            <Link
              href="/contact"
              className={`flex items-center space-x-1 font-medium hover:text-primary transition-colors ${
                pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              <span>Contact</span>
              <span className="text-xs">
                <IoIosArrowDown />
              </span>
            </Link>
            <div className="border-t-2 border-primary absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50 min-w-[200px] transition-all duration-200 ease-out">
              <div className="pt-2">
                <Link
                  href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer_application"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  Volunteer Application
                </Link>
                <Link
                  href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  Volunteer Calendar
                </Link>
                <Link
                  href="https://linktr.ee/PolkCountyBullyProject"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  Other Links
                </Link>
              </div>
            </div>
          </div>

          {/* Donate Dropdown */}
          <div className="relative group">
            <Link
              href="/donate"
              className={`flex items-center space-x-1 font-medium hover:text-primary transition-colors ${
                pathname === "/donate" ? "text-primary" : ""
              }`}
            >
              <span>Donate</span>
              <span className="text-xs">
                <IoIosArrowDown />
              </span>
            </Link>
            <div className="border-t-2 border-primary absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50 min-w-[200px] transition-all duration-200 ease-out">
              <div className="pt-2">
                <Link
                  href="https://app.giveffect.com/charities/27544-polk-county-bully-project"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  One-Time Donations
                </Link>
                <Link
                  href="https://account.venmo.com/u/Polkcountybullyproject"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  Venmo
                </Link>
                <Link
                  href="https://www.paypal.com/paypalme/PolkCountyBullyProje"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
                  Paypal
                </Link>
                <Link
                  href="https://cash.app/$pcbp"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
                >
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

      {/* Mobile Dropdown (mirrors desktop with collapsible groups) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="px-8 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`font-medium ${
                pathname === "/" ? "text-primary" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium ${
                pathname === "/about" ? "text-primary" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/learn"
              className={`font-medium ${
                pathname === "/learn" ? "text-primary" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>

            {/* Adoption group */}
            <button
              className="flex items-center justify-between w-full text-left font-medium"
              onClick={() => setOpenAdoption(!openAdoption)}
              aria-expanded={openAdoption}
            >
              <Link
                href="/adoption"
                className={`${pathname === "/adoption" ? "text-primary" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Adoption
              </Link>
              <IoIosArrowDown
                className={`transition-transform ${
                  openAdoption ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openAdoption && (
              <div className="ml-4 space-y-2">
                <Link
                  href="https://petstablished.com/adoptions/personal-information?application_type=Adopt&donation_section=false&form_id=24575&form_type=generic&generic_form_id=24575&pet_id=715879&section=1&selected_pets=false"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Adoption Application
                </Link>
                <Link
                  href="https://petstablished.com/adoptions/personal-information?application_type=Foster&donation_section=false&form_id=24574&form_type=generic&generic_form_id=24574&pet_id=715879&section=1&selected_pets=false"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Foster Application
                </Link>
              </div>
            )}

            {/* Contact group */}
            <button
              className="flex items-center justify-between w-full text-left font-medium"
              onClick={() => setOpenContact(!openContact)}
              aria-expanded={openContact}
            >
              <span>Contact</span>
              <IoIosArrowDown
                className={`transition-transform ${
                  openContact ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openContact && (
              <div className="ml-4 space-y-2">
                <Link
                  href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer_application"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Volunteer Application
                </Link>
                <Link
                  href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Volunteer Calendar
                </Link>
                <Link
                  href="https://linktr.ee/PolkCountyBullyProject"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Other Links
                </Link>
              </div>
            )}

            {/* Donate group */}
            <button
              className="flex items-center justify-between w-full text-left font-medium"
              onClick={() => setOpenDonate(!openDonate)}
              aria-expanded={openDonate}
            >
              <span>Donate</span>
              <IoIosArrowDown
                className={`transition-transform ${
                  openDonate ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDonate && (
              <div className="ml-4 space-y-2">
                <Link
                  href="https://app.giveffect.com/charities/27544-polk-county-bully-project"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  One-Time Donations
                </Link>
                <Link
                  href="https://account.venmo.com/u/Polkcountybullyproject"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Venmo
                </Link>
                <Link
                  href="https://www.paypal.com/paypalme/PolkCountyBullyProje"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Paypal
                </Link>
                <Link
                  href="https://cash.app/$pcbp"
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Cash App
                </Link>
              </div>
            )}

            <Link
              href="/adopt"
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-md font-medium hover:bg-sky-600 transition"
              onClick={() => setIsOpen(false)}
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
