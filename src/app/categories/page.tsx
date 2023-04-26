import { CategoryCard } from '~/components';
import { getCategories } from '~/services/api';

export default async function CategoriesPage(): Promise<JSX.Element> {
  const categories = await getCategories();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">Categories</h1>
        <ul className="list-sm">
          {categories.map(category => (
            <li key={category.id}>
              <CategoryCard className="h-full" data={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
