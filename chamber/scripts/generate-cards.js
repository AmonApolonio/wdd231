document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data/items.json');
    const items = await response.json();

    //json to test locally
    // const items = [
    //   {
    //       "name": "Christ the Redeemer",
    //       "address": "Parque Nacional da Tijuca, Rio de Janeiro, RJ",
    //       "description": "An iconic statue of Jesus Christ overlooking Rio de Janeiro, offering breathtaking views of the city.",
    //       "image": "images/christ-redeemer.webp"
    //   },
    //   {
    //       "name": "Sugarloaf Mountain",
    //       "address": "Av. Pasteur, 520 - Urca, Rio de Janeiro, RJ",
    //       "description": "A famous peak in Rio de Janeiro accessible by cable car, providing panoramic views of the city and ocean.",
    //       "image": "images/sugarloaf-mountain.webp"
    //   },
    //   {
    //       "name": "Iguaçu Falls",
    //       "address": "Foz do Iguaçu, PR",
    //       "description": "One of the largest and most stunning waterfalls in the world, located on the border of Brazil and Argentina.",
    //       "image": "images/iguacu-falls.webp"
    //   },
    //   {
    //       "name": "Lençóis Maranhensesk",
    //       "address": "Barreirinhas, MA",
    //       "description": "A surreal landscape of white sand dunes and crystal-clear lagoons, perfect for exploration.",
    //       "image": "images/lencois-maranhenses.webp"
    //     },
    //     {
    //         "name": "Pelourinho",
    //         "address": "Salvador, BA",
    //         "description": "A historic neighborhood in Salvador known for its colorful colonial architecture and vibrant culture.",
    //         "image": "images/pelourinho.webp"
    //     },
    //     {
    //         "name": "Fernando de Noronha",
    //         "address": "Fernando de Noronha, PE",
    //         "description": "A stunning archipelago with pristine beaches, crystal-clear waters, and abundant marine life.",
    //         "image": "images/fernando-de-noronha.webp"
    //     },
    //     {
    //         "name": "Chapada Diamantina",
    //         "address": "Lençóis, BA",
    //         "description": "A national park with dramatic cliffs, waterfalls, caves, and hiking trails in the heart of Bahia.",
    //         "image": "images/chapada-diamantina.webp"
    //     },
    //     {
    //         "name": "Amazon Rainforest",
    //         "address": "Manaus, AM",
    //         "description": "The world's largest tropical rainforest, home to diverse wildlife and unique ecosystems.",
    //         "image": "images/amazon-rainforest.webp"
    //     }
    // ];

    const cardsContainer = document.querySelector('.cards');

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
        `;

        cardsContainer.appendChild(card);
    });
})