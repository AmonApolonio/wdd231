document.addEventListener('DOMContentLoaded', () => {
    const feedbackData = JSON.parse(localStorage.getItem('feedbackData'));
    if (feedbackData) {
        document.getElementById('feedback-details').innerHTML = `
            <p><strong>Name:</strong> ${feedbackData.name}</p>
            <p><strong>Email:</strong> ${feedbackData.email}</p>
            <p><strong>Feedback:</strong> ${feedbackData.feedback}</p>
        `;
    }
});
