import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Navigation />
      <HeroBanner />
      <ProductGrid />
      <Footer />
    </main>
  );
}
