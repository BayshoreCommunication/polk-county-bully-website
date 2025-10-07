"use client";
import Image from "next/image";
import Link from "next/link";


export default function AreYouReady() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
      {/* ===== Heading ===== */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-8">
        Are you ready to give one of our <br className="hidden md:block" />
        beautiful bullies a forever home?
      </h2>

      {/* ===== Image ===== */}
      <div className="relative w-full max-w-[1000px] mx-auto rounded-2xl overflow-hidden mb-8">
        <Image
          src="images/adoptionpage/areyouready/image.png"
          alt="Pit Bull ready for adoption"
          width={1000}
          height={800}
          className="object-cover w-full h-auto"
          priority
        />
      </div>

      {/* ===== Subheading ===== */}
      <p className="text-gray-600 text-sm md:text-base mb-4">
        Here’s how to start the process!
      </p>

      {/* ===== Body Text ===== */}
      <div className="max-w-5xl mx-auto text-gray-700 text-base leading-relaxed space-y-4 text-justify md:text-center text-sm md:text-base">
        <p>
          If you haven’t fallen in love with one of our pit bulls yet, you can see all of
          the dogs who are ready for a forever home here.Once you’ve chosen the dog you’d like to adopt, you can submit your application
          for adoption{" "}
          <Link href="#" className="underline">
            here
          </Link>
          !
        </p>

        <p>
          All of our adult dogs are spayed/neutered and up to date on vaccines. Your
          application for adoption will be processed, and you should hear back from us
          within a week. Once you are approved to adopt, we will put you in contact with
          the foster to set up a meet and greet.
        </p>
      </div>
    </section>
  );
}
