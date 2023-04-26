import { PrismaClient } from '@prisma/client';
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
      imageUrl__,
    })
  );

  await prisma.category.createMany({ data });
  console.log(`✅ created ${data.length} categories`);
}
