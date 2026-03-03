import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { TrackRecordSection } from "@/components/sections/TrackRecordSection";
import { DoingSomethingGreatSection } from "@/components/sections/DoingSomethingGreatSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { QContactSection } from "@/components/sections/QContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <IntroSection />
        <TrackRecordSection />
        <DoingSomethingGreatSection />
        <PartnershipSection />
        <QContactSection />
      </main>
      <FooterSection />
    </>
  );
}
