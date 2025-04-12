async function fetchInspirationQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: {
                'X-Api-Key': 'Z9KYimlo1OqLt3EIksk5Tg==IYVxvD5BJFTkePhq'
            }
        });
        const data = await response.json();
        const quote = data[0];

        document.getElementById('quote-text').textContent = `"${quote.quote}"`;
        document.getElementById('quote-author').textContent = `- ${quote.author}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        document.getElementById('quote-text').textContent = 'Failed to load quote. Please try again later.';
    }
}

document.addEventListener('DOMContentLoaded', fetchInspirationQuote);