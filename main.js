// JavaScript for constant rotating carousel
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showNextItem() {
        // Reset all items to their initial position off-screen
        items.forEach((item, index) => {
            item.style.transform = 'translateX(100%)';
        });

        // Display the current item
        items[currentIndex].style.transform = 'translateX(0%)';

        // Prepare the next item by moving it into view
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].style.transform = 'translateX(-100%)';
    }

    // Rotate items every 3 seconds without interruption
    setInterval(showNextItem, 3000);
});
