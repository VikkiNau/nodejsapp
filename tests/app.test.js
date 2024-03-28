// app.test.js

const app = require('./app');

describe('App', () => {
  it('should return "Hello, world!"', () => {
    const result = app();
    expect(result).toBe('Hello, world!');
  });
});
