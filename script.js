const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const techItems = document.querySelectorAll('.tech-item');
const skillCards = document.querySelectorAll('.skill-card');

document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800,  
        once: true,     
        offset: 100,    
    });
});

// --- LÓGICA DO MENU ---
menuIcon.onclick = (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
};

document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});

// --- LÓGICA DE CLIQUE GLOBAL ---
document.addEventListener('click', (e) => {
    // para menu
    if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }

    // para tecnologias
    if (!e.target.closest('.tech-item')) {
        techItems.forEach(item => item.classList.remove('active-tech'));
    }

    // para skill cards
    if (!e.target.closest('.skill-card')) {
        skillCards.forEach(card => card.classList.remove('active-skill'));
    }
});

// --- LÓGICA DOS TECH-ITEMS ---
techItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const wasActive = item.classList.contains('active-tech');

        techItems.forEach(other => other.classList.remove('active-tech'));

        if (!wasActive) {
            item.classList.add('active-tech');
        }
    });
});

// --- LÓGICA DOS SKILL CARDS ---
skillCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const wasActive = card.classList.contains('active-skill');

        skillCards.forEach(other => other.classList.remove('active-skill'));

        if (!wasActive) {
            card.classList.add('active-skill');
        }
    });
});