import { slice } from './util';

describe('slice()', () => {
  it.each([
    [0, 5, [1, 2, 3, 4, 5]],
    [5, 10, [6, 7, 8, 9, 10]]
  ])('should be able to slice an array', (start, end, expectedResult) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(slice(array, start, end)).toEqual(expectedResult);
  });

  it.each([
    [0, 5, [1, 2, 3, 4, 5]],
    [5, 10, [6, 7, 8, 9, 10]],
  ])('should be able to slice array like object', (start, end, expectedResult) => {
    const object = { length: 10 };

    for (let i = 0; i < 10; ++i) {
      object[i] = i + 1;
    }

    expect(slice(object, start, end)).toEqual(expectedResult);
  });
});
