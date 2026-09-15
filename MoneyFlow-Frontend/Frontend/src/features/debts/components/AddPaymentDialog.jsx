import Modal from "@/components/ui/Modal.jsx";
import FormField from "@/components/ui/FormField.jsx";
import Select from "@/components/ui/Select.jsx";
import Input from "@/components/ui/Input.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Button from "@/components/ui/Button.jsx";

export default function AddPaymentDialog({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add Payment"
      size="sm"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Save Payment</Button>
        </>
      }
    >
      <div className="flex flex-col gap-5">
        <FormField label="Amount" required>
          <CurrencyInput />
        </FormField>
        <FormField label="Date" required>
          <Input type="date" />
        </FormField>
        <FormField label="Paid From" required>
          <Select defaultValue="main-bank">
            <option value="main-bank">Main Bank</option>
            <option value="cash">Cash on Hand</option>
          </Select>
        </FormField>
      </div>
    </Modal>
  );
}
