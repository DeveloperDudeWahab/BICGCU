// Add a hover effect to the navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'gold';
    link.style.transition = 'color 0.3s ease';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = '';
  });
});

// Add a shadow effect to the cards in the portfolio section
const portfolioCards = document.querySelectorAll('.card');
portfolioCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    card.style.transition = 'box-shadow 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

// Add a background animation to the sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.backgroundImage = 'linear-gradient(to bottom right, yellow, gold)';
    section.style.transition = 'background-image 0.5s ease';
  });
  section.addEventListener('mouseleave', () => {
    section.style.backgroundImage = '';
  });
});

// Add a scroll-to-top button
const scrollToTopButton = document.querySelector('#scrollToTop');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});
