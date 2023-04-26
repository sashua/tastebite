import { PrismaClient, Recipe } from '@prisma/client';
import { Recipe__ } from './types';

type CreateRecipe = Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>;

export async function createRecipes(prisma: PrismaClient, recipes: Recipe__[]) {
  const admin = await prisma.user.findUnique({
    where: { email: 'tastebite@gmail.com' },
  });
  const users = await prisma.user.findMany();
  const categories = await prisma.category.findMany();

  for (const recipe of recipes) {
    const {
      name,
      category,
      description,
      imageUrl,
      cookInfo: { prepTime, cookTime, difficulty, servings },
      statistics: { averageRating, averageRepeat, totalFeedbacks },
      tags,
      ingredients,
      instructions,
      original,
    } = recipe;

    const foundOwner =
      users.find(item => item.pageUrl__ === original.author.href) ?? admin;
    const foundCategory = categories.find(item => item.name === category);

    const recipeData: CreateRecipe = {
      ownerId: foundOwner!.id,
      categoryId: foundCategory!.id,
      name,
      description,
      imageUrl,
      prepTime,
      cookTime,
      difficulty,
      servings,
      averageRating,
      averageRepeat,
      totalFeedbacks,
      pageUrl__: original.pageUrl,
      imageUrl__: original.imageUrl,
    };

    const connectTags = tags.map(name => ({
      name,
    }));

    const createIngredients = ingredients.map(
      ({ section, quantity, measure, name, comment }, order) => ({
        section,
        order,
        quantity,
        measure: { connect: { name: measure } },
        name,
        comment,
      })
    );

    const createInstructions = instructions.map(({ section, text }, order) => ({
      section,
      order,
      text,
    }));

    await prisma.recipe.create({
      data: {
        ...recipeData,
        tags: { connect: connectTags },
        ingredients: { create: createIngredients },
        instructions: { create: createInstructions },
      },
      include: {
        owner: true,
        category: true,
        tags: true,
        ingredients: true,
        instructions: true,
      },
    });
  }
  console.log(`✅ created ${recipes.length} recipes`);
}
