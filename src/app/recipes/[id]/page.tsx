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
} from '~/components';
import { formatDateToNow } from '~/helpers';
import { getRecipeById, getRelatedRecipes } from '~/services/api';
import { CookInfo } from './CookInfo';
import { IngredientsList } from './IngredientsList';
import { InstructionsList } from './InstructinonsList';

interface RecipePageProps {
  params: { id: string };
}

export default async function RecipePage({
  params: { id },
}: RecipePageProps): Promise<JSX.Element> {
  const recipe = await getRecipeById(id);
  const relatedRecipes = await getRelatedRecipes({ recipe, limit: 8 });

  if (!recipe) {
    return <p>Loading...</p>;
  }

  const {
    name,
    owner,
    createdAt,
    description,
    imageUrl,
    prepTime,
    cookTime,
    difficulty,
    servings,
    averageRating,
    totalFeedbacks,

    ingredients,
    instructions,
  } = recipe;

  const tags = recipe.tags.map(tag => tag.name);

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title-lg">{name}</h1>
          <div className="mb-4 flex items-center justify-between gap-6">
            <Author data={owner} />
            <Tag icon={RiCalendarLine}>{formatDateToNow(createdAt)}</Tag>
          </div>
          <div className="mb-6 flex items-center gap-2 border-b pb-4">
            <Rating value={averageRating} />
            <span className="text-sm">{totalFeedbacks} ratings</span>
          </div>
          <p className="mb-6 text-sm">{description}</p>
          <div className="relative mb-6 aspect-classic overflow-hidden rounded-md">
            <Image
              className="object-cover"
              src={`/images/recipes/${imageUrl}`}
              alt={name}
              fill
            />
          </div>
          <CookInfo data={{ prepTime, cookTime, difficulty, servings }} />
          {tags?.length > 0 && (
            <TagsList className="mt-6 text-secondary" tags={tags} />
          )}
        </div>
      </section>

      {ingredients?.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="rounded-xl bg-neutral-100 px-4 py-10 shadow-md">
              <h2 className="title-lg">Ingredients</h2>
              <IngredientsList data={ingredients} />
            </div>
          </div>
        </section>
      )}

      {instructions?.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="title-lg">Method</h2>
            <InstructionsList data={instructions} />
            <div className="border-b-8 border-b-accent py-6 text-center">
              <h3 className="title-md">Already made this?</h3>
              <Button variant="bordered" size="lg">
                Share your feedback
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="title-md">You might also like</h2>
          <ul className="list-sm">
            {relatedRecipes.map(recipe => (
              <li key={recipe.id}>
                <RecipeCard className="h-full" data={recipe} variant="simple" />
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
    </>
  );
}
