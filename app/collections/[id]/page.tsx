import { RecipeCard } from '~/common/components';
import { getCollection, getRecipesByCollectionName } from '~/common/utils';

interface CollectionPageProps {
  params: { id: string };
}

export default function CollectionPage({
  params: { id },
}: CollectionPageProps): JSX.Element {
  const collection = getCollection(id);
  const recipes = getRecipesByCollectionName(collection?.name ?? '', 12);

  if (!collection) {
    return <p>Loading...</p>;
  }

  const { name, description } = collection;

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
