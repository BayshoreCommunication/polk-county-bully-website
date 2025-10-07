import Adoption from "@/components/adoption/Adoption";
import AreYouReady from "@/components/adoption/AreYouReady";
import RescuePage from "@/components/home/RescuePage";

export default function Home() {
  return (
    <div className="pt-[120px] md:pt-[125px]">
      <Adoption />
      <AreYouReady />
      <RescuePage />
    </div>
  );
}
