document.querySelectorAll('.interactive').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = '#e9ecef';
    });
    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = '#fff';
    });
});

// Highlight active menu link
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (event) => {
        document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    });
});

// Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});