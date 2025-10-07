"use client";
import Image from "next/image";
import Link from "next/link";

export default function Donation() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
      <div>
        {/* ===== Heading ===== */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-8">
          Your Donation Means Another Smile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
          <div className="flex flex-col lg:flex-row items-center  gap-8 p-6 lg:p-10 bg-[#F5F9FA]  rounded-lg">
            {/* ===== Image ===== */}
            <div className="text-center max-w-40 w-full">
              <Image
                src="/images/donate/Donation-1.png"
                className="mx-auto max-w-40 w-full"
                width={500}
                height={300}
                alt=""
              ></Image>
            </div>
            <div className="text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                One-Time Donations
              </h3>
              <p className="text-gray-700 mb-6 lg:mb-8 ">
                Your donation helps us provide food, shelter, and medical
                treatment to countless animals waiting for a second chance.
                Every contribution — big or small.
              </p>
              <Link
                href="https://app.giveffect.com/charities/27544-polk-county-bully-project"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-sky-600 transition"
              >
                <Image
                  src="/images/navbar/paw.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                Donate Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center  gap-8 p-6 lg:p-10 bg-[#F5F9FA]  rounded-lg">
            {/* ===== Image ===== */}
            <div className="text-center max-w-40 w-full">
              <Image
                src="/images/donate/Donation-2.png"
                className="mx-auto max-w-40 w-full"
                width={500}
                height={300}
                alt=""
              ></Image>
            </div>
            <div className="text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">Venmo</h3>
              <p className="text-gray-700 mb-6 lg:mb-8 ">
                Your donation helps us provide food, shelter, and medical
                treatment to countless animals waiting for a second chance.
                Every contribution — big or small.
              </p>
              <Link
                href="https://account.venmo.com/u/Polkcountybullyproject"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-sky-600 transition"
              >
                {/* <PawPrint className="w-4 h-4" /> */}
                <Image
                  src="/images/navbar/paw.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                Donate Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center  gap-8 p-6 lg:p-10 bg-[#F5F9FA]  rounded-lg">
            {/* ===== Image ===== */}
            <div className="text-center max-w-40 w-full">
              <Image
                src="/images/donate/Donation-3.png"
                className="mx-auto max-w-40 w-full"
                width={500}
                height={300}
                alt=""
              ></Image>
            </div>
            <div className="text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                PayPal
              </h3>
              <p className="text-gray-700 mb-6 lg:mb-8 ">
                Your donation helps us provide food, shelter, and medical
                treatment to countless animals waiting for a second chance.
                Every contribution — big or small.
              </p>
              <Link
                href="https://www.paypal.com/paypalme/PolkCountyBullyProje"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-sky-600 transition"
              >
                <Image
                  src="/images/navbar/paw.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                Donate Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center  gap-8 p-6 lg:p-10 bg-[#F5F9FA]  rounded-lg">
            {/* ===== Image ===== */}
            <div className="text-center max-w-40 w-full">
              <Image
                src="/images/donate/Donation-4.png"
                className="mx-auto max-w-40 w-full"
                width={500}
                height={300}
                alt=""
              ></Image>
            </div>
            <div className="text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Cash app
              </h3>
              <p className="text-gray-700 mb-6 lg:mb-8 ">
                Your donation helps us provide food, shelter, and medical
                treatment to countless animals waiting for a second chance.
                Every contribution — big or small.
              </p>
              <Link
                href="https://cash.app/$pcbp"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-sky-600 transition"
              >
                {/* <PawPrint className="w-4 h-4" /> */}
                <Image
                  src="/images/navbar/paw.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
