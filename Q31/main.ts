// creating an array with 5 values
let usernames = ["ali","yaseen","moaviyah","admin","asif"]

// remove all values from our array now our array is empty
usernames = []

// if statment for checking length of our array is empty?
if (usernames.length === 0){
    console.log("your array in empty we need to find some users!")
}else{
    // if an array is not empty use forEach loop on array
usernames.forEach(oneuser =>{
    if (oneuser === "admin"){
        console.log(`hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser},thank you for logging in again.`)
    }
})
}