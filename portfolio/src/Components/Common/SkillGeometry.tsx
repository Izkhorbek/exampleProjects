import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
function SkillGeometry() {
  const texture = useLoader(
    THREE.TextureLoader,
    "../../../public/assets/skills/Js.png"
  );
  // Adjust texture scaling
  texture.wrapS = THREE.RepeatWrapping; // Wrap horizontally
  texture.wrapT = THREE.RepeatWrapping; // Wrap vertically

  return (
    <div className="w-full h-[200px]">
      <Canvas>
        <OrbitControls autoRotate={true} enableRotate={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh>
          <ambientLight intensity={1} color={"0x404040"} />
          <sphereGeometry args={[5, 32, 16]} />
          <meshStandardMaterial
            map={texture}
            attach={"material"}
            color={"yellow"}
          />
        </mesh>
      </Canvas>
    </div>
  );
}

export default SkillGeometry;
