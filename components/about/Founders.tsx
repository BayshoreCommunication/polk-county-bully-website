"use client";
import Image from "next/image";


export default function PolkCountyBullyProject() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-8">
        Polk County Bully Project
      </h2>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <div className="relative w-full max-w-[800px] rounded-2xl overflow-hidden">
          <Image
            src="images/aboutpage/founders/founders.png"
            alt="Bully Project Rescue Founders: Shannon Medina (left) and Angie Lorio (right)"
            width={1000}
            height={800}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Caption */}
      <p className="text-gray-500 text-sm mb-10">
        Bully Project Rescue Founders: Shannon Medina (left) and Angie Lorio
        (right).
      </p>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-gray-700 text-sm leading-relaxed text-justify space-y-4">
        <p>
          We are a non-profit 501c3 rescue organization with a small shelter
          that works to find forever homes for this misunderstood breed. Through
          local adoption and rescue partnerships we are giving these dogs their
          chance at a happily ever after. We’re dedicated to our goal of
          reducing euthanasia rates of these dogs in Polk County. We pulled half
          of the dogs pulled in the county by rescues in 2022.
        </p>

        <p>
          Our local shelter was deemed per 2022 statistics as the #1 Kill
          shelter in the state of Florida. We are working closely with Animal
          Control to change these statistics, ultimately PBCP is working towards
          a NoKill shelter in Polk County. Currently, dogs deemed Pit Bull are
          rescue only.
        </p>

        <p>
          Through education and practical care, we’re changing the stigma that
          surrounds pit bulls and providing care. Spay and neuter is a huge part
          of stemming the flow of dogs that come in from the county to the
          shelter.
        </p>
      </div>
    </section>
  );
}
