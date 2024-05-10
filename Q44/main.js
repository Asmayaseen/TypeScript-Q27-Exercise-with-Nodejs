// define a function with a rest parameter that accept items arguments representing our sandwich
function makesandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("making a sandwich with the following items: \n");
    item.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nnow enjoy sandwich");
}
// call the function 3 times with 3 differents number of arguments
makesandwich("chicken", "chees", "mayo", "egg");
makesandwich("butter", "bread");
makesandwich("bread", "chicken", "chees", "mayo", "egg", "tomato", "olive", "cucumber", "butter");
