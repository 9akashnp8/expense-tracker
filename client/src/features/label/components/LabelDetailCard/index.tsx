import { useState } from "react";

type Props = {
  name: string;
  id: number;
};

export default function LabelDetailCard({ name, id }: Props) {
  const [labelValue] = useState(name);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const accepChange = document.getElementById("acceptChange");
    accepChange?.setAttribute("style", "display: block");
    const editButton = document.getElementById("editButton");
    editButton?.setAttribute("style", "display: none;");
    const labelEl = document.getElementById(`label-${name}`);
    labelEl?.setAttribute("contenteditable", "true");
    labelEl?.focus();
  }

  function handleCancel(_: React.MouseEvent) {
    const accepChange = document.getElementById("acceptChange");
    accepChange?.setAttribute("style", "display: none");
    const editButton = document.getElementById("editButton");
    editButton?.setAttribute("style", "display: block;");
  }

  async function handleAccept(e: React.MouseEvent) {
    e.preventDefault();
    const labelEl = document.getElementById(`label-${name}`);
    const value = labelEl?.textContent;

    const response = await fetch(`http://localhost:3000/labels/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: value }),
    });
    if (response.ok) {
      console.log(await response.json());
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p id={`label-${name}`}>{labelValue}</p>
      <button onClick={handleClick} id="editButton">
        Edit
      </button>
      <div id="acceptChange" style={{ display: "none" }}>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
