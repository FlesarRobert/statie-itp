/**
 * Mobile Menu Logic
 */
const menuBtn = document.getElementById("mobile-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("menu-overlay");
const links = document.querySelectorAll(".mobile-link");

/**
 * Toggles the mobile menu state
 */
function toggleMenu() {
    const isOpen = menu.classList.toggle("open");
    overlay.classList.toggle("open");
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? "hidden" : "";
}

// Event Listeners
menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close menu when a link is clicked
links.forEach((link) => {
    link.addEventListener("click", toggleMenu);
});

/**
 * Navbar Scroll Effect
 */
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

/**
 * Accessibility: Close menu on Escape key
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
        toggleMenu();
    }
});

function handleCallClick(e) {
    const phoneNumber = "40745764687";
    const defaultMessage = "Buna ziua, as dori o programare ITP.";

    // Dacă nu e device mobil
    if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        e.preventDefault();

        // Dacă link-ul este pentru apel telefonic, deschide WhatsApp Web cu mesaj
        if (e.currentTarget.href.startsWith("tel:")) {
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
            window.open(url, "_blank");
        }
    }
}


