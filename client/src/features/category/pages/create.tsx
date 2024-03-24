import { useListCategoryGroupsQuery } from "../../categoryGroup/categoryGroupApiSlice";

export default function CreateCategoryPage() {
  const { data: categoryGroups, isLoading } = useListCategoryGroupsQuery();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    const categoryName = e.target["categoryName"].value;
    const categoryGroup = +e.target["categoryGroup"].value;
    const isBudgeted = e.target["isBudgeted"].checked;
    const budget = +e.target["budget"].value;
    const body = {
      name: categoryName,
      group: categoryGroup,
      is_budgeted: isBudgeted,
      budget,
    };
    const response = await fetch("http://localhost:3000/category", {
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
      <h1>Create Category Page</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Name</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="Category Name"
          />
        </div>
        <div>
          <label htmlFor="categoryGroup">Group</label>
          <select name="categoryGroup" id="categoryGroup" placeholder="Group">
            {categoryGroups?.data?.map((catGroup) => (
              <option key={catGroup.id} value={catGroup.id}>
                {catGroup.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="isBudgeted">Budgeted</label>
          <input
            type="checkbox"
            id="isBudgeted"
            name="isBudgeted"
            placeholder="Budgeted?"
            onChange={handleIsBudgetedChange}
          />
        </div>
        <div style={{ display: "none" }} id="budgetDiv">
          <label htmlFor="budget">Budget</label>
          <input type="number" id="budget" name="budget" />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
