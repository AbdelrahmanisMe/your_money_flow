import { FiArchive } from "react-icons/fi";
import Button from "@/components/ui/Button.jsx";

export default function ArchiveAccountButton({ onClick }) {
  return (
    <Button variant="outline" icon={FiArchive} onClick={onClick}>
      Archive Account
    </Button>
  );
}
