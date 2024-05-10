// array of current users
let current_users = ["asif","kashif","shahid","zubair","bilal"]

// array of new users
let new_users = ["hamza","maaz","kashif","talha","umer"]

// loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // making acondition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // print different messages using if-else statments
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is available`)
    }
           
    })