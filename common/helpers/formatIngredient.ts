import { Ingredient } from '../types';

export function formatIngredient({
  quantity,
  measure,
  name,
  comment,
}: Ingredient) {
  const prefix = quantity ? `${quantity} ${measure} ` : '';
  const suffix = comment.startsWith('(')
    ? ` ${comment}`
    : comment
    ? `, ${comment}`
    : '';
  return [prefix, name, suffix];
}
