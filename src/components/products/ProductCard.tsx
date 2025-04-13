
import { Star, View3d } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100) 
    : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 left-2 z-10 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
          {discountPercentage}% OFF
        </div>
      )}
      
      {/* Seller Badge */}
      <div className="absolute top-2 right-2 z-10 bg-white/80 text-neutral-dark text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        {product.seller.name}
      </div>

      {/* 3D View Button */}
      <div className="absolute top-12 right-2 z-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={`/product/3d/${product.id}`}>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                >
                  <View3d className="h-4 w-4" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View in 3D</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-all group-hover:scale-105"
        />
        
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white">
            <span className="font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col p-4 flex-1">
        <div className="flex items-center mb-1 text-xs font-medium text-neutral">
          <span>{product.category}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg line-clamp-2 mb-1">
          {product.name}
        </h3>
        
        <p className="text-neutral text-sm line-clamp-2 mb-3">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center">
          {product.discountPrice ? (
            <div className="flex flex-col">
              <span className="font-bold text-lg">
                {formatPrice(product.discountPrice)}
              </span>
              <span className="text-neutral text-xs line-through">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <span className="font-bold text-lg">
              {formatPrice(product.price)}
            </span>
          )}
          
          <button 
            className="ml-auto bg-primary hover:bg-primary-dark text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            disabled={!product.inStock}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
