type Props = {
  name: string;
};

export default function CategoryGroupDetailCard(props: Props) {
  return (
    <>
      <h3>{props.name}</h3>
    </>
  );
}
