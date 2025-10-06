import EmbeddedSite from "@/components/home/EmbeddedSite";
import Hero from "@/components/home/Hero";
import RescuePage from "@/components/home/RescuePage";
import Testimonial from "@/components/home/Testimonial";
import HowWeStarted from "@/components/home/HowWeStarted";

export default function Home() {
  return <>
    <Hero />
    <EmbeddedSite />
    <RescuePage />
    <Testimonial />
    <HowWeStarted/>
  </>;
}
