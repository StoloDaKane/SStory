// Фон
const particlesContainer = document.getElementById('particles');
const particleCount = 14; 

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.borderRadius = '50%';
  particle.style.backgroundColor = 'rgba(255, 0, 0, 0.05)'; 
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '-1';

  const baseSize = Math.random() * 100 + 80;
  particle.style.width = `${baseSize}px`;
  particle.style.height = `${baseSize}px`;

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;

  particlesContainer.appendChild(particle);

  animateParticle(particle, baseSize);
}

function animateParticle(el, baseSize) {
  const keyframes = [
    { transform: `scale(${0.7})` },
    { transform: `scale(${1.3})` },
    { transform: `scale(${0.7})` }
  ];

  const pulseDuration = 4 + Math.random() * 6;

  el.animate(keyframes, {
    duration: pulseDuration * 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate'
  });

  const driftDuration = 25 + Math.random() * 30; 
  const endX = (Math.random() - 0.5) * window.innerWidth * 0.6;
  const endY = (Math.random() - 0.5) * window.innerHeight * 0.6;

  const driftKeyframes = [
    { transform: `translate(0, 0) scale(${0.7 + Math.random() * 0.6})` },
    { transform: `translate(${endX}px, ${endY}px) scale(${0.7 + Math.random() * 0.6})` }
  ];

  el.animate(driftKeyframes, {
    duration: driftDuration * 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate'
  });
}
