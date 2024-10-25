// JavaScript for rotating carousel
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showNextItem() {
        // Hide the current item
        items[currentIndex].style.transform = `translateX(-100%)`;
        
        // Update index to show the next item
        currentIndex = (currentIndex + 1) % items.length;
        
        // Reset position of all items before showing the next one
        items.forEach((item, index) => {
            item.style.transform = index === currentIndex ? 'translateX(0%)' : 'translateX(100%)';
        });
    }

    // Rotate items every 3 seconds
    setInterval(showNextItem, 3000);
});
