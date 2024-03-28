const app = require('./index'); // Імпортуємо index.js

describe('Server', () => {
  it('should have the necessary methods', () => {
    // Перевіряємо, що app має необхідні методи
    expect(app).toHaveProperty('get');
    expect(app).toHaveProperty('post');
    expect(app).toHaveProperty('patch');
    // Додайте інші методи, які має ваш сервер, якщо потрібно
  });
});
