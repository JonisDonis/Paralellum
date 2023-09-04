document.addEventListener('mousemove', parallax);

function parallax(e) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const mouseX = e.clientX - width / 2;
  const mouseY = e.clientY - height / 2;

  // Rörelse för bakgrunden
  const bg = document.querySelector('.background');
  bg.style.transform = `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)`;

  // Rörelse för partiklarna
  const particles = document.querySelector('.particles');
  particles.style.transform = `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`;

  // Rörelse för rubriken
  const centeredContainer = document.querySelector('.container');
  centeredContainer.style.transform = `translate(${mouseX * 0.04}px, ${mouseY * 0.04}px)`;
}
