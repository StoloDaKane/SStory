
document.getElementById('particles').innerHTML = '';

const particlesContainer = document.getElementById('particles');
const particleCount = 16;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.borderRadius = '50%';
  particle.style.backgroundColor = 'rgba(255, 0, 0, 0.05)';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '-1';

  const size = Math.random() * 120 + 90;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;

  particlesContainer.appendChild(particle);
  animateParticle(particle, size);
}

function animateParticle(el, baseSize) {
  const points = 5;
  const keyframes = [];

  for (let i = 0; i <= points; i++) {
    const progress = i / points;
    const x = (Math.sin(progress * Math.PI * 2 + Math.random() * 10) * 0.4 * window.innerWidth);
    const y = (Math.cos(progress * Math.PI * 1.5 + Math.random() * 8) * 0.4 * window.innerHeight);
    const scale = 0.7 + Math.sin(progress * Math.PI * 2) * 0.3; // пульсация

    keyframes.push({
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
      offset: progress
    });
  }
  
  keyframes.push({
    transform: keyframes[0].transform,
    offset: 1
  });

  const duration = 30 + Math.random() * 40;

  el.animate(keyframes, {
    duration: duration * 1000,
    iterations: Infinity,
    easing: 'ease-in-out'
  });
}
