'use client';

import clsx from 'clsx';
import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RiCloseLine, RiSearch2Line } from 'react-icons/ri';
import { IconButton, Input } from '~/components';

type FormInputs = {
  query: string;
};

type SearchFormProps = {
  className?: string;
  query: string;
  total: number;
};

export function SearchForm({ className, query, total }: SearchFormProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { register, setFocus, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      query,
    },
  });

  useEffect(() => {
    setFocus('query');
  }, [setFocus]);

  const onSubmit = ({ query }: FormInputs) => {
    setFocus('query');
    const searchRoute = pathname + '?' + new URLSearchParams({ q: query });
    router.push(searchRoute as Route);
  };

  const onReset = () => {
    setFocus('query');
  };

  return (
    <form
      className={clsx('relative mb-6', className)}
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
    >
      <Input aria-label="Search" {...register('query')} />
      {total > 0 && (
        <span className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-xs">{`(${total} recipes)`}</span>
      )}
      <IconButton
        className="absolute left-0 top-1/2 -translate-y-1/2"
        icon={RiSearch2Line}
        type="submit"
        aria-label="Search recipes"
      />
      <IconButton
        className="absolute right-0 top-1/2 -translate-y-1/2"
        icon={RiCloseLine}
        type="reset"
        aria-label="Clear search"
      />
    </form>
  );
}
