import Info, { Properties } from "./Info";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface STLModelProps {
  url: string;
  zoom?: number;
}

function STLModel({ url, zoom=1.2 }: STLModelProps) {
   // @ts-ignore
  const geometry = useLoader<THREE.BufferGeometry, string>(STLLoader, url);
  const { camera } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    geometry.computeBoundingBox();
    const bbox = geometry.boundingBox;
    if (!bbox || !meshRef.current) return;

    // 🔁 Rotate model 45 degrees around Y axis
    meshRef.current.rotation.y = Math.PI / 4;

    const center = new THREE.Vector3();
    bbox.getCenter(center);

    const size = new THREE.Vector3();
    bbox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);

     // @ts-ignore
    const fovRad = (camera.fov * Math.PI) / 180;
    const distance = (maxDim) / Math.tan(fovRad / 2) * zoom;

    // 🧭 Position camera in front of model, offset along Z
    const cameraPos = new THREE.Vector3(center.x, center.y, center.z + distance);

    camera.position.copy(cameraPos);
    camera.lookAt(center);
  }, [geometry, camera, zoom]);
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}


export default function GenerateCard() {
  const [title, setTitle] = useState<string>();
  const [prompts, setPrompts] = useState<Properties>([
    { key: "Category", val: "Tools" },
    { key: "Dimensions", val: "56mm x 48mm x 38mm" },
    { key: "Complexity", val: "Medium" },
  ]);

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <Canvas camera={{ near: 0.1, far: 1000 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <STLModel url="/Dragon.stl" zoom={10} />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
          <Info info={prompts} />
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
