import CategoryDetailCard from "../components/CategoryDetailCard";
import ActionButton from "../../core/components/ActionButton";

import { useListCategoriesQuery } from "../categoryApiSlice";

import { useNavigate } from "react-router-dom";

export default function CategoryListPage() {
  const { data: categories, isLoading } = useListCategoriesQuery();
  const navigate = useNavigate();

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
      <ActionButton content="+" onClick={() => navigate("create")} />
    </>
  );
}
