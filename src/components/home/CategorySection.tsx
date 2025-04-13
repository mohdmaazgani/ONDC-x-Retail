
import { ArrowRight } from "lucide-react";
import { Category } from "@/types";
import CategoryGrid from "../products/CategoryGrid";
import { Button } from "@/components/ui/button";

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-12 bg-neutral-light">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
            Browse Categories
          </h2>
          <Button variant="outline" className="flex items-center gap-1">
            All Categories <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <CategoryGrid categories={categories} />
      </div>
    </section>
  );
};

export default CategorySection;
