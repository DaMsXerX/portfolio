import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "../styles/about.css";

// ✅ Bulb Model with glowing effect
function BulbModel() {
  const { scene } = useGLTF("/models/light.glb"); // bulb.glb in public/models
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; // smooth rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      position={[0, -0.5, 0]}
    />
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 } // load when 20% of section is visible
    );

    const section = document.getElementById("about-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      className={`about ${isVisible ? "visible" : ""}`}
    >
      <div className="about-content">
        {/* Text section */}
        <div className="about-text-section">
          <h2 className="about-title">About Me</h2>
          <div className="about-divider"></div>
          <p className="about-description">
            I'm a passionate developer who loves building apps with Flutter,
            creating stunning web experiences, and designing creative UIs that
            bring ideas to life.
          </p>
          <div className="about-skills">
            <div className="skill-item">
              <span className="skill-icon">📱</span>
              <span>Mobile Development</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🌐</span>
              <span>Web Development</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🎨</span>
              <span>UI/UX Design</span>
            </div>
          </div>
        </div>

        {/* Lazy-loaded 3D model section */}
        <div className="about-model-section">
          {isVisible && (
            <Canvas
              camera={{ position: [0, 0, 6], fov: 45 }}
              className="about-canvas"
            >
              <Suspense fallback={null}>
                {/* Base lights */}
                <ambientLight intensity={0.3} />
                <pointLight
                  position={[0, 0.5, 1]}
                  intensity={4}
                  distance={10}
                  decay={2}
                  color={"#fff7aa"}
                />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Bulb model */}
                <BulbModel />

                {/* Glow effect */}
                <EffectComposer>
                  <Bloom
                    intensity={2}
                    kernelSize={3}
                    luminanceThreshold={0.2}
                    luminanceSmoothing={0.9}
                  />
                </EffectComposer>

                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1.2}
                />
              </Suspense>
            </Canvas>
          )}
        </div>
      </div>
    </section>
  );
}
