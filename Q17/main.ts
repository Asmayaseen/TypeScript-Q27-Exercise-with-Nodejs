// creating a guest list Array
let guestlist = ["ayesha","sana","hina","rani","bano"];

// making variable for those guest who cant come
let dontcome = guestlist[4];

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
let middleindex: number = Math.floor(guestlist.length / 2);

// adding a new guest at middle index of array
guestlist.splice(middleindex, 0, "kashaf");

// print message of updated list
console.log("updated list of our guests");

// sending a invitation message to our guest one by one with thier names
guestlist.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));

// inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

// using while-loop to remove guests from the array until only two names remain
while(guestlist.length > 2){
    let removedguest = guestlist.pop();
    console.log(`sorry, ${removedguest} i cant invite you to dinner`);

}
// sending a invitation to the last two guest on the list
console.log("invitations to the last 2 guests");
guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo},you are still invited to dinner`));

// removing last two guest from the list
guestlist.pop();
guestlist.pop();

console.log("empty list:", guestlist);

