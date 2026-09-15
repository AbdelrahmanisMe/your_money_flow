import { useState } from "react";
import { Table, THead, TBody, TR, TH } from "@/components/ui/Table.jsx";
import ExpenseRow from "@/features/expenses/components/ExpenseRow.jsx";
import DeleteExpenseDialog from "@/features/expenses/components/DeleteExpenseDialog.jsx";

const MOCK_EXPENSES = [
  { id: 1, description: "Grocery shopping", category: "Food", nature: "Daily", account: "Main Bank", date: "Sep 15", amount: 84.2 },
  { id: 2, description: "Metro card top-up", category: "Transport", nature: "Daily", account: "Cash on Hand", date: "Sep 14", amount: 15 },
  { id: 3, description: "Apartment rent", category: "Rent", nature: "Monthly Fixed", account: "Main Bank", date: "Sep 1", amount: 900 },
  { id: 4, description: "Electricity bill", category: "Bills", nature: "Monthly Fixed", account: "Main Bank", date: "Sep 5", amount: 120 },
  { id: 5, description: "Emergency dental visit", category: "Health", nature: "Emergency", account: "Vodafone Cash", date: "Sep 9", amount: 260 },
];

export default function ExpenseList() {
  const [deleteTarget, setDeleteTarget] = useState(null);

  return (
    <>
      <Table>
        <THead>
          <TR>
            <TH>Description</TH>
            <TH>Category</TH>
            <TH>Nature</TH>
            <TH>Account</TH>
            <TH>Date</TH>
            <TH>Amount</TH>
            <TH>Actions</TH>
          </TR>
        </THead>
        <TBody>
          {MOCK_EXPENSES.map((expense) => (
            <ExpenseRow key={expense.id} expense={expense} onEdit={() => {}} onDelete={() => setDeleteTarget(expense)} />
          ))}
        </TBody>
      </Table>

      <DeleteExpenseDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => setDeleteTarget(null)}
        expenseName={deleteTarget?.description}
      />
    </>
  );
}
