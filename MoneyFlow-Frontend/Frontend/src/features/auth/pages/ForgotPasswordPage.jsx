import { Link } from "react-router-dom";
import { FiKey, FiMail, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import AuthCard from "@/features/auth/components/AuthCard.jsx";
import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Button from "@/components/ui/Button.jsx";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      icon={FiKey}
      title="Forgot your password?"
      description="Enter your email and we'll send a reset link valid for 24 hours"
    >
      <form className="flex flex-col gap-5">
        <FormField label="Email" required>
          <Input icon={FiMail} type="email" placeholder="you@example.com" />
        </FormField>

        <Button type="submit" fullWidth size="lg" iconRight={FiArrowRight}>
          Send Reset Link
        </Button>
      </form>

      <Link
        to="/login"
        className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-slate-400 hover:text-teal-300"
      >
        <FiArrowLeft /> Back to Log In
      </Link>
    </AuthCard>
  );
}
