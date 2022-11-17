import {movies} from './data.js';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//
// function getAllDirectors (moviesArray) {
//     // Use `.map()` to create a new array containing only director names
//     const directorsArr = moviesArray.map(function(movies) {
//       return movies.director;
//     })
//     return directorsArr;
//   }

const getAllDirectors = (moviesArray) => {
  
  const directorsArr = moviesArray.map((movie) => movie.director);
  const cleanList = directorsArr.filter(
    (director, numeroDePocisionDirectorEnElArray) =>
    directorsArr.indexOf(director) === numeroDePocisionDirectorEnElArray
  );
  return cleanList;
};

console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {
//     const newArray = moviesArray.filter(element =>{
//         return (element.director == "Steven Spielberg" && element.genre.includes("Drama"))
//     })

//     return newArray.length
// }

const howManyMovies = moviesArray =>{
  const newArray = moviesArray.filter(element =>element.director == "Steven Spielberg" && element.genre.includes("Drama"))
  return newArray.length
}

console.log(howManyMovies(movies));
//console.table(howManyMovies(movies));


function scoresAverage(moviesArray) {

    if (!moviesArray.length) return 0;  
    // Create a new array using `.map()` containing only scores
    const ratesArr = moviesArray.map( (movieObj) => movieObj.score)
    const rateSum = ratesArr.reduce( (acc, num) =>!num? acc: acc+num, 0);
    return Number((rateSum / moviesArray.length).toFixed(2));
  
    // let rateSum = 0;
    // ratesArr.forEach((num) => {
    //   if (!num) {
    //     return;
    //   }
    //   else {
    //     rateSum += num;
    //   }
    // });
  
  }

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) return 0;  
   // const dramaMovies = moviesArray.filter( movieObj => movieObj.genre)
   const dramaMovies = moviesArray.filter(function (movie) {
    const isDramaMovie = movie.genre.includes("Drama");
    return isDramaMovie;
  });

  return scoresAverage(dramaMovies);

}

console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = [...moviesArray];
    
    return moviesArrayCopy.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        }
        return 0;
      }
    });
  }

console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = [...moviesArray]
    moviesArrayCopy.sort( (a, b) => a.title < b.title? -1 :(a.title > b.title) ? 1:0 )
    const firstTwenty = moviesArrayCopy.slice(0, 20);
    const newTwentyTitles = firstTwenty.map(movie => movie.title)
    return newTwentyTitles;

    // FOR EACH 
    //   const newTwentyTitles = [];
    //   firstTwenty.forEach( (movie) => newTwentyTitles.push(movie.title))
}

console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
