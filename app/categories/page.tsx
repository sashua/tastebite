import { CategoryCard } from '~/common/components';
import { getCategories } from '~/common/utils';

export default function CategoriesPage(): JSX.Element {
  const collections = getCategories();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">Categories</h1>
        <ul className="list-sm">
          {collections.map(item => (
            <li key={item.id}>
              <CategoryCard className="h-full" data={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
