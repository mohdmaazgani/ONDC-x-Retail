
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import TrendingSection from "@/components/home/TrendingSection";
import AIRecommendationSection from "@/components/home/AIRecommendationSection";
import LocalSellerSection from "@/components/home/LocalSellerSection";
import { mockProducts, popularCategories } from "@/data/mockData";

const Index = () => {
  // For demo, we'll use the same products array for trending and AI recommendations
  const trendingProducts = mockProducts.filter((_, idx) => idx < 4);
  const aiRecommendedProducts = mockProducts.filter((_, idx) => idx >= 4);
  
  return (
    <div>
      <HeroSection />
      <CategorySection categories={popularCategories} />
      <TrendingSection products={trendingProducts} />
      <LocalSellerSection />
      <AIRecommendationSection products={aiRecommendedProducts} />
    </div>
  );
};

export default Index;
