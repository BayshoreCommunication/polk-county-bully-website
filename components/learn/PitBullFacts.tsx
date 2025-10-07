"use client";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function PitBullFacts() {
  return (
    <main className="bg-[#F5F9FA]">
        <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto">
      {/* ===== Header Section ===== */}
      <div className="mb-10 text-left">
      <Reveal y={30} opacityFrom={0}>
        <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-4">
          Here is some basic information to help you think twice 
          about this breed and their stereotypes
        </h2>
        </Reveal>
        {/* Facts List */}
        <Stagger>
        <ol className="list-decimal list-inside text-gray-700 text-base leading-relaxed space-y-3">
        <Reveal y={20} opacityFrom={0}>
          <li>
            Let’s start with the fact that Pit Bulls are not actually a breed of dog. The term refers
            to a variety of breeds of about 10 dogs, like the American Staffordshire terrier,
            Staffordshire bull terrier, bulldog, and other such mixes of dogs. It is a generic term
            often used to describe all dogs with similar traits and characteristics often known to the
            general public as “Pit Bulls.” While there is an American Pit Bull Terrier breed, they only
            make up a very small percentage of dogs.
          </li>
          </Reveal>
          <Reveal y={25} opacityFrom={0}>
          <li>
            In the early part of the last century, Pit Bulls were known as “Nanny Dogs.” It may be hard
            to believe now with all of the bad press they receive, but Pit Bulls were the breed of
            choice among parents with young children. If you left your kid with a Pit Bull, they were safe!
          </li>
          </Reveal>
          <Reveal y={30} opacityFrom={0}>
          <li>
            They were originally bred to drive and catch livestock and to serve as the ideal family
            companions.
          </li>
          </Reveal>
          <Reveal y={30} opacityFrom={0}>
          <li>
            Pit Bulls were not bred as guard dogs because they were too friendly.
          </li>
          </Reveal>
          <Reveal y={35} opacityFrom={0}>
          <li>They do not have locking jaws. This is a myth!</li>
          </Reveal>
          <Reveal y={40} opacityFrom={0}>
          <li>
            To piggyback on fact number five: Pit Bulls also don’t have the strongest bite among all dog
            breeds. German Shepherds and Rottweilers actually have a more powerful bite.
          </li>
          </Reveal>
          <Reveal y={45} opacityFrom={0}>
          <li>
            As many as 75% of mixed breed dogs in animal shelters, including Pit Bulls and Pit Bull
            mixes, are misidentified as the wrong breed.
          </li>
          </Reveal>
          <Reveal y={50} opacityFrom={0}>
          <li>
            They are not inherently aggressive dogs. In fact, in temperament tests, Pit Bulls were the
            second most tolerant breed behind Golden Retrievers.
          </li>
          </Reveal>
        </ol>
        </Stagger>
      </div>

      {/* ===== Characteristics Section ===== */}
      <div className="mt-12 text-left">
      <Reveal y={20} opacityFrom={0}>
        <h3 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-4">
          Characteristics
        </h3>
        </Reveal>

        <div className="text-gray-700 text-base leading-relaxed space-y-4">
        <Reveal y={25} opacityFrom={0}>
          <p>
            Pit Bulls are intelligent, agile, loving, faithful, and extremely trainable. They love
            snuggling up to you to give you tons of kisses—they will be your most faithful companion.
            Pits put their all into whatever they start!
          </p>
          </Reveal>
          <Reveal y={30} opacityFrom={0}>
          <p>
            One of the most endearing traits of Pit Bulls is their love of people and need for
            affection. They love cuddling, showering kisses, and spending time with their people. A lot
            of Pit Bulls think they’re lap dogs, despite their bulky frames! In fact, the American Pit
            Bull Terrier has a passing score of 82.3% on the American Temperament Test Society’s tests.
          </p>
          </Reveal>
        </div>
      </div>
    </section>
    </main>
  );
}
