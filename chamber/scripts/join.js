document.getElementById('timestamp').value = new Date().toISOString();

document.addEventListener("DOMContentLoaded", () => {
    const modalLinks = document.querySelectorAll(".modal-link");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-button");

    modalLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const modalId = link.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", event => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});
