type Props = {
  params: {
    slug: string[];
  };
};

function Docs({ params }: Props) {
  const { slug = [] } = params;

  if (slug.length === 2) {
    return (
      <h1>
        Feature ${slug[1]} and Concept ${slug[0]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Feature ${slug[0]}</h1>;
  }

  return <div>Docs home page</div>;
}

export default Docs;
