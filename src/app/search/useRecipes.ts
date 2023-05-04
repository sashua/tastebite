import axios from 'axios';
import { Route } from 'next';
import { useCallback } from 'react';
import useSWRInfinite from 'swr/infinite';

type SearchParams = Record<string, string>;

const fetcher = async <T>([url, params]: [Route, SearchParams]) => {
  const { data } = await axios.get<T[]>(url, { params });
  return data;
};

export function useGetInfinite<T>(url: Route, searchParams: SearchParams) {
  const getKey = useCallback(
    (page: number, previousPageData: T[]) => {
      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return [url, { ...searchParams, page: page + 1 }];
    },
    [url, searchParams]
  );

  return useSWRInfinite<T[]>(getKey, fetcher<T>);
}
