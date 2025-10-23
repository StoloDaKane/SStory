// Частицы
const particlesContainer = document.getElementById('particles');
const particleCount = 12;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.borderRadius = '50%';
  particle.style.backgroundColor = 'rgba(255, 0, 0, 0.05)';
  particle.style.pointerEvents = 'none';

  const size = Math.random() * 80 + 40;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;

  particlesContainer.appendChild(particle);

  animateParticle(particle);
}

function animateParticle(el) {
  const duration = Math.random() * 20 + 15; // 15–35 сек
  const delay = Math.random() * 5;
  const scaleMin = 0.3;
  const scaleMax = 1.2;

  const keyframes = [
    { transform: `translate(0, 0) scale(${scaleMin})`, opacity: 0.05 },
    { transform: `translate(${(Math.random() - 0.5) * 300}px, ${(Math.random() - 0.5) * 300}px) scale(${scaleMax})`, opacity: 0.05 },
    { transform: `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(${(scaleMin + scaleMax) / 2})`, opacity: 0.05 },
    { transform: `translate(0, 0) scale(${scaleMin})`, opacity: 0.05 }
  ];

  const options = {
    duration: duration * 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    delay: delay * 1000
  };

  el.animate(keyframes, options);
}

// Переключение меню
document.querySelector('.hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
});
