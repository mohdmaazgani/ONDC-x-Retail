
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryPillProps {
  category: Category;
}

const CategoryPill = ({ category }: CategoryPillProps) => {
  // Map category names to appropriate image URLs
  const getCategoryImage = (categoryName: string) => {
    switch(categoryName.toLowerCase()) {
      case 'fitness tracker smart watch':
      case 'watch':
        return "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9";
      case 'electronics':
        return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
      case 'fashion':
        return "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952";
      case 'home':
      case 'home decor':
        return "https://images.unsplash.com/photo-1721322800607-8c38375eef04";
      case 'wireless bluetooth earbuds':
      case 'earbuds':
        return "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b";
      default:
        return "https://images.unsplash.com/photo-1472851294608-062f824d29cc"; // Default placeholder
    }
  };

  return (
    <Link 
      to={`/category/${category.id}`} 
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-neutral-light hover:bg-primary-light transition-colors group overflow-hidden"
    >
      <div className="w-full h-24 mb-2 overflow-hidden rounded-md relative">
        <img 
          src={getCategoryImage(category.name)}
          alt={`${category.name} category`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <span className="font-medium text-sm">{category.name}</span>
      <span className="text-xs text-neutral">{category.count} products</span>
    </Link>
  );
};

export default CategoryPill;
