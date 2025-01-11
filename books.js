let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

// Traversing the object with for...in loop
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}
