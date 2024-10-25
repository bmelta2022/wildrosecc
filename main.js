document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let interval;

    // Show the initial item and start rotation
    items[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    function showItem(index) {
        // Hide the current item
        items[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        // Show the new item
        currentIndex = index;
        items[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    function nextItem() {
        const nextIndex = (currentIndex + 1) % items.length;
        showItem(nextIndex);
    }

    function startRotation() {
        interval = setInterval(nextItem, 3000);
    }

    function stopRotation() {
        clearInterval(interval);
    }

    // Set up automatic rotation
    startRotation();

    // Pause rotation on hover
    document.querySelector(".carousel").addEventListener("mouseover", stopRotation);
    document.querySelector(".carousel").addEventListener("mouseout", startRotation);

    // Dot click event
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showItem(index);
            stopRotation();
        });
    });
});
