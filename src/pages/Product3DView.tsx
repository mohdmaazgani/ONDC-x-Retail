
import { useParams, Link } from "react-router-dom";
import ProductViewer3D from "@/components/3d/ProductViewer3D";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { mockProducts } from "@/data/mockData";

const Product3DView = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  const randomColor = ["#9b87f5", "#0EA5E9", "#f97316"][Math.floor(Math.random() * 3)];

  return (
    <div className="container py-12 px-4">
      <Link to="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Button>
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ProductViewer3D 
            modelType={Math.random() > 0.5 ? "cube" : "product"} 
            color={randomColor} 
            height="400px" 
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-neutral-dark mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Interactive 3D View</h3>
            <p className="text-sm text-neutral">
              • Click and drag to rotate the 3D model<br />
              • Pinch or use mouse wheel to zoom<br />
              • Use two fingers to pan around
            </p>
          </div>
          
          <div className="bg-primary-light rounded-lg p-4 mb-6">
            <p className="text-sm">
              This is an interactive 3D representation of the product. Actual product may vary.
              The 3D models help you visualize the product from all angles before purchase.
            </p>
          </div>
          
          <Button className="w-full">View Full Product Details</Button>
        </div>
      </div>
    </div>
  );
};

export default Product3DView;
