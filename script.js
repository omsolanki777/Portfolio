// 🌟 ScrollReveal Animations (updated)
const sr = ScrollReveal();

// Navbar - fade in from top
sr.reveal('.navbar', {
  origin: 'top',
  distance: '0px',
  opacity: 0,
  duration: 700,
  easing: 'ease-out',
  scale: 0.9
});

// Hero left - slide up + fade
sr.reveal('.hero-left', {
  origin: 'bottom',
  distance: '40px',
  duration: 900,
  delay: 200,
  easing: 'ease-in-out',
  opacity: 0
});

// Hero right - zoom in
sr.reveal('.hero-right', {
  scale: 0.85,
  opacity: 0,
  duration: 1000,
  delay: 300,
  easing: 'ease-out'
});

// About image - rotate in from left
sr.reveal('.about-img', {
  origin: 'left',
  distance: '60px',
  duration: 1000,
  delay: 200,
  rotate: { x: 0, y: 20, z: 0 },
  opacity: 0
});

// About content - fade in with upward movement
sr.reveal('.about-content', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 300,
  easing: 'ease-in-out',
  opacity: 0
});

// Skills - staggered pop-in
sr.reveal('.skill-card', {
  interval: 100,
  scale: 0.9,
  opacity: 0,
  duration: 800,
  easing: 'ease-in-out'
});

// Projects - alternate directions
document.querySelectorAll('.project-card').forEach((card, i) => {
  sr.reveal(card, {
    origin: i % 2 === 0 ? 'left' : 'right',
    distance: '50px',
    duration: 900,
    delay: i * 150,
    easing: 'ease-in-out',
    opacity: 0
  });
});

// Contact section - slide up
sr.reveal('.contact-section', {
  origin: 'bottom',
  distance: '50px',
  duration: 900,
  delay: 200,
  opacity: 0,
  easing: 'ease-in-out'
});

// Footer
sr.reveal('.footer', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  easing: 'ease-in-out'
});

// 🌙 Parallax Effect
function parallaxEffect() {
  const elements = document.querySelectorAll('.parallax');
  const scrollY = window.scrollY;

  elements.forEach(el => {
    const speed = el.getAttribute('data-speed') || 0.3;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
}

window.addEventListener('scroll', parallaxEffect);
