// Q7: Smart guessing game
const secret = Math.floor(Math.random() * 50) + 1; // 1-50
const userGuess = 25; // test value, change it

if (userGuess === secret) {
  console.log("Correct guess!");
} else {
  if (Math.abs(userGuess - secret) <= 3) {
    console.log("Very close!");
  } else if (userGuess > secret) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
console.log(`(Secret was ${secret})`); // remove when submitting if you like
