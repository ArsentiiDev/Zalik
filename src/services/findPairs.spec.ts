import { findPairs } from './findPairs';

describe('findPairs testing', () => {
    let matrix:number[][] = [[
        3, 3, 4
    ],[
        5, 6, 7
    ],[
        8, 9, 10
    ]];

    fit("Кількість пар для матриці - 1", () => {
        let actual = findPairs(matrix)
        let expected = 1;
        expect(actual.toFixed(2)).toBe(expected.toFixed(2));
    });
});