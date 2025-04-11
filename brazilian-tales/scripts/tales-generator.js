document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data/tales.json');
    const tales = await response.json();

    function generateTaleCards() {
        const talesGrid = document.getElementById("tales-grid");
        tales.forEach(tale => {
            const card = document.createElement("div");
            card.className = "tale-card";
    
            card.innerHTML = `
                <div class="tale-image">
                    <img src="${tale.image}" alt="${tale.name}">
                </div>
                <div class="tale-content">
                    <h3>${tale.name}</h3>
                    <p>${tale.description}</p>
                    <button class="favorite-btn" data-tale="${tale.name}">❤️ Add to Favorites</button>
                </div>
            `;
    
            talesGrid.appendChild(card);
        });
    
        document.dispatchEvent(new Event("talesGenerated"));
    }

})
