/*
Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
*/
function findCodePosition(str: string): number {
  // Convert the input string to lowercase for case-insensitive matching
  const lowercaseStr = str.toLowerCase();

  // Find the index of the first occurrence of "code" within the string
  const codeIndex = lowercaseStr.indexOf('code');

  // If "code" is not found, return -1
  if (codeIndex === -1) {
    return -1;
  }

  // Otherwise, return the index position of "code"
  return codeIndex + 1;
}
console.log(findCodePosition("Hello, World! I love code"));
  

