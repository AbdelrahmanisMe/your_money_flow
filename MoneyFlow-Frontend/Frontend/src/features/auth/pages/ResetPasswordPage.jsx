import { FiRefreshCw, FiLock, FiArrowRight } from "react-icons/fi";
import AuthCard from "@/features/auth/components/AuthCard.jsx";
import PasswordStrengthIndicator from "@/features/auth/components/PasswordStrengthIndicator.jsx";
import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Button from "@/components/ui/Button.jsx";

export default function ResetPasswordPage() {
  return (
    <AuthCard icon={FiRefreshCw} title="Set a new password" description="Choose a strong password for your account">
      <form className="flex flex-col gap-5">
        <FormField label="New Password" required>
          <Input icon={FiLock} type="password" placeholder="••••••••" />
          <PasswordStrengthIndicator strength={3} />
        </FormField>

        <FormField label="Confirm New Password" required>
          <Input icon={FiLock} type="password" placeholder="••••••••" />
        </FormField>

        <Button type="submit" fullWidth size="lg" iconRight={FiArrowRight}>
          Reset Password
        </Button>
      </form>
    </AuthCard>
  );
}
