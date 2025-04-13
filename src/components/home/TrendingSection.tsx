
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
import ProductGrid from "../products/ProductGrid";
import { Button } from "@/components/ui/button";

interface TrendingSectionProps {
  products: Product[];
}

const TrendingSection = ({ products }: TrendingSectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
            Trending Products
          </h2>
          <Button variant="outline" className="flex items-center gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default TrendingSection;
