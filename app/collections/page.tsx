import { CollectionCard } from '~/common/components';
import { getCollections } from '~/common/utils';

export default function CollectionsPage(): JSX.Element {
  const collections = getCollections();

  return (
    <section className="pb-10 pt-6">
      <div className="container">
        <h1 className="mb-6 font-secondary text-3xl font-bold">Collections</h1>
        <ul className="grid grid-cols-2 gap-6">
          {collections.map(item => (
            <li key={item.id}>
              <CollectionCard collection={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
