// app.test.js

const app = require('../');

describe('App', () => {
  it('should return "Hello, world!"', () => {
    const result = app();
    expect(result).toBe('Hello, world!');
  });
});
