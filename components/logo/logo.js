const logo = document.querySelector('.logo');
const animatedImg = document.querySelector('.logo__animate');

//для перезагрузки анимации
logo.addEventListener('mouseover', () => {
  animatedImg.src = animatedImg.src;
});
