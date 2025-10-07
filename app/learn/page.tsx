import Learn from "@/components/learn/Learn";
import About from "@/components/learn/About";
import PitBullFacts from "@/components/learn/PitBullFacts";

export default function Home() {
  return (
    <div className="pt-[120px] md:pt-[125px]">
      <Learn />
      <About />
      <PitBullFacts />
    </div>
  );
}
