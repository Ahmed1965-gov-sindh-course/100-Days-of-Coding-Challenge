/*
Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/
//creating function to calculate days left until new year

function daysLeftInYearEnding():number{
    const today = new Date();
    const endingYear = new Date (today.getFullYear()+1,0,1)
    //calculating days left in ending year
    const diff = (endingYear.getTime() - today.getTime())
    // const diffInMS = daysLeft/1000*60*60*24
    const days = Math.ceil(diff/(1000*60*60*24))
    return days;

}
console.log(daysLeftInYearEnding()+" "+  "Days left")

