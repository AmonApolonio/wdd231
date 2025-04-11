document.addEventListener("DOMContentLoaded", () => {
    const favoritesKey = "favoriteTales";

    const loadFavorites = () => {
        return JSON.parse(localStorage.getItem(favoritesKey)) || [];
    };

    const saveFavorites = (favorites) => {
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));
    };

    const updateButtonState = () => {
        const favorites = loadFavorites();
        const favoriteButtons = document.querySelectorAll(".favorite-btn");
        favoriteButtons.forEach((button) => {
            const tale = button.dataset.tale;
            if (favorites.includes(tale)) {
                button.textContent = "❤️ Remove from Favorites";
            } else {
                button.textContent = "❤️ Add to Favorites";
            }
        });
    };

    const attachFavoriteButtonListeners = () => {
        const favoriteButtons = document.querySelectorAll(".favorite-btn");
        favoriteButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const tale = button.dataset.tale;
                let favorites = loadFavorites();

                if (favorites.includes(tale)) {
                    favorites = favorites.filter((item) => item !== tale);
                } else {
                    favorites.push(tale);
                }

                saveFavorites(favorites);
                updateButtonState();
            });
        });
    };

    document.addEventListener("talesGenerated", () => {
        updateButtonState();
        attachFavoriteButtonListeners();
    });
});
