import { Route } from 'next';

export const routes: Record<string, Route> = {
  about: '/about',
  categories: '/categories',
  homepage: '/',
  profile: '/profile',
  recipes: '/recipes' as Route,
  search: '/search',
} as const;
