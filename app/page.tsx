import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import TutorialCards from '@/components/TutorialCards';
import AdvantageCards from '@/components/AdvantageCards';
import EventStrip from '@/components/EventStrip';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <QuickLinks />
      <TutorialCards />
      <AdvantageCards />
      <EventStrip />
      <Footer />
    </main>
  );
}
