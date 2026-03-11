
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, useGLTF } from '@react-three/drei';
import { Typewriter } from 'react-simple-typewriter';
import * as THREE from 'three';
import "../styles/hero.css";

// =====================
// Avatar 3D Model Loader (Lazy)
// =====================
function AvatarModel() {
  const { scene } = useGLTF("/models/desktop.glb");
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  const targetVec = useRef(new THREE.Vector3(1, 1, 1));

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.set(0, 5, 0);
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

      // Smooth hover scaling — reuse vector to avoid per-frame allocation
      const targetScale = hovered ? 1.2 : 1;
      targetVec.current.setScalar(targetScale);
      modelRef.current.scale.lerp(targetVec.current, 0.1);
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    />
  );
}

// =====================
// Particle system
// =====================
function ParticleField() {
  const points = useRef();
  const particleCount = 1000;

  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#64ffda" transparent opacity={0.6} />
    </points>
  );
}

// =====================
// Floating icons
// =====================
function FloatingIcons() {
  const iconsRef = useRef();

  useFrame((state) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const iconPositions = [
    [3, 2, 0],
    [-3, -1, 1],
    [2, -2, -1],
    [-2, 2, 2],
    [0, 3, -2]
  ];

  return (
    <group ref={iconsRef}>
      {iconPositions.map((position, index) => (
        <Sphere key={index} args={[0.1]} position={position}>
          <meshStandardMaterial
            color="#64ffda"
            emissive="#64ffda"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  );
}

// =====================
// Hero Section
// =====================
export default function Hero() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <Canvas className="hero-canvas" camera={{ position: [5, 5, 15], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#64ffda" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />

        <ParticleField />
        <FloatingIcons />

        {/* Lazy load 3D model */}
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>

        <Stars radius={50} depth={50} count={80} factor={4} saturation={0} fade />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={2.5}
          maxDistance={55}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>

      <div className={`hero-content ${textVisible ? 'visible' : ''}`}>
        <div className="hero-text-container">
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Anuj</span> 👋
          </h1>

          {/* Typing effect */}
          <div className="hero-subtitle">
            <Typewriter
              words={["Flutter Developer", "Full Stack Developer", "UI/UX Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </div>

          <p className="hero-description">
            Crafting beautiful digital experiences with modern technologies
          </p>

          <div className="hero-buttons">
             <button
    className="primary-button"
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
  >
    View My Work
  </button>
             <button
    className="secondary-button"
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Get In Touch
  </button>
          </div>
        </div>
      </div>
    </section>
  );
}

