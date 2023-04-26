import { PrismaClient } from '@prisma/client';
import { Recipe__ } from './types';

const defaultMeasures = [
  'x',
  'ml',
  'l',
  'g',
  'kg',
  'tsp',
  'tbsp',
  'drop',
  'pinch',
  'cup',
];

export async function createMeasures(
  prisma: PrismaClient,
  recipes: Recipe__[]
) {
  const data = Array.from(
    new Set([
      ...defaultMeasures,
      ...recipes
        .map(({ ingredients }) => ingredients.map(({ measure }) => measure))
        .flat(),
    ])
  ).map(name => ({ name }));

  await prisma.measure.createMany({ data });
  console.log(`✅ created ${data.length} measures`);
}
