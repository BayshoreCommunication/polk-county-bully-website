"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function YourEmpathy() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
      <div>
        {/* ===== Heading ===== */}
        <Reveal y={20} opacityFrom={0}>
        <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-8">
          Your Empathy Transforms Lives
        </h2>
        </Reveal>
        {/* ===== Image ===== */}
        <div className="relative w-full max-w-[1024px] mx-auto rounded-2xl overflow-hidden mb-8">
        <Reveal y={25} opacityFrom={0}>
          <Image
            src="images/donate/main-img.png"
            alt="Pit Bull ready for adoption"
            width={1000}
            height={800}
            className=" w-full h-auto"
          />
          </Reveal>
        </div>

        {/* ===== Subheading ===== */}
        <Reveal y={20} opacityFrom={0}>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          Here’s how to start the process!
        </p>
        </Reveal>

        {/* ===== Body Text ===== */}
        <div className="max-w-5xl mx-auto text-gray-700 sm:text-base leading-relaxed space-y-4 text-justify md:text-start text-sm md:text-base">
        <Reveal y={25} opacityFrom={0}>
          <p>
            Over 80,000 animals have found safety, love, and a new beginning
            through our charity’s work. From abandoned pets to injured strays,
            we are dedicated to rescuing and rehabilitating animals in need. Our
            mission goes beyond saving lives — we strive to build a kinder world
            where every pet is valued and cared for. With projects spanning more
            than 50 regions, we work hand in hand with shelters, veterinarians,
            and volunteers to make a lasting difference.
          </p>
          </Reveal>
          <Reveal y={30} opacityFrom={0}>
          <p>
            Your donation helps us provide food, shelter, and medical treatment
            to countless animals waiting for a second chance. Every contribution
            — big or small — fuels our efforts to rescue, heal, and rehome pets
            across communities. Together, we can give them the life they deserve
            — full of safety, warmth, and love.
          </p>
          </Reveal>
        </div>
        <div className="max-w-[1024px] w-full  mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8 text-center">
          <div className="rounded-lg overflow-hidden">
          <Reveal y={20} opacityFrom={0}>
            <Image
              src="/images/donate/d-1.png"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            </Reveal>
          </div>
          <div className="rounded-lg overflow-hidden">
          <Reveal y={25} opacityFrom={0}>
            <Image
              src="/images/donate/d-2.png"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            </Reveal>
          </div>
          <div className="rounded-lg overflow-hidden">
          <Reveal y={30} opacityFrom={0}>
            <Image
              src="/images/donate/d-3.png"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            </Reveal>
          </div>
          <div className="rounded-lg overflow-hidden">
          <Reveal y={35} opacityFrom={0}>
            <Image
              src="/images/donate/d-4.png"
              width={1000}
              height={1000}
              alt=""
            ></Image>
            </Reveal>
          </div>
          <div className="bg-[#27A9D8] text-start p-4 rounded-lg text-white">
          <Reveal y={20} opacityFrom={0}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              100K +
            </h2>
            </Reveal>

            <Reveal y={25} opacityFrom={0}>
            <p>
              Dogs around the world are homeless, hungry, and in need of care
              and protection.
            </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
