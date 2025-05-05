import Info, { Properties } from "./Info";
import React, { useState, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

export default function GenerateCard() {
  const [title, setTitle] = useState<string>();
  const [prompts, setPrompts] = useState<Properties>([
    { key: "Category", val: "Tools" },
    { key: "Dimensions", val: "56mm x 48mm x 38mm" },
    { key: "Complexity", val: "Medium" },
  ]);

  const stlGeometry = useLoader(STLLoader, "/KregStand.stl");

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">;
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <Canvas style={{ backgroundColor: "lightgray" }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <mesh geometry={stlGeometry} rotation={[0, 10, 0]}>
              <meshStandardMaterial color="gray" />
              <meshPhongMaterial />
            </mesh>
          </Suspense>
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
