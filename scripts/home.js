document.addEventListener('DOMContentLoaded', () => {
  const businessData = [
    {
      name: "Business Name 1",
      tagline: "Business Tag Line 1",
      email: "info1@gmail.com",
      phone: "800-555-1234",
      url: "mybusiness1.com",
      imageUrl: "images/company1.png"
    },
    {
      name: "Business Name 2",
      tagline: "Business Tag Line 2",
      email: "info2@gmail.com",
      phone: "800-555-5678",
      url: "mybusiness2.com",
      imageUrl: "images/company2.png"
    },
    {
      name: "Business Name 3",
      tagline: "Business Tag Line 3",
      email: "info3@gmail.com",
      phone: "800-555-5678",
      url: "mybusiness3.com",
      imageUrl: "images/company3.png"
    },
  ];

  const businessListings = document.querySelector('.business-listings');

  businessData.forEach(business => {
    const businessCard = document.createElement('div');
    businessCard.classList.add('business-card');

    businessCard.innerHTML = `
      <img src="${business.imageUrl}" alt="${business.name}">
      <div>
        <h3>${business.name}</h3>
        <p>${business.tagline}</p>
        <p><strong>EMAIL:</strong> ${business.email}</p>
        <p><strong>PHONE:</strong> ${business.phone}</p>
        <p><strong>URL:</strong> <a href="http://${business.url}" target="_blank">${business.url}</a></p>
      </div>
    `;

    businessListings.appendChild(businessCard);
  });
});
