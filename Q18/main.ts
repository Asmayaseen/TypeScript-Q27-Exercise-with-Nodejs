// making a array of countries and print its Original Order
let countriestovisit: string[] = ["China","India","America","Iraq"];
console.log("Original Order:",countriestovisit);

// print the array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order:", [...countriestovisit].sort());

// show that tha array is still in its Original Order
console.log("still in Original Order:",countriestovisit);

// print the array in reversed order without modifying the actual array list
console.log("reverse Order:", [...countriestovisit].reverse());

// show that tha array is still in its Original Order
console.log("still in Original Order:",countriestovisit);

// we have changed the original array order now
console.log("Original Array reversed:",countriestovisit.reverse());

// print the array to show that it's back to its original ordercountriestovisit
console.log("back to Original Order:", countriestovisit.reverse());

// print the array to show that its order has been changed in Alphabetical order now
console.log("sorted to Alphabetical Order:",countriestovisit.sort());

// we have changed again the original array order now in reverse order again
console.log("Original Array reverse again:", countriestovisit.reverse());

