// JS
const interaction = document.getElementById('interaction');
const menu = document.querySelector('.menu');
const hamIcon = interaction.querySelector('.interaction-icon');
const crossIcon = interaction.querySelector('.cross-icon');


interaction.addEventListener('click', function () {
    const isHamVisible = !hamIcon.classList.contains('hidden');
    
    hamIcon.classList.toggle('hidden', isHamVisible);
    crossIcon.classList.toggle('hidden', !isHamVisible);
    menu.classList.toggle('hidden', isHamVisible);
});
window.addEventListener('load', () => {
    const targetSection = document.getElementById('about');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});

