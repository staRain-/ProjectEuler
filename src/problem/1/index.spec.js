const sum_of_multiple = require('./index');

describe(`solution` ,function () {
    it(`Should 23 for multiple of 3 and 5 below 10`, function () {
        expect(sum_of_multiple({factors: [3, 5], limit: 10})).toBe(23);
        expect(sum_of_multiple({factors: [3, 5], limit: 1000})).toBe(233168);
    });
});
