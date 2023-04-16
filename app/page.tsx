import { RecipeCard } from '~/common/components/RecipeCard';
import data from '~/public/recipes.json';

export default function HomePage(): JSX.Element {
  return (
    <ul className="container space-y-6">
      {data.recipes.map(recipe => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}
