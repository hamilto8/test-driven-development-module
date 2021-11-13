const capitalizeString = require('./capitalizeString');

test('beowulf is dumb. to equal Beowulf is dumb', () => {
    expect(capitalizeString('beowulf is dumb.')).toBe('Beowulf is dumb.');
});