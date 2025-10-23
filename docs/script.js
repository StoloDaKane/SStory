
const sidebar = document.getElementById('sidebar');
const hamburger = document.querySelector('.hamburger');

if (!sidebar || !hamburger) {
  console.error('Ошибка: не найдены элементы #sidebar или .hamburger');
} else {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });
}


const particlesContainer = document.getElementById('particles');
if (!particlesContainer) {
  console.error('Не найден контейнер #particles');
} else {
  particlesContainer.innerHTML = '';
  const particleCount = 14;

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

    const duration = 35 + Math.random() * 30; 
    const x1 = (Math.random() - 0.5) * window.innerWidth * 0.7;
    const y1 = (Math.random() - 0.5) * window.innerHeight * 0.7;
    const x2 = (Math.random() - 0.5) * window.innerWidth * 0.7;
    const y2 = (Math.random() - 0.5) * window.innerHeight * 0.7;

    particle.animate([
      { transform: 'translate(0,0) scale(0.8)' },
      { transform: `translate(${x1}px, ${y1}px) scale(1.1)` },
      { transform: `translate(${x2}px, ${y2}px) scale(0.9)` },
      { transform: 'translate(0,0) scale(0.8)' }
    ], {
      duration: duration * 1000,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  }
}
