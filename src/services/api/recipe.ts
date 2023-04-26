import { Category, Recipe } from '@prisma/client';
import { prisma } from '../prisma';

export const getPopularRecipes = (limit = 1) =>
  prisma.recipe.findMany({
    take: limit,
    where: { averageRepeat: { gte: 0.8 } },
    orderBy: { averageRepeat: 'desc' },
  });

export const getMostRatedRecipes = (limit = 6) =>
  prisma.recipe.findMany({
    take: limit,
    orderBy: { averageRating: 'desc' },
  });

export const getLatestRecipes = (limit = 16) =>
  prisma.recipe.findMany({
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

// TODO: choose sorting order
export const getRecipesByCategory = ({
  id,
  limit = 20,
}: {
  id: Category['id'];
  limit?: number;
}) =>
  prisma.recipe.findMany({
    take: limit,
    where: { categoryId: id },
    orderBy: { createdAt: 'desc' },
  });

export const getRelatedRecipes = async ({
  recipe,
  limit = 8,
}: {
  recipe: Recipe | null;
  limit?: number;
}) => {
  if (!recipe) {
    return [];
  }
  return await prisma.recipe.findMany({
    take: limit,
    where: {
      categoryId: recipe.categoryId,
    },
    orderBy: { averageRepeat: 'desc' },
  });
};

export const getRecipeById = (id: Recipe['id']) =>
  prisma.recipe.findUnique({
    where: { id },
    include: { owner: true, tags: true, ingredients: true, instructions: true },
  });
