import FAQSection from '@/components/landing-page/faq';
import Explore from '@components/landing-page/explore';
import ExploreTest from '@components/landing-page/explore-test';
import Pricing from '@components/landing-page/pricing';
import JoinUsSection from '@components/landing-page/join-us-section';
import Footer from '@components/landing-page/footer';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@components/landing-page/hero'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 dark:text-white overflow-hidden ">
      <Hero />
      <section className="border-b border-b-border h-96 w-full"></section>
      <Explore />
      <ExploreTest />
      <Pricing />
      <FAQSection />
      <JoinUsSection />
      <Footer />
    </main>
  );
}
