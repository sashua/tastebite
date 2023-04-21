import { RecipeCard } from '~/common/components';
import { getRecipes } from '~/common/utils';

export default function HomePage(): JSX.Element {
  const recipes = getRecipes(6);

  return (
    <section className="pb-10 pt-6">
      <div className="container">
        <ul className="space-y-6">
          {recipes.map(item => (
            <li key={item.id}>
              <RecipeCard recipe={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
