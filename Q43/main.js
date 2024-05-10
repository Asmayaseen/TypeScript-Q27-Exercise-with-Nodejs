// define a function to show magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through.map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
// define an array  magicians names
var magician_names = ["Harry Porter", "nimra", "sadaf"];
// making a copy of original array through .slice( function
var copy_magician_names = magician_names.slice();
// modify the copied array toinclude "the great" with thire names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
show_magicians(magician_names);
// copied
show_magicians(copy_great_magicians);
