import Image from "next/image";

export default function HowWeStarted() {
  return (
    <section className="bg-white text-black max-w-[1640px] px-8 my-8 md:my-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div>
          <Image
            src="/images/howwestarted/left.jpg"
            alt="Rescue Dog"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Bully Rescue Project</h2>
          <p className="text-gray-700 mb-6">
            The Polk County Bully Project is a foster-based non-profit 501(c)(3) rescue organization located in Lakeland, Florida. Their mission is to rescue and find forever homes for bully breeds, particularly pit bulls. Since their inception in 2019, the organization has rescued over 5,500 dogs, demonstrating their commitment to giving every dog a chance.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">How We Started</h3>
          <p className="text-gray-700 mb-6">
            The Polk County Bully Project relies on community support through donations, fostering, and volunteering. They provide all necessary immunizations, spaying or neutering, and can supply food and other essentials for foster families. Additionally, they accept donations of supplies like dog food, crates, dog beds, treats, leashes, and collars to support their efforts.
          </p>

          <div className="mt-6">
            <Image
              src="/images/howwestarted/right.jpg"
              alt="Bully Project Rescue Founders"
              width={500}
              height={350}
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-sm text-gray-600 mt-2">
              Bully Project Rescue Founders: Shannon Medina (left) and Angie Lorio (right).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
