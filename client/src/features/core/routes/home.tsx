import ActionButton from "../components/ActionButton";

import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <ActionButton
        content="+"
        onClick={() => navigate("/transaction/create")}
      />
    </>
  );
}
