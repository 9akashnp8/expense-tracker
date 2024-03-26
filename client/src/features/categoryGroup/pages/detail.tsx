import { useGetCategoryGroupQuery } from "../categoryGroupApiSlice";
import ActionButton from "../../core/components/ActionButton";

import { useNavigate, useParams } from "react-router-dom";

export default function CategoryGroupDetailPage() {
  const navigate = useNavigate();
  const { id: categoryGroupId } = useParams();
  const { data: categoryGroup, isLoading } = useGetCategoryGroupQuery(
    categoryGroupId!,
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{categoryGroup?.data?.name}</h1>
      <p>Type: {`${categoryGroup?.data?.is_expense}`}</p>
      <ActionButton content="Back" onClick={() => navigate("/categoryGroup")} />
    </>
  );
}
