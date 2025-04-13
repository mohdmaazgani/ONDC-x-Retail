
import CategoryPill from "./CategoryPill";
import { Category } from "@/types";

interface CategoryGridProps {
  categories: Category[];
  title?: string;
}

const CategoryGrid = ({ categories, title }: CategoryGridProps) => {
  return (
    <section className="py-6">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <CategoryPill key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
