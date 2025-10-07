"use client";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function AboutPitBulls() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
      <Reveal y={20} opacityFrom={0}>
        <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-3">
          Learn about our Pits and other breeds
        </h2>
        </Reveal>
        <Reveal y={25} opacityFrom={0}>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Pit Bulls make wonderful companions and can be a great addition to families in
          the right living situation. They do require responsible, dedicated, and informed
          ownership, and many times, rescue Pit Bulls require an extra dose of love.
        </p>
        </Reveal>
      </div>

      {/* ===== Content Grid ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* ===== Left: Image Collage ===== */}
        <Image
              src="/images/learnpage/about/group.png"
              alt="Pit bull playing with tennis ball"
              width={1000}
              height={800}
              className="object-cover object-top w-[600px] h-full"
              priority
            />

        {/* ===== Right: Text Content ===== */}
        <div className="lg:col-span-2 text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
        <Stagger>
        <Reveal y={10} opacityFrom={0}>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2a3b47] mb-4">
            About Pit Bulls
          </h3>
          </Reveal>
          <Reveal y={15} opacityFrom={0}>
          <p>
            We love all bully breeds and especially Pit Bulls! We have seen too many of
            them wind up in shelters or abandoned because they have a bad rap. However, we
            know them for what they really are: lovable, loyal companions who just want
            your affection and attention – just like every other dog!
          </p>
          </Reveal>
          <Reveal y={20} opacityFrom={0}>
          <p>
            Pit bulls often carry an undeserved reputation rooted in misunderstanding and
            media exaggeration. These dogs were originally bred for their strength and
            determination, traits that have sadly been exploited for negative purposes
            like dogfighting.
          </p>
          </Reveal>
          <Reveal y={25} opacityFrom={0}>
          <p>
            When incidents involving neglected or poorly trained pit bulls make headlines,
            the breed as a whole is unfairly judged, even though the real issue often lies
            in how the dog was raised. In reality, behavior is shaped far more by
            environment and training than by breed alone.
          </p>
          </Reveal>
          <Reveal y={30} opacityFrom={0}>
          <p>
            Many pit bulls, when given proper care and love, prove to be affectionate,
            loyal, and gentle companions.
          </p>
          </Reveal>
          <Reveal y={35} opacityFrom={0}>
          <p>
            Unfortunately, this unjust stigma has led to an overrepresentation of pit
            bulls in shelters and laws that unfairly target them, making it harder for
            these dogs to find loving homes.
          </p>
          </Reveal>
          </Stagger>
        </div>
      </div>

      {/* ===== Bottom Paragraphs ===== */}
      <div className="max-w-[1640px] mx-auto mt-12 text-gray-700 text-sm md:text-base leading-relaxed text-justify space-y-4">
      <Stagger>
      <Reveal y={20} opacityFrom={0}>
        <p>
          Despite the challenges they face, pit bulls make wonderful pets and deserve a
          second chance. They are intelligent, devoted, and playful animals that thrive in
          homes where they receive structure and positive reinforcement. Historically known
          as “nanny dogs” for their gentle and protective nature with children, pit bulls
          are well-suited to family life.
        </p>
        </Reveal>
        <Reveal y={30} opacityFrom={0}>
        <p>
          Adopting a pit bull does more than provide a home to a deserving dog; it also
          helps to challenge the harmful stereotypes surrounding the breed. For those who
          open their hearts to a pit bull, the reward is a deeply loyal and loving
          companion who will shatter any preconceptions about what this misunderstood breed
          can truly offer.
        </p>
        </Reveal>
        </Stagger>
      </div>
    </section>
  );
}
