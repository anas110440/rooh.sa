/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useLayoutEffect, useRef, useState } from 'react';
import { Canvas, applyProps, useFrame } from '@react-three/fiber';
import {
  PerformanceMonitor,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  useGLTF,
  OrbitControls,
} from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina';

export function Award() {
  const [degraded, degrade] = useState(false);
  return (
    <Canvas shadows camera={{ position: [3, -2, 15], fov: 30 }}>
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={1} />
      <PMO scale={0.08} position={[0, 0, 0]} />
      <AccumulativeShadows
        position={[0, -3.6, 0]}
        frames={100}
        alphaTest={0.9}
        scale={4}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          position={[1, 5, -1]}
        />
      </AccumulativeShadows>
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment
        frames={degraded ? 1 : Infinity}
        resolution={256}
        background
        blur={2}
      >
        <Lightformers />
      </Environment>
      <OrbitControls autoRotate={false} />
    </Canvas>
  );
}

function PMO(props) {
  const { scene, nodes, materials } = useGLTF('/anas.glb');
  useLayoutEffect(() => {
    applyProps(materials.mat0, {
      color: '#ebc283',
      roughness: 0.6,
      roughnessMap: null,
      metalness: 0.5,
    });
    applyProps(materials.mat1, {
      color: '#ebc283',
      roughness: 0.1,
      roughnessMap: null,
      metalness: 0.8,
    });
    applyProps(materials.mat2, {
      color: '#ebc283',
      roughness: 0.6,
      roughnessMap: null,
      metalness: 1.2,
    });
    applyProps(materials.mat3, {
      color: '#272727',
      roughness: 0.6,
      roughnessMap: null,
      metalness: 1,
    });
    applyProps(materials.mat4, {
      color: '#272727',
      roughness: 0.6,
      roughnessMap: null,
      metalness: 1,
    });
    applyProps(materials.mat5, {
      color: '#272727',
      roughness: 0.6,
      roughnessMap: null,
    });
    applyProps(materials.mat6, {
      color: '#ebc283',
      roughness: 0.6,
      roughnessMap: null,
      metalness: 1,
    });
    applyProps(materials.mat7, {
      color: '#272727',
      roughness: 0.6,
      roughnessMap: null,
      metalness: 1,
    });
  }, [nodes, materials]);
  return <primitive object={scene} {...props} />;
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -60)
  );

  return (
    <>
      <Lightformer
        intensity={1}
        rotation-y={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      <Lightformer
        form="ring"
        color="white"
        intensity={3}
        scale={10}
        position={[0, 15, -10]}
        target={[0, 0, 0]}
      />
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth
            colorA="white"
            colorB="black"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </>
  );
}
