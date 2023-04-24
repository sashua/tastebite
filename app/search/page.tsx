import { RiCloseLine, RiSearch2Line } from 'react-icons/ri';
import { IconButton, RecipeCard } from '~/common/components';
import { getRecipes } from '~/common/utils';

export default function SearchPage(): JSX.Element {
  const foundRecipes = getRecipes(12);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">Search results</h1>
        <form className="relative mb-6">
          <label>
            <span className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-xs">
              (12 Recipes)
            </span>
            <input
              className="w-full border-b border-b-[theme(colors.black)] px-8 py-2 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:shadow-[inset_0_-1px_0_theme(colors.accent.500)]"
              type="text"
            />
          </label>
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

        <ul className="list-sm">
          {foundRecipes.map(item => (
            <li key={item.id}>
              <RecipeCard className="h-full" data={item} variant="simple" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
