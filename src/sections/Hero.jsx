

// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, Sphere, useGLTF  } from '@react-three/drei';
// import * as THREE from 'three';
// import "../styles/hero.css";




// // Interactive Desktop Setup
// function DesktopSetup() {
//   const groupRef = useRef();
//   const monitorRef = useRef();
//   const keyboardRef = useRef();
//   const mouseRef = useRef();
//   const [hovered, setHovered] = useState(false);
//   const [screenGlow, setScreenGlow] = useState(0.5);

//   useFrame((state) => {
//     if (groupRef.current) {
//       // Gentle floating animation
//       groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
//       groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
//     }

//     // Screen glow pulsing effect
//     setScreenGlow(0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2);

//     // Keyboard gentle bounce
//     if (keyboardRef.current) {
//       keyboardRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
//     }

//     // Mouse subtle movement
//     if (mouseRef.current) {
//       mouseRef.current.position.x = 1.2 + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
//     }
//   });

//   return (
//     <group
//       ref={groupRef}
//       position={[0, -0.5, 0]}
//       onPointerEnter={() => setHovered(true)}
//       onPointerLeave={() => setHovered(false)}
//       scale={hovered ? 1.1 : 1}
//     >
//       {/* Desk */}
//       <mesh position={[0, -0.8, 0]}>
//         <boxGeometry args={[4, 0.1, 2]} />
//         <meshPhysicalMaterial
//           color="#2a2a2a"
//           metalness={0.1}
//           roughness={0.3}
//         />
//       </mesh>

//       {/* Monitor Stand */}
//       <mesh position={[0, -0.4, -0.3]}>
//         <cylinderGeometry args={[0.1, 0.15, 0.6]} />
//         <meshPhysicalMaterial
//           color="#1a1a1a"
//           metalness={0.8}
//           roughness={0.2}
//         />
//       </mesh>

//       {/* Monitor Frame */}
//       <mesh ref={monitorRef} position={[0, 0.3, -0.3]}>
//         <boxGeometry args={[2.2, 1.4, 0.1]} />
//         <meshPhysicalMaterial
//           color="#0a0a0a"
//           metalness={0.2}
//           roughness={0.8}
//         />
//       </mesh>

//       {/* Monitor Screen */}
//       <mesh position={[0, 0.3, -0.25]}>
//         <boxGeometry args={[2, 1.2, 0.02]} />
//         <meshPhysicalMaterial
//           color="#001122"
//           emissive="#64ffda"
//           emissiveIntensity={screenGlow}
//           transparent
//           opacity={0.9}
//         />
//       </mesh>

//       {/* Code Lines on Screen */}
//       {[0.3, 0.1, -0.1, -0.3].map((y, index) => (
//         <mesh key={index} position={[-0.5, 0.3 + y, -0.24]}>
//           <boxGeometry args={[Math.random() * 0.8 + 0.4, 0.02, 0.01]} />
//           <meshBasicMaterial
//             color="#64ffda"
//             transparent
//             opacity={0.8}
//           />
//         </mesh>
//       ))}

//       {/* Keyboard */}
//       <mesh ref={keyboardRef} position={[0, -0.72, 0.5]}>
//         <boxGeometry args={[1.8, 0.08, 0.6]} />
//         <meshPhysicalMaterial
//           color="#2a2a2a"
//           metalness={0.1}
//           roughness={0.4}
//         />
//       </mesh>

//       {/* Keyboard Keys */}
//       {Array.from({ length: 24 }, (_, i) => (
//         <mesh
//           key={i}
//           position={[
//             -0.7 + (i % 8) * 0.18,
//             -0.68,
//             0.3 + Math.floor(i / 8) * 0.15
//           ]}
//         >
//           <boxGeometry args={[0.12, 0.04, 0.12]} />
//           <meshPhysicalMaterial
//             color="#1a1a1a"
//             metalness={0.3}
//             roughness={0.6}
//           />
//         </mesh>
//       ))}

//       {/* Mouse */}
//       <mesh ref={mouseRef} position={[1.2, -0.72, 0.3]}>
//         <boxGeometry args={[0.25, 0.05, 0.4]} />
//         <meshPhysicalMaterial
//           color="#1a1a1a"
//           metalness={0.4}
//           roughness={0.3}
//         />
//       </mesh>

//       {/* Coffee Cup */}
//       <group position={[-1.5, -0.6, 0.3]}>
//         <mesh>
//           <cylinderGeometry args={[0.15, 0.12, 0.25]} />
//           <meshPhysicalMaterial
//             color="#8B4513"
//             metalness={0.1}
//             roughness={0.8}
//           />
//         </mesh>
//         {/* Coffee Steam */}
//         <mesh position={[0, 0.2, 0]}>
//           <sphereGeometry args={[0.05]} />
//           <meshBasicMaterial
//             color="#ffffff"
//             transparent
//             opacity={0.3}
//           />
//         </mesh>
//       </group>

