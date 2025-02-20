document.addEventListener("DOMContentLoaded", function () {
    const goToReviewsButton =
        document.getElementById('order-button');
    
    goToReviewsButton.addEventListener('click', function () {
        const reviewsSection =
            document.getElementById('work-together');
        
        
        reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});