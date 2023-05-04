import { RecipeCard } from '~/components';
import { getCategoryById, getRecipesByCategory } from '~/services/api';

interface CategoryPageProps {
  params: { id: string };
}

export default async function CategoryPage({
  params: { id },
}: CategoryPageProps): Promise<JSX.Element> {
  const [category, recipes] = await Promise.all([
    getCategoryById(id),
    getRecipesByCategory({ id }),
  ]);

  if (!category) {
    return <p>Loading...</p>;
  }

  const { name, description } = category;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">{name}</h1>
        <p className="mb-6 text-sm sm:mb-8 sm:text-base md:mb-10 lg:mb-12 lg:text-lg xl:mb-14">
          {description}
        </p>
        <ul className="list-sm">
          {recipes?.map(recipe => (
            <li key={recipe.id}>
              <RecipeCard className="h-full" data={recipe} variant="simple" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
