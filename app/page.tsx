import EmbeddedSite from "@/components/EmbeddedSite";
import Hero from "@/components/Hero";
import RescuePage from "@/components/RescuePage";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return <>
    <Hero />
    <EmbeddedSite />
    <RescuePage />
    <Testimonial />
  </>;
}
