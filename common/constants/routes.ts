import { Route } from 'next';

export const routes: Record<string, Route> = {
  about: '/about',
  categories: '/categories',
  homepage: '/',
  search: '/search',
  recipes: '/recipes' as Route,
} as const;
