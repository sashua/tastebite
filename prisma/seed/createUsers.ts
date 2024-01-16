import { PrismaClient } from '@prisma/client';
import { getRandomDate } from './getRandomDate';
import { Recipe__ } from './types';

const admin = {
  name: 'Tastebite Team',
  email: 'tastebite@gmail.com',
  password: 'tastebite',
  createdAt: new Date(2023, 1, 1),
};

export async function createUsers(prisma: PrismaClient, recipes: Recipe__[]) {
  const authors = recipes.reduce((acc, item) => {
    const { name, href } = item.original.author;
    if (name.split(' ').length === 2) {
      acc[href] = name;
    }
    return acc;
  }, {} as Record<string, string>);

  const data = Object.entries(authors).map(([href, name]) => ({
    name,
    email: name.split(' ').join('.').toLowerCase() + '@gmail.com',
    password: 'password',
    createdAt: getRandomDate(new Date(2023, 1, 5), new Date(2023, 1, 25)),
    pageUrl__: href,
  }));

  await prisma.user.createMany({ data: [admin, ...data] });
  console.log(`✅ created ${data.length + 1} users`);
}
