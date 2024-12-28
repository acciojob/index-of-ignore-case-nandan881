function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase to perform case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find the first occurrence
  return lowerStr.indexOf(lowerSubStr);
}

// Examples
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1
