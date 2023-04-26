import { RecipeIngredient } from '@prisma/client';

export const formatIngredient = ({
  quantity,
  measureName,
  name,
  comment,
}: RecipeIngredient) => {
  const prefix = quantity ? `${quantity} ${measureName} ` : '';
  const suffix = comment?.startsWith('(')
    ? ` ${comment}`
    : comment
    ? `, ${comment}`
    : '';
  return [prefix, name, suffix];
};
