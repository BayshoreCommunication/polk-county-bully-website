"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const howItWorksSteps = [
  {
    id: 1,
    title: "Browse pet profiles",
    description: "Explore adoptable dogs and find your perfect companion.",
  },
  {
    id: 2,
    title: "Join & message with Guardians",
    description: "Connect with dog guardians to learn more and ask questions.",
  },
  {
    id: 3,
    title: "Make a meet-up",
    description: "Schedule a visit to meet your future furry friend.",
  },
  {
    id: 4,
    title: "Make a Legal Pet Adoption",
    description: "Finalize your adoption and give a dog a forever home.",
  },
];

// Then replace the existing map section with:

export default function RescuePage() {
  const [inView, setInView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("counter-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div className="max-w-[1640px] px-8 my-8 md:mb-16 mx-auto">
        
        {/* Counter Section */}
        <div
          id="counter-section"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center my-12 bg-[#F5F9FA] p-12"
        >
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#2E3B4B]">
              {inView && <CountUp end={26} duration={3} separator="," />}K+
            </h3>
            <p className="text-gray-600">Dog Adopted</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#2E3B4B]">
              {inView && <CountUp end={15} duration={3} separator="," />}K+
            </h3>
            <p className="text-gray-600">Shelters & Rescues</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#2E3B4B]">
              {inView && <CountUp end={18} duration={3} separator="," />}+
            </h3>
            <p className="text-gray-600">Years of Impact</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex justify-center items-center">
          <div className="relative h-auto w-[1000px]">
            {!isVideoPlaying ? (
              <>
                <Image
                  src="/images/rescue/container.png"
                  alt="Video Thumbnail"
                  width={1000}
                  height={563}
                  className="h-auto w-[1000px]"
                />
                <button
                  type="button"
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <div className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-blue-500"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              <iframe
                className="h-[563px] w-[1000px]"
                src="https://www.youtube.com/embed/BCqJCOWUc-Q?autoplay=1&mute=1&rel=0&playsinline=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How it works?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            At Bully Project Rescue, we carefully rescue dogs in need, providing
            medical care, vaccinations, and spay/neuter services. Each dog
            enters a foster home where they receive love, training, and
            socialization until a suitable forever family is found. Our team
            works closely with adopters to ensure every match is safe and
            lasting, giving each dog the second chance they deserve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.id} className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {`0${step.id}.`}
                </h3>
                <p className="font-semibold mb-2">{step.title}</p>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
