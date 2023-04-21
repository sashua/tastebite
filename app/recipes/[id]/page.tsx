import Image from 'next/image';
import { RiCalendarLine } from 'react-icons/ri';
import {
  Author,
  Button,
  Rating,
  RecipeCard,
  Subscribe,
  Tag,
  TagsList,
} from '~/common/components';
import { formatDateToNow } from '~/common/helpers';
import { getRecipe, getRecipes } from '~/common/utils';
import { CookInfo } from './CookInfo';
import { IngredientsList } from './IngredientsList';
import { InstructionsList } from './InstructinonsList';

interface Props {
  params: { id: string };
}

export default function RecipePage({ params: { id } }: Props): JSX.Element {
  const recipe = getRecipe(id);
  const similarRecipes = getRecipes(8);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  const {
    name,
    author,
    createdAt,
    description,
    imageFile,
    cookInfo,
    statistics,
    tags,
    ingredients,
    instructions,
  } = recipe;

  return (
    <>
      <section className="pt-6">
        <div className="container">
          <h1 className="mb-6 font-secondary text-3xl font-bold">{name}</h1>
          <div className="mb-4 flex items-center justify-between gap-6">
            <Author name={author.name} avatarUrl="" />
            <Tag icon={RiCalendarLine}>{formatDateToNow(createdAt)}</Tag>
          </div>
          <div className="mb-6 flex items-center gap-2 border-b pb-6">
            <Rating value={statistics.averageRating} />
            <span className="text-sm">{statistics.totalFeedbacks} ratings</span>
          </div>
          <p className="mb-6 text-sm">{description}</p>
          <div className="relative mb-6 aspect-classic overflow-hidden rounded-md">
            <Image
              className="object-cover"
              src={`/images/recipes/${imageFile}`}
              alt={name}
              fill
            />
          </div>
          <CookInfo info={cookInfo} />
          {tags?.length > 0 && (
            <TagsList className="mt-6 text-secondary" tags={tags} />
          )}
        </div>
      </section>

      {ingredients?.length > 0 && (
        <section className="py-10">
          <div className="container">
            <div className="rounded-xl bg-neutral-100 px-4 py-8 shadow-md">
              <h2 className="mb-4 font-secondary text-3xl font-bold">
                Ingredients
              </h2>
              <IngredientsList ingredients={ingredients} />
            </div>
          </div>
        </section>
      )}

      {instructions?.length > 0 && (
        <section>
          <div className="container">
            <h2 className="mb-4 font-secondary text-3xl font-bold">Method</h2>
            <InstructionsList instructions={instructions} />
            <div className="border-b-8 border-b-accent px-9 py-6 text-center">
              <h3 className="mb-4 font-secondary text-2xl font-bold">
                Already made this?
              </h3>
              <Button className="w-full" variant="bordered">
                Share your feedback
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="pt-10">
        <div className="container">
          <h2 className="mb-4 font-secondary text-2xl font-bold">
            You might also like
          </h2>
          <ul className="grid grid-cols-2 gap-6">
            {similarRecipes.map(item => (
              <li key={item.id}>
                <RecipeCard className="h-full" recipe={item} variant="simple" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <Subscribe />
        </div>
      </section>
    </>
  );
}
