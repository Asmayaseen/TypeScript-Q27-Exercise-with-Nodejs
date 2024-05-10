// creating a guest list Array
var guestlist = ["ayesha", "sana", "hina", "rani", "bano"];
// making variable for those guest who cant come
var dontcome = guestlist[4];
// print the name of guest who cant come
console.log(dontcome, "nahi aa sakti hai");
// Add or Remove values from guest list Array
guestlist.splice(4, 1, "saman");
// message print for bigger table
console.log("good news ! we have found a bigger table for dinner.");
// adding a new value at starting index of array
guestlist.unshift("sania");
// adding a new value at ending index of array
guestlist.push("zain");
// adding a new guest at middle index of array
var middleindex = Math.floor(guestlist.length / 2);
// adding a new guest at middle index of array
guestlist.splice(middleindex, 0, "kashaf");
// print message of updated list
console.log("updated list of our guests");
// sending a invitation message to our guest one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me")); });
