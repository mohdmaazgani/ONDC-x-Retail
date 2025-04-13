
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocalSeller {
  id: string;
  name: string;
  image: string;
  category: string;
  distance: string;
  rating: number;
}

// Mock local sellers data
const localSellers: LocalSeller[] = [
  {
    id: "ls1",
    name: "Fresh Farm Market",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    category: "Groceries",
    distance: "1.2 km",
    rating: 4.8
  },
  {
    id: "ls2",
    name: "Tech Avenue",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
    category: "Electronics",
    distance: "2.5 km",
    rating: 4.5
  },
  {
    id: "ls3",
    name: "Trendy Fashion Store",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    category: "Fashion",
    distance: "3.1 km",
    rating: 4.3
  },
  {
    id: "ls4",
    name: "Home Decor Studio",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    category: "Home",
    distance: "1.8 km",
    rating: 4.6
  }
];

const LocalSellerSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
            Local Sellers Near You
          </h2>
          <Button variant="outline" className="flex items-center gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {localSellers.map((seller) => (
            <div key={seller.id} className="bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={seller.image} 
                  alt={seller.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="text-xs text-white font-medium px-2 py-1 bg-primary/80 rounded-full">
                    {seller.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{seller.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-neutral">
                    <span className="text-xs bg-success-light text-success px-1.5 py-0.5 rounded-full">
                      {seller.rating} ★
                    </span>
                    <span className="mx-1">•</span>
                    <span>{seller.distance}</span>
                  </div>
                  <Button variant="link" className="text-sm text-primary p-0 h-auto">
                    Visit Shop
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalSellerSection;
