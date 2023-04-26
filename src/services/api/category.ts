import { Category } from '@prisma/client';
import { prisma } from '../prisma';

export const getCategories = (limit = 20) =>
  prisma.category.findMany({
    take: limit,
    orderBy: { name: 'asc' },
  });

// TODO: what is the appropriate criteria?
export const getPopularCategories = (limit = 6) =>
  prisma.category.findMany({
    take: limit,
    orderBy: { recipes: { _count: 'desc' } },
  });

export const getCategoryById = (id: Category['id']) =>
  prisma.category.findUnique({ where: { id } });
