// creating an array
var username = ["ali", "yaseen", "moaviyah", "admin", "asif"];
// using forEach loop on array
username.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ",thank you for logging in again."));
    }
});
