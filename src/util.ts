export const slice = <T>(
  container: ArrayLike<T>,
  start: number,
  end: number
): T[] => {
  if (container instanceof Array && 'slice' in Array.prototype) {
    return container.slice(start, end);
  }

  const size = end - start;
  const result: T[] = new Array(size);

  for (let i = 0; i < size; ++i) {
    result[i] = container[start + i];
  }

  return result;
};
