document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data/tales.json');
    const tales = await response.json();

    const talesListContainer = document.getElementById("tales-list-container");
    const modal = document.getElementById("tale-modal");
    const modalContent = document.getElementById("modal-content");

    tales.forEach(tale => {
        const taleItem = document.createElement("div");
        taleItem.classList.add("tale-item");

        taleItem.innerHTML = `
            <img src="${tale.image}" alt="${tale.name}">
            <div class="tale-item-content">
                <h3 class="tale-item-title">${tale.name}</h3>
                <p class="tale-item-description">${tale.completeDescription}</p>
            </div>
        `;

        taleItem.addEventListener("click", () => {
            modalContent.innerHTML = `
                <img src="${tale.image}" alt="${tale.name}" class="modal-image">
                <h2 class="modal-title">${tale.name}</h2>
                <p class="modal-description">${tale.completeDescription}</p>
            `;
            modal.style.display = "block";
        });

        talesListContainer.appendChild(taleItem);
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
