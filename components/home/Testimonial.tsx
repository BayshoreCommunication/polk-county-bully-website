"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

const testimonials = [
  {
    id: 1,
    text: "Adopting through Bully Project Rescue was seamless and heartwarming. Our new pup feels like part of the family already!",
    author: "Catherine, Los Angeles",
    avatar: "/images/testimonial/people1.png",
  },
  {
    id: 2,
    text: "The team was so supportive and caring. They matched us with the perfect dog, and the entire process felt personal and safe.",
    author: "Dany Monson, Austin, TX",
    avatar: "/images/testimonial/people1.png",
  },
  {
    id: 3,
    text: "Fostering with Bully Project Rescue was a life-changing experience. I got to help dogs in need while preparing them for their forever homes.",
    author: "Cahaya Dewi, New York, NY",
    avatar: "/images/testimonial/people2.png",
  },
  {
    id: 4,
    text: "We couldn’t be happier with our adoption. The dog was healthy, happy, and ready to love. Thank you, Bully Project Rescue!",
    author: "Sacha Dubois, Los Angeles, LA",
    avatar: "/images/testimonial/people3.png",
  },
  // {
  //   id: 5,
  //   text: "We couldn’t be happier with our adoption. The dog was healthy, happy, and ready to love. Thank you, Bully Project Rescue!",
  //   author: "Pavlyuchenko, California, CA",
  //   avatar: "/images/testimonial/people4.png",
  // },
  // {
  //   id: 6,
  //   text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
  //   author: "Cahaya Dewi, New York, NY",
  //   avatar: "/images/testimonial/people2.png",
  // },
  // {
  //   id: 7,
  //   text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
  //   author: "Sacha Dubois, Los Angeles, LA",
  //   avatar: "/images/testimonial/people3.png",
  // },
  // {
  //   id: 8,
  //   text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
  //   author: "Pavlyuchenko, California, CA",
  //   avatar: "/images/testimonial/people4.png",
  // },
];

export default function Testimonial() {
  return (
    <div className="bg-[#F5F9FA] py-8 md:py-16">
      <div className="max-w-[1640px] px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <Stagger>
            
          <div>
          <Reveal y={20} opacityFrom={0}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Testimonial</h2>
            </Reveal>
            <Reveal y={25} opacityFrom={0}>
            <p className="text-gray-600 mb-6">
              Hear from families who’ve found their perfect furry companions.
            </p>
            </Reveal>
            <div className="bg-white shadow-lg p-6 rounded-xl relative max-w-md  left-0 md:left-[80%]">
              <div className="absolute -top-6 left-6 bg-yellow-400 text-white p-3 rounded-full">
                💬
              </div>
              <Reveal y={30} opacityFrom={0}>
              <p className="italic text-gray-700 mb-4">
                “The first day we bought Miso home, he did’nt cry at all on the
                car ride home. He was incredibely curious.”
              </p>
              </Reveal>
              <p className="font-semibold text-gray-900">
                Catherine, Los Angeles
              </p>
            </div>
          </div>
          </Stagger>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <Image
              src="/images/testimonial/testimonial.png"
              alt="Client with dog"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Swiper Slider Section */}
        <div className="mt-16">

          <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="text-center h-full flex flex-col justify-between">
                
                  <p className="text-gray-600 mb-4">“{t.text}”</p>
                 
                  <div className="flex items-center justify-center gap-3 mt-auto">
                    {t.avatar && (
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    
                    <p className="text-sm font-semibold text-gray-900">
                      {t.author}
                    </p>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
