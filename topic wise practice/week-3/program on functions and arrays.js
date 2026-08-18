// Array of student scores
let scores = [85, 92, 78, 90, 66, 95, 73];
// Function to calculate the sum of an array
function getSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// Function to calculate the average
function getAverage(arr) {
  return getSum(arr) / arr.length;
}
// Function to find the highest score
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// Function to find the lowest score
function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
// Function to filter passing scores (60 and above)
function getPassingScores(arr) {
  return arr.filter(score => score >= 60);
}
// Function to add a new score to the array
function addScore(arr, newScore) {
  arr.push(newScore);
  return arr;
}
// Function to sort scores in descending order
function sortScoresDesc(arr) {
  return [...arr].sort((a, b) => b - a);
}
// --- Using the functions ---
console.log("Original scores:", scores);
console.log("Sum:", getSum(scores));
console.log("Average:", getAverage(scores).toFixed(2));
console.log("Highest score:", getMax(scores));
console.log("Lowest score:", getMin(scores));
console.log("Passing scores (>=60):", getPassingScores(scores));
addScore(scores, 88);
console.log("After adding a new score (88):", scores);
console.log("Sorted (highest to lowest):", sortScoresDesc(scores));