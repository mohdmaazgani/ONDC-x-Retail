
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProductViewer3D from "../3d/ProductViewer3D";

const Featured3DSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-neutral-light/50 to-white">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Interactive 3D Products</h2>
          <p className="text-neutral-dark/80 max-w-2xl mx-auto">
            Explore products in 3D space. Interact with them by dragging to rotate and zoom in for a closer look.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle>Electronics</CardTitle>
              <CardDescription>Interactive gadgets and devices</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ProductViewer3D modelType="product" color="#9b87f5" height="250px" />
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle>Fashion</CardTitle>
              <CardDescription>Trendy clothing and accessories</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ProductViewer3D modelType="cube" color="#0EA5E9" height="250px" />
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle>Home Decor</CardTitle>
              <CardDescription>Beautiful items for your space</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ProductViewer3D modelType="product" color="#f97316" height="250px" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Featured3DSection;
