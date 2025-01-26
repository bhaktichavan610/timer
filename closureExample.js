function outerFunction() {
    let message = "Hello, this is a closure example!";
    
    // Define and return an inner function
    function innerFunction() {
      console.log(message);
    }
    
    return innerFunction;
  }
  
  // Store the returned function in a variable
  const myClosure = outerFunction();
  
  // Call the stored function
  myClosure(); // Logs: "Hello, this is a closure example!"
  