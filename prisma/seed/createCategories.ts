import { PrismaClient } from '@prisma/client';
import { getRandomDate } from './getRandomDate';
import { Category__ } from './types';

export async function createCategories(
  prisma: PrismaClient,
  categories: Category__[]
) {
  const data = categories.map(
    ({ name, description, imageUrl, original: { imageUrl: imageUrl__ } }) => ({
      name,
      description,
      imageUrl,
      createdAt: getRandomDate(new Date(2023, 1, 5), new Date(2023, 1, 15)),
      imageUrl__,
    })
  );

  await prisma.category.createMany({ data });
  console.log(`✅ created ${data.length} categories`);
}
