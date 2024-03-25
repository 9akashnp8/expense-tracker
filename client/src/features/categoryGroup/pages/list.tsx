import CategoryGroupDetailCard from "../components/CategoryGroupDetailCard";
import { useListCategoryGroupsQuery } from "../categoryGroupApiSlice";

export default function CategoryGroupListPage() {
  const { data: categoryGroups, isLoading } = useListCategoryGroupsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Category Groups</h1>
      <ul>
        {categoryGroups?.data?.map((category) => (
          <li key={category.id}>
            <CategoryGroupDetailCard name={category.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
