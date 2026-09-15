import Modal from "@/components/ui/Modal.jsx";
import FormField from "@/components/ui/FormField.jsx";
import Select from "@/components/ui/Select.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Button from "@/components/ui/Button.jsx";

export default function WithdrawalDialog({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Withdraw Cash from Bank"
      description="Recorded as an internal transfer between the two accounts"
      size="sm"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Confirm Withdrawal</Button>
        </>
      }
    >
      <div className="flex flex-col gap-5">
        <FormField label="Withdraw From" required>
          <Select defaultValue="main-bank">
            <option value="main-bank">Main Bank</option>
          </Select>
        </FormField>
        <FormField label="Amount" required>
          <CurrencyInput />
        </FormField>
      </div>
    </Modal>
  );
}
