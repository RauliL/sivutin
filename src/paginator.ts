import { Page } from './types';
import { slice } from './util';

export const paginate = <T>(
  container: ArrayLike<T>,
  page?: number | null,
  pageSize?: number | null
): Page<T> => {
  const validatedPage = Math.max(page ?? 1, 1);
  const validatedPageSize = Math.max(pageSize ?? 10, 1);
  const from = (validatedPage - 1) * validatedPageSize;
  const to = from + validatedPageSize;

  return {
    results: slice(container, from, to),
    count: container.length,
    next: to + 1 < container.length ? validatedPage + 1 : null,
    previous: validatedPage > 1 ? validatedPage - 1 : null,
  };
};
