import Input from "@/components/ui/Input.jsx";

export default function CurrencyInput({ currency = "USD", className = "", ...props }) {
  return (
    <div className="relative">
      <Input type="number" step="0.01" placeholder="0.00" className={`pr-16 ${className}`} {...props} />
      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">{currency}</span>
    </div>
  );
}
