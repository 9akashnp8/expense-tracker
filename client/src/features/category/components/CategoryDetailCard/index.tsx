type Props = {
  name: string;
};
export default function CategoryDetailCard(props: Props) {
  return (
    <>
      <h3>{props.name}</h3>
    </>
  );
}
