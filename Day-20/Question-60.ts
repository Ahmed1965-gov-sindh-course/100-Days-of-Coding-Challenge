/*
Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
*/

class userProfile {

    constructor(public name:string, public age:number){}

    showProfile(){
        console.log(`User Name: ${this.name} \nUser Age : ${this.age}`);
    }
}
let user = new userProfile("John",25)
user.showProfile()