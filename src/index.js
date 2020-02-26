import * as pairs from '@hexlet/pairs';

/**
 * Tagged data constructor
 * @name attach
 * @example
 * attach('typeOfTag', data); // ('typeOfTag', data)
 */
export const attach = (tag, data) => pairs.cons(tag, data);

/**
 * Get type of tagged data
 * @name typeTag
 * @example
 * const tag = attach('simpleTag', card);
 * typeTag(tag); // simpleTag
 */
export const typeTag = (taggedData) => pairs.car(taggedData);

/**
 * Get contents from tagged data
 * @name contents
 * @example
 * const tag = attach('complexTag', cons(1, 2));
 * contents(tag); // (1, 2)
 */
export const contents = (taggedData) => pairs.cdr(taggedData);
