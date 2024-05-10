// array of current users
var current_users = ["asif", "kashif", "shahid", "zubair", "bilal"];
// array of new users
var new_users = ["hamza", "maaz", "kashif", "talha", "umer"];
// loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // making acondition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if-else statments
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
