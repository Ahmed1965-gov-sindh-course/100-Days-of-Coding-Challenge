/*Question 41: Magicians: Display magician names from an array.*/

//naming famous magicians 
let famousMagicians: string[] = ["David Copperfield", "Penn Jillette", "Teller"];
//printing famous magicians
function showMagicians(famousMagicians:string[]){
    for(let famous of famousMagicians){
        console.log(`${famous}`);
    }

}
showMagicians(famousMagicians); 