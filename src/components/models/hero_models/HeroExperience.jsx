import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useRef, useState, useEffect } from "react";
import { Robot } from "./Robot2";
import * as THREE from "three";

const RobotWithEffects = () => {
  const groupRef = useRef();
  const spotLightRef = useRef();
  const [showLaser, setShowLaser] = useState(false);
  const [scale, setScale] = useState(0.001);
  const targetScale = 0.1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLaser(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useFrame(() => {
    if (scale < targetScale) {
      setScale(prev => Math.min(prev + 0.008, targetScale));
    }
    
    if (showLaser && spotLightRef.current) {
      spotLightRef.current.intensity = 2 + Math.sin(Date.now() * 0.002) * 1;
    }
  });

  return (
    <group 
      ref={groupRef}
      scale={scale}
      position={[4, -2, 1.5]}
      rotation={[0, 0.8, -0.2]}
    >
      <Robot />
      {showLaser && (
        <SpotLight
          ref={spotLightRef}
          position={[-10, 48, -15]}
          angle={3}
          intensity={0.5}
          color="#00679A"
          distance={30}
          castShadow
          decay={1.5}
          target-position={[0, 0, 0]}
        />
      )}
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <fog attach="fog" args={['#000', 5, 15]} />
      
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isMobile}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={<Html>Loading...</Html>}>
        <Environment preset="night" />
        <RobotWithEffects />
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={10}
          blur={3}
          far={8}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;