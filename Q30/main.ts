// creating an array
let username = ["ali","yaseen","moaviyah","admin","asif"];

// using forEach loop on array
username.forEach(oneuser =>{
    if (oneuser === "admin"){
        console.log(`hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser},thank you for logging in again.`)
    }
})