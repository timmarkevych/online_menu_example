document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    function scrollActiveNavItemIntoView() {
        const activeNavItem = document.querySelector('.nav-link.active');
        if (activeNavItem) {
            setTimeout(function() {
                activeNavItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }, 50);
        }
    }

    window.addEventListener('scroll', scrollActiveNavItemIntoView);
});
