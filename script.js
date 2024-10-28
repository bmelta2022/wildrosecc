function openYear(evt, year) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Hide all tab content by default
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); // Remove the active class from all tabs
    }
    document.getElementById(year).style.display = "block"; // Show the selected year's statistics
    evt.currentTarget.className += " active"; // Add the active class to the current tab
}

// Add an event to automatically open the first tab on page load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.tablinks').click();
});
