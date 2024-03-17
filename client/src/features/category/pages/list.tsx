import CategoryDetailCard from "../components/CategoryDetailCard";

import { useListCategoriesQuery } from "../categoryApiSlice";

export default function CategoryListPage() {
  const { data: categories, isLoading } = useListCategoriesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Categorys</h1>
      <ul>
        {categories?.data?.map((category) => (
          <li key={category.id}>
            <CategoryDetailCard name={category.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
