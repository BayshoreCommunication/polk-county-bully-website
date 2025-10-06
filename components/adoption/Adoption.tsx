"use client";
import Image from "next/image";
import Link from "next/link";

export default function Adoption() {
  return (
    <main className="bg-[#F5F9FA]">
        <section className="max-w-[1640px] px-8 mx-auto flex flex-col md:flex-row items-center justify-between py-12">
      {/* Left Content */}
      <div className="text-left mb-8  md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-3">
        Adoption
        </h1>
        <div className="text-sm font-medium">
          <Link href="/" className="text-[#2a3b47] hover:text-primary">
            Home
          </Link>
          <span className="mx-1 text-[#2a3b47]">/</span>
          <Link
            href="/adoption"
            className="text-primary hover:underline transition"
          >
            Adoption
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 lg:w-[500px] xl:w-[550px] h-[200px] md:h-[300px] lg:h-[350px]">
        <Image
          src="images/aboutpage/about/bg.png"
          alt="About Us Illustration"
          width={1000}
          height={800}
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
    </main>
  );
}
