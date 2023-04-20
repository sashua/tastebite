import { Recipe } from '~/common/types';
import recipes from '~/temp/recipes.json';

export function getRecipes(limit: number): Recipe[] {
  return recipes.slice(0, limit);
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find(item => item.id === id);
}
