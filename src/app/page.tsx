import { CategoryCard, RecipeCard, Subscribe } from '~/components';
import {
  getLatestRecipes,
  getMostRatedRecipes,
  getPopularRecipes,
} from '~/services/api';
import { getPopularCategories } from '~/services/api/category';

export default async function HomePage(): Promise<JSX.Element> {
  const [popularRecipes, mostRatedRecipes, latestRecipes, popularCategories] =
    await Promise.all([
      getPopularRecipes(1),
      getMostRatedRecipes(6),
      getLatestRecipes(16),
      getPopularCategories(6),
    ]);

  return (
    <>
      <section className="section">
        <div className="container">
          {popularRecipes.length > 0 && (
            <RecipeCard
              className="mb-10 sm:mb-12 md:mb-16 lg:mb-20"
              variant="featured"
              data={popularRecipes[0]}
            />
          )}

          <h2 className="title-md">Super delicious</h2>
          <ul className="list-md">
            {mostRatedRecipes.map(recipe => (
              <li key={recipe.id}>
                <RecipeCard className="h-full" data={recipe} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title-md">Popular collections</h2>
          <ul className="list-xs">
            {popularCategories.map(category => (
              <li key={category.id}>
                <CategoryCard className="h-full" data={category} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Subscribe />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title-md">Latest recipes</h2>
          <ul className="list-sm">
            {latestRecipes.map(recipe => (
              <li key={recipe.id}>
                <RecipeCard className="h-full" data={recipe} variant="simple" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
