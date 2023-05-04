import { Recipe } from '@prisma/client';
import { prisma } from '../prisma';

export const searchRecipes = async ({
  searchQuery = '',
  page = 1,
  limit = 2,
}): Promise<Recipe[]> => {
  if (!searchQuery) {
    return [];
  }

  const totalPromise = prisma.recipe.count({
    where: { name: { contains: searchQuery, mode: 'insensitive' } },
  });
  const recipesPromise = prisma.recipe.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: { name: { contains: searchQuery, mode: 'insensitive' } },
  });
  const [total, recipes] = await Promise.all([totalPromise, recipesPromise]);
  return recipes;
};
