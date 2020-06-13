// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 points to a function created/returned by the counterMaker function with a newly created count variable initialized with a value of zero, while counter2 points to a pre-incremented value of count in the global scope.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1->counterMaker uses closure, the count variable is created when counterMaker is called and it is visible to and referenced by the nested function counter().
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counterMaker() creates a new counter initialized to zero, counter2 increments the global count variable; counterMaker would be preferrable if multiple counters were going to be used in the code, while counter2 would be sufficient if one global count needed to be tracked. Although, I would normally prefer something similar to counterMaker() for the sake of making my code easier to expand and add new features to.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random()*3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(getPointsScoredPerInning,numberOfInnings){
  let finalScore = {
    "Home": 0,
    "Away": 0,
  }
  for (i=0;i<numberOfInnings;i++) {
    finalScore["Home"] += getPointsScoredPerInning();
    finalScore["Away"] += getPointsScoredPerInning();
  }
  return finalScore;
}
console.table(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(getPointsScoredPerInning,numberOfInnings) {
  /* CODE HERE */
  let scoreboard = {
    "home":{},
    "away":{},
  }

  for (i=0;i<numberOfInnings;i++) {
    scoreboard["home"][`inning ${i+1}`] = getPointsScoredPerInning() + (scoreboard["home"][`inning ${i}`] || 0);
    scoreboard["away"][`inning ${i+1}`] = getPointsScoredPerInning() + (scoreboard["away"][`inning ${i}`] || 0);
  }

  scoreboard["home"]["final score"] = scoreboard["home"][`inning ${numberOfInnings}`];
  scoreboard["away"]["final score"] = scoreboard["away"][`inning ${numberOfInnings}`];

  return scoreboard;

}
console.table(scoreboard(inning,9));

