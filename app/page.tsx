import { RecipeCard } from '~/common/components/RecipeCard';
import { getRecipes } from '~/common/utils';

export default function HomePage(): JSX.Element {
  const recipes = getRecipes(6);

  return (
    <section className="py-4">
      <div className="container">
        <ul className="space-y-6">
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
