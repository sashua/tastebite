import { NextResponse } from 'next/server';
import { searchRecipes } from '~/services/recipe';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const searchQuery = searchParams.get('q') ?? '';
  let page = Number.parseInt(searchParams.get('page') ?? '');
  let limit = Number.parseInt(searchParams.get('limit') ?? '');

  page = isNaN(page) ? 1 : page;
  limit = isNaN(limit) ? 4 : limit;

  const recipes = await searchRecipes({ searchQuery, page, limit });

  return NextResponse.json(recipes);
}
