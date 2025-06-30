// زر تبديل الوضع الليلي
const darkToggle = document.createElement('button');
darkToggle.className = 'dark-toggle';
darkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
darkToggle.title = 'تبديل الوضع الليلي';
document.body.appendChild(darkToggle);

darkToggle.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        darkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
};

// Reveal on scroll
function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// إضافة كلاس reveal للعناوين والأقسام تلقائيًا
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section, h2, .stage-block, .gallery img').forEach(el => {
        el.classList.add('reveal');
    });
    revealOnScroll();
});

// Parallax للرأس
window.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.parallax-bg')) {
        new Rellax('.parallax-bg', { speed: -2, center: true });
    }
});