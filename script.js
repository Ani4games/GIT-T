// Function for hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Toggle 'active' class on the nav
        });
    }

   

});

// Your existing schema.org script (keep as is)
(function() {
    window['schemaorg'] = {
      'blogPosting': {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        // Add your schema markup data here
      }
    }
})();