var guestlist = ["ayesha", "sana", "hina", "rani", "bano"];
var dontcome = guestlist[2];
console.log(dontcome, "nahi aa sakti");
guestlist.splice(2, 1, "saman");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to dinner with me?")); });
