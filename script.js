const dogsImage = document.querySelectorAll('.dog');

const handleAnime = () => {
  dogsImage.forEach((dog, i) => {
    dog.style.animationDelay = `${i + 1}s`;
  });
};
window.addEventListener('DOMContentLoaded', handleAnime);
