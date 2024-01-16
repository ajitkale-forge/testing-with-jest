async function fetchData(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === 'invalid') {
          reject(new Error('Invalid input'));
        } else {
          resolve({ data: 'Hello, Jest!' });
        }
      }, 1000);
    });
  }
  
module.exports = { fetchData };
