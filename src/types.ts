/**
 * Single page of results.
 */
export type Page<T> = {
  /**
   * Array of results for the page.
   */
  results: T[];

  /**
   * Total number of results.
   */
  count: number;

  /**
   * Next page number, or null if this is the first page in results.
   */
  next: number | null;

  /**
   * Previous page number, or null if this is the last page in results.
   */
  previous: number | null;
};
