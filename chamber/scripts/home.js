document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('data/members.json');
  const businessData = await response.json();

  //json to test locally
  // const businessData = [
  //   {
  //     "name": "Tech Innovators Inc.",
  //     "address": "123 Silicon Valley, Tech City, CA 94043",
  //     "phone": "800-555-1234",
  //     "url": "http://techinnovators.com",
  //     "imageUrl": "images/company1.png",
  //     "membershipLevel": 3,
  //     "email": "contact@techinnovators.com"
  //   },
  //   {
  //     "name": "Green Earth Solutions",
  //     "address": "456 Green St, Eco Town, TX 75001",
  //     "phone": "800-555-5678",
  //     "url": "http://greenearthsolutions.com",
  //     "imageUrl": "images/company2.png",
  //     "membershipLevel": 2,
  //     "email": "info@greenearthsolutions.com"
  //   },
  //   {
  //     "name": "Healthy Living Co.",
  //     "address": "789 Wellness Blvd, Health City, FL 33101",
  //     "phone": "800-555-9012",
  //     "url": "http://healthylivingco.com",
  //     "imageUrl": "images/company3.png",
  //     "membershipLevel": 1,
  //     "email": "support@healthylivingco.com"
  //   },
  //   {
  //     "name": "Urban Fashion Hub",
  //     "address": "101 Fashion Ave, Style City, NY 10001",
  //     "phone": "800-555-3456",
  //     "url": "http://urbanfashionhub.com",
  //     "imageUrl": "images/company1.png",
  //     "membershipLevel": 3,
  //     "email": "sales@urbanfashionhub.com"
  //   },
  //   {
  //     "name": "Gourmet Delights",
  //     "address": "202 Culinary Rd, Food Town, IL 60601",
  //     "phone": "800-555-7890",
  //     "url": "http://gourmetdelights.com",
  //     "imageUrl": "images/company2.png",
  //     "membershipLevel": 2,
  //     "email": "info@gourmetdelights.com"
  //   },
  //   {
  //     "name": "Adventure Outdoors",
  //     "address": "303 Adventure Ln, Nature City, CO 80201",
  //     "phone": "800-555-2345",
  //     "url": "http://adventureoutdoors.com",
  //     "imageUrl": "images/company3.png",
  //     "membershipLevel": 1,
  //     "email": "contact@adventureoutdoors.com"
  //   },
  //   {
  //     "name": "Smart Home Solutions",
  //     "address": "404 Tech Blvd, Innovation City, WA 98001",
  //     "phone": "800-555-6789",
  //     "url": "http://smarthomesolutions.com",
  //     "imageUrl": "images/company1.png",
  //     "membershipLevel": 3,
  //     "email": "support@smarthomesolutions.com"
  //   }
  // ];

  const businessListings = document.querySelector('.business-listings');

  const filteredBusinesses = businessData.filter(business =>
    business.membershipLevel === 3 || business.membershipLevel === 2
  );

  const spotlightCount = Math.floor(Math.random() * 2) + 2;

  const shuffled = filteredBusinesses.sort(() => Math.random() - 0.5);

  const spotlights = shuffled.slice(0, spotlightCount);

  spotlights.forEach(business => {
    const businessCard = document.createElement('div');
    businessCard.classList.add('business-card');

    businessCard.innerHTML = `
      <img src="${business.imageUrl}" alt="${business.name}">
      <div>
        <h3>${business.name}</h3>
        <p>${business.address}</p>
        <p><strong>PHONE:</strong> ${business.phone}</p>
        <p><strong>URL:</strong> <a href="${business.url}" target="_blank">${business.url}</a></p>
        <p><strong>MEMBERSHIP LEVEL:</strong> ${business.membershipLevel}</p>
      </div>
    `;

    businessListings.appendChild(businessCard);
  });
});
