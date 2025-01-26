// Function to count product categories
function countCategories(categories) {
    // Step 1: Use reduce() to group and count categories
    const categoryCount = categories.reduce((acc, category) => {
      // If the category exists in the accumulator, increment its count; otherwise, initialize it to 1
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
  
    // Step 2: Use Object.entries() to convert the object to an array of [category, count] pairs
    const sortedCategories = Object.entries(categoryCount)
      // Step 3: Sort the categories by count in descending order
      .sort((a, b) => b[1] - a[1]);
  
    // Return the sorted array
    return sortedCategories;
  }
  
  // Example usage
  const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
  console.log(countCategories(categories));
  