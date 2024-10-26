
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Section from "./_components/Section";
import Middle from "./_components/Middle";
import Middle3 from "./_components/Middle3";

export default function Home() {
  return (
       <div>
          <Header />
          <Hero />
          <Section />
          <Middle3/>
       </div>
  );
}
