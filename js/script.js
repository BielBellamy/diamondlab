/* Publications Page*/

/* Menu Aside*/

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section .publications');
    const menuLinks = document.querySelectorAll('.years-menu a');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 2) {
                current = section.getAttribute('id');
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

/* Team Page*/

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.section_team .card');
    const sectionTeam = document.querySelector('.section_team');

    function handleScroll() {
      const sectionRect = sectionTeam.getBoundingClientRect();
      const centerX = sectionRect.left + sectionRect.width / 2;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const distanceFromCenter = Math.abs(centerX - cardCenterX);

        // Ajusta este valor para cambiar cuándo la tarjeta empieza a cambiar de tamaño
        const maxDistance = sectionRect.width / 4;

        if (distanceFromCenter < maxDistance) {
          card.style.transform = `scale(${1.3 - (distanceFromCenter / maxDistance) * 0.2})`;
        } else {
          card.style.transform = 'scale(1)';
        }
      });
    }

    sectionTeam.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Inicializar en carga
  });