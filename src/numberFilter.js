function filterEvenNumbers(numbers) {
  // Add some untested conditional logic
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }
  
  if (numbers.length === 0) {
    return [];
  }
  
  // This branch won't be tested
  if (numbers.some(n => typeof n !== 'number')) {
    console.warn('Non-numeric values detected in array');
    numbers = numbers.filter(n => typeof n === 'number');
  }
  
  return numbers.filter((number) => number % 2 === 0);
}

// Additional untested functions
function filterOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

function filterNumbersGreaterThan(numbers, threshold) {
  if (threshold === undefined) {
    return numbers;
  }
  return numbers.filter((number) => number > threshold);
}

function getStatistics(numbers) {
  if (numbers.length === 0) {
    return { min: null, max: null, average: null };
  }
  
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  
  return { min, max, average };
}

module.exports = {
  filterEvenNumbers,
  filterOddNumbers,
  filterNumbersGreaterThan,
  getStatistics,
};
