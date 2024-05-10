// define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magician_names = ["Harry Porter", "nimra", "sadaf"];
//  call the functionto print each magicians name
show_magicians(magician_names);
