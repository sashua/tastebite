'use client';

import { Recipe } from '@prisma/client';
import axios from 'axios';
import { useCallback } from 'react';
import useSWRInfinite from 'swr/infinite';
import { Button, RecipeCard } from '~/components';
import { SearchForm } from './SearchForm';

const PAGE_SIZE = 4;

type SearchPageProps = {
  searchParams: Record<string, string>;
};

const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const searchQuery = searchParams.q;

  const getKey = useCallback(
    (page: number, prevData: Recipe[]) => {
      if (prevData && prevData.length !== PAGE_SIZE) {
        return null;
      }
      return `/api/recipes?q=${searchQuery}&page=${
        page + 1
      }&limit=${PAGE_SIZE}`;
    },
    [searchQuery]
  );

  const { data, isLoading, setSize } = useSWRInfinite<Recipe[]>(
    getKey,
    fetcher,
    { revalidateFirstPage: false }
  );

  const handleLoadMore = () => {
    setSize(size => size + 1);
  };

  const recipes = data?.flat();
  const hasNextPage = (data?.at(-1)?.length ?? 0) >= PAGE_SIZE;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">Search results</h1>
        <SearchForm query={searchQuery} total={0} />

        <ul className="list-sm mb-10">
          {recipes?.map(recipe => (
            <li key={recipe.id}>
              <RecipeCard className="h-full" data={recipe} variant="simple" />
            </li>
          ))}
        </ul>

        {hasNextPage && (
          <div className="text-center">
            <Button variant="bordered" size="sm" onClick={handleLoadMore}>
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
