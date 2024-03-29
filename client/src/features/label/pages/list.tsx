import { useListLabelsQuery } from "../labelApiSlice";
import ActionButton from "../../core/components/ActionButton";

import { useNavigate } from "react-router-dom";

export default function LabelListPage() {
  const navigate = useNavigate();
  const { data: labels, isLoading } = useListLabelsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Label List Page</h1>
      <ul>
        {labels?.data?.map((label) => <li key={label.id}>{label.name}</li>)}
      </ul>
      <ActionButton content="+" onClick={() => navigate("create")} />
    </>
  );
}
