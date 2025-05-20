// file: movie.js
// desc: This file shows how objects work in js
// Author: Amina Aar
// Last modified: 20/05/2025
// version 1.0.0

// creating  myMovie object
const myMovie = {
  Title: "The longest day",
  Year: "1964",
};
// output myMovie object
// console.log(myMovie);

// Adding in propeties to myMovie object
myMovie.Rating = 5;
myMovie.Summary = "World War II movie about the Normandy landings";
// output myMovie object after adding 2 properties
// console.log(myMovie);

// changing property value of myMovie object
myMovie.Rating = 4;
myMovie.Year = 1962;

// output myMovie object after changing property data
// console.log(myMovie);

// removing property from myMOvie object
delete myMovie.Summary;
//ouput myMovie object to console
console.log(myMovie);
