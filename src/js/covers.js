document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector(".covers");
    const coversList = document.querySelector(".covers-list");

    if (!coversSection || !coversList) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                coversList.classList.add("animate-covers");
            } else {
                coversList.classList.remove("animate-covers");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(coversSection);
});

