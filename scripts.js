// Smooth Scroll Functionality
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  });
});

// Star Generation
function createStars() {
  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < 300; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsContainer.appendChild(star);
  }
}

// Initialize stars and interactions
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  
  // Add hover effect to project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.3)';
    });
    card.addEventListener('mouseout', () => {
      card.style.boxShadow = 'none';
    });
  });
});
