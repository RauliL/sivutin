# sivutin

Very simple paginator.

## Installation

```sh
$ npm install --save sivutin
```

## Usage

The library consists from a single function, which looks like this:

```typescript
paginate(
  // Any array like object to be paginated.
  container: ArrayLike,

  // Selected page number.
  page: number = 1,

  // Number of results per page.
  pageNumber: number = 10
)
```

And it returns an object like this:

```typescript
{
  // Array of results for the page.
  results: Array;

  // Total number of results.
  count: number;

  // Next page index, or null if this is the last page in results.
  next: number | null;

  // Previous page index, or null if this is the first page in results.
  previous: number | null;
}
```

Usage of the function looks like this:

```javascript
import paginate from 'sivutin';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

paginate(numbers, 1, 5).results; //=> [1, 2, 3, 4, 5]
paginate(numbers, 2, 5).results; //=> [6, 7, 8, 9, 10]
```
