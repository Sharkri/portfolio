import { useEffect, useRef } from "react";
import * as THREE from "three";
import getRandomParticles from "./helper-functions/getRandomParticles";

const { BASE_URL } = import.meta.env;

const SCENE = { clearColor: 0x110e16 };

const CAMERA = { fov: 75, aspect: 2, near: 1.5, far: 5, position: { z: 2 } };

const LIGHT = {
  color: 0xffffff,
  intensity: 1,
  position: { x: -1, y: 2, z: 4 },
};

const STARS = {
  layer1: {
    count: 500,
    size: 0.075,
    texture: `${BASE_URL}assets/images/stars/star1.png`,
  },
  layer2: {
    count: 1400,
    size: 0.1,
    texture: `${BASE_URL}assets/images/stars/star2.png`,
  },
};

const MOUSE_PARALLAX = 0.0001;

function StarsScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let [mouseX, mouseY] = [0, 0];

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    const loader = new THREE.TextureLoader();
    const scene = new THREE.Scene();

    renderer.setClearColor(SCENE.clearColor);

    const light = new THREE.DirectionalLight(LIGHT.color, LIGHT.intensity);
    light.position.set(LIGHT.position.x, LIGHT.position.y, LIGHT.position.z);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(
      CAMERA.fov,
      CAMERA.aspect,
      CAMERA.near,
      CAMERA.far
    );
    camera.position.z = CAMERA.position.z;

    const geometries = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];

    geometries[0].setAttribute(
      "position",
      new THREE.BufferAttribute(getRandomParticles(STARS.layer1.count), 3)
    );

    geometries[1].setAttribute(
      "position",
      new THREE.BufferAttribute(getRandomParticles(STARS.layer2.count), 3)
    );

    const materials = [
      new THREE.PointsMaterial({
        size: STARS.layer1.size,
        map: loader.load(STARS.layer1.texture),
        transparent: true,
      }),
      new THREE.PointsMaterial({
        size: STARS.layer2.size,
        map: loader.load(STARS.layer2.texture),
        transparent: true,
      }),
    ];

    // create the stars
    const starsT1 = new THREE.Points(geometries[0], materials[0]);
    const starsT2 = new THREE.Points(geometries[1], materials[1]);

    // add the stars to the scene
    scene.add(starsT1);
    scene.add(starsT2);

    function render() {
      // resize canvas if needed
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      const resizeNeeded = canvas.width !== width || canvas.height !== height;

      if (resizeNeeded) {
        renderer.setSize(width, height, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      const [x, y] = [mouseX * MOUSE_PARALLAX, mouseY * -MOUSE_PARALLAX];

      starsT1.position.x = x;
      starsT1.position.y = y;

      starsT2.position.x = x;
      starsT2.position.y = y;

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      [mouseX, mouseY] = [e.clientX, e.clientY];
    };

    document.addEventListener("mousemove", handleMouseMove);

    // eslint-disable-next-line consistent-return
    return () => {
      // Clean up scene
      renderer.dispose();
      scene.remove(starsT1);
      scene.remove(starsT2);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => {
        material.dispose();
        material.map?.dispose();
      });

      // remove event listener
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute z-10 w-full h-[100dvh] top-0" />
  );
}

export default StarsScene;
