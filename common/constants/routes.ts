import { Route } from 'next';

export const routes: Record<string, Route> = {
  about: '/about',
  collections: '/collections',
  homepage: '/',
  search: '/search',
  recipes: '/recipes' as Route,
} as const;
