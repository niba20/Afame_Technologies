// Dark Mode
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle("dark");
});

// Function to open/close the menu
function myMenuFunction() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle("responsive");
}

// Function to close the menu
function menuClose() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.remove("responsive");
}

// Modal box must be shown on small devices only - not on desktop or large viewport
const mediaQuery = window.matchMedia("(max-width: 1084px)");

// Function to allow the modal box to be visible if they match the media query
function handleMediaQueryChange(event) {
    if (event.matches) {
        const modals = document.querySelectorAll(".modal");
        const btn = document.querySelectorAll("a.link");
        const closeBtn = document.getElementsByClassName("close");

        // Open the modal when user clicks the link
        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function (e) {
                e.preventDefault();
                const modal = document.querySelector(e.target.getAttribute("href"));
                modal.style.display = "block";
            };
        }

        // Close the modal when user clicks the close button
        for (var i = 0; i < closeBtn.length; i++) {
            closeBtn[i].onclick = function () {
                modals.forEach(modal => {
                    modal.style.display = "none";
                });
            };
        }

        // Close the modal when user clicks anywhere outside the modal
        window.onclick = function (event) {
            if (event.target.classList.contains('modal')) {
                modals.forEach(modal => {
                    modal.style.display = "none";
                });
            }
        }
    }
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);

// Close the side navbar when user clicks on a link
const navLink = document.querySelectorAll(".link");

function linkAction() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("responsive");
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Smooth scrolling to sections
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'about') {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            } else {
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            menuClose(); // Close the menu after clicking a navigation link
        
        });
    });
});// Smooth scrolling to sections
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            menuClose(); // Close the menu after clicking a navigation link
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('section-visible');
                observer.unobserve(entry.target); // Optionally stop observing after the first trigger
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(aboutSection);
});
/* ceritificates */

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
/* ceritificates */
// Function to open the modal and display the clicked certificate image
function openModal(imgSrc) {
    var modal = document.getElementById('certificateModal');
    var certificateImg = document.getElementById('certificateImg');
    certificateImg.src = imgSrc;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
}
