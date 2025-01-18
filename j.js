document.addEventListener('DOMContentLoaded', function() {
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const modalBody = document.getElementById('modal-body');
  const comparisonModal = new bootstrap.Modal(document.getElementById('comparisonModal'));

  dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
      const country = item.getAttribute('data-country');
      showComparison(country);
    });
  });

  // Function to show the comparison in the modal
  function showComparison(country) {
    let comparisonText = '';

    switch (country) {
      case 'Australia':
        comparisonText = '<h4>Australia</h4><p>Australia has a point-based immigration system and is known for its strong job market.</p>';
        break;
      case 'Canada':
        comparisonText = '<h4>Canada</h4><p>Canada is known for its friendly immigration policies, and has opportunities for skilled workers.</p>';
        break;
      case 'China':
        comparisonText = '<h4>China</h4><p>China has strict immigration policies, but there are opportunities for foreign investment and business owners.</p>';
        break;
      case 'Cuba':
        comparisonText = '<h4>Cuba</h4><p>Cuba has a unique immigration process, with a focus on political asylum for refugees.</p>';
        break;
      // Add other countries and their comparisons here
      default:
        comparisonText = '<h4>' + country + '</h4><p>Details for this country are not yet available.</p>';
    }

    modalBody.innerHTML = comparisonText;
    comparisonModal.show();
  }
});

