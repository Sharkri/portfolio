export default function resizeRendererIfNeeded(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  const resizeNeeded = canvas.width !== width || canvas.height !== height;

  if (resizeNeeded) renderer.setSize(width, height, false);

  return resizeNeeded;
}
