import Modal from "@/components/ui/Modal.jsx";
import FormField from "@/components/ui/FormField.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import TextArea from "@/components/ui/TextArea.jsx";
import Button from "@/components/ui/Button.jsx";

export default function AdjustBalanceDialog({ open, onClose, currentBalance = 8420.5 }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Adjust Balance"
      description={`Current balance: $${currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
      size="sm"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Confirm Adjustment</Button>
        </>
      }
    >
      <div className="flex flex-col gap-5">
        <FormField label="New Balance" required>
          <CurrencyInput defaultValue={currentBalance} />
        </FormField>
        <FormField label="Reason (optional)">
          <TextArea rows={3} placeholder="e.g. Correcting untracked cash withdrawal" />
        </FormField>
      </div>
    </Modal>
  );
}
