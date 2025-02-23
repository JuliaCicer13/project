document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".container-form form");
    const modal = document.querySelector(".modal-footer");
    const closeBtn = document.querySelector(".close");

    form.addEventListener("submit", function (event) {
        event.preventDefault()
          
        modal.style.display = 'block';
        document.body.style.overflow = "hidden";

        const formData = new FormData(form);

        fetch("submit.php", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                modal.style.display = "flex"; 
                form.reset(); 
            } else {
                alert("Error sending request. Try again.");
            }
        })
        .catch(error => {
            alert("Something went wrong. Please try again.");
        });
    });

   
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = "";
    });

 
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});