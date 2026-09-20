import { useEffect, useState } from "react";
import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Select from "@/components/ui/Select.jsx";
import TextArea from "@/components/ui/TextArea.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Button from "@/components/ui/Button.jsx";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addIncome, editIncome } from "@/store/incomeSlice";
import { getAccounts } from "@/api/accounts.api";
import { getErrorMessage } from "@/api/error.api";

const today = () => new Date().toISOString().slice(0, 10);
const accountIdOf = (account) => typeof account === "object" ? account?._id || "" : account || "";

export default function IncomeForm({ onCancel, income }) {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.income);
  const [accounts, setAccounts] = useState([]);
  const [accountsLoading, setAccountsLoading] = useState(true);
  const [accountsError, setAccountsError] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const editing = Boolean(income);

  useEffect(() => {
    reset({
      accountId: accountIdOf(income?.account),
      name: income?.name || "",
      category: income?.category || "salary",
      amount: income?.amount ?? "",
      currency: income?.currency || "EGP",
      receivedDate: income?.receivedDate?.slice(0, 10) || today(),
      recurrence: income?.recurrence || "once",
      status: income?.status || "cleared",
      notes: income?.notes || "",
    });
  }, [income, reset]);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const response = await getAccounts();
        setAccounts(response.data.data.filter((account) => account.isActive !== false));
      } catch (error) { setAccountsError(getErrorMessage(error)); }
      finally { setAccountsLoading(false); }
    };
    loadAccounts();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (editing) await dispatch(editIncome({ id: income._id, data })).unwrap();
      else await dispatch(addIncome(data)).unwrap();
      Swal.fire({ icon: "success", title: editing ? "Income updated successfully" : "Income source added successfully", toast: true, position: "bottom-start", showConfirmButton: false, timer: 3000, timerProgressBar: true });
      onCancel();
    } catch (error) {
      Swal.fire({ icon: "error", title: error || "Unable to save income source", toast: true, position: "bottom-start", showConfirmButton: false, timer: 3000 });
    }
  };

  const formDisabled = status === "loading" || accountsLoading || accounts.length === 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 [&_label]:gap-1 [&_input]:!py-2 [&_select]:!py-2 [&_textarea]:!py-2">
      <FormField label="Source name" required>
        <Input placeholder="e.g. Monthly salary" {...register("name", { required: "Source name is required", maxLength: { value: 100, message: "Name must not exceed 100 characters" } })} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </FormField>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <FormField label="Type" required><Select {...register("category", { required: "Type is required" })}><option value="salary">Salary</option><option value="freelance">Freelance</option><option value="rental">Rental</option><option value="investment">Investment</option><option value="other">Other</option></Select></FormField>
        <FormField label="Currency" required><Select {...register("currency", { required: "Currency is required" })}><option value="EGP">EGP</option><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option></Select></FormField>
      </div>
      <FormField label="Receiving account" required>
        <Select disabled={accountsLoading || accounts.length === 0} {...register("accountId", { required: "Please select a receiving account" })}>
          <option value="">{accountsLoading ? "Loading accounts..." : "Select the account that will receive this income"}</option>
          {accounts.map((account) => <option key={account._id} value={account._id}>{account.name}</option>)}
        </Select>
        {errors.accountId && <p className="mt-1 text-xs text-red-400">{errors.accountId.message}</p>}
        {accountsError && <p className="mt-1 text-xs text-red-400">Unable to load accounts: {accountsError}</p>}
        {!accountsLoading && !accountsError && accounts.length === 0 && <p className="mt-1 text-xs text-amber-300">Add an account first to receive this income.</p>}
      </FormField>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <FormField label="Amount" required><CurrencyInput {...register("amount", { required: "Amount is required", valueAsNumber: true, min: { value: 0.01, message: "Amount must be greater than zero" } })} />{errors.amount && <p className="mt-1 text-xs text-red-400">{errors.amount.message}</p>}</FormField>
        <FormField label="Received date" required><Input type="date" {...register("receivedDate", { required: "Received date is required" })} />{errors.receivedDate && <p className="mt-1 text-xs text-red-400">{errors.receivedDate.message}</p>}</FormField>
      </div>
      <FormField label="Recurrence" required>
        <Select {...register("recurrence", { required: "Recurrence is required" })}><option value="once">Once</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option><option value="yearly">Yearly</option></Select>
      </FormField>
      <FormField label="Notes"><TextArea rows={2} placeholder="Optional notes..." {...register("notes", { maxLength: { value: 500, message: "Notes must not exceed 500 characters" } })} />{errors.notes && <p className="mt-1 text-xs text-red-400">{errors.notes.message}</p>}</FormField>
      <input type="hidden" {...register("status")} />
      <div className="mt-2 flex justify-end gap-3"><Button size="sm" variant="ghost" type="button" onClick={onCancel}>Cancel</Button><Button size="sm" type="submit" disabled={formDisabled}>{status === "loading" ? "Saving..." : editing ? "Save changes" : "Save income source"}</Button></div>
    </form>
  );
}





