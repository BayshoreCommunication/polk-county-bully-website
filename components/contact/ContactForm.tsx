"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-3">
          Polk County Bully Project Contact Form
        </h2>
        <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
          Interested in learning more about our project or one of our awesome pups? 
          Contact us here and we’ll respond as soon as we can.
        </p>
      </div>

      {/* ===== Contact Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-10 md:items-stretch">
        {/* ===== Left Side: Contact Info ===== */}
        <div className="md:col-span-3 flex flex-col justify-between space-y-6">
          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
              <FaMapMarkerAlt size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#2a3b47] mb-1">Address</h4>
              <p className="text-gray-600 text-sm">
                5840 W Brannen Rd, Lakeland, FL 33813, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
              <FaEnvelope size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#2a3b47] mb-1">Email Address</h4>
              <p className="text-gray-600 text-sm">
                support@bullyprojectrescueusa.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
              <FaPhone size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#2a3b47] mb-1">Phone</h4>
              <p className="text-gray-600 text-sm">+1 (863) 816-0095</p>
            </div>
          </div>
        </div>

        {/* ===== Right Side: Form ===== */}
        <form
          action="#"
          method="POST"
          className="md:col-span-7 bg-white p-8 rounded-xl shadow flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Name"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Name"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Here..."
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
            ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="self-start bg-primary text-white font-semibold py-2 px-6 rounded-lg transition duration-200 mt-4"
          >

            <div className="flex items-center gap-3">
            <Image
          src="images/contactpage/contactform/icon.png"
          alt="About Us Illustration"
          width={1000}
          height={800}
          className="object-contain object-center w-6 h-auto"
          priority
        />
            <span>Send</span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}
