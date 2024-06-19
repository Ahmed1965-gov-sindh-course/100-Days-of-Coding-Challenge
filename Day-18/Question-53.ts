/*
Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
*/
var programmingKnowledge:{
    language: string[],
    tools:string[],
    frameWork:string[],
}
programmingKnowledge = {
    language:["javascript", "php", "c++"],
    tools:["vscode","vue","sublime text"],
    frameWork:["react","angular","Laravel"]

    

    }
    console.log(`The programmer have the knowledge of
        ${programmingKnowledge.language[0]}
        he must have tools like ${programmingKnowledge.tools[0]}
        and have a framework like ${programmingKnowledge.frameWork[0]}`)


