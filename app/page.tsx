import Hero from '@/components/Hero';
import AdvantageCards from '@/components/AdvantageCards';
import GettingStarted from '@/components/GettingStarted';
import EventStrip from '@/components/EventStrip';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AdvantageCards />
      <GettingStarted />
      <EventStrip />
      <Footer />
    </main>
  );
}
