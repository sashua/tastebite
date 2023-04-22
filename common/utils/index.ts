import { Recipe } from '~/common/types';
import collections from '~/public/collections.json';
import recipes from '~/public/recipes.json';

export function getCollections(limit?: number) {
  return limit ? collections.slice(0, limit) : collections;
}

export function getCollection(id: string) {
  return collections.find(item => item.id === id);
}

export function getRecipes(limit: number): Recipe[] {
  return recipes.slice(0, limit);
}

export function getRecipesByCollectionName(name: string, limit: number) {
  return recipes.filter(item => item.collection === name).slice(0, limit);
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find(item => item.id === id);
}
