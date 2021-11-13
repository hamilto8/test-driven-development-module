
const reverseString = require('./reverseString');

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('hello world')).toBe('dlrow olleh');
    expect(reverseString('hello world!')).toBe('!dlrow olleh');
    });