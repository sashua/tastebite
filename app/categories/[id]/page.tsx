import { Category, Recipe } from '@prisma/client';
import { RecipeCard } from '~/common/components';

interface CategoryPageProps {
  params: { id: string };
}

export default function CategoryPage({
  params: { id },
}: CategoryPageProps): JSX.Element {
  const category: Partial<Category> = { id };
  const recipes: Recipe[] = [];

  if (!category) {
    return <p>Loading...</p>;
  }

  const { name, description } = category;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">{name}</h1>
        <p className="mb-6 text-sm">{description}</p>
        <ul className="list-sm">
          {recipes.map(item => (
            <li key={item.id}>
              <RecipeCard className="h-full" data={item} variant="simple" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
