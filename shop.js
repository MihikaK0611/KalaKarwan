function filterProducts(category) {
    const categoryContainers = document.querySelectorAll('.category-container');
    categoryContainers.forEach(container => {
      const categoryTitle = container.querySelector('h2').textContent.trim();
      if (category === 'All' || category === categoryTitle) {
        container.style.display = 'block'; // Show the container if it matches the selected category or if 'All' is selected
      } else {
        container.style.display = 'none'; // Hide the container if it doesn't match the selected category
      }
    });
  }
  
