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
  const relatedRecipes = await getRelatedRecipes({ recipe, limit: 12 });

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
          <h1 className="title-page">{name}</h1>

          <div className="mb-6 flex flex-col gap-6 sm:mb-8 sm:gap-8 md:flex-row-reverse lg:mb-10 lg:gap-12">
            <div className="md:basis-2/5">
              <div className="mb-4 flex items-center justify-between gap-6">
                <Author data={owner} />
                <Tag icon={RiCalendarLine}>{formatDateToNow(createdAt)}</Tag>
              </div>
              <div className="mb-4 flex items-center gap-2 md:mb-8">
                <Rating value={averageRating} />
                <span className="text-sm lg:text-base">
                  {totalFeedbacks} ratings
                </span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg">{description}</p>
            </div>

            <div className="relative aspect-classic overflow-hidden rounded-md sm:rounded-lg md:basis-3/5 lg:rounded-xl">
              <Image
                className="object-cover"
                src={`/images/recipes/${imageUrl}`}
                alt={name}
                fill
              />
            </div>
          </div>

          <CookInfo data={{ prepTime, cookTime, difficulty, servings }} />
          {tags?.length > 0 && (
            <TagsList
              className="mt-6 text-secondary sm:mt-8 lg:mt-10"
              tags={tags}
            />
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="md:flex md:gap-4 lg:gap-8 xl:gap-12">
            {ingredients?.length > 0 && (
              <div className="section md:basis-2/5">
                <div className="rounded-xl bg-neutral-100 px-4 py-10 shadow-md">
                  <h2 className="title-lg md:title-md">Ingredients</h2>
                  <IngredientsList data={ingredients} />
                </div>
              </div>
            )}

            {instructions?.length > 0 && (
              <div className="section md:mt-6 md:basis-3/5">
                <h2 className="title-lg">Method</h2>
                <InstructionsList data={instructions} />
              </div>
            )}
          </div>

          <div className="border-b-8 border-b-accent pb-6 text-center sm:pb-8 lg:pb-10">
            <h3 className="title-md">Already made this?</h3>
            <Button variant="bordered" size="lg">
              Share your feedback
            </Button>
          </div>
        </div>
      </section>

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
