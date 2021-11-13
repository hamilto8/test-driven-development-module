const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('multiplies 3 * 2 to equal 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {    
  expect(calculator.divide(6, 2)).toBe(3);
});