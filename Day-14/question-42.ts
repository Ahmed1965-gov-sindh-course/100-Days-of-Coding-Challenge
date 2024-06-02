/*Question 42: Great Magicians: Add "the Great" to magician names.*/

let famousMagician: string[] = ["David Copperfield", "Penn Jillette", "Teller"];

function makeGreat(famousMagician:string[]){
    for(let famous of famousMagician){
        console.log(`The great magicians ${famous}`)

    }

}
makeGreat(famousMagician);