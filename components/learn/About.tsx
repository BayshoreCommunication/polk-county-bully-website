"use client";
import Image from "next/image";


export default function AboutPitBulls() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-3">
          Learn about our Pits and other breeds
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Pit Bulls make wonderful companions and can be a great addition to families in
          the right living situation. They do require responsible, dedicated, and informed
          ownership, and many times, rescue Pit Bulls require an extra dose of love.
        </p>
      </div>

      {/* ===== Content Grid ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* ===== Left: Image Collage ===== */}
        <div className="grid grid-cols-2 gap-4 lg:items-stretch">
          {/* Tall image (left side) */}
          <div className="col-span-1 row-span-2 relative w-full rounded-xl overflow-hidden aspect-[3/5] md:aspect-[4/6] lg:aspect-auto lg:h-[560px]">
            <Image
              src="/images/learnpage/about/left.png"
              alt="Pit bull playing with tennis ball"
              width={1000}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Right column images (stacked) */}
          <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[270px]">
            <Image
              src="/images/learnpage/about/right1.png"
              alt="Bulldog close up"
              width={1000}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[270px]">
            <Image
              src="/images/learnpage/about/right2.png"
              alt="Pit bull looking up"
              width={1000}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* ===== Right: Text Content ===== */}
        <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2a3b47] mb-4">
            About Pit Bulls
          </h3>

          <p>
            We love all bully breeds and especially Pit Bulls! We have seen too many of
            them wind up in shelters or abandoned because they have a bad rap. However, we
            know them for what they really are: lovable, loyal companions who just want
            your affection and attention – just like every other dog!
          </p>

          <p>
            Pit bulls often carry an undeserved reputation rooted in misunderstanding and
            media exaggeration. These dogs were originally bred for their strength and
            determination, traits that have sadly been exploited for negative purposes
            like dogfighting.
          </p>

          <p>
            When incidents involving neglected or poorly trained pit bulls make headlines,
            the breed as a whole is unfairly judged, even though the real issue often lies
            in how the dog was raised. In reality, behavior is shaped far more by
            environment and training than by breed alone.
          </p>

          <p>
            Many pit bulls, when given proper care and love, prove to be affectionate,
            loyal, and gentle companions.
          </p>

          <p>
            Unfortunately, this unjust stigma has led to an overrepresentation of pit
            bulls in shelters and laws that unfairly target them, making it harder for
            these dogs to find loving homes.
          </p>
        </div>
      </div>

      {/* ===== Bottom Paragraphs ===== */}
      <div className="max-w-[1640px] mx-auto mt-12 text-gray-700 text-sm md:text-base leading-relaxed text-justify space-y-4">
        <p>
          Despite the challenges they face, pit bulls make wonderful pets and deserve a
          second chance. They are intelligent, devoted, and playful animals that thrive in
          homes where they receive structure and positive reinforcement. Historically known
          as “nanny dogs” for their gentle and protective nature with children, pit bulls
          are well-suited to family life.
        </p>

        <p>
          Adopting a pit bull does more than provide a home to a deserving dog; it also
          helps to challenge the harmful stereotypes surrounding the breed. For those who
          open their hearts to a pit bull, the reward is a deeply loyal and loving
          companion who will shatter any preconceptions about what this misunderstood breed
          can truly offer.
        </p>
      </div>
    </section>
  );
}
