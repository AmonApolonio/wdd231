const tales = [
    {
        name: "Saci Pererê",
        description: "The mischievous one-legged boy who rides whirlwinds.",
        completeDescription: "Saci Pererê is a mischievous one-legged boy who is known for riding whirlwinds and causing playful trouble in the forests of Brazil. He is a popular figure in Brazilian folklore and is often depicted wearing a red cap and smoking a pipe.",
        image: "images/saci.webp"
    },
    {
        name: "Vitória Régia",
        description: "The legend of the water lily and the moon's love for a young maiden.",
        completeDescription: "Vitória Régia tells the story of a young maiden who fell in love with the moon. Her longing to reach the moon led her to transform into a beautiful water lily, which blooms at night to be closer to her love.",
        image: "images/vitoria_regia.webp"
    },
    {
        name: "Curupira",
        description: "The guardian of the forests with backwards-facing feet.",
        completeDescription: "Curupira is a mythical creature who protects the forests of Brazil. With his backwards-facing feet, he confuses hunters and loggers who try to harm the forest. He is a symbol of nature's resilience and the need to protect the environment.",
        image: "images/curupira.webp"
    }
];

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

document.addEventListener("DOMContentLoaded", generateTaleCards);
