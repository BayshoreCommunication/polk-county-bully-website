"use client"
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";

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
            <div className="max-w-[1640px] px-8 my-8 md:my-16 mx-auto mt-[500px]">
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
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Professional Breeder</h3>
                                    <p className="text-gray-600 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Standard Quality</h3>
                                    <p className="text-gray-600 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counter Section */}
                <div
                    id="counter-section"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center my-12 bg-gray-50 p-12"
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
                        Lorem ipsum dolor sit amet consectetur. Sed orci turpis et convallis
                        egestas turpis. In nibh amet consectetur enim integer accumsan cursus
                        urna.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {["Browse pet profiles", "Join & message with Guardians", "Make a meet-up", "Make a Legal Pet Adoption"].map((title, i) => (
                            <div key={i} className="text-center">
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {`0${i + 1}.`}
                                </h3>
                                <p className="font-semibold mb-2">{title}</p>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
