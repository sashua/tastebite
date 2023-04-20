import { Recipe } from '~/common/types';
import recipes from '~/temp/recipes.json';

export function getRecipes(): Recipe[] {
  return recipes.slice(0, 4);
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find(item => item.id === id);
}
