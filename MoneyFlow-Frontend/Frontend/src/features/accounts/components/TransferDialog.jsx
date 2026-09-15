import { FiArrowRight } from "react-icons/fi";
import Modal from "@/components/ui/Modal.jsx";
import FormField from "@/components/ui/FormField.jsx";
import Select from "@/components/ui/Select.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Button from "@/components/ui/Button.jsx";

export default function TransferDialog({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Transfer Between Accounts"
      description="Move money internally, e.g. a cash withdrawal from your bank"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button iconRight={FiArrowRight} onClick={onClose}>
            Transfer
          </Button>
        </>
      }
    >
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField label="From" required>
            <Select defaultValue="main-bank">
              <option value="main-bank">Main Bank</option>
              <option value="wallet">Vodafone Cash</option>
            </Select>
          </FormField>
          <FormField label="To" required>
            <Select defaultValue="cash">
              <option value="cash">Cash on Hand</option>
              <option value="main-bank">Main Bank</option>
            </Select>
          </FormField>
        </div>
        <FormField label="Amount" required>
          <CurrencyInput />
        </FormField>
      </div>
    </Modal>
  );
}
