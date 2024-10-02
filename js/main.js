 window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Check if user scrolled to the bottom
    if (windowHeight + scrollY >= bodyHeight) {
        footer.classList.add('active');
    } else {
        footer.classList.remove('active');
     }
});