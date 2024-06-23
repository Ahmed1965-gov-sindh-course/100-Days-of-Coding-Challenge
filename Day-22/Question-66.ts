/*
Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
*/
//creating a boolean function that check two numbers 

let k = 9;
let l= 5;

function checkBoolean(k:boolean, l:boolean):boolean{
    return k && l;
    //checking numbers
    

    }
    if(l !=k){
        console.log(`${l} is not equal to ${k}: the boolean value is ${checkBoolean(true,false)} \n`);
    }else if(l>k){
            console.log(`${l} is not Greater to ${k}: the boolean value is ${checkBoolean(true,false)} \n`);
    }else if(l<k){
                console.log(`${l} is less than ${k}: the boolean value is ${checkBoolean(true,false)} \n`);
            }
        else if(l===k){
            console.log(`${l} is not equal to ${k}: the boolean value is ${checkBoolean(true,false)} \n`);
        }
        else{
            console.log(`${checkBoolean(true,false)} and ${checkBoolean(true,false)} are not satisfying any condition`);
            
        }
    


    
    // console.log(checkBoolean(true,false));




