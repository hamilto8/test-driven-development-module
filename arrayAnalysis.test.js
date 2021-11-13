const arrayAnalysis = require('./arrayAnalysis');

test('arrayAnalysis', () => {
    expect(arrayAnalysis([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        max: 5,
        min: 1,
        length: 5,});
        expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            max: 8,
            min: 1,
            length: 6,});
});