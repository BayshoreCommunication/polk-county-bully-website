import Contact from "@/components/contact/Contact";
import ContactForm from "@/components/contact/ContactForm";
import SimpleMap from "@/components/contact/SimpleMap";

export default function Home() {
  return <div className="pt-[120px] md:pt-[125px]">
    <Contact/>
    <ContactForm/> 
    <SimpleMap/>
  </div>;
}