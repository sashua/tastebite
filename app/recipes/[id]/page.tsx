import Image from 'next/image';
import { RiCalendarLine } from 'react-icons/ri';
import { CookInfo } from '~/app/recipes/[id]/CookInfo';
import { Author, Divider, Rating, Tag } from '~/common/components';
import { TagsList } from '~/common/components/TagsList';
import { formatDateToNow } from '~/common/helpers';
import { getRecipe } from '~/common/utils';
import { IngredientsList } from './IngredientsList';
import { InstructionsList } from './InstructinonsList';

interface Props {
  params: { id: string };
}

export default function RecipePage({ params: { id } }: Props): JSX.Element {
  const recipe = getRecipe(id);
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
      <section className="pb-10 pt-4">
        <div className="container">
          <h1 className="mb-4 font-secondary text-3xl font-bold">{name}</h1>
          <div className="mb-4 flex items-center justify-between gap-6">
            <Author name={author.name} avatarUrl="" />
            <Tag icon={RiCalendarLine}>{formatDateToNow(createdAt)}</Tag>
          </div>
          <div className="flex items-center gap-2">
            <Rating value={statistics.averageRating} />
            <span className="text-sm">{statistics.totalFeedbacks} ratings</span>
          </div>
          <Divider className="my-4" />
          <p className="mb-6 text-sm">{description}</p>
          <div className="relative mb-4 aspect-classic overflow-hidden rounded-md">
            <Image
              className="object-cover"
              src={`/images/recipes/${imageFile}`}
              alt={name}
              fill
            />
          </div>
          <CookInfo info={cookInfo} />
          <TagsList className="mt-4 text-secondary" tags={tags} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="rounded-xl bg-neutral-100 px-4 py-8 shadow">
            <h2 className="mb-4 font-secondary text-3xl font-bold">
              Ingredients
            </h2>
            <IngredientsList ingredients={ingredients} />
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container">
          <h2 className="mb-4 font-secondary text-3xl font-bold">Method</h2>
          <InstructionsList instructions={instructions} />
          <h3 className="mb-4 mt-10 font-secondary text-2xl font-bold">
            Already made this?
          </h3>
          <Divider className="mt-6 h-3 border-none bg-accent" />
        </div>
      </section>
    </>
  );
}
