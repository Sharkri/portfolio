export default function getRandomParticles(particleCount: number) {
  const arr = new Float32Array(particleCount * 3);

  let i = particleCount;
  while (i) {
    // get random position
    arr[i] = (Math.random() - 0.5) * 10;

    i -= 1;
  }

  return arr;
}
