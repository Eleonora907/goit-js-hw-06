categories.forEach(category => {
  const categoryName = category.querySelector('h2');
  const categoryElements = category.querySelectorAll('li').length;
  
  if (categoryName) {
    console.log(`Category: ${categoryName.textContent}`);
  } else {
    console.log('No category name found');
  }
  
  console.log(`Elements: ${categoryElements}`);
});



