import Image from "next/image";

export default function Hero() {
  return (
    <main className="max-w-[1640px] px-8 mb-8 md:mb-16  mx-auto">
      {/* Hero Section */}
      <div className="relative pb-8 md:pb-16">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Left Dog */}
          <div className="flex-1 flex justify-center">
            <div className="">
              <Image
                src="/images/hero/left.png"
                alt="Dog 1"
                width={1000}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Every dog deserves to be in a loving home
            </h1>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              At the Bully Project Rescue in Polk county, we believe that we can
              end breed discrimination and cruelty by working together through
              education and community support. Whether you’re ready to adopt,
              foster, donate or volunteer, you can make a difference for Pit
              Bulls and all Bully Breed dogs in Polk County, Florida.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-600 transition w-full">
                Contact Us
              </button>
              <button className="flex items-center gap-2  w-full   text-primary rounded-md font-semibold transition">
                <span className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/hero/link.png"
                    alt="Dog 1"
                    width={1000}
                    height={900}
                    className="relative z-10 w-full h-auto"
                  />
                </span>
                <span className="block">Explore More</span>
              </button>
            </div>
          </div>

          {/* Right Dog */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="/images/hero/right.png"
                alt="Dog 2"
                width={460}
                height={580}
                className="relative z-10 w-[400px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* Floating Info Cards */}
        <section className=" lg:absolute mt-6 md:mt-0 left-0 right-0 -bottom-[30%] z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  bg-white  shadow-medium rounded-2xl p-6 lg:p-10 text-center transition max-w-5xl mx-auto">
            <div className="">
              <div className="flex justify-center mb-4 text-3xl text-yellow-500">
                <Image
                  src="/images/hero/float1.png"
                  alt="Dog 2"
                  width={460}
                  height={580}
                  className="relative z-10 w-16 h-auto"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Want to adopt a dog?
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="">
              <div className="flex justify-center mb-4 text-3xl text-green-500 ">
                <Image
                  src="/images/hero/float2.png"
                  alt="Dog 2"
                  width={460}
                  height={580}
                  className="relative z-10 w-16 h-auto"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Need to rehome a dog?
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="">
              <div className="flex justify-center mb-4 text-3xl text-indigo-500">
                <Image
                  src="/images/hero/float3.png"
                  alt="Dog 2"
                  width={460}
                  height={580}
                  className="relative z-10 w-16 h-auto"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Make a donation</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
