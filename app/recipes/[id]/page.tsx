interface Props {
  params: { id: string };
}

export default function RecipePage({ params: { id } }: Props): JSX.Element {
  return <div className="container">{`Recipe ${id} page`}</div>;
}
