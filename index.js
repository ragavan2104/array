
let myArray = ['apple', 'banana', 'orange'];


function addStringIfNotExists(array, newString) {
    if (!array.includes(newString)) {
        array.push(newString);
        console.log(`"${newString}" added to the array.`);
    } else {
        console.log(`"${newString}" already exists in the array.`);
    }
}


function printArrayInfo(array) {
    
    const sortedArray = [...array].sort();
    
    console.log('Array contents (alphabetical order):', sortedArray);
    console.log('Array length:', array.length);
}


addStringIfNotExists(myArray, 'grape');  
addStringIfNotExists(myArray, 'banana'); 
addStringIfNotExists(myArray, 'kiwi');   
addStringIfNotExists(myArray, 'Apple');  
printArrayInfo(myArray);    ``