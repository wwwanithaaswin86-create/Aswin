// smooth scroolling
document.querySelectorAll('a[href^"#"]').forEach(anchor => {
    anchor.addEventListener('click',function (e) {
        e.preventDefault();
        document.querySelector(this.getattribute('href')).scrollIntoView({
            behaivor:'smooth'
        });

    });
});
// navbar scrool effect
window.addEventListener('scroll',() => {
    const navbar =document.querySelector('.navbar');
    window.scrollY > 50 ?
       navbar.style .backgroundcolor =' rgba(10, 10, 10, 0.98)' :
       navbar.style .backgroundcolor='rgba(10, 10, 10, 0.95)';
});