import Donate from "@/components/donate/Donate";
import Donation from "@/components/donate/Donation";
import YourEmpathy from "@/components/donate/YourEmpathy";
import RescuePage from "@/components/home/RescuePage";

export default function Home() {
  return (
    <div className="pt-[120px] md:pt-[125px]">
      <Donate />
      <YourEmpathy />
      <Donation />
      <RescuePage />
    </div>
  );
}