//       {/* Desk Lamp */}
//       <group position={[1.5, 0, -0.5]}>
//         <mesh position={[0, -0.5, 0]}>
//           <cylinderGeometry args={[0.05, 0.05, 1]} />
//           <meshPhysicalMaterial color="#333" metalness={0.7} roughness={0.2} />
//         </mesh>
//         <mesh position={[0, 0.2, 0]} rotation={[0, 0, -0.3]}>
//           <cylinderGeometry args={[0.03, 0.03, 0.8]} />
//           <meshPhysicalMaterial color="#333" metalness={0.7} roughness={0.2} />
//         </mesh>
//         <mesh position={[0.3, 0.4, 0]}>
//           <coneGeometry args={[0.2, 0.3]} />
//           <meshPhysicalMaterial
//             color="#ff6b6b"
//             emissive="#ff6b6b"
//             emissiveIntensity={0.2}
//           />
//         </mesh>
//       </group>
//     </group>
//   );
// }

// // Particle system for background
// function ParticleField() {
//   const points = useRef();
//   const particleCount = 1000;
  
//   const particles = React.useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < particleCount; i++) {
//       temp.push(
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50
//       );
//     }
//     return new Float32Array(temp);
//   }, []);

//   useFrame((state) => {
//     if (points.current) {
//       points.current.rotation.y = state.clock.elapsedTime * 0.05;
//     }
//   });

//   return (
//     <points ref={points}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particleCount}
//           array={particles}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial size={0.1} color="#64ffda" transparent opacity={0.6} />
//     </points>
//   );
// }



// // Avatar 3D Model Loader
// function AvatarModel() {
//   const { scene } = useGLTF("/models/desktop.glb") // place avatar.glb inside public/models

//   const modelRef = useRef()
//   const [hovered, setHovered] = useState(false)

//   useFrame((state) => {
//     if (modelRef.current) {
//       modelRef.current.rotation.set(0, 5, 0) 
//       modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2

//       // Scale animation on hover
//       const targetScale = hovered ? 1.2 : 1
//       modelRef.current.scale.lerp(
//         new THREE.Vector3(targetScale, targetScale, targetScale),
//         0.1
//       )
//     }
//   })

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={2}
//       onPointerEnter={() => setHovered(true)}
//       onPointerLeave={() => setHovered(false)}
//     />
//   )
// }



// // Floating tech icons
// function FloatingIcons() {
//   const iconsRef = useRef();
  
//   useFrame((state) => {
//     if (iconsRef.current) {
//       iconsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
//     }
//   });

//   const iconPositions = [
//     [3, 2, 0],
//     [-3, -1, 1],
//     [2, -2, -1],
//     [-2, 2, 2],
//     [0, 3, -2]
//   ];

//   return (
//     <group ref={iconsRef}>
//       {iconPositions.map((position, index) => (
//         <Sphere key={index} args={[0.1]} position={position}>
//           <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.5} />
//         </Sphere>
//       ))}
//     </group>
//   );
// }

// export default function Hero() {
//   const [textVisible, setTextVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setTextVisible(true), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="hero">
//       <Canvas className="hero-canvas" camera={{ position: [5, 5, 15], fov: 75 }}>
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[10, 10, 5]} intensity={1} color="#64ffda" />
//         <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
        
//         <ParticleField />
       
//         <FloatingIcons />
//         <AvatarModel/>
       
        
//         <Stars radius={50} depth={50} count={80} factor={4} saturation={0} fade />
        
//         <OrbitControls enableZoom={false} enablePan={false} minDistance={2.5} maxDistance={55}  autoRotate autoRotateSpeed={0.3} />
//       </Canvas>

//       <div className={`hero-content ${textVisible ? 'visible' : ''}`}>
//         <div className="hero-text-container">
//           <h1 className="hero-title">
//             Hi, I'm <span className="name-highlight">Anuj</span> 👋
//           </h1>
//           <div className="hero-subtitle">
//             <span className="typewriter">Flutter & Full Stack Developer</span>
//           </div>
//           <p className="hero-description">
//             Crafting beautiful digital experiences with modern technologies
//           </p>
//           <div className="hero-buttons">
//             <button className="primary-button">View My Work</button>
//             <button className="secondary-button">Get In Touch</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.set(0, 5, 0);
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

      // Smooth hover scaling
      const targetScale = hovered ? 1.2 : 1;
      modelRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
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
