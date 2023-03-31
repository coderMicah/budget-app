const generateRandomColor = () => {
  const existingBudgetsLength = fetchData('budgets')?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50%`
}

export function fetchData(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function createBudget({ name, amount }) {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color:generateRandomColor()
  };
  const existingBudgets = fetchData('budgets') ?? [];
  return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
}

// //delete user
export function deleteItem({ key }) {
  return localStorage.removeItem(key);
}
