import { CollectionCard } from '~/common/components';
import { getCollections } from '~/common/utils';

export default function CollectionsPage(): JSX.Element {
  const collections = getCollections();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">Collections</h1>
        <ul className="list-sm">
          {collections.map(item => (
            <li key={item.id}>
              <CollectionCard className="h-full" data={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
