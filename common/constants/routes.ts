import { Route } from 'next';

export const routes: Record<string, Route> = {
  about: '/about',
  collections: '/collections',
  homepage: '/',
  profile: '/profile',
  recipes: '/recipes' as Route,
  search: '/search',
} as const;
