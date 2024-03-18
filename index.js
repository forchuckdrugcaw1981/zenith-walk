// zenith-utils.js

const uuid = require('uuid');

// Function to generate a unique ID
function generateUniqueId() {
  return uuid.v4();
}

// Function to generate a random positive integer within a range
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

module.exports = {
  generateUniqueId,
  generateRandomInteger,
  isPrime
};
