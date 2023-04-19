import { RecipeCard } from '~/common/components/RecipeCard';
import recipes from '~/temp/recipes.json';

export default function HomePage(): JSX.Element {
  return (
    <ul className="container space-y-6">
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}
