let guestlist = ["ayesha","sana","hina","rani","bano"];

let dontcome = guestlist[2];

console.log(dontcome,"nahi aa sakti");

guestlist.splice(2, 1,"saman");

guestlist.forEach(guest => console.log(`salam ${guest},would you like to dinner with me?`));

