import About from "@/components/about/About";
import Founders from "@/components/about/Founders";
import RescuePage from "@/components/home/RescuePage";

export default function Home() {
  return (
    <div className="pt-[120px] md:pt-[125px]">
      <About />
      <Founders />
      <RescuePage />
    </div>
  );
}
