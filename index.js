// Create an array with some initial string values
let myArray = ['apple', 'banana', 'orange'];

// Function to add a string to the array if it doesn't already exist
function addStringIfNotExists(array, newString) {
    if (!array.includes(newString)) {
        array.push(newString);
        console.log(`"${newString}" added to the array.`);
    } else {
        console.log(`"${newString}" already exists in the array.`);
    }
}

// Function to print the array in alphabetical order and show its length
function printArrayInfo(array) {
    // Create a sorted copy of the array (original remains unchanged)
    const sortedArray = [...array].sort();
    
    console.log('Array contents (alphabetical order):', sortedArray);
    console.log('Array length:', array.length);
}

// Test cases
addStringIfNotExists(myArray, 'grape');  // Should add
addStringIfNotExists(myArray, 'banana'); // Should not add (already exists)
addStringIfNotExists(myArray, 'kiwi');   // Should add
addStringIfNotExists(myArray, 'Apple');  // Should add (case-sensitive)

// Print the array information
printArrayInfo(myArray);    ``