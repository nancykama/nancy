window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    // Check how far the user has scrolled down
    if (window.scrollY > 200) { // Change 200 to whatever scroll distance you want
        footer.classList.add('show'); // Add the show class to make it visible
    } else {
        footer.classList.remove('show'); // Remove the class to hide it
    }
});