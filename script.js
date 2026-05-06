const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800,  
        once: true,     
        offset: 100,    
    });
});

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(item => {
    item.addEventListener('click', () => {
        techItems.forEach(otherItem => {
            if (otherItem !== item) otherItem.classList.remove('active-tech');
        });
        
        item.classList.toggle('active-tech');
    });
});