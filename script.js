const FLOATERS = [
  { emoji: '🌯', left: '5%',  duration: 18, delay: 0,  size: '3rem'   },
  { emoji: '🥙', left: '15%', duration: 24, delay: 3,  size: '1.8rem' },
  { emoji: '🍢', left: '28%', duration: 20, delay: 7,  size: '2.5rem' },
  { emoji: '🌯', left: '42%', duration: 16, delay: 1,  size: '2rem'   },
  { emoji: '🥙', left: '58%', duration: 22, delay: 5,  size: '3rem'   },
  { emoji: '🍢', left: '70%', duration: 19, delay: 9,  size: '1.6rem' },
  { emoji: '🌯', left: '82%', duration: 26, delay: 2,  size: '2.8rem' },
  { emoji: '🥙', left: '92%', duration: 21, delay: 6,  size: '2rem'   },
];

const container = document.getElementById('floaters');

FLOATERS.forEach(({ emoji, left, duration, delay, size }) => {
  const el = document.createElement('span');
  el.className = 'floater';
  el.textContent = emoji;
  el.style.cssText = `left:${left}; animation-duration:${duration}s; animation-delay:${delay}s; font-size:${size};`;
  container.appendChild(el);
});
