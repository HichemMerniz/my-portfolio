"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GridFloor() {
  const groupRef = useRef<THREE.Group>(null);
  const grid1 = useMemo(() => new THREE.GridHelper(40, 40, "#00ff66", "#0a7a3a"), []);
  const grid2 = useMemo(() => new THREE.GridHelper(40, 40, "#00ff66", "#0a7a3a"), []);

  grid1.position.z = 0;
  grid2.position.z = -40;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.position.z += delta * 4;
    if (groupRef.current.position.z >= 40) {
      groupRef.current.position.z = 0;
    }
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, 0]}>
      <primitive object={grid1} />
      <primitive object={grid2} />
    </group>
  );
}

function ParticleField({ count = 600 }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = Math.random() * 20 - 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#39ff14"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function ThreeDBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 1.5, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <color attach="background" args={["#020402"]} />
        <fog attach="fog" args={["#020402", 8, 28]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 5, 5]} color="#00ff66" intensity={2} />
        <GridFloor />
        <ParticleField />
      </Canvas>
      {/* Radial vignette to blend grid into background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,hsl(150_30%_2%)_90%)] pointer-events-none" />
    </div>
  );
}
