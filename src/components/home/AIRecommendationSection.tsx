
import { Sparkles } from "lucide-react";
import { Product } from "@/types";
import ProductGrid from "../products/ProductGrid";

interface AIRecommendationSectionProps {
  products: Product[];
}

const AIRecommendationSection = ({ products }: AIRecommendationSectionProps) => {
  return (
    <section className="py-12 bg-gradient-to-br from-primary-light/40 to-white">
      <div className="container px-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
            AI Recommendations
          </h2>
        </div>
        <p className="text-neutral mb-6 max-w-2xl">
          Personalized product recommendations based on preferences and shopping behavior across the ONDC network.
        </p>
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default AIRecommendationSection;
