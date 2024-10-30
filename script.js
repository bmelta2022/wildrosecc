// Tab functionality with fade-in/out transitions
function openYear(evt, year) {
    document.querySelectorAll('.tabcontent').forEach(content => {
        content.style.opacity = 0;
        setTimeout(() => {
            content.style.display = 'none';
        }, 300);
    });

    document.querySelectorAll('.tablinks').forEach(link => {
        link.classList.remove('active');
    });

    const selectedTab = document.getElementById(year);
    if (selectedTab) {
        setTimeout(() => {
            selectedTab.style.display = 'block';
            selectedTab.style.opacity = 1;
        }, 300);
        evt.currentTarget.classList.add('active');
    } else {
        console.error(`Tab content with ID '${year}' not found.`);
    }
}

// Automatically open the first tab on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.tablinks');
    if (firstTab) {
        firstTab.click();
    } else {
        console.error('No tabs found to activate on page load.');
    }
    showSlides();
});

// Slideshow with synchronized progress bar
let slideIndex = 0;
let progressInterval;

function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    const progressBar = document.querySelector(".progress-bar");

    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    progressBar.style.width = "0%";

    let width = 0;
    progressInterval = setInterval(() => {
        width += 1;
        progressBar.style.width = width + "%";
        if (width >= 100) {
            clearInterval(progressInterval);
        }
    }, 50);

    setTimeout(() => {
        clearInterval(progressInterval);
        showSlides();
    }, 5000);
}

// Manual navigation controls for slideshow
function changeSlide(n) {
    clearTimeout(progressInterval);
    slideIndex += n - 1;
    showSlides();
}

// Smooth scroll progress bar update
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
};

// Show Floating Action Button on scroll down
window.addEventListener("scroll", () => {
    const fab = document.querySelector(".fab");
    if (window.scrollY > 200) {
        fab.style.display = "block";
    } else {
        fab.style.display = "none";
    }
});
