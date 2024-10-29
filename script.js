function openYear(evt, year) {
    // Hide all tab content by default
    document.querySelectorAll('.tabcontent').forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tablinks').forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected year's content and add the active class to the current tab
    document.getElementById(year).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Automatically open the first tab on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tablinks').click();
});