import { CollectionCard, RecipeCard, Subscribe } from '~/common/components';
import { getCollections, getRecipes } from '~/common/utils';

export default function HomePage(): JSX.Element {
  const superRecipes = getRecipes(6);
  const latestRecipes = getRecipes(16);
  const popularCollections = getCollections(6);

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="title-md">Super delicious</h2>
          <ul className="list-md">
            {superRecipes.map(item => (
              <li key={item.id}>
                <RecipeCard className="h-full" data={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title-md">Popular collections</h2>
          <ul className="list-xs">
            {popularCollections.map(item => (
              <li key={item.id}>
                <CollectionCard className="h-full" data={item} />
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
            {latestRecipes.map(item => (
              <li key={item.id}>
                <RecipeCard className="h-full" data={item} variant="simple" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
