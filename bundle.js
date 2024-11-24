document.addEventListener('DOMContentLoaded', function() {
    const attractions = [
        {
            name: 'Mahakaleshwar Temple',
            description: 'One of the twelve Jyotirlingas, dedicated to Lord Shiva.',
        },
        {
            name: 'Kal Bhairav Temple',
            description: 'Famous temple where liquor is offered to the deity.',
        },
        {
            name: 'Ram Ghat',
            description: 'Historic ghat on the banks of the Kshipra River.',
        },
        {
            name: 'Jantar Mantar',
            description: 'An ancient observatory built by Maharaja Jai Singh II.',
        }
    ];

    const attractionsContainer = document.querySelector('.attractions-container');

    attractions.forEach(attraction => {
        const attractionDiv = document.createElement('div');
        attractionDiv.classList.add('attraction');
        
        const attractionName = document.createElement('h3');
        attractionName.textContent = attraction.name;
        attractionDiv.appendChild(attractionName);
        
        const attractionDesc = document.createElement('p');
        attractionDesc.textContent = attraction.description;
        attractionDiv.appendChild(attractionDesc);
        
        attractionsContainer.appendChild(attractionDiv);
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const confirmationMessage = `Thank you ${name}, we have received your message!`;
        
        document.getElementById('confirmationMessage').innerText = confirmationMessage;
        
        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });
});
