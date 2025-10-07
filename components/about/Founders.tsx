"use client";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function PolkCountyBullyProject() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
      {/* Title */}
      <Reveal y={20} opacityFrom={0}>
      <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-8">
        Polk County Bully Project
      </h2>
      </Reveal>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <div className="relative w-full max-w-[800px] rounded-2xl overflow-hidden">
        <Reveal y={25} opacityFrom={0}>
          <Image
            src="images/aboutpage/founders/founders.png"
            alt="Bully Project Rescue Founders: Shannon Medina (left) and Angie Lorio (right)"
            width={1000}
            height={800}
            className="object-cover w-full h-auto"
            priority
          />
          </Reveal>
        </div>
      </div>

      {/* Caption */}
      <Reveal y={25} opacityFrom={0}>
      <p className="text-gray-500 text-sm mb-10">
        Bully Project Rescue Founders: Shannon Medina (left) and Angie Lorio
        (right).
      </p>
      </Reveal>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-gray-700 text-sm leading-relaxed text-justify space-y-4">
      <Stagger>
      <Reveal y={20} opacityFrom={0}>
        <p>
          We are a non-profit 501c3 rescue organization with a small shelter
          that works to find forever homes for this misunderstood breed. Through
          local adoption and rescue partnerships we are giving these dogs their
          chance at a happily ever after. We’re dedicated to our goal of
          reducing euthanasia rates of these dogs in Polk County. We pulled half
          of the dogs pulled in the county by rescues in 2022.
        </p>
        </Reveal>
        <Reveal y={25} opacityFrom={0}>
        <p>
          Our local shelter was deemed per 2022 statistics as the #1 Kill
          shelter in the state of Florida. We are working closely with Animal
          Control to change these statistics, ultimately PBCP is working towards
          a NoKill shelter in Polk County. Currently, dogs deemed Pit Bull are
          rescue only.
        </p>
        </Reveal>
        <Reveal y={30} opacityFrom={0}>
        <p>
          Through education and practical care, we’re changing the stigma that
          surrounds pit bulls and providing care. Spay and neuter is a huge part
          of stemming the flow of dogs that come in from the county to the
          shelter.
        </p>
        </Reveal>
        </Stagger>
      </div>
    </section>
  );
}
