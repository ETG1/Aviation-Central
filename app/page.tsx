import { HeroSection } from "@/components/hero-section";
import { SearchWidget } from "@/components/search-widget";
import { TrustRow } from "@/components/trust-row";
import { DestinationGrid } from "@/components/destination-grid";
import { CategoryRow } from "@/components/category-row";
import { FeaturedAirshows } from "@/components/featured-airshows";
import { StatsStrip } from "@/components/stats-strip";
import { WhyChooseUs } from "@/components/why-choose-us";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaBanner } from "@/components/cta-banner";
import { ArticlesRow } from "@/components/articles-row";
import { NewsletterBand } from "@/components/newsletter-band";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <SearchWidget />
      <TrustRow />
      <DestinationGrid />
      <CategoryRow />
      <FeaturedAirshows />
      <StatsStrip />
      <WhyChooseUs />
      <TestimonialsSection />
      <CtaBanner />
      <ArticlesRow />
      <NewsletterBand />
    </main>
  );
}
