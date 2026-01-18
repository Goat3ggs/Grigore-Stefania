// active-link.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. Ia calea curentă a paginii (ex: /projects/posters/index.html)
    // Vom folosi window.location.pathname pentru a obține doar calea
    const currentPath = window.location.pathname;

    // 2. Găsește toate link-urile din secțiunea de navigație (sidebar)
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        // 3. Extrage calea link-ului (ex: /projects/neon-cyberpunk/)
        const linkPath = link.getAttribute('href');

        // 4. Verifică dacă calea paginii curente începe cu calea link-ului
        // (ex: /projects/neon-cyberpunk/index.html începe cu /projects/neon-cyberpunk/)
        if (currentPath.startsWith(linkPath)) {
            
            // 5. Dacă se potrivesc, adaugă clasa 'active'
            link.classList.add('active');
        }
    });
});

// active-link.js (COD DE TEST)

// document.addEventListener("DOMContentLoaded", function() {
//     // 1. Găsește primul link din .main-nav
//     const testLink = document.querySelector('.main-nav a'); 

//     if (testLink) {
//         // 2. Adaugă clasa 'active' (Ar trebui să se coloreze)
//         testLink.classList.add('active'); 
//     }
//     // 3. Poți adăuga o alertă pentru a fi sigur că scriptul rulează:
//     // alert("Scriptul rulează!"); 
// });