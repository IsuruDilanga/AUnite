
function rollDice() {
  // Generate random numbers between 1 and 6
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;

  // Update the dice images
  document.getElementById("die1").src = "/static/styles/dice-" + die1 + ".png";
  document.getElementById("die2").src = "/static/styles/dice-" + die2 + ".png";

  // Calculate the sum
  var sum = die1 + die2;

  // Update the sum display
  document.getElementById("sum").textContent = sum;
}

// var userAge;
