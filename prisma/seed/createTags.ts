import { PrismaClient } from '@prisma/client';
import { Recipe__ } from './types';

export async function createTags(prisma: PrismaClient, recipes: Recipe__[]) {
  const data = Array.from(new Set(recipes.map(({ tags }) => tags).flat())).map(
    name => ({ name })
  );

  await prisma.tag.createMany({ data });
  console.log(`✅ created ${data.length} tags`);
}
