
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryPillProps {
  category: Category;
}

const CategoryPill = ({ category }: CategoryPillProps) => {
  return (
    <Link 
      to={`/category/${category.id}`} 
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-neutral-light hover:bg-primary-light transition-colors"
    >
      <div className="text-3xl mb-2">{category.icon}</div>
      <span className="font-medium text-sm">{category.name}</span>
      <span className="text-xs text-neutral">{category.count} products</span>
    </Link>
  );
};

export default CategoryPill;
