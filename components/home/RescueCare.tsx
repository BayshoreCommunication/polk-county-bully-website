"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

// Then replace the existing map section with:

export default function RescueCare() {
  return (
    <div className="">
      <div className="max-w-[1640px] px-8 my-8 md:my-16 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/rescue/home.png"
            alt="Logo"
            width={1000}
            height={800}
            className="h-auto w-[600px]"
          />
          <div className="">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Rescue, Care, and Hope for <br /> Polk County’s Pit Bulls
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="l">
                  <Image
                    src="/images/rescue/icon1.png"
                    alt="Logo"
                    width={1000}
                    height={800}
                    className="h-auto w-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Professional Breeder</h3>
                  <p className="text-gray-600 text-sm">
                    We partner only with responsible breeders who prioritize
                    health, safety, and proper care for every dog.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  <Image
                    src="/images/rescue/icon2.png"
                    alt="Logo"
                    width={1000}
                    height={800}
                    className="h-auto w-8"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Standard Quality</h3>
                  <p className="text-gray-600 text-sm">
                    We uphold the highest standards of care, safety, and
                    compassion for every dog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
