/*Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.*/

//creating an array of numbers

const allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//creating a function to display ordinal numbers

// function ordinalNumbers(allNumbers:number[]){
    for(const numbers of allNumbers){
        let ordinal:string = "";
        if(numbers ===1){
            ordinal = "st";
            console.log(`${numbers}${ordinal}`);
        }else if(numbers===2){
            ordinal = "nd";
            console.log(`${numbers}${ordinal}`);
        }else if(numbers===3){
            ordinal = "rd";
            console.log(`${numbers}${ordinal}`);
        }else{
            ordinal = "th";
            console.log(`${numbers}${ordinal}`);
        }

        }
    