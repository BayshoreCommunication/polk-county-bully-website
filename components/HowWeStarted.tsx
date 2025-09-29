import Image from "next/image";

export default function HowWeStarted() {
  return (
    <section className="bg-white text-black max-w-[1640px] px-8 my-8 md:my-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div>
          <Image
            src="/images/howwestarted/left.png"
            alt="Rescue Dog"
            width={600}
            height={400}
            priority
            className="rounded-lg object-cover w-full h-auto"
            onError={(e) => {
              console.error("Error loading image:", e);
            }}
          />
        </div>

        {/* Right Content */}
        {/* ...existing code... */}

        <div className="mt-6">
          <Image
            src="/images/howwestarted/right.png"
            alt="Bully Project Rescue Founders"
            width={500}
            height={350}
            priority
            className="rounded-lg object-cover w-full h-auto"
            onError={(e) => {
              console.error("Error loading image:", e);
            }}
          />
          {/* ...existing code... */}
        </div>
      </div>
    </section>
  );
}
