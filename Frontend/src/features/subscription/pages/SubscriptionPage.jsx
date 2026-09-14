import PlanCard from "@/features/subscription/components/PlanCard.jsx";
import TrialLimitNotice from "@/features/subscription/components/TrialLimitNotice.jsx";

const PLANS = [
  {
    title: "Trial",
    price: "Free",
    period: "limited",
    features: ["1 account", "Up to 20 entries", "Core modules"],
  },
  {
    title: "3 Months",
    price: "1,999 EGP",
    period: "3 months",
    features: ["Unlimited accounts", "Unlimited entries", "All reports"],
  },
  {
    title: "6 Months",
    price: "2,999 EGP",
    period: "6 months",
    features: ["Unlimited accounts", "Unlimited entries", "All reports"],
  },
  {
    title: "Yearly",
    price: "4,999 EGP",
    period: "yearly",
    features: ["Unlimited accounts", "Unlimited entries", "Priority support"],
  },
];

export default function SubscriptionPage() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="page-head-icon">◆</div>
        <div>
          <h1>Subscription</h1>
          <p>Plans, feature limits and renewal status</p>
        </div>
      </header>

      <TrialLimitNotice />

      <div className="card-grid">
        {PLANS.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
}