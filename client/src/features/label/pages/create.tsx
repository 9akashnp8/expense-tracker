import ActionButton from "../../core/components/ActionButton";

import { useNavigate } from "react-router-dom";

export default function CreateLabelPage() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    const name = e.target["name"].value;
    const body = { name };
    const response = await fetch("http://localhost:3000/label", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      window.location.href = "";
    }
  }

  return (
    <>
      <h1>Create Label</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Label Name" />
        </div>
        <button>Submit</button>
      </form>
      <ActionButton content="Back" onClick={() => navigate("/label")} />
    </>
  );
}
