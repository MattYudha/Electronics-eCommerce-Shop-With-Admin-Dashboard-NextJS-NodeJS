import { CategoryMenu, Hero, Incentives, Newsletter, ProductsSection, IntroducingSection } from "@/components";

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <Hero />
      <IntroducingSection />
      <div className="relative border-t-2 border-b-2 border-grilli-gold"></div>
      <CategoryMenu />
      <div className="relative border-t-2 border-b-2 border-grilli-gold"></div>
      <ProductsSection />
    </div>
  );
}
