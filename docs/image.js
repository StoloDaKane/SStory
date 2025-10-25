function initImageEffects(container = document) {
  let ticking = false;

  function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    const lightbox = document.getElementById('lightbox');
    if (overlay && lightbox) {
      overlay.classList.remove('active');
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  const overlay = document.getElementById('lightbox-overlay');
  if (overlay && !overlay.dataset.initialized) {
    overlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
    overlay.dataset.initialized = 'true';
  }

  container.querySelectorAll('.image-wrapper:not([data-initialized])').forEach(wrapper => {
    wrapper.dataset.initialized = 'true';

    const img = wrapper.querySelector('img');
    const lightEffect = wrapper.querySelector('.light-effect');
    const darkenEffect = wrapper.querySelector('.darken-effect');
    let isHovered = false;

    // Создаём эффекты, если их нет
    if (!lightEffect) {
      const le = document.createElement('div');
      le.className = 'light-effect';
      wrapper.appendChild(le);
    }
    if (!darkenEffect) {
      const de = document.createElement('div');
      de.className = 'darken-effect';
      wrapper.appendChild(de);
    }

    const le = wrapper.querySelector('.light-effect');
    const de = wrapper.querySelector('.darken-effect');

    wrapper.addEventListener('mouseenter', () => {
      isHovered = true;
      wrapper.style.transition = 'transform 0.1s ease';
      wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(20px) scale(1.03)';
    });

    wrapper.addEventListener('mousemove', (e) => {
      if (!isHovered || ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        le.style.setProperty('--x', `${x}px`);
        le.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 12;
        const rotateY = -(centerX - x) / 12;

        wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.03)`;

        if (rotateX > 0) {
          le.style.opacity = Math.min(rotateX / 30, 0.4);
          de.style.opacity = 0;
        } else {
          de.style.opacity = Math.min(Math.abs(rotateX) / 30, 0.3);
          le.style.opacity = 0;
        }
        ticking = false;
      });
    });

    wrapper.addEventListener('mouseleave', () => {
      isHovered = false;
      wrapper.style.transition = 'transform 0.3s ease';
      wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)';
      le.style.opacity = 0;
      de.style.opacity = 0;
    });

    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      const lightboxImg = document.getElementById('lightbox-img');
      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        document.getElementById('lightbox-overlay')?.classList.add('active');
        document.getElementById('lightbox')?.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initImageEffects());
} else {
  initImageEffects();
}
