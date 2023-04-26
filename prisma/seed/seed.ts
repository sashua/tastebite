import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';
import path from 'path';
import { createCategories } from './createCategories';
import { createMeasures } from './createMeasures';
import { createRecipes } from './createRecipes';
import { createTags } from './createTags';
import { createUsers } from './createUsers';
import { Category__, Recipe__ } from './types';

const prisma = new PrismaClient();

async function main() {
  // ---- Read files ----
  const categoriesText = await readFile(
    path.join(__dirname, 'categories.json'),
    {
      encoding: 'utf-8',
    }
  );
  const recipesText = await readFile(path.join(__dirname, 'recipes.json'), {
    encoding: 'utf-8',
  });
  const categories: Category__[] = JSON.parse(categoriesText);
  const recipes: Recipe__[] = JSON.parse(recipesText);

  // ---- Delete data ----
  await prisma.recipe.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.measure.deleteMany();

  // ---- Seed data ----
  await createMeasures(prisma, recipes);
  await createTags(prisma, recipes);
  await createUsers(prisma, recipes);
  await createCategories(prisma, categories);
  await createRecipes(prisma, recipes);
  console.log('🎉🎉🎉', 'seeding completed');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
