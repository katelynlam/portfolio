document.addEventListener("DOMContentLoaded", () => {
  // Create cursor elements
  const dot = document.createElement('div');
  const outline = document.createElement('div');
  dot.classList.add('cursor-dot');
  outline.classList.add('cursor-outline');
  document.body.appendChild(dot);
  document.body.appendChild(outline);

  let dotX = 0, dotY = 0;
  let outlineX = 0, outlineY = 0;
  let targetX = 0, targetY = 0;

  // Track mouse position
  document.addEventListener('mousemove', e => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    dotX += (targetX - dotX) * 0.35;
    dotY += (targetY - dotY) * 0.35;
    outlineX += (targetX - outlineX) * 0.15;
    outlineY += (targetY - outlineY) * 0.15;

    dot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
    outline.style.transform = `translate(${outlineX - 17.5}px, ${outlineY - 17.5}px)`;

    requestAnimationFrame(animate);
  }
  animate();

  // Optional click animation
  document.addEventListener('mousedown', () => {
    outline.style.width = '20px';
    outline.style.height = '20px';
  });

  document.addEventListener('mouseup', () => {
    outline.style.width = '35px';
    outline.style.height = '35px';
  });
});
