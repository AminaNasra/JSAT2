// file: movieClass.js
// desc: This file defines the Movie class blueprint  encapsulating properties like: movieID, title, year, rating
// Author: Amina Aar
// Last modified: 20/05/2025
// version 1.0.0

// declare a Movie class
class Movie {
  // constructor
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  } // end constructor
} // end movie class

// create a movie object based on Movie class
const movie = new Movie(1, "The Shawshank Redemption", 1994, 8.5);

// output the movie object to console
console.log(movie);
