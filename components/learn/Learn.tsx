"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function Learn() {
  return (
    <main className="bg-[#F5F9FA]">
        <section className="max-w-[1640px] px-8 mx-auto flex flex-col md:flex-row items-center justify-between py-12 overflow-hidden">
      {/* Left Content */}
      <div className="text-left mb-8 md:mb-0">
      <Reveal y={20} opacityFrom={0}>
        <h1 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-3">
        Learn
        </h1>
        </Reveal>
        <div className="text-sm font-medium">
          <Link href="/" className="text-[#2a3b47] hover:text-primary">
            Home
          </Link>
          <span className="mx-1 text-[#2a3b47]">/</span>
          <Link
            href="/learn"
            className="text-primary hover:underline transition"
          >
            Learn
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 lg:w-[500px] xl:w-[550px] h-[200px] md:h-[300px] lg:h-[350px] ">
      <Reveal y={30} opacityFrom={0}> 
        <Image
          src="images/learnpage/learn/bg.png"
          alt="Learn Illustration"
          width={1000}
          height={800}
          className="object-contain object-center"
          priority
        />
        </Reveal>
      </div>
    </section>
    </main>
  );
}
