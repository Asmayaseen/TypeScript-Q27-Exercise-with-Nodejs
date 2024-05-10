"use strict";
// making a function
function make_shirt(size = "large", printmessage = "I Love Typescript") {
    console.log(`creating a ${size} shirt with the ${printmessage} print on shirt`);
}
// calling a function with by-default values
make_shirt();
// calling a function now with midium size and default message
make_shirt("medium");
// calling a function now with small size and also different print message
make_shirt("small", "I LOVE MY MOTHER");
