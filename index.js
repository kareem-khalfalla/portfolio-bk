import Projects from './components/Projects.js';

document.getElementById('projects').innerHTML = await Projects();

let scroll = document.getElementById('scrollTop');
addEventListener('scroll', () => {
    scroll.classList.toggle('active', window.scrollY > 500)
});
scroll.addEventListener('click', () => {
    scrollTo({
        top: 0
    });
});