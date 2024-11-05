// smooth scrolling 

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click',function(e){
        e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
    });
    });
});

// toggle 
document.addEventListener('DOMContentLoaded',()=>{
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click',() => {
    navLinks.classList.toggle('active');
});
});

// back to top 
document.addEventListener('DOMContentLoaded',()=>{
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll',()=>{
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    }
    else {
        backToTop.classList.remove('show');
    }
});
backToTop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});
});

// // animation section

// const animated = document.querySelectorAll('.about', .portfolio, .contact);

// function handleScrollAnimations() {
//     animated.forEach(section =>{
//         const sectionTop = section.getBoundingClientRect().top;
//         if(sectionTop <= window.innerHeight * 0.75) {
//             section.classList.add('visible');
//         }
//     });
// }

// window.addEventListener('scroll',handleScrollAnimations);
// handleScrollAnimations();