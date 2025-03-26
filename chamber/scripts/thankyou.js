function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        firstName: params.get('first-name'),
        lastName: params.get('last-name'),
        email: params.get('email'),
        phone: params.get('phone'),
        organization: params.get('organization'),
        timestamp: params.get('timestamp'),
    };
}

function populateFormData() {
    const data = getQueryParams();
    document.getElementById('first-name').textContent = data.firstName || 'N/A';
    document.getElementById('last-name').textContent = data.lastName || 'N/A';
    document.getElementById('email').textContent = data.email || 'N/A';
    document.getElementById('phone').textContent = data.phone || 'N/A';
    document.getElementById('organization').textContent = data.organization || 'N/A';
    document.getElementById('timestamp').textContent = data.timestamp || 'N/A';
}

document.addEventListener('DOMContentLoaded', populateFormData);
