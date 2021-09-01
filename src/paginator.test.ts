import { paginate } from './paginator';

describe('paginator()', () => {
  it.each([
    [1, 5, [1, 2, 3, 4, 5], 2, null],
    [2, 5, [6, 7, 8, 9, 10], null, 1],
    [3, 2, [5, 6], 4, 2],
    [undefined, undefined, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], null, null],
  ])('should be able to paginate arrays', (page, pageSize, results, next, previous) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(paginate(array, page, pageSize)).toEqual({
      results,
      count: 10,
      next,
      previous,
    });
  });

  it.each([
    [1, 5, [1, 2, 3, 4, 5], 2, null],
    [2, 5, [6, 7, 8, 9, 10], null, 1],
    [3, 2, [5, 6], 4, 2],
    [undefined, undefined, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], null, null],
  ])('should be able to paginate array like objects', (page, pageSize, results, next, previous) => {
    const object = { length: 10 };

    for (let i = 0; i < 10; ++i) {
      object[i] = i + 1;
    }

    expect(paginate(object, page, pageSize)).toEqual({
      results,
      count: 10,
      next,
      previous,
    });
  });
});
