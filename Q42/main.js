// define a function to show magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
// define an array  magicians names
var magician_names = ["Harry Porter", "nimra", "sadaf"];
var great_magicians = make_great(magician_names);
//  call the functionto print each magicians name
show_magicians(great_magicians);
