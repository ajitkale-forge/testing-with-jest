const { fetchData } = require('./api');

test('fetchData resolves with the correct data', async () => {
  const result = await fetchData();
  expect(result).toEqual({ data: 'Hello, Jest!' });
});

test('fetchData rejects with an error for invalid input', async () => {
    await expect(fetchData('invalid')).rejects.toThrow('Invalid input');
});

test('fetchData resolves within a specific time frame', async () => {
  const start = Date.now();
  await fetchData();
  const end = Date.now();
  const duration = end - start;
  expect(duration).toBeLessThan(1500); // Expect the function to resolve within 1500 ms
});
