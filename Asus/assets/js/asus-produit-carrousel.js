document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function(carousel) {
        const carouselImages = carousel.querySelectorAll("img");
        let currentImageIndex = 0;

        function showNextImage() {
            carouselImages[currentImageIndex].style.opacity = 0;
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
            carouselImages[currentImageIndex].style.opacity = 1;
        }

        // Change l'image toutes les 3 secondes
        setInterval(showNextImage, 3000);
    });
});