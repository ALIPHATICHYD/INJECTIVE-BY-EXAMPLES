import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import QuickLinks from '@/components/QuickLinks';
import TutorialCards from '@/components/TutorialCards';
import NetworkStats from '@/components/NetworkStats';
import AdvantageCards from '@/components/AdvantageCards';
import EventStrip from '@/components/EventStrip';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { topics } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee items={topics} />
        <QuickLinks />
        <TutorialCards />
        <NetworkStats />
        <AdvantageCards />
        <EventStrip />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
