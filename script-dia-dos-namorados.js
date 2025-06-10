document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const cards = document.querySelectorAll('.card');

  container.addEventListener('mouseenter', () => {
    cards.forEach(card => {
      card.style.transition = 'top 0.6s ease';
      card.style.top = '-90px';
    });
  });

  container.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.style.transition = 'top 0.6s ease';
      card.style.top = '0';
    });
  });
});
