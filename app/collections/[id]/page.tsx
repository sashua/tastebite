import { RecipeCard } from '~/common/components';
import { getCollection, getRecipesByCollectionName } from '~/common/utils';

interface Props {
  params: { id: string };
}

export default function CollectionPage({ params: { id } }: Props): JSX.Element {
  const collection = getCollection(id);
  const recipes = getRecipesByCollectionName(collection?.name ?? '', 12);

  if (!collection) {
    return <p>Loading...</p>;
  }

  const { name, description } = collection;

  return (
    <section className="pb-10 pt-6">
      <div className="container">
        <h1 className="mb-4 font-secondary text-3xl font-bold">{name}</h1>
        <p className="mb-6 border-b pb-6 text-sm">{description}</p>
        <ul className="grid grid-cols-2 gap-6">
          {recipes.map(item => (
            <li key={item.id}>
              <RecipeCard className="h-full" recipe={item} variant="simple" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
