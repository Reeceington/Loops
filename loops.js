"use strict";
var gap = " "; console.log("For loops");
//program that loops from 0 to 10
for (var counter = 0; counter <11; counter++){
    console.log(counter);
}   console.log(gap);
//program that loops from 5 to 10
for (var counter = 4; counter <11; counter++){
    console.log(counter);
}   console.log(gap);
//program looping every other number in the range 1 - 10
for (var counter = 0; counter <11; counter+=2){
    console.log(counter);
}  console.log(gap);
//program that logs every third number to console 
for (var counter = 0; counter <11; counter+=3){
    console.log(counter);
}   console.log(gap);console.log("For loops in Reverse");
//program that logs numbers in reverse 3 - 0
for (var counter = 3; counter >0; counter+=-1){
    console.log(counter);
}   console.log(gap);
//program that logs numbers in reverse 10 - 0 
for (var counter = 10; counter >0; counter+=-1){
    console.log(counter);
} console.log(gap);
//program that prints every other number to console on reverse 
for (var counter = 10; counter >0; counter+=-2){
    console.log(counter);
} console.log(gap);
//program that prints every third number to console on reverse 
for (var counter = 10; counter >0; counter+=-3){
    console.log(counter);
} console.log(gap); console.log("looping thorugh arrays");
//Example
var colors = ["Blue", "Green", "Red"];
for (var i = 0; i< colors.length; i++){
    console.log(colors[i]);
} console.log(gap);
//looping through arrays
var videogames = ["Ori and the will of the wisps", "Overwatch 2", "God of War", "Minecraft"]
    for (var i =0; i< videogames.length; i++){
        console.log("I really love ", videogames[i]);
}
