import { Route } from 'next';

export const routes: Record<string, Route> = {
  about: '/about',
  categories: '/categories',
  homepage: '/',
  profile: '/profile',
  recipes: '/recipes' as Route,
  search: '/search',
} as const;

export const navLinks = [
  { name: 'Homepage', href: routes.homepage },
  { name: 'Categories', href: routes.categories },
  { name: 'Search', href: routes.search },
  { name: 'About', href: routes.about },
  { name: 'Profile', href: routes.profile },
];
