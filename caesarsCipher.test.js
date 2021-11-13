const caesarCipher = require('./caesarsCipher');

test('caesarCipher function exists', () => {
  expect(typeof caesarCipher).toEqual('function');
});

test('caesarCipher function returns a string', () => {
  expect(typeof caesarCipher('A', 1)).toEqual('string');
});

test('caesarCipher function returns a string', () => {
  expect(typeof caesarCipher('A', 1)).toEqual('string');
});

test('caesarCipher function returns ciphered text', () => {
    expect(caesarCipher('A', 1)).toEqual('B');
    expect(caesarCipher('A', 2)).toEqual('C');
    expect(caesarCipher('A', 3)).toEqual('D');
    expect(caesarCipher('A', 4)).toEqual('E');
    expect(caesarCipher('HELP', 1)).toEqual('IFMQ');
    expect(caesarCipher('ZYXWVUTSRQPONMLKJIHGFEDCBA', 5)).toEqual('EDCBAZYXWVUTSRQPONMLKJIHGF');
    expect(caesarCipher('MILKME', 3)).toEqual("PLONPH");
});