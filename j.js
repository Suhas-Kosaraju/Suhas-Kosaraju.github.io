document.addEventListener('DOMContentLoaded', function() {
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const modalBody = document.getElementById('modal-body');
  const comparisonModal = new bootstrap.Modal(document.getElementById('comparisonModal'));

  let lastCountry = '';  // To store the previously selected country for comparison

  const countryData = {
    'Australia': { unemploymentRate: 5.0, weather: 'hotter' },
    'Canada': { unemploymentRate: 6.0, weather: 'colder' },
    'China': { unemploymentRate: 5.2, weather: 'colder' },
    'Cuba': { unemploymentRate: 3.5, weather: 'hotter' },
    'Dominican Republic': { unemploymentRate: 5.4, weather: 'hotter' },
    'El Salvador': { unemploymentRate: 7.2, weather: 'hotter' },
    'France': { unemploymentRate: 7.5, weather: 'colder' },
    'Germany': { unemploymentRate: 3.4, weather: 'colder' },
    'Haiti': { unemploymentRate: 13.1, weather: 'hotter' },
    'India': { unemploymentRate: 7.3, weather: 'hotter' },
    'Ireland': { unemploymentRate: 4.7, weather: 'colder' },
    'Italy': { unemploymentRate: 9.4, weather: 'colder' },
    'Japan': { unemploymentRate: 2.6, weather: 'colder' },
    'Mexico': { unemploymentRate: 4.2, weather: 'hotter' },
    'Norway': { unemploymentRate: 3.8, weather: 'colder' },
    'Philippines': { unemploymentRate: 5.0, weather: 'hotter' },
    'Poland': { unemploymentRate: 2.9, weather: 'colder' },
    'Russia': { unemploymentRate: 4.5, weather: 'colder' },
    'South Korea': { unemploymentRate: 3.7, weather: 'colder' },
    'Spain': { unemploymentRate: 13.8, weather: 'hotter' },
    'Sweden': { unemploymentRate: 6.8, weather: 'colder' },
    'United Kingdom': { unemploymentRate: 4.2, weather: 'colder' },
    'Venezuela': { unemploymentRate: 49.3, weather: 'hotter' },
    'Vietnam': { unemploymentRate: 2.3, weather: 'hotter' },
  };

  dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
      const country = item.getAttribute('data-country');
      showComparison(country);
    });
  });

  // Function to show the comparison in the modal
  function showComparison(country) {
    let comparisonText = '';
    let unemploymentComparison = '';
    let weatherComparison = '';

    if (lastCountry) {
      // Compare the unemployment rates
      if (countryData[country].unemploymentRate > countryData[lastCountry].unemploymentRate) {
        unemploymentComparison = `${country} has a higher unemployment rate than ${lastCountry}.`;
      } else if (countryData[country].unemploymentRate < countryData[lastCountry].unemploymentRate) {
        unemploymentComparison = `${country} has a lower unemployment rate than ${lastCountry}.`;
      } else {
        unemploymentComparison = `${country} has the same unemployment rate as ${lastCountry}.`;
      }

      // Compare the weather
      if (countryData[country].weather === 'hotter' && countryData[lastCountry].weather === 'colder') {
        weatherComparison = `${country} is hotter than ${lastCountry}.`;
      } else if (countryData[country].weather === 'colder' && countryData[lastCountry].weather === 'hotter') {
        weatherComparison = `${country} is colder than ${lastCountry}.`;
      } else {
        weatherComparison = `${country} has a similar climate to ${lastCountry}.`;
      }
    }

    // Prepare the modal content
    comparisonText = `<h4>${country}</h4>
                      <p>${unemploymentComparison}</p>
                      <p>${weatherComparison}</p>`;

    modalBody.innerHTML = comparisonText;
    comparisonModal.show();
    lastCountry = country; // Update the last selected country
  }
});
