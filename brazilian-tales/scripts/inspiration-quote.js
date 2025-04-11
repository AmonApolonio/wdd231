async function fetchInspirationQuote() {
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        const quote = data[0];

        document.getElementById('quote-text').textContent = `"${quote.q}"`;
        document.getElementById('quote-author').textContent = `- ${quote.a}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        document.getElementById('quote-text').textContent = 'Failed to load quote. Please try again later.';
    }
}

document.addEventListener('DOMContentLoaded', fetchInspirationQuote);