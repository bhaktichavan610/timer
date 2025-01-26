// Function to process products
function processProducts(products) {
    // Step 1: Use map() to extract product names
    const productNames = products.map(product => product.name);
    
    // Step 2: Use forEach() to log messages about the price of each product
    productNames.forEach(name => {
      const product = products.find(product => product.name === name);
      if (product.price > 50) {
        console.log(`${name} is above $50`);
      } else {
        console.log(`${name} is below $50`);
      }
    });
  }
  
  // Example usage
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  processProducts(products);
  