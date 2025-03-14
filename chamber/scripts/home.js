document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('data/members.json');
  const businessData = await response.json();

  const businessListings = document.querySelector('.business-listings');
  businessListings.classList.add('grid-container');

  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'List View';
  toggleButton.classList.add('toggle-btn');
  document.querySelector('main').insertBefore(toggleButton, businessListings);

  toggleButton.addEventListener('click', () => {
    businessListings.classList.toggle('grid-container');
    businessListings.classList.toggle('list-container');
    toggleButton.textContent = businessListings.classList.contains('list-container') ? 'Grid View' : 'List View';
  });

  businessData.forEach(business => {
    const businessCard = document.createElement('div');
    businessCard.classList.add('business-card');

    businessCard.innerHTML = `
      <img src="${business.imageUrl}" alt="${business.name}">
      <div>
        <h3>${business.name}</h3>
        <p>${business.address}</p>
        <p><strong>EMAIL:</strong> ${business.email}</p>
        <p><strong>PHONE:</strong> ${business.phone}</p>
        <p><strong>URL:</strong> <a href="${business.url}" target="_blank">${business.url}</a></p>
        <p><strong>MEMBERSHIP LEVEL:</strong> ${business.membershipLevel}</p>
      </div>
    `;

    businessListings.appendChild(businessCard);
  });
});
