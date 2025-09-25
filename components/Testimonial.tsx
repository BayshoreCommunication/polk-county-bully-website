'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "The first day we bought Miso home, he didn't cry at all on the car ride home. He was incredibly curious.",
    author: "Catherine, Los Angeles",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
    author: "Dany Monson, Austin, TX",
    avatar: "/images/testimonial/people1.png",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
    author: "Cahaya Dewi, New York, NY",
    avatar: "/images/testimonial/people2.png",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
    author: "Sacha Dubois, Los Angeles, LA",
    avatar: "/images/testimonial/people3.png",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
    author: "Pavlyuchenko, California, CA",
    avatar: "/images/testimonial/people4.png",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
    author: "Cahaya Dewi, New York, NY",
    avatar: "/images/testimonial/people2.png",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
    author: "Sacha Dubois, Los Angeles, LA",
    avatar: "/images/testimonial/people3.png",
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis egestas turpis.",
    author: "Pavlyuchenko, California, CA",
    avatar: "/images/testimonial/people4.png",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-[#F5F9FA] py-8 md:py-16">
      <div className="max-w-[1640px] px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Testimonial
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis.
            </p>

            <div className="bg-white shadow-lg p-6 rounded-xl relative max-w-md  left-0 md:left-[80%]">
              <div className="absolute -top-6 left-6 bg-yellow-400 text-white p-3 rounded-full">
                💬
              </div>
              <p className="italic text-gray-700 mb-4">
                “{testimonials[0].text}”
              </p>
              <p className="font-semibold text-gray-900">
                {testimonials[0].author}
              </p>
            </div>
          </div>

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
            {testimonials.slice(1).map((t) => (
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
