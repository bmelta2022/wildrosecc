function openYear(evt, year) {
    // Hide all tab content by default with a fade-out transition
    document.querySelectorAll('.tabcontent').forEach(content => {
        content.style.opacity = 0; // Start with opacity 0 for fade-out effect
        setTimeout(() => {
            content.style.display = 'none';
        }, 300); // Time matches CSS transition duration
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tablinks').forEach(link => {
        link.classList.remove('active');
    });

    // Check if the selected year's content exists
    const selectedTab = document.getElementById(year);
    if (selectedTab) {
        // Show the selected year's content with fade-in effect and add active class
        setTimeout(() => {
            selectedTab.style.display = 'block';
            selectedTab.style.opacity = 1; // Fade-in effect
        }, 300); // Time delay for smooth transition
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
});

// Optional: Add keyboard accessibility to tabs
document.querySelectorAll('.tablinks').forEach(link => {
    link.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            link.click();
        }
    });
});