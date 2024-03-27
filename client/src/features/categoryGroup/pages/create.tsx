import ActionButton from "../../core/components/ActionButton";

import { useNavigate } from "react-router-dom";

export default function CreateCategoryGroupPage() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    const groupName = e.target["groupName"].value;
    const isExpense = e.target["isExpense"].value;
    const isBudgeted = e.target["isBudgeted"].value;
    const budgetType = e.target["budgetType"].value;
    const budget = e.target["budget"].value;

    const body = {
      name: groupName,
      is_expense: isExpense,
      is_budgeted: isBudgeted,
      budget_type: budgetType,
      budget: budget,
    };
    const response = await fetch("http://localhost:3000/categoryGroup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      window.location.href = "";
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleIsBudgetedChange(e: any) {
    const budgetDiv = document.getElementById("budgetDiv")!;
    if (e.target.checked) {
      budgetDiv.setAttribute("style", "display: block");
    } else {
      budgetDiv.setAttribute("style", "display: none");
    }
  }

  return (
    <>
      <h1>Create Catgegory Group</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="groupName">Name</label>
          <input type="text" id="groupName" name="groupName" required />
        </div>
        <div>
          <label htmlFor="isExpense">Is Expense</label>
          <input type="checkbox" id="isExpense" name="isExpense" />
        </div>
        <div>
          <label htmlFor="isBudgeted">Is Budgeted</label>
          <input
            type="checkbox"
            id="isBudgeted"
            name="isBudgeted"
            onChange={handleIsBudgetedChange}
          />
        </div>
        <div>
          <label htmlFor="budgetType">Budget Type</label>
          <input type="text" id="budgetType" name="budgetType" required />
        </div>
        <div style={{ display: "none" }} id="budgetDiv">
          <label htmlFor="budget">Budget</label>
          <input type="number" id="budget" name="budget" />
        </div>
        <button>Create</button>
      </form>
      <ActionButton content="Back" onClick={() => navigate("/categoryGroup")} />
    </>
  );
}
