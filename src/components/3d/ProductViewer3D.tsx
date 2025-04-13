
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Environment, Float } from "@react-three/drei";
import { Mesh, Group } from "three";

interface ModelProps {
  color?: string;
}

// Simple cube model
const CubeModel = ({ color = "#9b87f5" }: ModelProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Simple product box model
const ProductBox = ({ color = "#9b87f5" }: ModelProps) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.8, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.4, 0.2, 0.9]} />
        <meshStandardMaterial color={color === "#9b87f5" ? "#7E69AB" : "#ea580c"} />
      </mesh>
    </group>
  );
};

interface ProductViewer3DProps {
  modelType?: "cube" | "product";
  color?: string;
  height?: string;
}

const ProductViewer3D = ({ 
  modelType = "product", 
  color = "#9b87f5",
  height = "300px"
}: ProductViewer3DProps) => {
  return (
    <div style={{ height, width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            {modelType === "cube" ? (
              <CubeModel color={color} />
            ) : (
              <ProductBox color={color} />
            )}
          </Float>
        </PresentationControls>
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ProductViewer3D;
