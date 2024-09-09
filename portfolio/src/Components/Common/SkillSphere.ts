import * as THREE from "three";
import { useEffect, useRef } from "react";
const SkillSphere = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
  }, []);
};

export default SkillSphere;
