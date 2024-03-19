export default function CreateCategoryPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    const categoryName = e.target["categoryName"].value;
    const isBudgeted = e.target["isBudgeted"].value;
    console.log(categoryName, isBudgeted);
  }

  return (
    <>
      <h1>Create Category Page</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Name</label>
          <input type="text" id="categoryName" name="categoryName" />
        </div>
        <div>
          <label htmlFor="isBudgeted">Budgeted</label>
          <input
            type="checkbox"
            id="isBudgeted"
            name="isBudgeted"
            placeholder="Budgeted?"
          />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
