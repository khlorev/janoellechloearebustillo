const card = document.getElementById('flip-card');
const flipBtn = document.getElementById('flip-btn');
const flipBackBtn = document.getElementById('flip-back-btn');

flipBtn.addEventListener('click', () => {
  card.style.transform = 'rotateY(180deg)';
});

flipBackBtn.addEventListener('click', () => {
  card.style.transform = 'rotateY(0deg)';
});
